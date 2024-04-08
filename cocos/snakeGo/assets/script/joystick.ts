import {
  _decorator,
  Component,
  Node,
  v2,
  v3,
  Vec2,
  UITransform,
  Camera,
} from "cc";
const { ccclass, property } = _decorator;
@ccclass
export default class joystick extends Component {
  @property(Node)
  stick: Node = null;

  @property
  max_R: number = 80;

  @property
  min_R: number = 20;

  public dir: Vec2 = v2(0, 0);

  onLoad() {
    //this.stick.setPosition(v2(0, 0));
    //this.stick.setPosition(v3(0, 0, 0));
    this.stick.on(Node.EventType.TOUCH_START, this.on_stick_start, this);
    this.stick.on(Node.EventType.TOUCH_MOVE, this.on_stick_move, this);
    this.stick.on(
      Node.EventType.TOUCH_END,
      function () {
        this.on_stick_end();
      },
      this
    );

    this.stick.on(
      Node.EventType.TOUCH_CANCEL,
      function () {
        this.on_stick_end();
      },
      this
    );
  }
  on_stick_start(e: cc.Touch): void {
    var screen_pos: cc.Vec2 = e.getUILocation();
    console.log(this.stick.position, this.node.position);
    var pos: cc.Vec2 = this.stick
      .getComponent(UITransform)
      .convertToNodeSpaceAR(v3(screen_pos.x, screen_pos.y, 0));
    console.log(e.getUILocation(), screen_pos, pos);
  }

  // 触摸事件对象, e里面保存了触摸信息
  on_stick_move(e: Touch): void {
    var screen_pos: Vec2 = e.getUILocation();

    var pos: Vec2 = this.node
      .getComponent(UITransform)
      .convertToNodeSpaceAR(v3(screen_pos.x, screen_pos.y, 0));
    //console.log(e.getUILocation(), screen_pos, pos);
    var len: number = pos.mag();

    if (len <= this.min_R) {
      this.stick.setPosition(pos);
      return;
    }

    this.dir.x = pos.x / len; // (cos)
    this.dir.y = pos.y / len; // (sin)

    if (len > this.max_R) {
      pos.x = (pos.x * this.max_R) / len;
      pos.y = (pos.y * this.max_R) / len;
    }

    this.stick.setPosition(pos);
  }

  on_stick_end(): void {
    this.dir = v2(0, 0);
    this.stick.setPosition(v3(0, 0, 0));
  }

  start() {}

  // update (dt) {}
}
