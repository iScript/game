// _decorator: 装饰器和注解的名字空间;
// Component: 所有组件类的基类;
// Node: 节点类型
import { _decorator, Component, Node, systemEvent, SystemEvent, Vec2 } from 'cc';
import { PlayerCtrl } from './PlayerCtrl';

// ccclass: 装饰、注解一个类为一个组件类;
// property: 装饰/注解一个类的数据成员要绑定到编辑器;
// @表示后面跟的是我们的注解;
const { ccclass, property } = _decorator;

@ccclass('GameMgr')
export class GameMgr extends Component {

    @property
    private isDebug: boolean = false;

    @property([PlayerCtrl])
    private activePlayers: Array<PlayerCtrl> = [];

    private ghostPlayers: Array<Node> = [];
    private isForward: boolean = false;
    private isHor: boolean = false;

    private startPos: Vec2 = null;
    private horSpeed: number = 0.1 * 0.5;
    private vx: number = 0;

    start(): void {
        var ghostRoot = this.node.getChildByName("GhostRoot");
        for(var i = 0; i < ghostRoot.children.length; i ++) {
            this.ghostPlayers.push(ghostRoot[i]);
        }

        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    // e: 触摸时间对象;
    private onTouchStart(e): void {
        this.isForward = true;
        this.isHor = false;
        this.startPos = e.getLocation();

        this.unscheduleAllCallbacks();
    }

    private onTouchMove(e): void {
        var dst = e.getLocation();
        if (this.isHor === false) { // 第一次操作左边or右边
            var len = Math.abs(dst.x - this.startPos.x);
            if (len <= 10) { // 起步的时候，不会去算这个放心---》“明确”
                return;
            }
        }

        this.isHor = true;
        if (dst.x > this.startPos.x) { // 右边
            this.vx = this.horSpeed;
        }
        else if (dst.x < this.startPos.x) { // 左边
            this.vx = -this.horSpeed;
        }
        else { // 不动
            this.vx = 0;
        }

        this.startPos = dst;
        this.unscheduleAllCallbacks();
        this.scheduleOnce(this.moveTimeOut.bind(this), 0.1);
    }

    private moveTimeOut(): void {
        this.isHor = false;
    }

    private onTouchEnd(e): void {
        this.isForward = false;

        this.unscheduleAllCallbacks();
    }

    // |==========|=====dt======|
    // 100 * dt;
    // 时间迭代
    update(dt: number): void {

        var state = 0;
        if (this.isForward) {
            for(var i = 0; i < this.activePlayers.length; i ++) {
                this.activePlayers[i].forwardWalkUpdate(-0.1, dt);
            }

            state = (1 << 0);
        }

        if (this.isHor === true)  {
            if (this.vx > 0) {
                state |= (1 << 2);
            }
            else if(this.vx < 0) {
                state |= (1 << 1);
            }

            for(var i = 0; i < this.activePlayers.length; i ++) {
                this.activePlayers[i].horWalkUpdate(this.vx, dt);
            }
        }

        for(var i = 0; i < this.activePlayers.length; i ++) {
            this.activePlayers[i].setState(state);
        }
    }
}
