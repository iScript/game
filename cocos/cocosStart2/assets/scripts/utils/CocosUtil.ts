import {
  Button,
  Color,
  Component,
  Input,
  input,
  instantiate,
  isValid,
  Node,
  Quat,
  sys,
  tween,
  Tween,
  UIOpacity,
  UIRenderer,
  UITransform,
  v3,
  Vec2,
  Vec3,
  view,
} from "cc";
import { utilTools } from "./UtilTools";

// 拓展String.parseColor方法
String.prototype.parseColor = function () {
  let color = new Color(this);

  return color;
};

Object.defineProperty(Node.prototype, "opacity", {
  // 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为false。
  configurable: true,
  // 表示能否通过for in循环访问属性，默认值为false
  enumerable: true,
  // 3.writable：表示能否修改属性的值。默认值为false。
  // 4.value：包含这个属性的数据值。默认值为undefined。
  get() {
    let op = cocosUtil.addComponentOnce(this, UIOpacity);
    return op.opacity;
  },
  set(p: number) {
    let op = cocosUtil.addComponentOnce(this, UIOpacity);
    op.opacity = p;
  },
});

export const cocosUtil = {
  /**
   * 以node为中心的圆环区域内的随机点
   * @param minRadius 最小半径
   * @param maxRadius 最大半径
   * @param isWorld 是否转为世界坐标，默认：是node坐标系下
   */
  getAroundPos(
    node: Node,
    minRadius: number,
    maxRadius: number,
    isWorld: boolean = false
  ) {
    let radius = utilTools.getFloatValue(minRadius, maxRadius, true);
    let radian = Math.random() * Math.PI * 2;
    let pos = v3(radius, 0, 0);
    Vec3.rotateZ(pos, pos, Vec3.ZERO, radian);

    pos = node.getPosition().add(pos);
    if (isWorld) {
      pos = cocosUtil.convertToWorldSpaceWithPos(node, pos);
    }

    return pos;
  },

  /**
   * 以node为中心的矩形环区域内的随机点
   * @param node 参考节点
   * @param minWidth 最小宽度
   * @param minHeight 最小高度
   * @param maxWidth 最大宽度
   * @param maxHeight 最大高度
   * @param isWorld 是否转为世界坐标，默认：是node坐标系下
   */
  getRectPos(
    node: Node,
    minWidth: number,
    minHeight: number,
    maxWidth?: number,
    maxHeight?: number,
    isWorld: boolean = false
  ) {
    if (!maxWidth) {
      maxWidth = minWidth + 10;
    }
    if (!maxHeight) {
      maxHeight = minHeight + 10;
    }
    // 分割成4个矩形
    let arr = [];
    // 上
    let r1: any = {};
    r1.x = -maxWidth * 0.5;
    r1.y = minHeight * 0.5;
    r1.width = maxWidth;
    r1.height = (maxHeight - minHeight) * 0.5;
    r1.weight = r1.width * r1.height;
    arr.push(r1);

    // 下
    let r2: any = {};
    r2.x = r1.x;
    r2.y = -maxHeight * 0.5;
    r2.width = r1.width;
    r2.height = r1.height;
    r2.weight = r1.weight;
    arr.push(r2);

    // 左
    let r3: any = {};
    r3.x = -maxWidth * 0.5;
    r3.y = -minHeight * 0.5;
    r3.width = (maxWidth - minWidth) * 0.5;
    r3.height = minHeight;
    r3.weight = r3.width * r3.height;
    arr.push(r3);

    // 右
    let r4: any = {};
    r4.x = minWidth * 0.5;
    r4.y = r3.y;
    r4.width = r3.width;
    r4.height = r3.height;
    r4.weight = r3.weight;
    arr.push(r4);

    let r = utilTools.getRowByWeight(arr);
    let x = r.x + Math.random() * r.width;
    let y = r.y + Math.random() * r.height;

    let pos = v3(x, y);
    pos = node.getPosition().add(pos);
    if (isWorld) {
      pos = cocosUtil.convertToWorldSpaceWithPos(node, pos);
    }

    return pos;
  },

  /**
   * 得到与x轴正方向的夹角，取值范围：0~360度
   * @param pos
   */
  vec2XAngle(pos: Vec2 | Vec3): number {
    let rad = Math.atan2(pos.y, pos.x);
    if (rad < 0) {
      rad += Math.PI * 2;
    }
    let angle = utilTools.radianToAngle(rad);

    return angle;
  },

  vec3CopyVal(outVec3: Vec3, srcVec3: Vec3) {
    outVec3.x = srcVec3.x;
    outVec3.y = srcVec3.y;
    outVec3.z = srcVec3.z;

    return outVec3;
  },

  schedule(
    com: Component,
    cb: Function,
    interval: number,
    repeatNum: number,
    delayTime: number = 0,
    isAtOnce: boolean = false
  ) {
    com.schedule(cb, interval, repeatNum, delayTime);
    if (isAtOnce) {
      cb();
    }
  },

  addComponentOnce(item: Node | Component, name: any): any {
    let com = item.getComponent(name);
    if (!com) {
      com = item.addComponent(name);
    }
    return com;
  },

  /**
   * 以direction为中间方向，angle为间隔角度，获取num数量的，长度为radius的向量
   * @param direction 基准方向
   * @param angle 角度值
   * @param num 个数，包括基准向量
   * @param radius 向量长度
   */
  getSectorDirectionArr(
    direction: Vec3,
    angle: number,
    num: number,
    radius: number = 1
  ) {
    direction = direction.clone().normalize().multiplyScalar(radius);
    if (num <= 1) {
      return [direction];
    }

    let da = Math.floor(num / 2);
    let radian = utilTools.angleToRadian(angle);
    let topArr = [];
    let downArr = [];
    for (let i = da; i >= 1; i--) {
      let dir1 = new Vec3(0, 0, 0);
      let dr = radian * i;
      Vec3.rotateZ(dir1, direction, Vec3.ZERO, dr);
      topArr.push(dir1);

      let dir2 = new Vec3(0, 0, 0);
      dr = -radian * (da + 1 - i);
      Vec3.rotateZ(dir2, direction, Vec3.ZERO, dr);
      downArr.push(dir2);
    }

    topArr.push(direction);
    let arr = topArr.concat(downArr);

    return arr;
  },

  /**
   * 获取num个围成方向为圆圈的，长度为radius的向量
   * @param pos 圆心点
   * @param num 个数
   * @param radius 向量长度
   */
  getCircleDirectionArr(num: number, radius: number = 1) {
    let r = (Math.PI * 2) / num;
    let p2 = v3(radius, 0, 0);
    let arr = [];
    // 随机起始角度
    let startRadian = Math.random() * Math.PI * 2;
    for (let i = 0; i < num; i++) {
      let radian = startRadian + r * i;
      let direction = v3(0, 0, 0);
      direction = Vec3.rotateZ(direction, p2.clone(), Vec3.ZERO, radian);
      arr.push(direction);
    }

    return arr;
  },

  isInScreenVisible(node: Node): boolean {
    if (!node || !node.parent) {
      return false;
    }
    let orignPos = view.getVisibleOrigin();
    let pos = cocosUtil.convertToWorldSpace(node);
    let height = view.getVisibleSize().height;
    let width = view.getVisibleSize().width;
    let tf = node.getComponent(UITransform);
    // 考虑锚点
    if (
      pos.x + (1 - tf.anchorX) * tf.width > orignPos.x &&
      pos.x - tf.anchorX * tf.width < width + orignPos.x &&
      pos.y + (1 - tf.anchorY) * tf.height > orignPos.y &&
      pos.y - tf.anchorY * tf.height < height + orignPos.y
    ) {
      return true;
    }
    return false;
  },

  tweenScaleOut(node: Node, time: number, endCb: Function) {
    tween(node)
      .to(time, { scale: v3(0, 0, 0) })
      .call(() => {
        endCb();
      })
      .start();
  },

  // 受击缩放特效
  tweenHitScale(node: Node, time: number = 0.1, endCb?: Function) {
    Tween.stopAllByTarget(node);
    let scale = node.getScale();
    tween(node)
      .to(time, { scale: v3(scale.x * 0.95, scale.y * 1.1, 1) })
      .to(time * 2, { scale: v3(scale.x, scale.y * 0.9, 1) })
      .to(time * 2, { scale: v3(scale.x * 0.95, scale.y * 1.1, 1) })
      .to(time, { scale: v3(scale.x, scale.y, 1) })
      .call(() => {
        if (endCb) {
          endCb();
        }
      })
      .start();
  },

  tweenScaleShake(node: Node, endCb?: Function) {
    let angle = 10;
    let quat1 = new Quat();
    Quat.fromEuler(quat1, 0, 0, angle);
    let quat2 = new Quat();
    Quat.fromEuler(quat2, 0, 0, -angle);
    let quat3 = new Quat();
    Quat.fromEuler(quat3, 0, 0, 0);

    tween(node)
      .to(0.3, { scale: v3(1.3, 1.3, 1) })
      .to(0.2, { rotation: quat1 })
      .to(0.4, { rotation: quat2 })
      .to(0.2, { rotation: quat3 })
      .to(0.2, { scale: v3(1, 1, 1) })
      .call(() => {
        if (endCb) {
          endCb();
        }
      })
      .start();
  },

  instantiate(node: any) {
    return instantiate(node);
  },

  // 快速呼吸效果
  tweenBubbling(node: Node) {
    Tween.stopAllByTarget(node);
    node.setScale(v3(0.4, 0.4, 1));
    tween(node)
      .to(0.5, {
        scale: v3(1, 1, 1),
      })
      .to(0.5, {
        scale: v3(0.4, 0.4, 1),
      })
      .union()
      .repeatForever()
      .start();
  },

  /**
   * 异步等待一段时间后，才会往下执行，不会造成阻塞
   * @param com 组件基类
   * @param time 等待时间，单位：秒
   */
  waitTimeAsync(com: Component | number, time?: number) {
    return new Promise((resolve) => {
      if (typeof com == "number") {
        setTimeout(() => {
          resolve();
        }, com * 1000);
      } else {
        com.scheduleOnce(() => {
          resolve();
        }, time);
      }
    });
  },

  getScreenMidWorldPos() {
    let size = view.getVisibleSize();
    let pos = v3(size.width * 0.5, size.height * 0.5, 0);

    return pos;
  },

  nodeChangeParent(node: Node, parent: Node) {
    if (!this.isValid(node) || !this.isValid(parent)) {
      return;
    }
    let pos = cocosUtil.convertToWorldSpace(node);
    node.parent = parent;
    pos = cocosUtil.convertToNodeSpace(node, pos);
    node.setPosition(pos);
  },

  tweenUIShow(node: Node) {
    Tween.stopAllByTarget(node);
    let scale = node.getScale();
    node.setScale(v3(0.5, 0.5, 1));
    tween(node)
      .to(0.1, {
        scale: scale,
      })
      .start();
  },

  // 软弹簧效果
  tweenBounceAction(node: Node) {
    Tween.stopAllByTarget(node);
    let scaleX = node.getScale().x;
    let scaleY = node.getScale().y;
    tween(node)
      .to(
        0.15,
        { scale: v3(scaleX * 0.4, scaleY * 1.2, 1) },
        { easing: "bounceInOut" }
      )
      .to(
        0.15,
        { scale: v3(scaleX * 1.4, scaleY * 0.8, 1) },
        { easing: "bounceInOut" }
      )
      .to(0.2, { scale: v3(scaleX, scaleY, 1) }, { easing: "smooth" })
      .delay(0.7)
      .union()
      .repeatForever()
      .start();
  },

  // 节点抖动
  tweenShakeNode(node: Node) {
    let time = 0.1;
    tween(node)
      .to(time, { position: v3(5, -5) })
      .to(time, { position: v3(-5, 5) })
      .to(time, { position: v3(5, 5) })
      .to(time, { position: v3(-5, -5) })
      .to(time, { position: v3(0, 0) })
      .start();
  },

  // 往下掉落的效果
  tweenFallDown(node: Node, endCb?: Function) {
    node.setScale(0.5, 0.5, 1);
    let pos = node.getPosition();
    cocosUtil.setNodePositionY(node, pos.y + 100);
    tween(node)
      .to(0.3, {
        position: pos,
      })
      .to(0.2, {
        scale: v3(1, 1, 1),
      })
      .call(() => {
        if (endCb) {
          endCb();
        }
      })
      .start();
  },

  // 显现后，往上移动并慢慢隐去
  tweenTopFadeOut(node: Node, endCb?: Function) {
    let uiOpacity = node.getComponent(UIOpacity);
    if (!uiOpacity) {
      uiOpacity = node.addComponent(UIOpacity);
    }
    uiOpacity.opacity = 255;
    node.setScale(1, 1, 1);
    tween(node)
      .to(0.05, {
        scale: v3(1.2, 1.2, 1),
      })
      .to(0.1, {
        scale: v3(1, 1, 1),
      })
      .by(0.5, {
        position: v3(0, 40),
      })
      .by(
        1,
        {
          position: v3(0, 0),
        },
        {
          onUpdate(target: Node, ratio: number) {
            uiOpacity.opacity = (1 - ratio) * 255;
          },
        }
      )
      .union()
      .call(() => {
        if (endCb) {
          endCb();
        }
      })
      .start();
  },

  // 放大再缩小的一个效果
  tweenScaleEffect(node: Node, time?: number, endCb?: Function) {
    if (!time) {
      time = 0.2;
    }
    node.setScale(1, 1, 1);
    tween(node)
      .to(time, {
        scale: v3(1.5, 1.5, 1),
      })
      .to(time, {
        scale: v3(1, 1, 1),
      })
      .call(() => {
        if (endCb) {
          endCb();
        }
      })
      .start();
  },

  // 边旋转，边飞向目标位置
  async tweenFlyToPos(node: Node, pos: Vec3, endCb?: Function) {
    Tween.stopAllByTarget(node);

    return new Promise((resolve, reject) => {
      let time = 0.5;

      let angle = 360;
      let quat = cocosUtil.getQuatByAngleZ(angle);

      let t1 = tween(node).to(time, {
        position: pos,
      });

      let t2 = tween(node).by(
        time,
        {
          rotation: quat,
        },
        {
          easing: "quadOut",
          onUpdate(target: Node, ratio: number) {
            node.setRotation(cocosUtil.getQuatByAngleZ(angle * ratio));
          },
        }
      );

      tween(node)
        .parallel(t1, t2)
        .call(() => {
          node.setRotation(cocosUtil.getQuatByAngleZ(0));
          resolve();
          if (endCb) {
            endCb();
          }
        })
        .start();
    });
  },

  // 往右上方做类似抛物线运动
  tweenTopRightPao(node: Node, callbck?: Function) {
    let dx1 = 40;
    let dx2 = 40;
    let dy1 = 100;
    let dy2 = -80;
    dx1 += Math.random() * 20;
    node.setScale(v3(1, 1, 1));
    tween(node)
      .by(
        0.3,
        {
          position: v3(dx1, dy1),
        },
        {
          easing: "quadOut",
          onUpdate: (target: Node, ratio: number) => {
            let ds = 0.5 * ratio;
            node.setScale(v3(1 + ds, 1 + ds, 1));
          },
        }
      )
      .by(
        0.3,
        {
          position: v3(dx2, dy2),
        },
        {
          easing: "quadIn",
          onUpdate: (target: Node, ratio: number) => {
            let ds = 0.5 * ratio;
            node.setScale(v3(1.5 - ds, 1.5 - ds, 1));
          },
        }
      )
      .union()
      .call(() => {
        if (callbck) {
          callbck();
        }
      })
      .start();
  },

  // 从小到放大
  tweenScaleIn(node: Node, time?: number, endCb?: Function) {
    if (!time) {
      time = 0.2;
    }
    node.setScale(0, 0, 1);
    tween(node)
      .to(time, {
        scale: v3(1, 1, 1),
      })
      .call(() => {
        if (endCb) {
          endCb();
        }
      })
      .start();
  },

  // 从小到放大，再恢复到原始大小
  tweenScaleIn2(node: Node, time?: number, endCb?: Function) {
    if (!time) {
      time = 0.2;
    }
    node.setScale(0, 0, 1);
    tween(node)
      .to(time, {
        scale: v3(1.3, 1.3, 1),
      })
      .to(time / 2, {
        scale: v3(1, 1, 1),
      })
      .union()
      .call(() => {
        if (endCb) {
          endCb();
        }
      })
      .start();
  },

  // 闪烁动画
  tweenBlink(node: Node, time?: number, cb?: Function) {
    if (!time) {
      time = 0.5;
    }
    let uiOpacity = this.addComponentOnce(node, UIOpacity);
    uiOpacity.opacity = 255;
    tween(uiOpacity)
      .to(time, {
        opacity: 80,
      })
      .to(time, {
        opacity: 255,
      })
      .call(() => {
        if (cb) {
          cb();
        }
      })
      .union()
      .repeatForever()
      .start();
  },

  // 循环旋转动画
  tweenRotate(node: Node, time?: number) {
    if (!time) {
      time = 2;
    }
    let angle = 360;
    let quat = cocosUtil.getQuatByAngleZ(angle);
    tween(node)
      .by(
        time,
        { rotation: quat },
        {
          easing: "linear",
          onUpdate: (target: Node, ratio: number) => {
            let da = angle * ratio;
            target.setRotation(cocosUtil.getQuatByAngleZ(da));
          },
        }
      )
      .repeatForever()
      .start();
  },

  // 上下漂浮
  tweenUpDown(node: Node, dy?: number, time?: number) {
    if (!dy) {
      dy = 6;
    }
    if (!time) {
      time = 1.5;
    }
    let pos1 = node.getPosition();
    pos1.y += dy;
    let pos2 = node.getPosition();
    tween(node)
      .to(time, {
        position: pos1,
      })
      .to(time, {
        position: pos2,
      })
      .union()
      .repeatForever()
      .start();
  },

  // 淡入动画
  async tweenFadeIn(node: Node, time?: number, cb?: Function) {
    return new Promise((resolve, reject) => {
      if (!time) {
        time = 1;
      }
      let uiOpacity = this.addComponentOnce(node, UIOpacity);
      uiOpacity.opacity = 0;
      tween(uiOpacity)
        .to(time, {
          opacity: 255,
        })
        .call(() => {
          resolve();
          if (cb) {
            cb();
          }
        })
        .start();
    });
  },

  // 淡出动画
  async tweenFadeOut(node: Node, time?: number, cb?: Function) {
    return new Promise((resolve, reject) => {
      if (!time) {
        time = 1.5;
      }
      let uiOpacity = this.addComponentOnce(node, UIOpacity);
      uiOpacity.opacity = 255;
      tween(uiOpacity)
        .to(time, {
          opacity: 0,
        })
        .call(() => {
          resolve();
          if (cb) {
            cb();
          }
        })
        .start();
    });
  },

  /**
   * 放大缩小呼吸效果
   * @param node 节点
   * @param time 缩放时长，单位：秒
   * @param scale 缩放大小
   */
  tweenBreath(node: Node, time?: number, scale?: number) {
    if (!time) {
      time = 0.4;
    }
    if (!scale) {
      scale = 1.2;
    }

    tween(node)
      .to(time, {
        scale: v3(scale, scale, 1),
      })
      .to(time, {
        scale: v3(1, 1, 1),
      })
      .union()
      .repeatForever()
      .start();
  },

  /**
   * 间接性晃动效果
   * @param node 节点
   * @param time 时长，单位：秒
   * @param rotation 旋转角度，单位：度数
   * @param delayTime 中间暂停时长，单位：秒
   * @param isRepeat 是否循环播放，默认：是
   */
  tweenShake(
    node: Node,
    time?: number,
    rotation?: number,
    delayTime?: number,
    isRepeat?: boolean
  ) {
    Tween.stopAllByTarget(node);

    if (!time) {
      time = 0.2;
    }
    if (!rotation) {
      rotation = 6;
    }
    if (delayTime == undefined) {
      delayTime = time * 5;
    }

    let quat1: Quat = new Quat();
    Quat.fromEuler(quat1, 0, 0, rotation);

    let quat2: Quat = new Quat();
    Quat.fromEuler(quat2, 0, 0, -rotation);

    let quat3: Quat = new Quat();
    Quat.fromEuler(quat3, 0, 0, 0);

    let tweenRet = tween(node)
      .to(time, {
        rotation: quat1,
      })
      .to(time * 2, {
        rotation: quat2,
      })
      .to(time, {
        rotation: quat3,
      });

    if (isRepeat == undefined) {
      tweenRet.delay(delayTime).union().repeatForever().start();
    } else {
      tweenRet.start();
    }
  },

  /**
   * 判断节点或者组件是否可用
   * @param node 节点对象
   */
  isValid(node: Node | Component) {
    if (!node || !isValid(node)) {
      return false;
    }
    return true;
  },

  isAndroid() {
    return sys.platform === sys.Platform.ANDROID;
  },

  isDesktopBrowser() {
    return sys.platform === sys.Platform.DESKTOP_BROWSER;
  },

  isIos() {
    return sys.platform === sys.Platform.IOS;
  },

  isWechatGame() {
    return sys.platform === sys.Platform.WECHAT_GAME;
  },

  addKeyDownListener(cb, sender) {
    input.on(Input.EventType.KEY_DOWN, cb, sender);
  },

  init() {
    // 设计分辨率
    this.designSize = view.getDesignResolutionSize();
    // 实际屏幕分辨率
    this.frameSize = view.getFrameSize();
    // 实际屏幕安全区域，{x: 0, y: 0, width: 766.6256157635468, height: 1660}
    // 是以左下角为原点，以设计分辨率为单位的，并且是遵循高度为适配原则后的尺寸
    this.safeAreaRect = sys.getSafeAreaRect();

    // 计算出顶部刘海屏高度
    this.safeAreaMarginTop = this.designSize.height - this.safeAreaRect.height;
    if (this.safeAreaMarginTop < 0) {
      this.safeAreaMarginTop = 0;
    }

    this.intiScreenAdapterWidthScale();
    this.initScreenBgAdapterWidthScale();
  },

  // UI适配，以高度为适配原则，按照满宽度显示计算，如果宽度不够显示，要乘以这个缩放比例
  intiScreenAdapterWidthScale() {
    let fh = this.frameSize.height;
    let fw = this.frameSize.width;

    let scale = fh / this.designSize.height;
    let adapterWidth = this.designSize.width * scale;
    let retScale = 1;
    if (adapterWidth > fw) {
      // 屏幕不够显示，有些交互UI会丢失，要进行缩小
      retScale = fw / adapterWidth;
    }

    // if (this.safeAreaMarginTop > 0) {
    //     // cocos内部以高度为适配策略，但是如果有刘海屏，要额外再缩放一点
    //     let subScale = this.safeAreaMarginTop / this.designSize.height;
    //     retScale -= subScale;
    // }

    this.screenAdapterScale = retScale;
  },
  getScreenAdapterScale() {
    if (!this.screenAdapterScale) {
      this.screenAdapterScale = 1;
    }
    return this.screenAdapterScale;
  },

  // 背景图适配，跟上面的UI适配，刚好相反，超出的屏幕不管，屏幕没显示满，要放大
  initScreenBgAdapterWidthScale() {
    let fh = this.frameSize.height;
    let fw = this.frameSize.width;
    let scale = fh / this.designSize.height;
    let adapterWidth = this.designSize.width * scale;
    let retScale = 1;
    if (adapterWidth < fw) {
      // 屏幕没显示满，会有黑边，要进行放大
      retScale = fw / adapterWidth;
    }

    // if (this.safeAreaMarginTop > 0) {
    //     // 额外增加放大值，使得背景图铺满包括刘海在内的整个屏幕
    //     let addScale = this.safeAreaMarginTop / this.designSize.height;
    //     retScale += addScale;
    // }

    this.screenBgAdapterScale = retScale;
  },
  getScreenBgAdapterScale() {
    if (!this.screenBgAdapterScale) {
      this.screenBgAdapterScale = 1;
    }
    return this.screenBgAdapterScale;
  },

  /**
   * 将node坐标转换为世界坐标
   * @param node
   * @param isCenter 是否强制是node的中心点坐标
   */
  convertToWorldSpace(node: Node, isCenter?: boolean): Vec3 {
    let transform = node.parent.getComponent(UITransform);

    let pos = node.getPosition();
    if (isCenter) {
      let tf = node.getComponent(UITransform);
      pos.x = pos.x + (0.5 - tf.anchorX) * tf.width;
      pos.y = pos.y + (0.5 - tf.anchorY) * tf.height;
    }

    return transform.convertToWorldSpaceAR(pos);
  },

  convertToWorldSpaceWithPos(node: Node, pos: Vec3): Vec3 {
    let transform = node.parent.getComponent(UITransform);
    pos = transform.convertToWorldSpaceAR(pos);

    return pos;
  },

  /**
   * 获得以node父节点锚点位置为原点的坐标系下的坐标
   * @param node 注意，是同坐标系下的节点
   * @param pos 世界坐标
   */
  convertToNodeSpace(node: Node, pos: Vec3): Vec3 {
    let transform = node.parent.getComponent(UITransform);

    return transform.convertToNodeSpaceAR(pos);
  },

  /**
   * 设置渲染节点的颜色叠加
   * @param node 节点
   * @param color 颜色
   * @param isRecursion 是否递归子节点也设置
   */
  setRenderableColor(node: Node, color: string | Color, isRecursion?: boolean) {
    let renderable = node.getComponent(UIRenderer);
    if (renderable && renderable.color) {
      let temp: Color = null;
      if (typeof color == "string") {
        temp = color.parseColor();
      } else {
        temp = color;
      }
      renderable.color = temp;
    }

    if (isRecursion) {
      for (let ch of node.children) {
        this.setRenderableColor(ch, color, isRecursion);
      }
    }
  },

  getRenderableColor(node: Node): Color {
    let renderable = node.getComponent(UIRenderer);
    if (renderable && renderable.color) {
      return renderable.color.clone();
    }
    return null;
  },

  /**
   * 根据十六进制颜色值，获得color对象
   * @param hex "#333333"
   */
  getColorByHEX(hex: string): Color {
    let color = new Color(hex);
    // Color.fromHEX(color, hex);
    return color;
  },

  /**
   * 设置按钮可用状态
   * @param node 按钮对象
   * @param enabled 是否可点击
   */
  setButtonEnabled(node: Node, enabled: boolean) {
    let btn = node.getComponent(Button);
    if (btn) {
      btn.enabled = enabled;
    }
  },

  getQuatByAngleZ(angle: number) {
    let quat = new Quat();
    Quat.fromEuler(quat, 0, 0, angle);

    return quat;
  },

  formatNum(num: number) {
    if (num < 10000) {
      return num;
    }
    if (num < 1000000) {
      num = Math.floor((num / 1000) * 100);
      return (num / 100).toFixed(2) + "K";
    }

    num = Math.floor((num / 1000000) * 100);
    return (num / 100).toFixed(2) + "M";
  },

  formatNumString(num: number) {
    if (num < 1000) {
      return num;
    }
    if (num < 10000) {
      num = Math.floor((num / 1000) * 10);
      return (num / 10).toFixed(1) + "K";
    }

    if (num < 10000000) {
      num = Math.floor((num / 10000) * 10);
      return (num / 10).toFixed(1) + "w";
    }

    num = Math.floor((num / 1000000) * 100);
    return (num / 100).toFixed(2) + "M";
  },

  setNodePositionX(node: Node, x: number) {
    let pos = node.getPosition();
    pos.x = x;
    node.setPosition(pos);
  },

  setNodePositionY(node: Node, y: number) {
    let pos = node.getPosition();
    pos.y = y;
    node.setPosition(pos);
  },

  /**
   * 绘制一条曲线路径
   * @param  {Object} node canvas渲染上下文
   * @param  {Array<number>} start 起点
   * @param  {Array<number>} end 终点
   * @param  {number} curveness 曲度(0-1)
   * @param  {number} percent 绘制百分比(0-100)
   */
  drawCurvePath(node, start, end, curveness, percent, delay = 0) {
    var cp = [
      (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
      (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness,
    ];

    // node.position = v3(start[0], start[1], 0);
    let tweenArr = [];
    tweenArr.push(tween(node).delay(delay));
    let curx = start[0];
    let cury = start[1];
    for (var t = 0; t <= percent / 100; t += 0.01) {
      var x = this.quadraticBezier(start[0], cp[0], end[0], t);
      var y = this.quadraticBezier(start[1], cp[1], end[1], t);
      let time = (Math.abs(x - curx) + Math.abs(y - cury)) / 1500;
      tweenArr.push(tween(node).to(time, { position: v3(x, y, 0) }));

      curx = x;
      cury = y;
    }
    let time = (Math.abs(end[0] - curx) + Math.abs(end[1] - cury)) / 1500;

    tweenArr.push(tween(node).to(time, { position: v3(end[0], end[1], 0) }));

    tween(node)
      .sequence(...tweenArr)
      .start();
  },

  quadraticBezier(p0, p1, p2, t) {
    var k = 1 - t;
    return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2; // 这个方程就是二次贝赛尔曲线方程
  },
};
