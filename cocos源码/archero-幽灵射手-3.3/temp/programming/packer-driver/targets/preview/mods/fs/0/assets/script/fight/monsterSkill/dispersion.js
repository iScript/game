System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, AudioManager, constant, EffectManager, poolManager, util, GameManager, _dec, _class, _temp, _crd, ccclass, property, Dispersion;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../gameManager", _context.meta, extras);
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
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      EffectManager = _unresolved_4.EffectManager;
    }, function (_unresolved_5) {
      poolManager = _unresolved_5.poolManager;
    }, function (_unresolved_6) {
      util = _unresolved_6.util;
    }, function (_unresolved_7) {
      GameManager = _unresolved_7.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bac69sUZyxD3pVsY06Z2vf1", "dispersion", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property; //180度散射球组件: 挂载每个球上, 不是挂在父节点上

      _export("Dispersion", Dispersion = (_dec = ccclass('Dispersion'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dispersion, _Component);

        function Dispersion() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "baseInfo", null);

          _defineProperty(_assertThisInitialized(_this), "skillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "_curSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_targetSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_oriPos", null);

          _defineProperty(_assertThisInitialized(_this), "_oriEulerAngles", null);

          _defineProperty(_assertThisInitialized(_this), "_offsetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_disappearRange", 20);

          _defineProperty(_assertThisInitialized(_this), "_targetWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_oriScale", new Vec3());

          return _this;
        }

        var _proto = Dispersion.prototype;

        //初始缩放大小
        _proto.start = function start() {// [3]
        }
        /**
        * 初始化 
        */
        ;

        _proto.init = function init(skillInfo, baseInfo) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.node.active = true;

          if (!this._oriPos) {
            this._oriPos = this.node.position.clone();
          }

          if (!this._oriEulerAngles) {
            this._oriEulerAngles = this.node.eulerAngles.clone();
          }

          this.node.setPosition(this._oriPos);
          this.node.eulerAngles.set(this._oriEulerAngles);
          this._targetSpeed = skillInfo.flySpeed;
          this._curSpeed = skillInfo.flySpeed * 0.5;
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playTrail(this.node);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.ENERGY_BALL);
        }
        /**
         * 击中玩家后隐藏
         *
         * @memberof Arrow
         */
        ;

        _proto.hide = function hide() {
          var _this$node$parent;

          if (!this.node.parent) {
            return;
          }

          this.node.active = false; //如果dispersionSurround组里所有的球都隐藏了则回收整个dispersion预制体

          var isAllHide = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.children.every(function (ndChild) {
            return ndChild.active === false;
          });

          if (isAllHide && this.node.parent) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.node.parent);
          }
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

          this.node.translate(this._targetWorPos, Node.NodeSpace.LOCAL); //超过玩家一定范围则隐藏

          this._curWorPos.set(this.node.worldPosition);

          Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);

          if (this._offsetPos && this._offsetPos.length() >= this._disappearRange) {
            this.hide();
          }
        };

        return Dispersion;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dispersion.js.map