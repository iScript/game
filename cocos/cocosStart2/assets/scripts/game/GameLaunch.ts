import { _decorator, Component, director, Node, find, AudioSource } from "cc";
const { ccclass, property } = _decorator;

import { myLog } from "../common/MyLog";
import { BaseLayer } from "./component/base/BaseLayer";
import { playerModel } from "./model/playerModel";
import { audioManager } from "./manager/AudioManager";
import { layerManager } from "./manager/LayerManager";
import { constants } from "./data/constants";
@ccclass("GameLaunch")
export class GameLaunch extends BaseLayer {
  onLoad() {
    super.onLoad();

    if (playerModel.isInDevelopmentEnvironment()) {
      myLog.isOpen = true;
    }

    let btnTest = this.getNodeByPath("btnTest");
    btnTest.active = playerModel.isInDevelopmentEnvironment();
    btnTest.active = true;

    let layer1 = find("layer1", this.node);
    let layerHint = find("layerHint", this.node);
    layerManager.init(layer1, layerHint);
    console.log("layerHint", layerHint);

    // 设置音频播放组件
    audioManager.setMusicAudioSource(
      this.getNodeByPath("audio/music").getComponent(AudioSource)
    );
    audioManager.setEffectAudioSource(
      this.getNodeByPath("audio/effect").getComponent(AudioSource)
    );

    let loadingName = constants.layers.LoadingLayer;
    this.getNodeByPath(loadingName).addComponent(loadingName);

    director.on("GNetCmd.GetFriendVal.toString()", this.onMessageEvent, this);
  }

  start() {}

  update(deltaTime: number) {}

  onEnable() {
    super.onEnable();
  }

  onDisable() {
    super.onDisable();
  }

  onMessageEvent(value) {
    console.log("处理服务端发送的消息:", value);
  }
}
