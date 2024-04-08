System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constant, _decorator, Component, tween, ParticleSystemComponent, EffectManager, poolManager, resourceUtil, AudioManager, _dec, _class, _temp, _crd, ccclass, property, FireBallBig;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property; //大火球组件: 炸开的时候才有伤害，跟小火球一样

      _export("FireBallBig", FireBallBig = (_dec = ccclass('FireBallBig'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FireBallBig, _Component);

        function FireBallBig() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "scriptWarning", null);

          _defineProperty(_assertThisInitialized(_this), "isPlayHitFireBall", false);

          _defineProperty(_assertThisInitialized(_this), "skillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "baseInfo", null);

          return _this;
        }

        var _proto = FireBallBig.prototype;

        //敌人基本信息
        _proto.start = function start() {// [3]
        };

        _proto.init = function init(skillInfo, baseInfo, scriptParent) {
          var _this2 = this;

          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.isPlayHitFireBall = false;
          var playerWorPos = scriptParent.attackPos;
          this.node.setWorldPosition(playerWorPos.x, 23, playerWorPos.z);
          this.node.children.forEach(function (ndChild) {
            ndChild.active = true;
          });
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playTrail(this.node);
          tween(this.node).to(1 / skillInfo.flySpeed, {
            position: playerWorPos
          }, {
            easing: "elasticIn"
          }).call(function () {
            var _scriptParent$scriptW;

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.FIRE_BALL_BIG);
            _this2.isPlayHitFireBall = true; //关闭预警

            scriptParent === null || scriptParent === void 0 ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) === null || _scriptParent$scriptW === void 0 ? void 0 : _scriptParent$scriptW.hideWarning();

            _this2.node.children.forEach(function (ndChild) {
              ndChild.active = false;
            }); // console.log("大火球碰到地面");


            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes("hit/hitFireBall2").then(function (prefab) {
              var ndEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, _this2.node);
              ndEffect.setWorldPosition(_this2.node.worldPosition);
              var arrParticle = ndEffect.getComponentsInChildren(ParticleSystemComponent);
              arrParticle.forEach(function (item) {
                item.simulationSpeed = 1;
                item === null || item === void 0 ? void 0 : item.clear();
                item === null || item === void 0 ? void 0 : item.stop();
                item === null || item === void 0 ? void 0 : item.play();
              });
              setTimeout(function () {
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(ndEffect);
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(_this2.node);
              }, 3000);
            });
          }).start();
        };

        return FireBallBig;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fireBallBig.js.map