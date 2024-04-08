import { _decorator, Component, Node, Label } from "cc";
import { UICtrl } from "../../managers/UIManager";
import { AudioManager } from "../../managers/AudioManager";
const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameController extends UICtrl {
  onLoad(): void {
    super.onLoad();
    console.log("vvvv", this.view);
    this.view["Label"].getComponent(Label).string = "123123";

    this.add_button_listen("btn_green", this, this.onBtnClick);
  }

  private onBtnClick(): void {
    console.log("111");

    AudioManager.instance.playSound("click");
  }
}
