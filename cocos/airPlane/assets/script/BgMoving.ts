import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BgMoving")
export class BgMoving extends Component {
  @property(Node)
  bg1: Node = null;

  @property(Node)
  bg2: Node = null;

  private speed = 10;
  private movingRange: number = 90;

  start() {
    this._init();
  }

  private _init() {
    this.bg1.setPosition(0, 0, 0);
    this.bg2.setPosition(0, 0, -this.movingRange);
  }

  update(deltaTime: number) {
    //console.log("update");
    this.moveBg(deltaTime);
  }

  private moveBg(deltaTime: number) {
    this.bg1.setPosition(0, 0, this.bg1.position.z + this.speed * deltaTime);
    this.bg2.setPosition(0, 0, this.bg2.position.z + this.speed * deltaTime);

    if (this.bg1.position.z > this.movingRange) {
      this.bg1.setPosition(0, 0, this.bg2.position.z - this.movingRange);
    }
    if (this.bg2.position.z > this.movingRange) {
      this.bg2.setPosition(0, 0, this.bg1.position.z - this.movingRange);
    }
  }
}
