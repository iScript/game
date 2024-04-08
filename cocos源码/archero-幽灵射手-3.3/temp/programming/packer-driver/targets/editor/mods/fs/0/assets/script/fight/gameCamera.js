System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, GameCamera;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCamera", GameCamera = (_dec = ccclass('GameCamera'), _dec(_class = (_temp = class GameCamera extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "ndFollowTarget", null);

          _defineProperty(this, "_oriCameraWorPos", new Vec3());

          _defineProperty(this, "_targetCameraWorPos", new Vec3());

          _defineProperty(this, "_curCameraWorPos", new Vec3());
        }

        //目标相机世界坐标
        start() {
          this._oriCameraWorPos = this.node.worldPosition.clone();
        }

        resetCamera() {
          this._targetCameraWorPos.set(this._oriCameraWorPos);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        lateUpdate() {
          if (!this.ndFollowTarget || !this.ndFollowTarget.worldPosition) {
            return;
          }

          this._targetCameraWorPos = this._targetCameraWorPos.lerp(this.ndFollowTarget.worldPosition, 0.5);

          this._curCameraWorPos.set(this._oriCameraWorPos.x + this._targetCameraWorPos.x, this._oriCameraWorPos.y, this._oriCameraWorPos.z + this._targetCameraWorPos.z);

          this.node.setWorldPosition(this._curCameraWorPos);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=gameCamera.js.map