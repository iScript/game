System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, GameManager, _decorator, Component, MeshColliderComponent, BoxColliderComponent, CylinderColliderComponent, Vec3, Enum, CapsuleColliderComponent, SphereCollider, constant, DispersionSurround, Dispersion, EnergyBall, JetFires, FireBall, FireBallBig, Laser, Tornado, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, COLLIDER_NAME, MonsterSkillCollider;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersionSurround(extras) {
    _reporterNs.report("DispersionSurround", "./monsterSkill/dispersionSurround", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersion(extras) {
    _reporterNs.report("Dispersion", "./monsterSkill/dispersion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnergyBall(extras) {
    _reporterNs.report("EnergyBall", "./monsterSkill/energyBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJetFires(extras) {
    _reporterNs.report("JetFires", "./monsterSkill/jetFires", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBall(extras) {
    _reporterNs.report("FireBall", "./monsterSkill/fireBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBallBig(extras) {
    _reporterNs.report("FireBallBig", "./monsterSkill/fireBallBig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLaser(extras) {
    _reporterNs.report("Laser", "./monsterSkill/laser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornado(extras) {
    _reporterNs.report("Tornado", "./monsterSkill/tornado", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      MeshColliderComponent = _cc.MeshColliderComponent;
      BoxColliderComponent = _cc.BoxColliderComponent;
      CylinderColliderComponent = _cc.CylinderColliderComponent;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
      CapsuleColliderComponent = _cc.CapsuleColliderComponent;
      SphereCollider = _cc.SphereCollider;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      DispersionSurround = _unresolved_5.DispersionSurround;
    }, function (_unresolved_6) {
      Dispersion = _unresolved_6.Dispersion;
    }, function (_unresolved_7) {
      EnergyBall = _unresolved_7.EnergyBall;
    }, function (_unresolved_8) {
      JetFires = _unresolved_8.JetFires;
    }, function (_unresolved_9) {
      FireBall = _unresolved_9.FireBall;
    }, function (_unresolved_10) {
      FireBallBig = _unresolved_10.FireBallBig;
    }, function (_unresolved_11) {
      Laser = _unresolved_11.Laser;
    }, function (_unresolved_12) {
      Tornado = _unresolved_12.Tornado;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00815wthORNyqdwj+wC28bk", "monsterSkillCollider", undefined);

      //怪物武器碰撞器/触发器组件
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      COLLIDER_NAME = Enum({
        ENERGY_BALL: 1,
        //直线飞行能量球
        FIRE_BALL: 2,
        //线飞行的小火球
        JET_FIRES: 3,
        //直线范围型的火焰
        DISPERSION: 4,
        //180度散射
        TORNADO: 5,
        //旋转前进的龙卷风
        FIRE_BALL_BIG: 6,
        //直线下坠的大火团 
        DISPERSION_SURROUND: 7,
        //360度六角形散射
        LASER: 8 //直线激光

      });

      _export("MonsterSkillCollider", MonsterSkillCollider = (_dec = ccclass('MonsterSkillCollider'), _dec2 = property({
        type: COLLIDER_NAME,
        displayOrder: 1
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MonsterSkillCollider, _Component);

        function MonsterSkillCollider() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "colliderName", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "colliderCom", null);

          _defineProperty(_assertThisInitialized(_this), "ani", null);

          _defineProperty(_assertThisInitialized(_this), "_oriScale", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_oriWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_isOnJetFires", false);

          _defineProperty(_assertThisInitialized(_this), "_checkInterval", 1);

          return _this;
        }

        var _proto = MonsterSkillCollider.prototype;

        //在尖刺路上减去体积的间隔时间为1秒
        _proto.onLoad = function onLoad() {
          this.colliderCom = this.node.getComponent(BoxColliderComponent) || this.node.getComponent(CylinderColliderComponent) || this.node.getComponent(SphereCollider) || this.node.getComponent(CapsuleColliderComponent) || this.node.getComponent(MeshColliderComponent) || this.node.getComponent(CylinderColliderComponent);

          if (!this.colliderCom) {
            console.error("this node does not have collider component");
          }
        };

        _proto.onEnable = function onEnable() {
          if (this.colliderName === COLLIDER_NAME.JET_FIRES) {
            this.colliderCom.on("onTriggerStay", this._onTriggerStayCb, this);
            this.colliderCom.on("onTriggerExit", this._onTriggerExitCb, this);
          } else {
            if (this.colliderCom.isTrigger) {
              this.colliderCom.on('onTriggerEnter', this._onTriggerEnterCb, this);
            } else {
              this.colliderCom.on('onCollisionEnter', this._onCollisionEnterCb, this);
            }
          }
        };

        _proto.onDisable = function onDisable() {
          if (this.colliderName === COLLIDER_NAME.JET_FIRES) {
            this.colliderCom.off("onTriggerStay", this._onTriggerStayCb, this);
            this.colliderCom.off("onTriggerExit", this._onTriggerExitCb, this);
          } else {
            if (this.colliderCom.isTrigger) {
              this.colliderCom.off('onTriggerEnter', this._onTriggerEnterCb, this);
            } else {
              this.colliderCom.off('onCollisionEnter', this._onCollisionEnterCb, this);
            }
          }
        };

        _proto.start = function start() {
          this._oriScale = this.node.getScale();
          this._oriWorPos = this.node.getWorldPosition();
        }
        /**
         * 初始化
         */
        ;

        _proto.init = function init() {};

        _proto._onTriggerEnterCb = function _onTriggerEnterCb(event) {
          this._hitTarget(event.otherCollider);
        };

        _proto._onCollisionEnterCb = function _onCollisionEnterCb(event) {
          this._hitTarget(event.otherCollider);
        };

        _proto._hitTarget = function _hitTarget(otherCollider) {
          var _this$node$parent, _this$node$parent2, _this$node$parent3, _this$node$parent4, _this$node$parent5;

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart) {
            return;
          }

          if (otherCollider.getGroup() === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PHY_GROUP.OBSTACLE) {
            //技能碰到游戏中的障碍则回收
            var scriptSkillCollider = null;

            switch (this.colliderName) {
              case COLLIDER_NAME.ENERGY_BALL:
                scriptSkillCollider = this.node.getComponent(_crd && EnergyBall === void 0 ? (_reportPossibleCrUseOfEnergyBall({
                  error: Error()
                }), EnergyBall) : EnergyBall);

                if (!scriptSkillCollider.skillInfo.penetrate) {
                  (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                    error: Error()
                  }), poolManager) : poolManager).instance.putNode(this.node);
                }

                break;

              case COLLIDER_NAME.DISPERSION:
                scriptSkillCollider = this.node.getComponent(_crd && Dispersion === void 0 ? (_reportPossibleCrUseOfDispersion({
                  error: Error()
                }), Dispersion) : Dispersion);

                if (!scriptSkillCollider.skillInfo.penetrate) {
                  scriptSkillCollider.hide();
                }

                break;

              case COLLIDER_NAME.TORNADO:
                scriptSkillCollider = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.getComponent(_crd && Tornado === void 0 ? (_reportPossibleCrUseOfTornado({
                  error: Error()
                }), Tornado) : Tornado);

                if (!scriptSkillCollider.skillInfo.penetrate) {
                  (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                    error: Error()
                  }), poolManager) : poolManager).instance.putNode(this.node.parent);
                }

                break;

              case COLLIDER_NAME.DISPERSION_SURROUND:
                scriptSkillCollider = this.node.getComponent(_crd && DispersionSurround === void 0 ? (_reportPossibleCrUseOfDispersionSurround({
                  error: Error()
                }), DispersionSurround) : DispersionSurround);

                if (!scriptSkillCollider.skillInfo.penetrate) {
                  scriptSkillCollider.hide();
                }

                break;
            }
          } else if (otherCollider.getGroup() == (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PHY_GROUP.PLAYER && (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer) {
            var _scriptSkillCollider = null;

            switch (this.colliderName) {
              case COLLIDER_NAME.ENERGY_BALL:
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(this.node);
                _scriptSkillCollider = this.node.getComponent(_crd && EnergyBall === void 0 ? (_reportPossibleCrUseOfEnergyBall({
                  error: Error()
                }), EnergyBall) : EnergyBall);

                this._hitPlayer(_scriptSkillCollider.baseInfo);

                break;

              case COLLIDER_NAME.FIRE_BALL:
                //不在这里回收节点.在fireBall里面会回收
                _scriptSkillCollider = (_this$node$parent2 = this.node.parent) === null || _this$node$parent2 === void 0 ? void 0 : _this$node$parent2.getComponent(_crd && FireBall === void 0 ? (_reportPossibleCrUseOfFireBall({
                  error: Error()
                }), FireBall) : FireBall);

                this._hitPlayer(_scriptSkillCollider.baseInfo);

                break;

              case COLLIDER_NAME.DISPERSION:
                //注意这里不回收节点，只回收父节点
                _scriptSkillCollider = this.node.getComponent(_crd && Dispersion === void 0 ? (_reportPossibleCrUseOfDispersion({
                  error: Error()
                }), Dispersion) : Dispersion);

                _scriptSkillCollider.hide();

                this._hitPlayer(_scriptSkillCollider.baseInfo);

                break;

              case COLLIDER_NAME.TORNADO:
                _scriptSkillCollider = (_this$node$parent3 = this.node.parent) === null || _this$node$parent3 === void 0 ? void 0 : _this$node$parent3.getComponent(_crd && Tornado === void 0 ? (_reportPossibleCrUseOfTornado({
                  error: Error()
                }), Tornado) : Tornado);

                this._hitPlayer(_scriptSkillCollider.baseInfo);

                break;

              case COLLIDER_NAME.FIRE_BALL_BIG:
                _scriptSkillCollider = (_this$node$parent4 = this.node.parent) === null || _this$node$parent4 === void 0 ? void 0 : _this$node$parent4.getComponent(_crd && FireBallBig === void 0 ? (_reportPossibleCrUseOfFireBallBig({
                  error: Error()
                }), FireBallBig) : FireBallBig);

                this._hitPlayer(_scriptSkillCollider.baseInfo);

                break;

              case COLLIDER_NAME.DISPERSION_SURROUND:
                //注意这里不回收，只回收父节点
                _scriptSkillCollider = this.node.getComponent(_crd && DispersionSurround === void 0 ? (_reportPossibleCrUseOfDispersionSurround({
                  error: Error()
                }), DispersionSurround) : DispersionSurround);

                _scriptSkillCollider.hide();

                this._hitPlayer(_scriptSkillCollider.baseInfo);

                break;

              case COLLIDER_NAME.LASER:
                _scriptSkillCollider = (_this$node$parent5 = this.node.parent) === null || _this$node$parent5 === void 0 ? void 0 : _this$node$parent5.getComponent(_crd && Laser === void 0 ? (_reportPossibleCrUseOfLaser({
                  error: Error()
                }), Laser) : Laser);

                this._hitPlayer(_scriptSkillCollider.baseInfo);

                break;
            }
          }
        };

        _proto._hitPlayer = function _hitPlayer(baseInfo) {
          if (!baseInfo) {
            console.warn("###找不到技能来源敌人", this.colliderName);
            return;
          }

          console.log("###技能碰到玩家了", this.colliderName);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.reduceBlood(baseInfo);
        }
        /**
         * 在尖刺路范围,
         */
        ;

        _proto._onTriggerStayCb = function _onTriggerStayCb() {
          this._isOnJetFires = true;
        }
        /**
         * 离开尖刺路
         */
        ;

        _proto._onTriggerExitCb = function _onTriggerExitCb() {
          this._isOnJetFires = false;
        };

        _proto.update = function update(deltaTime) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || !this.node.parent) {
            return;
          } //检测是否在龙焰（持续性技能里面），每隔0.5秒时间扣减一定伤害


          if (this.colliderName === COLLIDER_NAME.JET_FIRES && this._isOnJetFires) {
            this._checkInterval += deltaTime;

            if (this._checkInterval >= 0.5) {
              this._checkInterval = 0;
              var scriptSkillCollider = this.node.parent.getComponent(_crd && JetFires === void 0 ? (_reportPossibleCrUseOfJetFires({
                error: Error()
              }), JetFires) : JetFires);

              this._hitPlayer(scriptSkillCollider.baseInfo);
            }
          }
        };

        return MonsterSkillCollider;
      }(Component), _defineProperty(_class3, "COLLIDER_NAME", COLLIDER_NAME), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colliderName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return COLLIDER_NAME.ENERGY_BALL;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=monsterSkillCollider.js.map