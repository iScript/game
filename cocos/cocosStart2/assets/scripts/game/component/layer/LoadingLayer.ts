import { Node, ProgressBar, Sprite, SpriteFrame, _decorator } from "cc";
import { WECHAT } from "cc/env";
import { myLog } from "../../../common/MyLog";
// import { sdkManager } from "../../../sdk/sdkManager";
// import { GLoginState } from "../../../tyqSDK/network/conf";
// import CronCtr from "../../../tyqSDK/network/CronCtr";
// import ServerCtr from "../../../tyqSDK/network/ServerCtr";
//import { ChannelFlag, tyqSDK } from "../../../tyqSDK/tyqSDK";
import { constants } from "../../data/constants";
import { designManager } from "../../manager/designManager";
import { layerManager } from "../../manager/LayerManager";
import { resManager } from "../../manager/resManager";
import { playerModel } from "../../model/playerModel";
import { BaseLayer } from "../base/BaseLayer";
const { ccclass, property } = _decorator;

@ccclass("LoadingLayer")
export class LoadingLayer extends BaseLayer {
  progressBar: ProgressBar;
  progress: number = 0;
  percentNode: Node;

  flagNode: Node;
  progressLength: number = 428;
  startGap: number = -202;

  designResProgress: number = 0;
  designResPercent: number = 0.1;

  bundleArrProgress: number = 0;
  bundleArrPercent: number = 0.8;
  // 由于bundle加载，没有过程回调，因此模拟一个加载过程，创造友好体验
  bundleLoadingTime: number = -1;
  bundleLoadingMaxTime: number = 6;

  layerProgress: number = 0;
  layerPercent: number = 0.1;

  spriteFrameArr: SpriteFrame[] = [];

  isLogined: boolean = false;

  onLoad() {
    super.onLoad();

    this.percentNode = this.getNodeByPath("ui/progressBar/percent");
    //this.setString(this.percentNode, "0%");

    // this.progressBar =
    //   this.getNodeByPath("ui/progressBar").getComponent(ProgressBar);
    // this.setProgressBar(this.progressBar, this.progress);

    //微信登录
    // if (WECHAT) {
    //   CronCtr.getInstance().init(); //开启心跳
    // } else {
    //   ServerCtr.GetInstance().loginState = GLoginState.loginWithoutAccount;
    // }
  }

  onClickLoginBtn() {
    // let account = this.getNodeByPath("account/AccountLabel").getComponent(Label)!
    // ServerCtr.GetInstance().reqLoginByAccount(account.string, "")
  }

  onEnable() {
    super.onEnable();

    this.loadDesignRes(() => {
      // 加载bundle
      this.bundleLoadingTime = 0;
      let bundleArr = [
        // constants.bundles.common,
        // constants.bundles.hint,
        // constants.bundles.icon,
        // constants.bundles.layer,
        // constants.bundles.monster,
        // constants.bundles.prefab,
        // constants.bundles.spine,
        constants.bundles.ui,
        // constants.bundles.bullet,
        // constants.bundles.wwqVec,
      ];
      resManager.loadBundleArr(
        bundleArr,
        (percent: number) => {
          this.bundleArrProgress = percent;
        },
        () => {
          this.bundleArrProgress = 1;
          // 再去加载其他需要的资源
          this.loadCommonLayerRes();
        }
      );
    });
    // 埋点
    //tyqSDK.eventSendCustomEvent("进入加载页", "玩家人数");
  }

  onDisable() {
    super.onDisable();
  }

  onDestroy() {
    super.onDestroy();

    this.releaseAllSpriteFrame();
  }

  collectAllSpriteFrame(node: Node) {
    let sp: Sprite = node.getComponent(Sprite);
    if (sp && sp.spriteFrame) {
      this.spriteFrameArr.push(sp.spriteFrame);
    }
    let chs = node.children;
    for (let i = 0; i < chs.length; i++) {
      let ch = chs[i];
      this.collectAllSpriteFrame(ch);
    }
  }

  releaseAllSpriteFrame() {
    for (let i = 0; i < this.spriteFrameArr.length; i++) {
      let spriteFrame: SpriteFrame = this.spriteFrameArr[i];
      spriteFrame.decRef();
    }
    this.spriteFrameArr = [];
  }

  loadDesignRes(cb?: Function) {
    // 加载策划表格数据
    designManager.loadAllDesignTable(
      (percent: number) => {
        this.designResProgress = percent;
      },
      () => {
        this.designResProgress = 1;
        if (cb) {
          cb();
        }
      }
    );
  }

  loadCommonLayerRes() {
    // 加载layer资源
    layerManager.loadCommonLayers(
      (percent: number) => {
        this.layerProgress = percent;
      },
      () => {
        this.layerProgress = 1;
      }
    );
  }

  openHomeLayer() {
    this.closeLayer();
    this.openLayer(constants.layers.HomeLayer);
    //tyqSDK.eventSendCustomEvent("进入游戏主界面", "玩家人数");
  }

  onButtonClick(node: Node, name: String) {
    switch (name) {
      default:
        break;
    }
  }

  update(dt: number) {
    if (!this.progressBar) {
      //return;
    }
    if (this.bundleLoadingTime >= 0) {
      this.bundleLoadingTime += dt;
      let p = this.bundleLoadingTime / this.bundleLoadingMaxTime;
      if (p > 1) {
        p = 1;
      }
      if (p > this.bundleArrProgress) {
        this.bundleArrProgress = p;
      }
      if (this.bundleArrProgress >= 1) {
        // 去除小数
        this.bundleArrProgress = 1;
      }
    }
    let progress =
      this.designResProgress * this.designResPercent +
      this.bundleArrProgress * this.bundleArrPercent +
      this.layerProgress * this.layerPercent;
    // 防止计算过后，是0.999999的情况
    progress = Math.ceil(progress * 10000) / 10000;
    // if (progress > this.progressBar.progress) {
    //   this.setProgressBar(this.progressBar, progress);
    //   this.setString(this.percentNode, Math.ceil(progress * 100) + "%");
    //   let pos = this.flagNode.getPosition();
    //   pos.x = progress * this.progressLength + this.startGap;
    //   this.flagNode.setPosition(pos);
    // }
    console.log(progress);
    if (progress >= 1) {
      //myLog.i("load end:" + ServerCtr.GetInstance().loginState);
      //   if (ServerCtr.GetInstance().loginState == GLoginState.noYet) {
      //     return;
      //   }
      this.progressBar = undefined;
      playerModel.init();
      this.openHomeLayer();
    }
  }
}
