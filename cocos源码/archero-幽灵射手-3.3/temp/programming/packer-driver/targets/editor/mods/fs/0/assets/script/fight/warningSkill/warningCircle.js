System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameManager, _decorator, Component, tween, Vec3, poolManager, _dec, _class, _temp, _crd, ccclass, property, WarningCircle;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("WarningCircle", WarningCircle = (_dec = ccclass('WarningCircle'), _dec(_class = (_temp = class WarningCircle extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_tweenLoop", null);

          _defineProperty(this, "_tweenHide", null);

          _defineProperty(this, "_targetWorPos", new Vec3());

          _defineProperty(this, "_targetScale_1", new Vec3());

          _defineProperty(this, "_targetScale_2", new Vec3());

          _defineProperty(this, "_targetScale_3", new Vec3());

          _defineProperty(this, "_scriptParent", null);
        }

        start() {// [3]
        }

        init(scale, scriptParent) {
          scriptParent.recycleWarning();
          this._scriptParent = scriptParent;

          this._targetScale_1.set(scale, scale, scale);

          this._targetScale_2.set(scale * 0.8, scale * 0.8, scale * 0.8);

          this.node.setScale(this._targetScale_3);
          let playerWorPos = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition;

          this._targetWorPos.set(playerWorPos.x, playerWorPos.y + 0.2, playerWorPos.z);

          this.node.setWorldPosition(this._targetWorPos);

          this._closeTween();

          this.showWarning();
        }

        showWarning() {
          let showTime = 0.4;
          this._tweenLoop = tween(this.node).to(showTime, {
            scale: this._targetScale_1
          }, {
            easing: "smooth"
          }).start();
        }

        hideWarning() {
          this._closeTween();

          this._tweenHide = tween(this.node).to(0.3, {
            scale: this._targetScale_3
          }, {
            easing: "backInOut"
          }).call(() => {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.node);

            this._closeTween();
          }).start();
        }

        _closeTween() {
          if (this._tweenHide) {
            this._tweenHide.stop();

            this._tweenHide = null;
          }

          if (this._tweenLoop) {
            this._tweenLoop.stop();

            this._tweenLoop = null;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=warningCircle.js.map