System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, EffectManager, _decorator, Component, constant, AudioManager, _dec, _class, _temp, _crd, ccclass, property, Laser;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
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
    }, function (_unresolved_3) {
      EffectManager = _unresolved_3.EffectManager;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "504049FuYdEFIRZxBEBstqp", "laser", undefined);

      ({
        ccclass,
        property
      } = _decorator); //激光技能组件

      _export("Laser", Laser = (_dec = ccclass('Laser'), _dec(_class = (_temp = class Laser extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "skillInfo", null);

          _defineProperty(this, "baseInfo", null);

          _defineProperty(this, "scriptWarning", null);

          _defineProperty(this, "timer", null);
        }

        //
        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.node.active = false;

          this._closeTimer();

          this.timer = setTimeout(() => {
            if (!scriptParent.isDie) {
              var _scriptParent$scriptW;

              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SOUND.LASER);
              this.node.active = true;
              scriptParent === null || scriptParent === void 0 ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) === null || _scriptParent$scriptW === void 0 ? void 0 : _scriptParent$scriptW.hideWarning();
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playTrail(this.node, 0, () => {
                this._closeTimer();

                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(this.node);
              }, skillInfo.flySpeed);
            } else {
              this._closeTimer();
            }
          }, 700);
        }

        _closeTimer() {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=laser.js.map