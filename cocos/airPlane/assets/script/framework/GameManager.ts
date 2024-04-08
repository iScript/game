import {
  _decorator,
  Component,
  instantiate,
  Node,
  Prefab,
  math,
  Vec3,
  Label,
} from "cc";
import { Bullet } from "../bullet/Bullet";
import { Constant } from "./Constant";
import { EnemyPlane } from "../plane/EnemyPlane";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  @property(Node)
  public playPlane: Node = null;

  @property(Prefab)
  public bullet01: Prefab = null;

  @property(Prefab)
  public enemy01: Prefab = null;
  @property(Prefab)
  public enemy02: Prefab = null;
  public createEnemyTime = 1;
  public enemy1Speed = 0.5;
  public enemy2Speed = 0.7;

  @property(Node)
  public bulletRoot: Node = null;

  public shootTime = 0.1;
  private bulletSpeed = 1;
  private currentShootTime = 0;
  private isShoot = false;
  private currentCreateEnemyTime = 0;
  private combinationInterval = Constant.Combination.PLAN1;

  public gameScore: Label = null;
  public _score = 0;

  start() {
    this._init();
  }

  private _init() {
    this.currentShootTime = this.shootTime;
    this.changePlaneMode();
  }

  update(deltaTime: number) {
    this.currentShootTime += deltaTime;
    if (this.isShoot && this.currentShootTime > this.shootTime) {
      this.createPlayerBullet();
      this.currentShootTime = 0;
    }

    this.currentCreateEnemyTime += deltaTime;
    // 0 秒
    if (this.combinationInterval === Constant.Combination.PLAN1) {
      if (this.currentCreateEnemyTime > this.createEnemyTime) {
        this.createEnemyPlane();
        this.currentCreateEnemyTime = 0;
      }
      // 10 秒
    } else if (this.combinationInterval === Constant.Combination.PLAN2) {
      if (this.currentCreateEnemyTime > this.createEnemyTime * 3) {
        const randomCombination = math.randomRangeInt(1, 3);
        if (randomCombination === Constant.Combination.PLAN2) {
          this.createCombination1();
        } else {
          this.createEnemyPlane();
        }
        this.currentCreateEnemyTime = 0;
      }
    } else {
      if (this.currentCreateEnemyTime > this.createEnemyTime * 2) {
        const randomCombination = math.randomRangeInt(1, 4);
        if (randomCombination === Constant.Combination.PLAN2) {
          this.createCombination1();
        } else if (randomCombination === Constant.Combination.PLAN3) {
          this.createCombination2();
        } else {
          this.createEnemyPlane();
        }
        this.currentCreateEnemyTime = 0;
      }
    }
  }

  public createPlayerBullet() {
    const bullet = instantiate(this.bullet01);
    bullet.setParent(this.bulletRoot);
    const pos = this.playPlane.position;
    bullet.setPosition(pos.x, pos.y, pos.z - 7);
    const bulletComp = bullet.getComponent(Bullet);
    //bulletComp.bulletSpeed = this.bulletSpeed;

    bulletComp.show(this.bulletSpeed, false);
  }

  public createEnemyBullet(targetPos: Vec3) {
    const bullet = instantiate(this.bullet01);
    // const bullet = PoolManager.instance().getNode(
    //   this.bullet02,
    //   this.bulletRoot
    // );
    bullet.setParent(this.bulletRoot);
    bullet.setPosition(targetPos.x, targetPos.y, targetPos.z + 6);
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.show(1, true);

    // const colliderComp = bullet.getComponent(BoxCollider);
    // colliderComp.setGroup(Constant.CollisionType.ENEMY_BULLET);
    // colliderComp.setMask(Constant.CollisionType.SELF_PLANE);
  }

  public createEnemyPlane() {
    console.log("生成敌机");
    const whichEnemy = math.randomRangeInt(1, 3);
    let prefab: Prefab = null;
    let speed = 0;
    if (whichEnemy === Constant.EnemyType.TYPE1) {
      prefab = this.enemy01;
      speed = this.enemy1Speed;
    } else {
      prefab = this.enemy02;
      speed = this.enemy2Speed;
    }

    const enemy = instantiate(prefab);
    //const enemy = PoolManager.instance().getNode(prefab, this.node);
    enemy.setParent(this.node);
    const enemyComp = enemy.getComponent(EnemyPlane);
    enemyComp.show(this, speed, true);

    const randomPos = math.randomRangeInt(-25, 26);
    enemy.setPosition(randomPos, 0, -50);
  }

  public createCombination1() {
    const enemyArray = new Array<Node>(5);
    for (let i = 0; i < enemyArray.length; i++) {
      enemyArray[i] = instantiate(this.enemy01);
      //enemyArray[i] = PoolManager.instance().getNode(this.enemy01, this.node);
      const element = enemyArray[i];
      element.parent = this.node;
      element.setPosition(-20 + i * 10, 0, -50);
      const enemyComp = element.getComponent(EnemyPlane);
      enemyComp.show(this, this.enemy1Speed, false);
    }
  }

  public createCombination2() {
    const enemyArray = new Array<Node>(7);

    const combinationPos = [
      -21, 0, -60, -14, 0, -55, -7, 0, -50, 0, 0, -45, 7, 0, -50, 14, 0, -55,
      21, 0, -60,
    ];

    for (let i = 0; i < enemyArray.length; i++) {
      //enemyArray[i] = PoolManager.instance().getNode(this.enemy02, this.node);
      enemyArray[i] = instantiate(this.enemy02);
      const element = enemyArray[i];
      element.parent = this.node;
      const startIndex = i * 3;
      element.setPosition(
        combinationPos[startIndex],
        combinationPos[startIndex + 1],
        combinationPos[startIndex + 2]
      );
      const enemyComp = element.getComponent(EnemyPlane);
      enemyComp.show(this, this.enemy2Speed, false);
    }
  }

  public addScore() {
    this._score++;
    this.gameScore.string = this._score.toString();
  }

  public isShooting(value: boolean) {
    this.isShoot = value;
  }

  private changePlaneMode() {
    // 每10秒重复3次 ， 2 3 4
    this.schedule(this.modeChanged, 10, 3);
  }

  private modeChanged() {
    console.log("执行定时器");
    this.combinationInterval++;
  }
}
