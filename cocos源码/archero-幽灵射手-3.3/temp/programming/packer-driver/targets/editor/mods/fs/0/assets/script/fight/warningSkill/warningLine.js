System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, poolManager, _dec, _class, _temp, _crd, ccclass, property, WarningLine;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "249fettRepLDLPIq30iHueC", "warningLine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WarningLine", WarningLine = (_dec = ccclass('WarningLine'), _dec(_class = (_temp = class WarningLine extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_scriptParent", null);
        }

        start() {// [3]
        }

        init(scale, scriptParent) {
          scriptParent.recycleWarning();
          this._scriptParent = scriptParent;
          this.node.setWorldPosition(scriptParent.node.worldPosition.x, 2.5, scriptParent.node.worldPosition.z);
          this.node.forward = scriptParent.attackForward;
          this.node.setScale(1, 1, scale);
          this.showWarning();
        }

        showWarning() {}

        hideWarning() {
          (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
            error: Error()
          }), poolManager) : poolManager).instance.putNode(this.node);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=warningLine.js.map