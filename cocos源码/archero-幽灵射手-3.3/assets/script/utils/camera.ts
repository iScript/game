import { _decorator, Component, Node, systemEvent, SystemEvent, EventMouse, Vec3, macro, Quat, Touch, CameraComponent } from 'cc';
const { ccclass, property } = _decorator;
//方便上下移动摄像机观察
@ccclass('Camera')
export class Camera extends Component {
    lookButtonDown: boolean = false;
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    private _targetPos: Vec3 = new Vec3();
    private _vertical: number = 0;
    private _horizontal: number = 0;
    private _speed: number = 50;
    private _rotateSpeed: number = 0.1;
    private _panButtonDown: boolean = false;
    private _ratio: number = 0.2;//倍率
    private _translatePos: Vec3 = new Vec3();
    private _mouseWheelPos: Vec3 = new Vec3();

    onLoad () {
    }

    start () {
        this._targetPos = this.node.position;
    }

    onEnable () {
		this._addEvents();
	}

	onDisable () {
        this._removeEvents();
    }
    
    private _addEvents () {
		systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
		systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this._onMouseMove, this);
		systemEvent.on(SystemEvent.EventType.MOUSE_UP, this._onMouseUp, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this._onMouseDown, this);
        
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
	}

	private _removeEvents () {
		systemEvent.off(SystemEvent.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
		systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this._onMouseMove, this);
		systemEvent.off(SystemEvent.EventType.MOUSE_UP, this._onMouseUp, this);
		systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this._onMouseDown, this);
        
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
    }

    private _onKeyDown (event: any) {
        if (event.keyCode == macro.KEY.w) {
            this._vertical = -1 * this._ratio;
        } else if (event.keyCode == macro.KEY.s) {
            this._vertical = 1 * this._ratio;
        } else if (event.keyCode == macro.KEY.a) {
            this._horizontal = -1 * this._ratio;
        } else if (event.keyCode == macro.KEY.d) {
            this._horizontal = 1 * this._ratio;
        }
    }

    private _onKeyUp (event: any) {
        if (event.keyCode == macro.KEY.w && this._vertical < 0) {
            this._vertical = 0;
        } else if (event.keyCode == macro.KEY.s && this._vertical > 0) {
            this._vertical = 0;
        } else if (event.keyCode == macro.KEY.a && this._horizontal < 0) {
            this._horizontal = 0;
        } else if (event.keyCode == macro.KEY.d && this._horizontal > 0) {
            this._horizontal = 0;
        }
    }
    
    private _onMouseDown (event: any) {
        switch (event.getButton()) {
            case EventMouse.BUTTON_LEFT:
                // this.lookButtonDown = true;
                break;
            // case EventMouse.BUTTON_MIDDLE:
            case EventMouse.BUTTON_RIGHT:
                this._panButtonDown = true;
                break;
        }
    };
    
    
    private _onMouseUp (event: any) {
        switch (event.getButton()) {
            case EventMouse.BUTTON_LEFT:
                // this.lookButtonDown = false;
                break;
            // case EventMouse.BUTTON_MIDDLE:
            case EventMouse.BUTTON_RIGHT:
                this._panButtonDown = false;
                break;
        }
    };
    
    
    private _onMouseMove (event: EventMouse) {
        if (this._panButtonDown) {
            let delta = event.getDelta();
            // this.targetPos.x -= delta.x;
            // this.targetPos.y -= delta.y;

            this.node.rotate(Quat.fromEuler(new Quat(), 0, -delta.x * this._rotateSpeed, 0), Node.NodeSpace.WORLD);

            this.node.rotate(Quat.fromEuler(new Quat(), delta.y * this._rotateSpeed, 0, 0), Node.NodeSpace.LOCAL);
        }
        
    }
    
    
    private _onMouseWheel (event: EventMouse) {

        let wheel = 0;
        if (event.getScrollY() > 0) {
            wheel = -1 * this._ratio;
        } else if (event.getScrollY() < 0) {
            wheel = 1 * this._ratio;
        }

        this._mouseWheelPos.set(0, 0, wheel * 10);
        this.node.translate(this._mouseWheelPos, Node.NodeSpace.LOCAL);
    }

    update (deltaTime: number) {
        // Your update function goes here.

        this._translatePos.set(this._horizontal * deltaTime * this._speed, 0, this._vertical * deltaTime * this._speed);
        this.node.translate(this._translatePos, Node.NodeSpace.LOCAL);
    }
}
