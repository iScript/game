import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
import { Game } from "./game/Game";
import ResManager from "./managers/ResManager";
import { UIManager } from "./managers/UIManager";
import { AudioManager } from "./managers/AudioManager";

@ccclass("Main")
export class Main extends Component {
  onLoad(): void {
    console.log("onLoad");

    this.node.addComponent(ResManager);
    this.node.addComponent(UIManager);
    AudioManager.instance.init();
    this.node.addComponent(Game);
  }

  start() {
    console.log("main start");
    Game.instance.gameStart();
  }

  update(deltaTime: number) {}
}
