import { _decorator, Component, Node, Vec2, v2, v3 } from "cc";
const { ccclass, property } = _decorator;
import joystick from "./joystick";

@ccclass("SnakeControl")
export class SnakeControl extends Component {
  @property(joystick)
  private stick: joystick = null; // 游戏遥感;

  private speed: number = 100; // 贪吃蛇的速度;

  private FIXED_TIME: number = 0.016; //
  private roadPoints: Array<Vec2> = null; // 存放我们的路径点;
  private snakePointIndex: Array<number> = null; // 每节蛇当前走到那个点的索引
  private nowTime: number = 0;

  start() {
    console.log("snake start");
    var blockLen = this.FIXED_TIME * this.speed;
    var ypos = -125;

    var snakeLen = (this.node.children.length - 1) * 30;
    var len = snakeLen * 2; // 采集足够的点;

    this.roadPoints = [];
    this.snakePointIndex = [];

    var totalTime = len / this.speed;
    var nowTime = 0;

    // 采集到了我开始的时候的点的数据;
    // 提示路径点;寻路，你要打出预先的路径点出来;
    while (nowTime < totalTime) {
      this.roadPoints.push(v2(0, ypos));
      ypos += blockLen;
      nowTime += this.FIXED_TIME;
    }

    // 一节蛇除以blockLen 表示一节蛇有多少个点
    var numPoints = Math.floor(30 / blockLen);
    if (numPoints <= 0) {
      numPoints = 1;
    }
    console.log(numPoints);

    for (var i = 0; i < this.node.children.length; i++) {
      var index = this.roadPoints.length - 1 - i * numPoints;
      this.node.children[i].setPosition(
        v3(this.roadPoints[index].x, this.roadPoints[index].y, 0)
      );
      this.snakePointIndex.push(index);
    }
    console.log(this.roadPoints, this.snakePointIndex);
    this.nowTime = 0;
  }

  fixedUpdate(dt: number): void {
    if (this.stick.dir.x === 0 && this.stick.dir.y === 0) {
      return;
    }

    //
    var pos = this.node.children[0].getPosition();
    var vx = this.speed * this.stick.dir.x;
    var vy = this.speed * this.stick.dir.y;
    pos.x += vx * dt;
    pos.y += vy * dt;
    this.roadPoints.push(v2(pos.x, pos.y));
    this.node.children[0].setPosition(pos);

    var r = Math.atan2(this.stick.dir.y, this.stick.dir.x);
    var degree = (r * 180) / Math.PI;
    degree -= 90;
    this.node.children[0].angle = degree;

    for (var i = 1; i < this.node.children.length; i++) {
      this.snakePointIndex[i]++;
      var pointIndex = this.snakePointIndex[i];
      this.node.children[i].setPosition(
        v3(this.roadPoints[pointIndex].x, this.roadPoints[pointIndex].y, 0)
      );
    }
  }

  update(deltaTime: number) {
    this.nowTime += deltaTime;
    while (this.nowTime > this.FIXED_TIME) {
      this.fixedUpdate(this.FIXED_TIME);
      this.nowTime -= this.FIXED_TIME;
    }
  }
}
