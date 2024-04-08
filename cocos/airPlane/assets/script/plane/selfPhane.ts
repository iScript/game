import {
  _decorator,
  Component,
  input,
  Node,
  Input,
  EventTouch,
  Touch,
  Collider,
  ITriggerEvent,
} from "cc";
import { Constant } from "../framework/Constant";
const { ccclass, property } = _decorator;

@ccclass("selfPhane")
export class selfPhane extends Component {
  // private speed = 5;

  onEnable() {
    const collider = this.getComponent(Collider);
    collider.on("onTriggerEnter", this._onTriggerEnter, this);
  }

  onDisable() {
    const collider = this.getComponent(Collider);
    collider.off("onTriggerEnter", this._onTriggerEnter, this);
  }

  private _onTriggerEnter(event: ITriggerEvent) {
    console.log("====");
    // some trick to fix "trigger vs trigger problem" in physx
    // if (event.otherCollider.material.friction == 100) {
    //   return;
    // }

    const collisionGroup = event.otherCollider.getGroup();
    console.log(event.otherCollider.node.name);
    if (
      event.otherCollider.node.name == "plane02" ||
      event.otherCollider.node.name == "plane03" ||
      event.otherCollider.node.name == "bullet01"
    ) {
      // if (this._currLife === this.lifeValue) {
      //   this.blood.active = true;
      // }
      // this._currLife--;
      // this.bloodFace.setScale(this._currLife / this.lifeValue, 1, 1);
      // if (this._currLife <= 0) {
      //   this.isDie = true;
      //   this._audioEffect.play();
      //   this.explode.active = true;
      //   this.blood.active = false;
      //   console.log("self plane is die");
      // }
    }
  }

  start() {
    // input.on(Input.EventType.TOUCH_START, this._touchStart, this);
    // input.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
  }

  update(deltaTime: number) {}

  // private _touchStart(event: EventTouch) {}

  // private _touchMove(event: EventTouch) {
  //   const delta = event.touch.getDelta();
  //   let pos = this.node.position;
  //   this.node.setPosition(
  //     pos.x + 0.01 * this.speed * delta.x,
  //     pos.y,
  //     pos.z - 0.01 * this.speed * delta.y
  //   );
  // }
}
