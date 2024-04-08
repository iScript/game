System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, util, GameManager, _decorator, Component, Node, Vec3, poolManager, EffectManager, AudioManager, constant, _dec, _class, _temp, _crd, ccclass, property, EnergyBall;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }, function (_unresolved_5) {
      EffectManager = _unresolved_5.EffectManager;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37dc2IA7blBo4bx2LK3KFIH", "energyBall", undefined);

      //能量球组件: 直线飞行
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EnergyBall", EnergyBall = (_dec = ccclass('EnergyBall'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EnergyBall, _Component);

        function EnergyBall() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "baseInfo", null);

          _defineProperty(_assertThisInitialized(_this), "skillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "_curSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_targetSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_offsetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_disappearRange", 25);

          _defineProperty(_assertThisInitialized(_this), "_targetWorPos", new Vec3());

          return _this;
        }

        var _proto = EnergyBall.prototype;

        //能量球的下次目标位置
        _proto.start = function start() {// [3]
        }
        /**
        * 初始化 
        */
        ;

        _proto.init = function init(skillInfo, baseInfo, scriptParent) {
          var _scriptParent$scriptW;

          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          (_scriptParent$scriptW = scriptParent.scriptWarning) === null || _scriptParent$scriptW === void 0 ? void 0 : _scriptParent$scriptW.hideWarning();
          this._targetSpeed = skillInfo.flySpeed;
          ;
          this._curSpeed = skillInfo.flySpeed * 0.5;
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playTrail(this.node);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.ENERGY_BALL);
        };

        _proto.update = function update(deltaTime) {
          if (!this.node.parent || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause) {
            return;
          } //朝forward方向飞行


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
        };

        return EnergyBall;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=energyBall.js.map