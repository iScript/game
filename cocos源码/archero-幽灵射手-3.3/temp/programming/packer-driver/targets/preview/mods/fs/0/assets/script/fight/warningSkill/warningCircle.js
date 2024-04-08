System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameManager, _decorator, Component, tween, Vec3, poolManager, _dec, _class, _temp, _crd, ccclass, property, WarningCircle;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      poolManager = _unresolved_3.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4b57yoodpAooaYvsjlnvtZ", "warningCircle", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WarningCircle", WarningCircle = (_dec = ccclass('WarningCircle'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WarningCircle, _Component);

        function WarningCircle() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_tweenLoop", null);

          _defineProperty(_assertThisInitialized(_this), "_tweenHide", null);

          _defineProperty(_assertThisInitialized(_this), "_targetWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_targetScale_1", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_targetScale_2", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_targetScale_3", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_scriptParent", null);

          return _this;
        }

        var _proto = WarningCircle.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.init = function init(scale, scriptParent) {
          scriptParent.recycleWarning();
          this._scriptParent = scriptParent;

          this._targetScale_1.set(scale, scale, scale);

          this._targetScale_2.set(scale * 0.8, scale * 0.8, scale * 0.8);

          this.node.setScale(this._targetScale_3);
          var playerWorPos = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition;

          this._targetWorPos.set(playerWorPos.x, playerWorPos.y + 0.2, playerWorPos.z);

          this.node.setWorldPosition(this._targetWorPos);

          this._closeTween();

          this.showWarning();
        };

        _proto.showWarning = function showWarning() {
          var showTime = 0.4;
          this._tweenLoop = tween(this.node).to(showTime, {
            scale: this._targetScale_1
          }, {
            easing: "smooth"
          }).start();
        };

        _proto.hideWarning = function hideWarning() {
          var _this2 = this;

          this._closeTween();

          this._tweenHide = tween(this.node).to(0.3, {
            scale: this._targetScale_3
          }, {
            easing: "backInOut"
          }).call(function () {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(_this2.node);

            _this2._closeTween();
          }).start();
        };

        _proto._closeTween = function _closeTween() {
          if (this._tweenHide) {
            this._tweenHide.stop();

            this._tweenHide = null;
          }

          if (this._tweenLoop) {
            this._tweenLoop.stop();

            this._tweenLoop = null;
          }
        };

        return WarningCircle;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=warningCircle.js.map