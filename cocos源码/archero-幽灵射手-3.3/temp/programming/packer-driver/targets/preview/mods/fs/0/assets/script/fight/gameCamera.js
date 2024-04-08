System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, GameCamera;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b36dlhjPBALJv1VQ9Wc7M+", "gameCamera", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameCamera", GameCamera = (_dec = ccclass('GameCamera'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameCamera, _Component);

        function GameCamera() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "ndFollowTarget", null);

          _defineProperty(_assertThisInitialized(_this), "_oriCameraWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_targetCameraWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curCameraWorPos", new Vec3());

          return _this;
        }

        var _proto = GameCamera.prototype;

        //目标相机世界坐标
        _proto.start = function start() {
          this._oriCameraWorPos = this.node.worldPosition.clone();
        };

        _proto.resetCamera = function resetCamera() {
          this._targetCameraWorPos.set(this._oriCameraWorPos);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.lateUpdate = function lateUpdate() {
          if (!this.ndFollowTarget || !this.ndFollowTarget.worldPosition) {
            return;
          }

          this._targetCameraWorPos = this._targetCameraWorPos.lerp(this.ndFollowTarget.worldPosition, 0.5);

          this._curCameraWorPos.set(this._oriCameraWorPos.x + this._targetCameraWorPos.x, this._oriCameraWorPos.y, this._oriCameraWorPos.z + this._targetCameraWorPos.z);

          this.node.setWorldPosition(this._curCameraWorPos);
        };

        return GameCamera;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=gameCamera.js.map