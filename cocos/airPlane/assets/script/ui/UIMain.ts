import {
  _decorator,
  Component,
  input,
  Node,
  Input,
  EventTouch,
  Touch,
} from "cc";
import { GameManager } from "../framework/GameManager";
const { ccclass, property } = _decorator;

@ccclass("UIMain")
export class UIMain extends Component {
  @property(Node)
  public playerPlane: Node = null;

  private planeSpeed = 5;

  @property(GameManager)
  public gameManager: GameManager = null;

  start() {
    // input.on(Input.EventType.TOUCH_START, this._touchStart, this);
    // input.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    this.node.on(Input.EventType.TOUCH_END, this._touchEnd, this);
    this.node.on(Input.EventType.TOUCH_START, this._touchStart, this);
    this.node.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
  }

  private _touchStart(event: EventTouch) {
    this.gameManager.isShooting(true);
  }
  private _touchEnd(event: EventTouch) {
    this.gameManager.isShooting(false);
  }

  private _touchMove(event: EventTouch) {
    const delta = event.touch.getDelta();
    let pos = this.playerPlane.position;
    this.playerPlane.setPosition(
      pos.x + 0.01 * this.planeSpeed * delta.x,
      pos.y,
      pos.z - 0.01 * this.planeSpeed * delta.y
    );
  }
  update(deltaTime: number) {}
}
