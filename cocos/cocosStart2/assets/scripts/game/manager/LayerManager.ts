import { find, Node, Prefab } from "cc";
import { cocosUtil } from "./../../utils/CocosUtil";

import { myLog } from "../../common/MyLog";

import { BaseLayer } from "../compoment/base/BaseLayer";
import { constants } from "../data/constants";
import { resManager } from "./ResManager";

class LayerManager {
  private static _instance: LayerManager;
  private constructor() {}
  public static get instance(): LayerManager {
    if (!this._instance) {
      this._instance = new LayerManager();
    }
    return this._instance;
  }

  public layer1: Node;
  private layerHint: Node;

  // 正在打开中的弹窗
  private openingLayerMap: Map<number, any> = new Map();
  // 已经打开的弹窗
  private openedLayerMap: Map<number, BaseLayer> = new Map();
  // 弹窗名称->弹窗id数组
  private layerNameIdArrMap: Map<string, number[]> = new Map();

  private layerId: number = 0;

  loadCommonLayers(onProgress?: Function, onComplete?: Function) {
    let arr = [constants.layers.HomeLayer];
    resManager.loadAssetByPathArr(
      constants.bundles.layer,
      arr,
      Prefab,
      onProgress,
      (prefabArr: any) => {
        for (let prefab of prefabArr) {
          prefab.addRef();
        }
        if (onComplete) {
          onComplete(prefabArr);
        }
      }
    );
  }

  getPopLayerParentNode(): Node {
    return this.layer1;
  }

  init(layer1: Node, layerHint: Node) {
    this.layer1 = layer1;
    this.layerHint = layerHint;

    this.openingLayerMap = new Map();
    this.openedLayerMap = new Map();
    this.layerNameIdArrMap = new Map();
    this.layerId = 0;
  }

  createNotice(content: any) {
    // 显示一条提示信息
    let noticeLayer = find(constants.layers.NoticeLayer, this.layerHint);
    if (noticeLayer) {
      noticeLayer
        .getComponent(constants.layers.NoticeLayer)
        ["createNotice"](content);
    }
  }

  addLayerNameId(name: string, id: number) {
    let arr = this.layerNameIdArrMap.get(name);
    if (!arr) {
      arr = [];
      this.layerNameIdArrMap.set(name, arr);
    }
    arr.push(id);
  }

  removeLayerNameId(name: string, id: number) {
    let arr = this.layerNameIdArrMap.get(name);
    if (arr && arr.length > 0) {
      let index = arr.indexOf(id);
      if (index != -1) {
        arr.splice(index, 1);
      }
    }
  }

  openSingleLayer(
    layerName: string,
    obj?: any,
    cb?: Function,
    openSuccessCb?: Function
  ) {
    if (!obj) {
      obj = {};
    }
    let idArr = this.layerNameIdArrMap.get(layerName);
    if (!idArr || idArr.length <= 0) {
      this.openLayer(layerName, obj, cb, openSuccessCb);
      return;
    }

    let id = idArr[0];
    let layer = this.openedLayerMap.get(id);
    if (layer) {
      // 已显示，刷新数据
      layer.layerData = obj;
      layer.layerCb = cb;

      layer.onLoad();
      layer.onEnable();

      if (openSuccessCb) {
        openSuccessCb(layer);
      }
      return;
    }

    let layerParams = this.openingLayerMap.get(id);
    if (layerParams) {
      // 正准备显示，更新数据
      layerParams.layerName = layerName;
      layerParams.obj = obj;
      layerParams.cb = cb;
      layerParams.openSuccessCb = openSuccessCb;
    }
  }

  openLayer(
    layerName: string,
    obj?: any,
    cb?: Function,
    openSuccessCb?: Function
  ) {
    if (!obj) {
      obj = {};
    }

    this.layerId++;
    let layerId = this.layerId;

    let layerParams: any = {};
    layerParams.layerName = layerName;
    layerParams.obj = obj;
    layerParams.cb = cb;
    layerParams.openSuccessCb = openSuccessCb;
    this.openingLayerMap.set(layerId, layerParams);

    this.addLayerNameId(layerName, layerId);

    let bundleName = constants.bundles.layer;
    let layerPath = layerName;
    resManager.loadAsset(bundleName, layerPath, Prefab, null, (err, prefab) => {
      if (err) {
        myLog.e("LayerManager.openLayer error:" + err.message, layerName, err);
        return;
      }
      layerParams = this.openingLayerMap.get(layerId);
      if (!layerParams) {
        // 在打开之前，就已经被关闭了
        return;
      }

      let node = cocosUtil.instantiate(prefab);
      let com = node.getComponent(layerName) || node.addComponent(layerName);

      // 加载每个layer特定需要的资源
      resManager.loadAssetConfigArr(
        com.preLoadAssetConfigArr,
        false,
        null,
        () => {
          com.layerData = layerParams.obj;
          com.layerCb = layerParams.cb;
          com.layerName = layerParams.layerName;
          com.layerId = layerId;

          this.openingLayerMap.delete(layerId);
          this.openedLayerMap.set(layerId, com);

          // 添加到节点上后，会马上触发onLoad和onEnable回调，而start方法是在首次执行update之前被调用
          node.parent = this.layer1;

          myLog.i("openLayer " + layerName, obj);

          if (layerParams.openSuccessCb) {
            layerParams.openSuccessCb(com, prefab);
          }
        }
      );
    });
  }

  closeLayer(layerId: number | string) {
    if (typeof layerId == "string") {
      let idArr = this.layerNameIdArrMap.get(layerId);
      if (!idArr || idArr.length <= 0) {
        return;
      }
      layerId = idArr[idArr.length - 1];
    }

    let layer = this.openedLayerMap.get(layerId);
    if (layer) {
      layer.node.destroy();
      this.openedLayerMap.delete(layerId);
      this.removeLayerNameId(layer.layerName, layerId);
    }

    let layerParams = this.openingLayerMap.get(layerId);
    if (layerParams) {
      this.openingLayerMap.delete(layerId);
      this.removeLayerNameId(layerParams.layerName, layerId);
    }
  }

  isShowingLayer(layerName: string) {
    let idArr = this.layerNameIdArrMap.get(layerName);
    if (!idArr || idArr.length <= 0) {
      return false;
    }

    return true;
  }
}

export const layerManager = LayerManager.instance;
