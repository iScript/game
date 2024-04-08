System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, GameManager, _decorator, Component, Vec3, Node, AnimationComponent, EffectManager, util, constant, AudioManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Tornado;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      EffectManager = _unresolved_4.EffectManager;
    }, function (_unresolved_5) {
      util = _unresolved_5.util;
    }, function (_unresolved_6) {
      constant = _unresolved_6.constant;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5fdbt9RkFOCaHUSrwAIUTs", "tornado", undefined);

      ({
        ccclass,
        property
      } = _decorator); //台风S型组件

      _export("Tornado", Tornado = (_dec = ccclass('Tornado'), _dec2 = property(AnimationComponent), _dec(_class = (_class2 = (_temp = class Tornado extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "aniMove", _descriptor, this);

          _defineProperty(this, "skillInfo", null);

          _defineProperty(this, "baseInfo", null);

          _defineProperty(this, "_offsetPos", new Vec3());

          _defineProperty(this, "_oriWorPos", new Vec3());

          _defineProperty(this, "_targetSpeed", 0);

          _defineProperty(this, "_curSpeed", 0);

          _defineProperty(this, "_targetWorPos", new Vec3());

          _defineProperty(this, "_curWorPos", new Vec3());

          _defineProperty(this, "_disappearRange", 25);
        }

        //箭节点超过玩家这个范围则隐藏
        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          var _scriptParent$scriptW;

          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          scriptParent === null || scriptParent === void 0 ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) === null || _scriptParent$scriptW === void 0 ? void 0 : _scriptParent$scriptW.hideWarning();

          this._oriWorPos.set(this.node.worldPosition);

          this._curWorPos.set(this.node.worldPosition);

          Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);

          this._offsetPos.normalize().negative();

          Vec3.add(this._curWorPos, this._curWorPos, this._offsetPos.multiplyScalar(2));
          this.node.setWorldPosition(this._curWorPos);
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playTrail(this.node);
          this._targetSpeed = skillInfo.flySpeed;
          this._curSpeed = this._targetSpeed * 0.5;
          this.aniMove.getState("tornado").time = 0;
          this.aniMove.getState("tornado").sample();
          this.aniMove.play();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.TORNADO);
        }

        update(deltaTime) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer) {
            //朝forward方向飞行
            this._curSpeed = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).lerp(this._targetSpeed, this._curSpeed, 0.25);

            this._targetWorPos.set(0, 0, -deltaTime * this._curSpeed);

            this.node.translate(this._targetWorPos, Node.NodeSpace.LOCAL);

            this._curWorPos.set(this.node.worldPosition); //超过玩家一定范围则隐藏


            Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer.worldPosition);

            if (this._offsetPos && this._offsetPos.length() >= this._disappearRange) {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(this.node);
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniMove", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=tornado.js.map