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
import { GameManager } from "../framework/GameManager";
const { ccclass, property } = _decorator;

@ccclass("EnemyPlane")
export class EnemyPlane extends Component {
  private _enemySpeed = 0;

  public createBulletTime = 0.4;

  private _needBullet = false;
  private _gameManager: GameManager = null;

  private _currCreateBulletTime = 0;

  start() {}

  onEnable() {
    const collider = this.getComponent(Collider);
    collider.on("onTriggerEnter", this._onTriggerEnter, this);
  }

  onDisable() {
    const collider = this.getComponent(Collider);
    collider.off("onTriggerEnter", this._onTriggerEnter, this);
  }

  private _onTriggerEnter(event: ITriggerEvent) {
    //const collisionGroup = event.otherCollider.getGroup();
    if (
      event.otherCollider.node.name == "plane01" ||
      event.otherCollider.node.name == "bullet01"
    ) {
      // console.log('trigger enemy destroy');
      // this._gameManager.playAudioEffect("enemy");
      // PoolManager.instance().putNode(this.node);
      this.node.destroy();
      // this._gameManager.addScore();
      // this._gameManager.createEnemyEffect(this.node.position);
    }
  }

  update(deltaTime: number) {
    const pos = this.node.position;
    const movePos = pos.z + this._enemySpeed;
    this.node.setPosition(pos.x, pos.y, movePos);

    if (this._needBullet) {
      // console.log(
      //   "需要敌机子弹",
      //   this._currCreateBulletTime,
      //   this.createBulletTime
      // );
      this._currCreateBulletTime += deltaTime;
      if (this._currCreateBulletTime > this.createBulletTime) {
        //console.log("去创建敌机子弹");
        this._gameManager.createEnemyBullet(this.node.position);
        this._currCreateBulletTime = 0;
      }
    }

    if (movePos > 50) {
      //PoolManager.instance().putNode(this.node);
      this.node.destroy();
    }
  }

  show(gameManager: GameManager, speed: number, needBullet: boolean) {
    this._gameManager = gameManager;
    this._enemySpeed = speed;
    this._needBullet = needBullet;
  }
}
