System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, JetFires;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20cb3raNbRA/YYlE7ckG1Nj", "jetFires", undefined);

      ({
        ccclass,
        property
      } = _decorator); //直线范围型的火焰

      _export("JetFires", JetFires = (_dec = ccclass('JetFires'), _dec(_class = (_temp = class JetFires extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "skillInfo", null);

          _defineProperty(this, "baseInfo", null);
        }

        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=jetFires.js.map