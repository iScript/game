System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, ParticleSystemComponent, AudioManager, constant, EffectManager, poolManager, resourceUtil, GameManager, _dec, _class, _temp, _crd, ccclass, property, FireBall;

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

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      EffectManager = _unresolved_4.EffectManager;
    }, function (_unresolved_5) {
      poolManager = _unresolved_5.poolManager;
    }, function (_unresolved_6) {
      resourceUtil = _unresolved_6.resourceUtil;
    }, function (_unresolved_7) {
      GameManager = _unresolved_7.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90320FRD9ZBib7MUibgkbJA", "fireBall", undefined);

      //小火球组件：抛物线，只有落地(播放爆炸)才有伤害, 所以碰撞器在hitFireBall1里面
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FireBall", FireBall = (_dec = ccclass('FireBall'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FireBall, _Component);

        function FireBall() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "isPlayHitFireBall", false);

          _defineProperty(_assertThisInitialized(_this), "groundWorPosY", 1.8);

          _defineProperty(_assertThisInitialized(_this), "scriptWarning", null);

          _defineProperty(_assertThisInitialized(_this), "skillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "baseInfo", null);

          _defineProperty(_assertThisInitialized(_this), "_isAutoRotate", true);

          _defineProperty(_assertThisInitialized(_this), "_posStart", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_posEnd", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_posOffset", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_totalFlyTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_maxFlyHeight", 0);

          _defineProperty(_assertThisInitialized(_this), "_curFlyTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_rotateCoolTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_oriScale", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_posNextTarget", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_scriptParent", null);

          return _this;
        }

        var _proto = FireBall.prototype;

        _proto.start = function start() {}
        /**
        * 初始化 
        */
        ;

        _proto.init = function init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this._scriptParent = scriptParent;
          this._totalFlyTime = 0;
          this._maxFlyHeight = 0;
          this._curFlyTime = 0;

          this._posStart.set(this.node.worldPosition.x, this.groundWorPosY, this.node.worldPosition.z);

          this._posEnd.set(scriptParent.attackPos);

          Vec3.subtract(this._posOffset, this._posEnd, this._posStart);
          this._totalFlyTime = this._posOffset.length() / skillInfo.flySpeed;
          this._maxFlyHeight = this._totalFlyTime * 3; //最大飞行高度跟飞行距离成正比     

          this.isPlayHitFireBall = false;
          this.node.children.forEach(function (ndChild) {
            ndChild.active = true;
          });
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playTrail(this.node);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.FIRE_BALL);
        };

        _proto.update = function update(deltaTime) {
          var _this2 = this;

          if (!this.node.parent || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause) {
            return;
          } //向指定目标飞行


          if (this._totalFlyTime > 0 && this.node.parent) {
            if (this._curFlyTime < this._totalFlyTime) {
              this._curFlyTime += deltaTime;
              this._curFlyTime = this._curFlyTime >= this._totalFlyTime ? this._totalFlyTime : this._curFlyTime;
              var percent = Number((this._curFlyTime / this._totalFlyTime).toFixed(2)); //曲线飞行

              var height = this._maxFlyHeight * Math.cos(percent * Math.PI - Math.PI / 2);
              var posTarget = new Vec3(this._posStart.x + this._posOffset.x * percent, this._posStart.y + height, this._posStart.z + this._posOffset.z * percent);
              this.node.setWorldPosition(posTarget);

              if (this._isAutoRotate) {
                this._rotateCoolTime -= deltaTime;

                if (this._rotateCoolTime < 0) {
                  this._rotateCoolTime = 0.1;
                  percent = Number(((this._curFlyTime + deltaTime) / this._totalFlyTime).toFixed(2));

                  if (percent < 1) {
                    //曲线飞行
                    height = this._maxFlyHeight * Math.cos(percent * Math.PI - Math.PI / 2);

                    this._posNextTarget.set(this._posStart.x + this._posOffset.x * percent, this._posStart.y + height, this._posStart.z + this._posOffset.z * percent);

                    this.node.forward = this._posNextTarget.subtract(posTarget).normalize();
                  }
                }
              } //小火球碰到地面


              if (Number(this.node.position.y.toFixed(2)) <= this.groundWorPosY && !this.isPlayHitFireBall && this._curFlyTime > 0) {
                var _this$_scriptParent$s;

                this.isPlayHitFireBall = true; //关闭预警

                (_this$_scriptParent$s = this._scriptParent.scriptWarning) === null || _this$_scriptParent$s === void 0 ? void 0 : _this$_scriptParent$s.hideWarning();
                this.node.children.forEach(function (ndChild) {
                  ndChild.active = false;
                }); //展示火焰爆炸

                (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                  error: Error()
                }), resourceUtil) : resourceUtil).loadEffectRes("hit/hitFireBall1").then(function (prefab) {
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
                  }, 2000);
                });
              }
            }
          }
        };

        return FireBall;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fireBall.js.map