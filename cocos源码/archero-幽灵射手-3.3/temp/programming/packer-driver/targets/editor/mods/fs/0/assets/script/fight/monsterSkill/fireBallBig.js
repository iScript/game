System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constant, _decorator, Component, tween, ParticleSystemComponent, EffectManager, poolManager, resourceUtil, AudioManager, _dec, _class, _temp, _crd, ccclass, property, FireBallBig;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
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
      tween = _cc.tween;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }, function (_unresolved_2) {
      constant = _unresolved_2.constant;
    }, function (_unresolved_3) {
      EffectManager = _unresolved_3.EffectManager;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }, function (_unresolved_5) {
      resourceUtil = _unresolved_5.resourceUtil;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07328JA8aFLSbjSpxzXqaIZ", "fireBallBig", undefined);

      ({
        ccclass,
        property
      } = _decorator); //大火球组件: 炸开的时候才有伤害，跟小火球一样

      _export("FireBallBig", FireBallBig = (_dec = ccclass('FireBallBig'), _dec(_class = (_temp = class FireBallBig extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "scriptWarning", null);

          _defineProperty(this, "isPlayHitFireBall", false);

          _defineProperty(this, "skillInfo", null);

          _defineProperty(this, "baseInfo", null);
        }

        //敌人基本信息
        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.isPlayHitFireBall = false;
          let playerWorPos = scriptParent.attackPos;
          this.node.setWorldPosition(playerWorPos.x, 23, playerWorPos.z);
          this.node.children.forEach(ndChild => {
            ndChild.active = true;
          });
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playTrail(this.node);
          tween(this.node).to(1 / skillInfo.flySpeed, {
            position: playerWorPos
          }, {
            easing: "elasticIn"
          }).call(() => {
            var _scriptParent$scriptW;

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.FIRE_BALL_BIG);
            this.isPlayHitFireBall = true; //关闭预警

            scriptParent === null || scriptParent === void 0 ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) === null || _scriptParent$scriptW === void 0 ? void 0 : _scriptParent$scriptW.hideWarning();
            this.node.children.forEach(ndChild => {
              ndChild.active = false;
            }); // console.log("大火球碰到地面");

            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes("hit/hitFireBall2").then(prefab => {
              let ndEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, this.node);
              ndEffect.setWorldPosition(this.node.worldPosition);
              let arrParticle = ndEffect.getComponentsInChildren(ParticleSystemComponent);
              arrParticle.forEach(item => {
                item.simulationSpeed = 1;
                item === null || item === void 0 ? void 0 : item.clear();
                item === null || item === void 0 ? void 0 : item.stop();
                item === null || item === void 0 ? void 0 : item.play();
              });
              setTimeout(() => {
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(ndEffect);
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(this.node);
              }, 3000);
            });
          }).start();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fireBallBig.js.map