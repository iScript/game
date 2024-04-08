import { AudioManager } from './../framework/audioManager';
import { playerData } from './../framework/playerData';
import { constant } from './../framework/constant';
import { GameManager } from './../fight/gameManager';
import { _decorator, Component, Node, Enum, EventTouch, UITransformComponent, Vec3, view } from "cc";
import { clientEvent } from '../framework/clientEvent';
const { ccclass, property } = _decorator;

//触摸类型
const TOUCH_TYPE = Enum({
    DEFAULT: 0,//按钮和背景距离不变，背景位置与触碰点一致，不可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后无法恢复到初始位置
    FOLLOW: 1,//按钮和背景距离不变，背景位置与触碰点一致，不可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后恢复到初始位置
    FOLLOW_ALWAYS: 2, //按钮和背景距离不变，背景位置与触碰点一致，可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后恢复到初始位置
    FOLLOW_DOT: 3 //按钮和背景距离可改变，按钮位置与触碰点可不一致，不可改变按钮背景位置，按钮背景不随着按钮移动而移动，松手后恢复到初始位置
});

//方向
const DIRECTION_TYPE = Enum({
    FOUR: 4,
    EIGHT: 8,
    ALL: 0,
});

const screenHeight = view.getVisibleSize().height;//屏幕可视范围高度

@ccclass("Joystick")
export class Joystick extends Component {
    @property({type: Node, displayName: '摇杆背景节点'})
    public ndRing: Node = null!;

    @property({type: Node, displayName: '摇杆节点'})
    public ndDot: Node = null!;

    @property({type: TOUCH_TYPE, displayName: '触摸类型'})
    public touchType = TOUCH_TYPE.DEFAULT;

    @property({type: DIRECTION_TYPE, displayName: '方向类型'})
    public directionType = DIRECTION_TYPE.ALL;

    @property({displayName: '启动半透明'})
    public isEnableTransparent: boolean = false;

    @property({displayName: '点击跟随'})
    public isFollowStart: boolean = false;

    @property({displayName: '内圈大小'})
    public innerSize: number = 10;

    @property(Node)
    public ndTip: Node = null!;//第一关文字提示

    public onClickCb: Function = null!;
    public onEndCb: Function = null!;
    public clearFECb: Function = null!;
    public onBeginFECb: Function = null!;
    public onSuccessFECb: Function = null!;
    public isMoving: boolean = false;//是否正在移动

    public get distanceRate () {
        return this._distanceRate;
    }

    public get angle () {
        return this._angle;
    }

    public set angle (v: number) {
        this._angle = v;
    }

    private _angle: number = 0;//当前的角度
    private _stickPos: Vec3 = new Vec3();
    private _oriRingPos: Vec3 = new Vec3();//圆圈初始位置
    private _targetRingPos: Vec3 = new Vec3();//圆圈背景位置
    private _touchStartLocation: Vec3 = new Vec3();//开始触碰位置
    private _touchMoveLocation: Vec3 = new Vec3();//移动触碰位置
    private _touchEndLocation: Vec3 = new Vec3();//结束触碰位置
    private _isOutInnerSize: Boolean = false;//终点拖动的点是否超出按钮圆圈背景
    private _distanceRate: number = 0; //遥感移动距离比
    private _checkInterval: number = 0.04;//每40ms刷新一次
    private _oldAngle: number = 0;//之前的角度
    private _currentTime: number = 0;//当前累积时间
    private _oriDotPos: Vec3 = new Vec3();//中间按钮初始坐标
    private _movePos: Vec3 = new Vec3();//移动坐标
    private _curRingPos_1: Vec3 = new Vec3();//当前圆圈坐标
    private _curRingPos_2: Vec3 = new Vec3();//

    start () {
        // Your initialization goes here.

        if (playerData.instance.playerInfo.level > 1 && this.ndTip.active) {
            this.ndTip.active = false;
        }
    }

    onEnable () {
        this.node.on(Node.EventType.TOUCH_START, this._touchStartEvent, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this);

        // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0
        this.node.on(Node.EventType.TOUCH_END, this._touchEndEvent, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
    }

    onDisable () {
        this.node.off(Node.EventType.TOUCH_START, this._touchStartEvent, this);
        this.node.off(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this);

        // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0
        this.node.off(Node.EventType.TOUCH_END, this._touchEndEvent, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);

        //重置
        this.isMoving = false;
        this.ndDot.setPosition(this._oriDotPos);
        this.ndRing.setPosition(this._oriRingPos);
    }

    private _touchStartEvent (event: EventTouch) {
        // 记录触摸的世界坐标，给touch move使用
        // this.dot.opacity = 255;
        this._targetRingPos = null!;

        let touch = event.getUILocation();
        this._touchStartLocation.set(touch.x, touch.y, 0);
        let touchPos = this.node.getComponent(UITransformComponent)?.convertToNodeSpaceAR(this._touchStartLocation) as Vec3;

        if (this._oriRingPos.length() === 0) {
            this._oriRingPos = this.ndRing.getPosition();
        }

        // 记录摇杆位置，给touch move使用
        this._stickPos.set(touchPos);

        this._isOutInnerSize = false;

        if (!this.isFollowStart) {
            touchPos = this.ndRing.getComponent(UITransformComponent)?.convertToNodeSpaceAR(this._touchStartLocation) as Vec3;

            //触摸点与圆圈中心的距离
            let distance = touchPos.length();
            let width = this.ndRing.getComponent(UITransformComponent)?.contentSize.width as number;
            //圆圈半径
            let radius = width / 2;
            
            //手指在圆圈内触摸,控杆跟随触摸点
            if (radius > distance) {
                this.ndDot.setPosition(touchPos);
                this._updateAngle(touchPos);
                return true;
            }
            return false;

        } else  {
            //设置遥感可移动范围
            if (this.touchType === TOUCH_TYPE.FOLLOW) {
                touchPos.y = touchPos.y >= -screenHeight/6 ? -screenHeight/6 : touchPos.y;
            } 

            this.ndRing.setPosition(touchPos);
        }
    }

    private _touchMoveEvent (event: EventTouch) {
        let touch = event.getUILocation();
        this._touchMoveLocation.set(touch.x, touch.y, 0);
        let touchPos = this.ndRing.getComponent(UITransformComponent)?.convertToNodeSpaceAR(this._touchMoveLocation) as Vec3;

        // if (this.touchType === TOUCH_TYPE.FOLLOW) {
        //     let offsetPos = cc.v3(touchPos.x - this._stickPos.x, touchPos.y - this._stickPos.y, 0);
        //     touchPos = offsetPos;
        // }

        let distance = touchPos.length();

        if (distance > this.innerSize) {
            this.isMoving = true;
            this._isOutInnerSize = true;
        } else {
            this._isOutInnerSize = false;
        }

        //有拖动且有角度才视为开始游戏
        if (!GameManager.isGameStart && this.isMoving) {
            GameManager.isGameStart = true;
            AudioManager.instance.resumeAll();
            
            clientEvent.dispatchEvent(constant.EVENT_TYPE.MONSTER_MOVE);

            if (this.ndTip.active) {
                this.ndTip.active = false;
            }

            this._currentTime = this._checkInterval;
        }

        let width = this.ndRing.getComponent(UITransformComponent)?.contentSize.width as number;
        //圆圈半径
        let radius = width / 2;
        let rate = 0;
        // 由于摇杆的postion是以父节点为锚点，所以定位要加上ring和dot当前的位置(stickX,stickY)
        if (radius > distance) {
            rate = Number((distance / radius).toFixed(3));
            this.ndDot.setPosition(touchPos);
        }
        else if (this.touchType !== TOUCH_TYPE.FOLLOW_DOT) {
            rate = 1;
            //控杆永远保持在圈内，并在圈内跟随触摸更新角度
            let radian = Math.atan2(touchPos.y, touchPos.x);
            
            let x = Math.cos(radian) * radius;
            let y = Math.sin(radian) * radius;
            this._movePos.set(x, y, 0);
            if (this.touchType === TOUCH_TYPE.FOLLOW_ALWAYS) {
                this._curRingPos_2.set(touch.x - x, touch.y - y, 0);
                let ringPos = this.node.getComponent(UITransformComponent)?.convertToNodeSpaceAR(this._curRingPos_2) as Vec3;
                this._targetRingPos = ringPos;
            }

            this.ndDot.setPosition(this._movePos);
        } else { 
            // 点跟随移动
            this.ndDot.setPosition(touchPos);
        }
        //更新角度
        this._updateAngle(touchPos);
        //更新遥感移动距离百分比
        this._distanceRate = rate;
    }

    private _touchEndEvent (event: EventTouch) {
        if (!this.isMoving) {
            //可以判断为点击
            this.onClickCb && this.onClickCb();
        } else {
            let touch = event.getUILocation();
            this._touchEndLocation.set(touch.x, touch.y, 0);
            let touchPos = this.ndRing.getComponent(UITransformComponent)?.convertToNodeSpaceAR(this._touchEndLocation) as Vec3;
            let isDragToInner = false;
            if (touchPos.length() < this.innerSize) {
                //取消掉
                isDragToInner = true;
                
                this.onEndCb && this.onEndCb(isDragToInner);
                
            } else {
                this.onEndCb && this.onEndCb(isDragToInner);
            }
        }

        this.isMoving = false;
        this.ndDot.setPosition(this._oriDotPos);

        if (this.touchType === TOUCH_TYPE.FOLLOW || this.touchType === TOUCH_TYPE.FOLLOW_ALWAYS || this.touchType === TOUCH_TYPE.FOLLOW_DOT) {
            this._targetRingPos = null!;
            this.ndRing.setPosition(this._oriRingPos);
        }
    }

    private _updateAngle (pos: Vec3) {
        this._angle = Math.round(Math.atan2(pos.y, pos.x) * 180 / Math.PI);
        return this._angle;
    }

    public reset () {
        this.isMoving = false;
        this.ndDot.setPosition(this._oriDotPos);
    }

    update (deltaTime: number) {
        // Your update function goes here.

        if (!GameManager.isGameStart || GameManager.isGameOver || GameManager.isGamePause || !GameManager.scriptPlayer) {
            return;
        }

        //设置终终点按钮位置
        if (this._targetRingPos) {
            this._curRingPos_1.set(0, 0, 0);
            Vec3.lerp(this._curRingPos_1, this.ndRing.position, this._targetRingPos, 20 * deltaTime);

            this.ndRing.setPosition(this._curRingPos_1);
        }

        this._currentTime += deltaTime;
        
        if (this._currentTime >= this._checkInterval) {
            this._currentTime = 0;

            if (this.isMoving) {
                if (this.angle !== this._oldAngle) {
                    this._oldAngle = this.angle;
                    GameManager.scriptPlayer.playAction({action: constant.PLAYER_ACTION.MOVE, value: this.angle});
                }
            } else {
                this.isMoving = false;
                if (GameManager.scriptPlayer.isMoving) {
                    GameManager.scriptPlayer.playAction({action: constant.PLAYER_ACTION.STOP_MOVE});
                }
            }
        }
    }
}
