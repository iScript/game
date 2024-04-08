System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, systemEvent, SystemEvent, EventMouse, Vec3, macro, Quat, _dec, _class, _temp, _crd, ccclass, property, Camera;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property; //方便上下移动摄像机观察

      _export("Camera", Camera = (_dec = ccclass('Camera'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Camera, _Component);

        function Camera() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "lookButtonDown", false);

          _defineProperty(_assertThisInitialized(_this), "_targetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_vertical", 0);

          _defineProperty(_assertThisInitialized(_this), "_horizontal", 0);

          _defineProperty(_assertThisInitialized(_this), "_speed", 50);

          _defineProperty(_assertThisInitialized(_this), "_rotateSpeed", 0.1);

          _defineProperty(_assertThisInitialized(_this), "_panButtonDown", false);

          _defineProperty(_assertThisInitialized(_this), "_ratio", 0.2);

          _defineProperty(_assertThisInitialized(_this), "_translatePos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_mouseWheelPos", new Vec3());

          return _this;
        }

        var _proto = Camera.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.start = function start() {
          this._targetPos = this.node.position;
        };

        _proto.onEnable = function onEnable() {
          this._addEvents();
        };

        _proto.onDisable = function onDisable() {
          this._removeEvents();
        };

        _proto._addEvents = function _addEvents() {
          systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this._onMouseMove, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this._onMouseUp, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this._onMouseDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
        };

        _proto._removeEvents = function _removeEvents() {
          systemEvent.off(SystemEvent.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this._onMouseMove, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this._onMouseUp, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this._onMouseDown, this);
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
          systemEvent.off(SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
        };

        _proto._onKeyDown = function _onKeyDown(event) {
          if (event.keyCode == macro.KEY.w) {
            this._vertical = -1 * this._ratio;
          } else if (event.keyCode == macro.KEY.s) {
            this._vertical = 1 * this._ratio;
          } else if (event.keyCode == macro.KEY.a) {
            this._horizontal = -1 * this._ratio;
          } else if (event.keyCode == macro.KEY.d) {
            this._horizontal = 1 * this._ratio;
          }
        };

        _proto._onKeyUp = function _onKeyUp(event) {
          if (event.keyCode == macro.KEY.w && this._vertical < 0) {
            this._vertical = 0;
          } else if (event.keyCode == macro.KEY.s && this._vertical > 0) {
            this._vertical = 0;
          } else if (event.keyCode == macro.KEY.a && this._horizontal < 0) {
            this._horizontal = 0;
          } else if (event.keyCode == macro.KEY.d && this._horizontal > 0) {
            this._horizontal = 0;
          }
        };

        _proto._onMouseDown = function _onMouseDown(event) {
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

        _proto._onMouseUp = function _onMouseUp(event) {
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

        _proto._onMouseMove = function _onMouseMove(event) {
          if (this._panButtonDown) {
            var delta = event.getDelta(); // this.targetPos.x -= delta.x;
            // this.targetPos.y -= delta.y;

            this.node.rotate(Quat.fromEuler(new Quat(), 0, -delta.x * this._rotateSpeed, 0), Node.NodeSpace.WORLD);
            this.node.rotate(Quat.fromEuler(new Quat(), delta.y * this._rotateSpeed, 0, 0), Node.NodeSpace.LOCAL);
          }
        };

        _proto._onMouseWheel = function _onMouseWheel(event) {
          var wheel = 0;

          if (event.getScrollY() > 0) {
            wheel = -1 * this._ratio;
          } else if (event.getScrollY() < 0) {
            wheel = 1 * this._ratio;
          }

          this._mouseWheelPos.set(0, 0, wheel * 10);

          this.node.translate(this._mouseWheelPos, Node.NodeSpace.LOCAL);
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          this._translatePos.set(this._horizontal * deltaTime * this._speed, 0, this._vertical * deltaTime * this._speed);

          this.node.translate(this._translatePos, Node.NodeSpace.LOCAL);
        };

        return Camera;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=camera.js.map