import {
  Button,
  Component,
  EventTouch,
  find,
  Label,
  Node,
  Prefab,
  ProgressBar,
  ResolutionPolicy,
  RichText,
  ScrollView,
  sp,
  Sprite,
  SpriteFrame,
  v3,
  view,
  Widget,
} from "cc";
import { myLog } from "../../../common/MyLog";
// import { tyqSDK } from "../../../tyqSDK/tyqSDK";
import { cocosUtil } from "../../../utils/CocosUtil";
import { constants } from "../../data/constants";
// import { localText } from "../../data/localText";
// import { msgac } from "../../data/msgac";
// import { audioManager } from "../../manager/audioManager";
// import { designManager } from "../../manager/designManager";
import { eventManager } from "../../manager/EventManager";
import { layerManager } from "../../manager/LayerManager";
import { AssetConfig, ResLoader, resManager } from "../../manager/ResManager";
import { playerModel } from "../../model/playerModel";
// import { UserData } from "../../model/UserData";
// import { ItemLayer } from "./ItemLayer";
// import { ScrollViewUtil } from "./ScrollViewUtil";

export class BaseLayer extends Component {
  public layerName: string = "DefaultLayer";

  // 展示界面携带的数据和回调
  public layerData: any = {};
  public layerCb: Function = null;
  public layerId: number = -1;

  // {路径:节点对象}
  public pathNodeObj: Map<string, Node> = new Map();

  // 资源管理类
  private resLoader: ResLoader = new ResLoader();
  // 是否开启内存管理
  public autoReleaseAsset: boolean = false;

  // 特定预加载的资源
  //public preLoadAssetConfigArr: AssetConfig[];

  // 监听事件
  private eventArr: any;

  // 控制是否打开秒级的update
  public openUpdateSecond: boolean = false;
  private updateSecondInterval: any;

  // 按钮是否响应点击
  public openAllBtnInteractive: boolean = true;

  // 按钮长按功能开关
  public openBtnLongPress: boolean = false;
  // 多长时间后开始触发
  private btnLongTrigTime: number = 0.5;
  private btnLognTrigTimeCount: number = 0;
  // 触发次数统计
  private btnLongTrigCount: number = 0;
  // 长按按钮节点对象
  private btnLongNode: Node = null;

  // 控制是否显示banner广告
  isShowBannerAd: boolean = false;

  onLoad() {
    console.log("base onload", this, this.node);

    this.addPathNode(this.node, "");
  }

  //   DesignResolutionHeight() {
  //     view.setDesignResolutionSize(720, 1660, ResolutionPolicy.FIXED_HEIGHT);
  //     myLog.i("-----ResolutionPolicy.FIXED_HEIGHT");
  //   }

  chooseDesignResolution() {
    //    let resolute = view.getDesignResolutionSize()
    let screen1 = view.getVisibleSize();
    if (screen1.width / screen1.height > 720 / 1280) {
      view.setDesignResolutionSize(720, 1280, ResolutionPolicy.FIXED_HEIGHT);
      myLog.i("choose  ResolutionPolicy.FIXED_HEIGHT");
    } else {
      myLog.i("choose  ResolutionPolicy.FIXED_WIDTH");
      view.setDesignResolutionSize(720, 1280, ResolutionPolicy.FIXED_WIDTH);
    }
  }

  onEnable() {
    this.addButtonListener(this.node);
    this.initUI();
    this.refreshRedPoint();
    if (this.openUpdateSecond) {
      if (this.updateSecondInterval) {
        clearInterval(this.updateSecondInterval);
      }
      this.updateSecondInterval = setInterval(() => {
        this.updateSecond();
      }, 1000);
      this.updateSecond();
    }
    if (this.isShowBannerAd && !playerModel.isRecordAd) {
      //tyqSDK.showBannerAd();
    }
    //eventManager.on(msgac.refreshRedPoint, this.refreshRedPoint, this);
  }

  updateSecond() {}

  refreshRedPoint() {}

  initUI() {}

  onDisable() {
    this.removeEventArr(this.eventArr);
  }

  onDestroy() {
    switch (this.layerName) {
      case constants.layers.HomeLayer:
        // 这些UI不释放资源
        return;
      default:
        break;
    }
    if (this.autoReleaseAsset) {
      this.resLoader.releaseAllAsset();
    }
  }

  addPathNode(node: Node, path: string) {
    //console.log(node, path);
    if (node != this.node) {
      this.pathNodeObj.set(path, node);
    }
    if (path) {
      path += "/";
    }
    let chs = node.children;
    //console.log(chs);
    for (let i = 0, len = chs.length; i < len; i++) {
      let pNode = chs[i];
      this.addPathNode(pNode, path + pNode.name);
    }
  }

  getNodeByPath(path: string): Node {
    let node = this.pathNodeObj.get(path);
    if (node) {
      return node;
    }

    node = find(path, this.node);
    if (node) {
      this.pathNodeObj.set(path, node);
      return node;
    }

    return null;
  }

  //   /**
  //    * 缩放背景图，达到满屏显示，背景图部分内容超出屏幕也没事
  //    * @param node 背景图节点
  //    */
  //   screenAdapterBG(node: Node) {
  //     if (!cocosUtil.isValid(node)) {
  //       return;
  //     }
  //     let widget = node.getComponent(Widget);
  //     if (widget) {
  //       widget.enabled = false;
  //     }
  //     let scale = cocosUtil.getScreenBgAdapterScale();
  //     let scaleX = node.getScale().x;
  //     let scaleY = node.getScale().y;
  //     node.setScale(v3(scaleX * scale, scaleY * scale, 1));
  //   }

  //   /**
  //    * 缩放UI，达到屏幕适配，ui上的全部内容在屏幕内显示，如果是全屏UI，ui节点如果有widget，缩放后依然有效
  //    * @param node ui根节点
  //    */
  //   screenAdapterUI(node: Node) {
  //     if (!cocosUtil.isValid(node)) {
  //       return;
  //     }
  //     let scale = cocosUtil.getScreenAdapterScale();
  //     let scaleX = node.getScale().x;
  //     let scaleY = node.getScale().y;
  //     node.setScale(v3(scaleX * scale, scaleY * scale, 1));
  //   }

  addButtonListener(node: Node) {
    if (node.getComponent(Button)) {
      node.on("click", this.preOnButtonClick, this);
      if (this.openBtnLongPress) {
        node.on(Node.EventType.TOUCH_START, this.preOnButtonTouchStart, this);
        node.on(Node.EventType.TOUCH_MOVE, this.preOnButtonTouchMove, this);
        node.on(Node.EventType.TOUCH_END, this.preOnButtonTouchEnd, this);
        node.on(Node.EventType.TOUCH_CANCEL, this.preOnButtonTouchCancel, this);
      }
    }
    if (node.getComponent(ScrollView)) {
      let name = node.name;
      if (name.indexOf("NoUtil") == -1 && !node.getComponent(ScrollViewUtil)) {
        //node.addComponent(ScrollViewUtil);
      }
    }
    // if (node.getComponent(Label)) {
    //     let label = node.getComponent(Label);
    //     label.useSystemFont = true;
    // }
    // if (node.getComponent(RichText)) {
    //     let richText = node.getComponent(RichText);
    //     richText.useSystemFont = true;
    // }

    let chs = node.children;
    for (let i = 0, max = chs.length; i < max; i++) {
      let ch = chs[i];
      this.addButtonListener(ch);
    }
  }

  preOnButtonClick(btn: any) {
    if (!this.openAllBtnInteractive) {
      return;
    }
    if (this.openBtnLongPress && this.btnLongTrigCount > 0) {
      this.btnLongTrigCount = 0;
      return;
    }

    let node = btn.node;
    let name = node.name;
    myLog.i(this.layerName + " onButtonClick " + name);

    if (this["onButtonClick"]) {
      this["onButtonClick"](node, node.name);
    }

    if (name.length >= 2) {
      let top = name.substring(0, 1);
      let remain = name.substring(1, name.length);
      let key = "onClick" + top.toLocaleUpperCase() + remain;
      if (this[key]) {
        this[key](node);
      }
    }

    if (!node.hasPlayAudio) {
      // 如果还没播放按钮音效，就播放通用按钮音效
    }
  }

  //   preOnButtonLongClick(btnNode: Node) {
  //     if (!this.openAllBtnInteractive) {
  //       return;
  //     }

  //     let name = btnNode.name;
  //     myLog.i(this.layerName + " onButtonLongClick " + name);
  //     if (this["onButtonLongClick"]) {
  //       return this["onButtonLongClick"](btnNode, name);
  //     }

  //     if (name.length >= 2) {
  //       let top = name.substring(0, 1);
  //       let remain = name.substring(1, name.length);
  //       let key = "onLongClick" + top.toLocaleUpperCase() + remain;
  //       if (this[key]) {
  //         return this[key](btnNode);
  //       }
  //     }

  //     return false;
  //   }

  preOnButtonTouchStart(event: EventTouch) {
    let btnNode = event.target;
    let touch = event.touch;
    this.btnLongNode = btnNode;
    this.btnLognTrigTimeCount = 0;
    this.btnLongTrigCount = 0;
  }

  preOnButtonTouchMove(event: EventTouch) {}

  preOnButtonTouchEnd(event: EventTouch) {
    this.btnLongNode = null;
  }

  preOnButtonTouchCancel(event: EventTouch) {
    this.btnLongNode = null;
  }

  //   openPropInfoLayer2(id: number, num: number = undefined) {
  //     if (num == undefined) {
  //       num = UserData.getInstance().getPropNumById(id);
  //     }
  //     let obj = {
  //       id: id,
  //       num: num,
  //     };
  //     this.openLayer(constants.layers.PropInfoLayer2, obj);
  //   }

  //   isShowingLayer(layerName: string) {
  //     return layerManager.isShowingLayer(layerName);
  //   }

  //   showHintLayer(msg: string, cb?: Function) {
  //     let hintLayer = find("Canvas/hintLayer");
  //     hintLayer.active = true;
  //     // @ts-ignore
  //     hintLayer.cb = cb;
  //     this.setString(find("ui/hint", hintLayer), msg);
  //   }
  //   hideHintLayer() {
  //     let hintLayer = find("Canvas/hintLayer");
  //     hintLayer.active = false;
  //     // @ts-ignore
  //     if (hintLayer.cb) {
  //       // @ts-ignore
  //       hintLayer.cb();
  //     }
  //   }

  //   openMsgBoxLayer(hint: string) {
  //     let obj = {
  //       hint: hint,
  //     };
  //     this.openLayer(constants.layers.MsgBoxLayer, obj);
  //   }

  //   openAwardGetLayer(awardArr: any) {
  //     if (!awardArr || awardArr.length <= 0) {
  //       return;
  //     }

  //     this.openLayer(constants.layers.RewardLayer, {
  //       propArr: awardArr,
  //       notMoveAni: true,
  //     });
  //   }

  //   openAwardInfoLayer(awardArr: any) {
  //     if (!awardArr || awardArr.length <= 0) {
  //       return;
  //     }
  //     this.openLayer(constants.layers.AwardInfoLayer, { awardArr: awardArr });
  //   }

  //   setRoleSkin(roleNode: Node, id: number = 0) {
  //     let skin = UserData.getInstance().getHeroSkin(id);
  //     roleNode.getComponent(sp.Skeleton).setSkin(skin);
  //   }

  //   playAudioEffect(name: string, btnNode?: any, delayTime?: number) {
  //     if (!delayTime) {
  //       delayTime = 0;
  //     }
  //     if (cocosUtil.isValid(btnNode)) {
  //       btnNode.hasPlayAudio = true;
  //     }
  //     this.scheduleOnce(() => {
  //       audioManager.playEffect(name);
  //       if (cocosUtil.isValid(btnNode)) {
  //         btnNode.hasPlayAudio = undefined;
  //       }
  //     }, delayTime);
  //   }

  //   onClickBtnClose(node: Node) {
  //     this.closeLayer();
  //   }

  openLayer(layerName: string, data?: any, cb?: Function, showCb?: Function) {
    // 默认每个弹窗只允许同时显示一个
    if (typeof data == "function") {
      cb = data;
      data = null;
    }

    layerManager.openSingleLayer(
      layerName,
      data,
      cb,
      (baseLayer: BaseLayer, prefab: Prefab) => {
        // if (baseLayer.autoReleaseAsset && baseLayer.resLoader) {
        //   baseLayer.resLoader.addAsset(prefab);
        //   if (baseLayer.preLoadAssetConfigArr) {
        //     baseLayer.preLoadAssetConfigArr.forEach(
        //       (assetConfig: AssetConfig) => {
        //         if (assetConfig.asset) {
        //           baseLayer.resLoader.addAsset(assetConfig.asset);
        //         }
        //       }
        //     );
        //   }
        // }
        // if (showCb) {
        //   showCb();
        // }
      }
    );
  }

  closeLayer(layerId?: number | string) {
    console.log("layerId", layerId);
    if (!layerId) {
      layerId = this.layerId;
    }
    if (layerId && layerId != -1) {
      layerManager.closeLayer(layerId);
      return;
    }
    this.node.destroy();
  }

  addEventArr(arr: any) {
    this.eventArr = arr;
    for (let i in arr) {
      let val = arr[i];
      if (!val) {
        continue;
      }
      eventManager.on(val, this.preProcessEvent, this);
    }
  }

  removeEventArr(arr: any) {
    for (let i in arr) {
      let val = arr[i];
      if (!val) {
        continue;
      }
      eventManager.off(val, this.preProcessEvent, this);
    }
  }

  preProcessEvent(event: any) {
    let ac = event.ac;
    let data = event.data;
    let key = "msgac.ac2KeyObj[ac]" + "Ret";
    if (this[key]) {
      this[key].call(this, data);
    }
    this.processEvent(ac, data);
  }

  processEvent(ac: any, data: any) {}

  //   showLackItem(itemId: number) {
  //     let itemRow = designManager.getRowById(constants.tableName.prop, itemId);
  //     if (!itemRow) {
  //       return;
  //     }
  //     this.createNotice(localText.lackItemHint.format(itemRow.name));
  //   }

  //   showGetItem(itemId: number, num: number) {
  //     // let itemRow = designManager.getRowById(constants.tableName.item, itemId);
  //     // this.createNotice(localText.textObj.itemGet.format(itemRow.name, num));
  //   }

  //   createNotice(content) {
  //     layerManager.createNotice(content);
  //   }

  //   scrollViewSetData(
  //     scrollViewNode: Node,
  //     arr: any,
  //     refreshItemFunc?: Function,
  //     resetPos: boolean = true,
  //     itemTween: boolean = false
  //   ) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.setData(
  //       arr,
  //       (itemUI: Node, item: any, index: number) => {
  //         if (refreshItemFunc) {
  //           refreshItemFunc(itemUI, item, index);
  //         }
  //         this.addButtonListener(itemUI);
  //       },
  //       resetPos,
  //       itemTween
  //     );
  //   }
  //   scrollViewAddData(scrollViewNode: Node, arr: any, resetPos: boolean = false) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.pushData(arr, resetPos);
  //   }
  //   scrollViewRefreshList(scrollViewNode: Node) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.refreshList();
  //   }
  //   scrollViewRefreshItemUI(scrollViewNode: Node, itemUI: Node, item?: any) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.refreshIndex(itemUI["index"], item);
  //   }
  //   scrollViewRefreshItemUIByIndex(
  //     scrollViewNode: Node,
  //     index: number,
  //     item?: any
  //   ) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.refreshIndex(index, item);
  //   }
  //   scrollViewRemoveItemUI(
  //     scrollViewNode: Node,
  //     itemUI: Node,
  //     resetPos: boolean = false
  //   ) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.removeByIndex(itemUI["index"], resetPos);
  //   }
  //   scrollViewRemoveItemUIByIndex(
  //     scrollViewNode: Node,
  //     index: number,
  //     resetPos: boolean = false
  //   ) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.removeByIndex(index, resetPos);
  //   }
  //   scrollViewScrollToEnd(scrollViewNode: Node, time?: number) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil) {
  //       return;
  //     }
  //     scrollViewUtil.scrollToEnd(time);
  //   }
  //   scrollViewScrollToItemUI(scrollViewNode: Node, itemUI: Node, time?: number) {
  //     this.scrollViewScrollToIndex(scrollViewNode, itemUI["index"], time);
  //   }
  //   scrollViewScrollToIndex(scrollViewNode: Node, index: number, time?: number) {
  //     let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
  //     if (!scrollViewUtil || index == undefined) {
  //       return;
  //     }
  //     scrollViewUtil.scrollToIndex(index);
  //   }

  setProgressBar(progressBar: Node | ProgressBar, percent: number) {
    if (progressBar instanceof Node) {
      progressBar = progressBar.getComponent(ProgressBar);
    }
    if (progressBar) {
      progressBar.progress = percent;
    }
  }

  setNumString(node: Node, num: any) {
    num = cocosUtil.formatNum(num);
    this.setString(node, num);
  }

  //   setItemLayer(node: Node, arr: any, cb?: Function) {
  //     let itemLayer = cocosUtil.addComponentOnce(node, ItemLayer);
  //     itemLayer.initUI(this, arr, cb);
  //   }

  //   setNumItemLayer(node: Node, num: number, cb?: Function) {
  //     let arr = [];
  //     for (let i = 0; i < num; i++) {
  //       arr.push(i + 1);
  //     }
  //     let itemLayer = node.getComponent(ItemLayer);
  //     if (!itemLayer) {
  //       itemLayer = node.addComponent(ItemLayer);
  //     }
  //     itemLayer.initUI(this, arr, (itemUI: Node, item: any, index: number) => {
  //       if (cb) {
  //         cb(itemUI, item, index);
  //       }
  //     });
  //   }

  //   setPropItem(
  //     id: number,
  //     iconNode: Node,
  //     num: number = 0,
  //     bgNode?: Node,
  //     numNode?: Node
  //   ) {
  //     let row = designManager.getRowById(constants.tableName.prop, id);
  //     if (!row) {
  //       myLog.e("setPropItem error id:" + id);
  //     }
  //     let icon = "prop/" + row.icon;
  //     if (row.type == 11) {
  //       let wRow = designManager.getRowById(
  //         constants.tableName.weapon,
  //         row.weaponid
  //       );
  //       icon = "weapon/" + wRow.icon;
  //     }
  //     this.setSpriteFrame2(iconNode, icon);
  //     if (bgNode) {
  //       this.setSpriteFrame2(bgNode, "prop/propbg" + row.quality);
  //     }
  //     if (num > 0 && numNode) {
  //       this.setString(numNode, "x" + num);
  //     }
  //   }

  //   // 屏幕振动
  //   shakeScreen() {
  //     cocosUtil.tweenShakeNode(layerManager.getPopLayerParentNode());
  //   }

  //   removeRenderBatch(node: Node) {
  //     let itemLayer = node.parent.getComponent(ItemLayer);
  //     if (itemLayer && itemLayer.renderChildBatch) {
  //       itemLayer.renderChildBatch.removeRootItemNode(node);
  //     }
  //   }

  //   addRenderBatch(node: Node) {
  //     let itemLayer = node.parent.getComponent(ItemLayer);
  //     if (itemLayer && itemLayer.renderChildBatch) {
  //       itemLayer.renderChildBatch.addRootItemNode(node);
  //     }
  //   }

  setString(node: Node, info: any) {
    if (!node) {
      myLog.e("setString error:node is null", info);
      return;
    }
    info = info + "";
    let label = node.getComponent(Label);
    if (label) {
      label.string = info;
      return;
    }

    let rich = node.getComponent(RichText);
    if (rich) {
      rich.string = info;
      return;
    }
  }

  //   setSpriteFrame(
  //     node: Node,
  //     name: string,
  //     showCb?: Function,
  //     bundleName1 = constants.bundles.icon
  //   ) {
  //     if (!name) {
  //       return;
  //     }
  //     if (!cocosUtil.isValid(node)) {
  //       return;
  //     }
  //     let sprite = node.getComponent(Sprite);
  //     if (!cocosUtil.isValid(sprite)) {
  //       return;
  //     }
  //     sprite.enabled = false;
  //     node["loadName"] = name;

  //     let bundleName = bundleName1;
  //     let d = name.split("_");
  //     let path = d[0] + "/" + name;
  //     let arr = name.split("|");
  //     if (arr.length >= 2) {
  //       bundleName = arr[0];
  //       path = arr[1];
  //     }

  //     resManager.loadSpriteFrame(
  //       bundleName,
  //       path,
  //       (err, spriteFrame: SpriteFrame) => {
  //         if (err) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(node)) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(sprite)) {
  //           return;
  //         }
  //         if (node["loadName"] != name) {
  //           return;
  //         }
  //         if (this.autoReleaseAsset) {
  //           this.resLoader.addAsset(spriteFrame);
  //         }
  //         sprite.enabled = true;
  //         sprite.spriteFrame = spriteFrame;
  //         if (showCb) {
  //           showCb();
  //         }
  //       }
  //     );
  //   }

  //   setSpriteFrame2(
  //     node: Node,
  //     name: string,
  //     showCb?: Function,
  //     bundleName1 = constants.bundles.icon
  //   ) {
  //     if (!name) {
  //       return;
  //     }
  //     if (!cocosUtil.isValid(node)) {
  //       return;
  //     }
  //     let sprite = node.getComponent(Sprite);
  //     if (!cocosUtil.isValid(sprite)) {
  //       return;
  //     }
  //     sprite.enabled = false;
  //     node["loadName"] = name;

  //     let bundleName = bundleName1;
  //     let path = name;

  //     resManager.loadSpriteFrame(
  //       bundleName,
  //       path,
  //       (err, spriteFrame: SpriteFrame) => {
  //         if (err) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(node)) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(sprite)) {
  //           return;
  //         }
  //         if (node["loadName"] != name) {
  //           return;
  //         }
  //         if (this.autoReleaseAsset) {
  //           this.resLoader.addAsset(spriteFrame);
  //         }
  //         sprite.enabled = true;
  //         sprite.spriteFrame = spriteFrame;
  //         if (showCb) {
  //           showCb();
  //         }
  //       }
  //     );
  //   }

  //   setSpineData(node: Node, name: string, showCb?: Function) {
  //     if (!cocosUtil.isValid(node)) {
  //       return;
  //     }
  //     let skeleton = node.getComponent(sp.Skeleton);
  //     if (!cocosUtil.isValid(skeleton)) {
  //       return;
  //     }
  //     skeleton.enabled = false;
  //     node["loadName"] = name;
  //     let bundleName = constants.bundles.spine;
  //     let spinePath = name + "/" + name;

  //     resManager.loadSpineData(
  //       bundleName,
  //       spinePath,
  //       (err, skeletonData: sp.SkeletonData) => {
  //         if (err) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(node)) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(skeleton)) {
  //           return;
  //         }
  //         if (node["loadName"] != name) {
  //           return;
  //         }
  //         if (this.autoReleaseAsset) {
  //           this.resLoader.addAsset(skeletonData);
  //         }
  //         skeleton.enabled = true;
  //         skeleton.skeletonData = skeletonData;
  //         if (showCb) {
  //           showCb(skeleton);
  //         }
  //       }
  //     );
  //   }

  //   setSpineData2(node: Node, bundleName, name: string, showCb?: Function) {
  //     if (!cocosUtil.isValid(node)) {
  //       return;
  //     }
  //     let skeleton = node.getComponent(sp.Skeleton);
  //     if (!cocosUtil.isValid(skeleton)) {
  //       return;
  //     }
  //     skeleton.enabled = false;
  //     node["loadName"] = name;
  //     let spinePath = name;

  //     resManager.loadSpineData(
  //       bundleName,
  //       spinePath,
  //       (err, skeletonData: sp.SkeletonData) => {
  //         if (err) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(node)) {
  //           return;
  //         }
  //         if (!cocosUtil.isValid(skeleton)) {
  //           return;
  //         }
  //         if (node["loadName"] != name) {
  //           return;
  //         }
  //         if (this.autoReleaseAsset) {
  //           this.resLoader.addAsset(skeletonData);
  //         }
  //         skeleton.enabled = true;
  //         skeleton.skeletonData = skeletonData;
  //         if (showCb) {
  //           showCb(skeleton);
  //         }
  //       }
  //     );
  //   }

  //   update(dt: number) {
  //     if (this.openBtnLongPress && this.btnLongNode) {
  //       this.btnLognTrigTimeCount += dt;
  //       if (this.btnLognTrigTimeCount >= this.btnLongTrigTime) {
  //         let isGoOn = this.preOnButtonLongClick(this.btnLongNode);
  //         this.btnLongTrigCount++;
  //         if (!isGoOn) {
  //           // 默认只会触发一次
  //           this.btnLongNode = null;
  //           this.btnLognTrigTimeCount = 0;
  //         }
  //       }
  //     }
  //   }
}
