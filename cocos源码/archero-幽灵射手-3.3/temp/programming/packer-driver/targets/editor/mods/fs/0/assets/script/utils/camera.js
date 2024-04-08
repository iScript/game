System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, systemEvent, SystemEvent, EventMouse, Vec3, macro, Quat, _dec, _class, _temp, _crd, ccclass, property, Camera;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      EventMouse = _cc.EventMouse;
      Vec3 = _cc.Vec3;
      macro = _cc.macro;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3a75nrXmNBnonqqdUdW9xz", "camera", undefined);

      ({
        ccclass,
        property
      } = _decorator); //方便上下移动摄像机观察

      _export("Camera", Camera = (_dec = ccclass('Camera'), _dec(_class = (_temp = class Camera extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "lookButtonDown", false);

          _defineProperty(this, "_targetPos", new Vec3());

          _defineProperty(this, "_vertical", 0);

          _defineProperty(this, "_horizontal", 0);

          _defineProperty(this, "_speed", 50);

          _defineProperty(this, "_rotateSpeed", 0.1);

          _defineProperty(this, "_panButtonDown", false);

          _defineProperty(this, "_ratio", 0.2);

          _defineProperty(this, "_translatePos", new Vec3());

          _defineProperty(this, "_mouseWheelPos", new Vec3());
        }

        onLoad() {}

        start() {
          this._targetPos = this.node.position;
        }

        onEnable() {
          this._addEvents();
        }

        onDisable() {
          this._removeEvents();
        }

        _addEvents() {
          systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this._onMouseMove, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this._onMouseUp, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this._onMouseDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
        }

        _removeEvents() {
          systemEvent.off(SystemEvent.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this._onMouseMove, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this._onMouseUp, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this._onMouseDown, this);
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
          systemEvent.off(SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
        }

        _onKeyDown(event) {
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

        _onKeyUp(event) {
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

        _onMouseDown(event) {
          switch (event.getButton()) {
            case EventMouse.BUTTON_LEFT:
              // this.lookButtonDown = true;
              break;
            // case EventMouse.BUTTON_MIDDLE:

            case EventMouse.BUTTON_RIGHT:
              this._panButtonDown = true;
              break;
          }
        }

        _onMouseUp(event) {
          switch (event.getButton()) {
            case EventMouse.BUTTON_LEFT:
              // this.lookButtonDown = false;
              break;
            // case EventMouse.BUTTON_MIDDLE:

            case EventMouse.BUTTON_RIGHT:
              this._panButtonDown = false;
              break;
          }
        }

        _onMouseMove(event) {
          if (this._panButtonDown) {
            let delta = event.getDelta(); // this.targetPos.x -= delta.x;
            // this.targetPos.y -= delta.y;

            this.node.rotate(Quat.fromEuler(new Quat(), 0, -delta.x * this._rotateSpeed, 0), Node.NodeSpace.WORLD);
            this.node.rotate(Quat.fromEuler(new Quat(), delta.y * this._rotateSpeed, 0, 0), Node.NodeSpace.LOCAL);
          }
        }

        _onMouseWheel(event) {
          let wheel = 0;

          if (event.getScrollY() > 0) {
            wheel = -1 * this._ratio;
          } else if (event.getScrollY() < 0) {
            wheel = 1 * this._ratio;
          }

          this._mouseWheelPos.set(0, 0, wheel * 10);

          this.node.translate(this._mouseWheelPos, Node.NodeSpace.LOCAL);
        }

        update(deltaTime) {
          // Your update function goes here.
          this._translatePos.set(this._horizontal * deltaTime * this._speed, 0, this._vertical * deltaTime * this._speed);

          this.node.translate(this._translatePos, Node.NodeSpace.LOCAL);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=camera.js.map