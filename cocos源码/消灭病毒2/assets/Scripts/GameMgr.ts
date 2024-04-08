// cc: cocos creator;
// _decorator: 装饰器/注解的名字空间;
// ccclass: 装饰/注解一个类是一个组件类;
// property: 装饰、注解一个类的数据成员 绑定到编辑器;
// @开头，装饰器和注解;
// cc.Component: 组件类的基类;

import PlaneCtrl from "./PlaneCtrl";

// export default: 作为默认导出给外部使用，import xxxx from "代码路径"
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameMgr extends cc.Component {

    // 权限 名字: 类型 = 默认值;
    @property
    private isDebug: boolean = false;

    private isPaused: boolean = true;

    @property(cc.Node)
    private maskNode: cc.Node = null;

    @property(PlaneCtrl)
    private plane: PlaneCtrl = null;

    start(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    // e 触摸事件对象，可以有我们的触摸信息，比如触摸坐标等;
    private onTouchStart(e): void {
        if (this.isPaused === false) {
            return;
        }

        this.isPaused = false;
        this.plane.setPaused(false);
        this.maskNode.stopAllActions();
        var fadeOut = cc.fadeOut(0.5);
        this.maskNode.runAction(fadeOut);
    }

    private onTouchEnd(e): void {
        if(this.isPaused === true) {
            return;
        }

        this.isPaused = true;
        this.plane.setPaused(true);

        this.maskNode.stopAllActions();
        var fadeIn = cc.fadeIn(0.5);
        this.maskNode.runAction(fadeIn);
    }

    private onTouchMove(e): void {
        var delta = e.getDelta();
        this.plane.onPlaneMove(delta);
    }

    // |=============|=======dt========|
    // (100 * dt)
    update(dt: number): void {
        
    }
}
