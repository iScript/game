System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Monster, clientEvent, uiManager, Node, ParticleSystemComponent, Vec3, _decorator, AnimationComponent, Material, MeshRenderer, constant, EffectManager, poolManager, GameManager, resourceUtil, JetFires, MonsterModel, EnergyBall, FireBall, Dispersion, Tornado, FireBallBig, DispersionSurround, Laser, AudioManager, CharacterRigid, util, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Boss;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJetFires(extras) {
    _reporterNs.report("JetFires", "./monsterSkill/jetFires", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterModel(extras) {
    _reporterNs.report("MonsterModel", "./monsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnergyBall(extras) {
    _reporterNs.report("EnergyBall", "./monsterSkill/energyBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBall(extras) {
    _reporterNs.report("FireBall", "./monsterSkill/fireBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersion(extras) {
    _reporterNs.report("Dispersion", "./monsterSkill/dispersion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornado(extras) {
    _reporterNs.report("Tornado", "./monsterSkill/tornado", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBallBig(extras) {
    _reporterNs.report("FireBallBig", "./monsterSkill/fireBallBig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersionSurround(extras) {
    _reporterNs.report("DispersionSurround", "./monsterSkill/dispersionSurround", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLaser(extras) {
    _reporterNs.report("Laser", "./monsterSkill/laser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterRigid(extras) {
    _reporterNs.report("CharacterRigid", "./characterRigid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../framework/util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      AnimationComponent = _cc.AnimationComponent;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
    }, function (_unresolved_2) {
      Monster = _unresolved_2.Monster;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      uiManager = _unresolved_4.uiManager;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }, function (_unresolved_6) {
      EffectManager = _unresolved_6.EffectManager;
    }, function (_unresolved_7) {
      poolManager = _unresolved_7.poolManager;
    }, function (_unresolved_8) {
      GameManager = _unresolved_8.GameManager;
    }, function (_unresolved_9) {
      resourceUtil = _unresolved_9.resourceUtil;
    }, function (_unresolved_10) {
      JetFires = _unresolved_10.JetFires;
    }, function (_unresolved_11) {
      MonsterModel = _unresolved_11.MonsterModel;
    }, function (_unresolved_12) {
      EnergyBall = _unresolved_12.EnergyBall;
    }, function (_unresolved_13) {
      FireBall = _unresolved_13.FireBall;
    }, function (_unresolved_14) {
      Dispersion = _unresolved_14.Dispersion;
    }, function (_unresolved_15) {
      Tornado = _unresolved_15.Tornado;
    }, function (_unresolved_16) {
      FireBallBig = _unresolved_16.FireBallBig;
    }, function (_unresolved_17) {
      DispersionSurround = _unresolved_17.DispersionSurround;
    }, function (_unresolved_18) {
      Laser = _unresolved_18.Laser;
    }, function (_unresolved_19) {
      AudioManager = _unresolved_19.AudioManager;
    }, function (_unresolved_20) {
      CharacterRigid = _unresolved_20.CharacterRigid;
    }, function (_unresolved_21) {
      util = _unresolved_21.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b656AN2JJJ2KGEYhDM/3Bh", "boss", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property; //大龙boss组件, 继承monster怪物组件

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec2 = property(Node), _dec3 = property(Material), _dec4 = property(Material), _dec5 = property(MeshRenderer), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(Boss, _ref);

        function Boss() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "ndSocketDragonHead", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "matDragon", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "matDragonHit", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "meshDragon", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_countdown", 0.2);

          _defineProperty(_assertThisInitialized(_this), "_oriSkillEuler", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_isSkillReleasing", false);

          return _this;
        }

        var _proto = Boss.prototype;

        //是否正在释放技能 
        _proto.onEnable = function onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.MONSTER_MOVE, this._monsterMove, this);
        };

        _proto.onDisable = function onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.MONSTER_MOVE, this._monsterMove, this);
        };

        _proto.init = function init(baseInfo, layerInfo) {
          var _this$node$getChildBy, _this$meshDragon;

          this._bloodTipOffsetPos.set(0, 50, 0);

          this._hitEffectPos.set(0, 0.04, 0);

          this.baseInfo = baseInfo;
          this.layerInfo = layerInfo;
          this.isDie = false;
          this.scriptMonsterModel = (_this$node$getChildBy = this.node.getChildByName("body")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(_crd && MonsterModel === void 0 ? (_reportPossibleCrUseOfMonsterModel({
            error: Error()
          }), MonsterModel) : MonsterModel);
          this.scriptMonsterModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.IDLE, true);
          this.scriptCharacterRigid = this.node.getComponent(_crd && CharacterRigid === void 0 ? (_reportPossibleCrUseOfCharacterRigid({
            error: Error()
          }), CharacterRigid) : CharacterRigid);
          this._isAllowToAttack = false;
          this._isSkillReleasing = false;
          this._countdown = 0.2;
          this.recycleWarning();

          this._refreshSkill();

          this.scriptMonsterModel.scriptMonster = this;
          this.curAttackSpeed = this.baseInfo.attackSpeed;
          this.curMoveSpeed = this.baseInfo.moveSpeed;
          (_this$meshDragon = this.meshDragon) === null || _this$meshDragon === void 0 ? void 0 : _this$meshDragon.setMaterial(this.matDragon, 0);
          this._movePattern = layerInfo.movePattern ? layerInfo.movePattern : this.baseInfo.movePattern;

          _ref.prototype._getMinLength.call(this);
        };

        _proto.refreshBlood = function refreshBlood(bloodNum, tipType) {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_BOSS_BLOOD, bloodNum);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showBloodTips(this, tipType, bloodNum, this._bloodTipOffsetPos);
        };

        _proto.showDie = function showDie() {
          var _this2 = this;

          this.scriptCharacterRigid.stopMove();
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.showRewardBounce(this.node, "gold/gold", this.baseInfo.goldNum, function () {
            if (_this2.baseInfo.heartDropRate >= Math.random()) {
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.showRewardBounce(_this2.node, "heart/heart", 1);
            }
          }); //检查玩家是否拥有嗜血技能：主角击杀敌人时回复自身生命上限2%的生命值。

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isBloodthirsty) {
            var bloodNum = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.curHpLimit * 0.02;
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.addBlood(bloodNum);
          }

          this.scriptMonsterModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.DIE, false, function () {
            if (_this2.isDie) {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndBoss = null;
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(_this2.node);
            }
          });
        };

        _proto.playAttackAni = function playAttackAni() {
          _ref.prototype.playAttackAni.call(this);

          this._isSkillReleasing = false;
        }
        /**
         * 向玩家释放技能
         *
         * @param {boolean} [isNormalAttack=false] 是否是普通攻击、反之喷火
         * @return {*} 
         * @memberof Boss
         */
        ;

        _proto.releaseSkillToPlayer = function releaseSkillToPlayer(isNormalAttack) {
          var _this3 = this;

          if (isNormalAttack === void 0) {
            isNormalAttack = false;
          }

          if (this._isSkillReleasing) {
            return;
          } // this.node.forward = Vec3.subtract(this._forWard, GameManager.ndPlayer.worldPosition, this.node.worldPosition).normalize();


          Vec3.negate(this._forWard, this.attackForward);
          this.node.forward = this._forWard; //boss是非近战的怪物，必须带技能，这里做个容错

          if (!this.allSkillInfo.length) {
            var offsetLength = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).getTwoNodeXZLength(this.node, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer);

            if (offsetLength <= this._minLength * this._minLengthRatio) {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).scriptPlayer.reduceBlood(this.baseInfo);
            }

            return;
          }

          if (isNormalAttack && this.skillInfo.ID !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_SKILL.JET_FIRES) {
            this._isSkillReleasing = true;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes(this.skillInfo.resName + "/" + this.skillInfo.resName).then(function (prefab) {
              if (_this3.isMoving) {
                return;
              }

              var ndMonsterSkill = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndGameManager);
              ndMonsterSkill.setWorldPosition(_this3.node.worldPosition.x, 2.5, _this3.node.worldPosition.z);
              ndMonsterSkill.forward = _this3.attackForward.negative();
              var scriptSkillCollider = null; //怪物技能初始化

              switch (_this3.skillInfo.ID) {
                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_SKILL.ENERGY_BALL:
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && EnergyBall === void 0 ? (_reportPossibleCrUseOfEnergyBall({
                    error: Error()
                  }), EnergyBall) : EnergyBall);
                  scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo, _this3);
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_SKILL.FIRE_BALL:
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && FireBall === void 0 ? (_reportPossibleCrUseOfFireBall({
                    error: Error()
                  }), FireBall) : FireBall);
                  scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo, _this3);
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_SKILL.DISPERSION:
                  ndMonsterSkill.children.forEach(function (ndChild, idx) {
                    var scriptSkillCollider = ndChild.getComponent(_crd && Dispersion === void 0 ? (_reportPossibleCrUseOfDispersion({
                      error: Error()
                    }), Dispersion) : Dispersion);
                    scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo);
                  });
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_SKILL.TORNADO:
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && Tornado === void 0 ? (_reportPossibleCrUseOfTornado({
                    error: Error()
                  }), Tornado) : Tornado);
                  scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo, _this3);
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_SKILL.FIRE_BALL_BIG:
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && FireBallBig === void 0 ? (_reportPossibleCrUseOfFireBallBig({
                    error: Error()
                  }), FireBallBig) : FireBallBig);
                  scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo, _this3);
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_SKILL.DISPERSION_SURROUND:
                  ndMonsterSkill.children.forEach(function (ndChild) {
                    var scriptSkillCollider = ndChild.getComponent(_crd && DispersionSurround === void 0 ? (_reportPossibleCrUseOfDispersionSurround({
                      error: Error()
                    }), DispersionSurround) : DispersionSurround);
                    scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo);
                  });
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_SKILL.LASER:
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && Laser === void 0 ? (_reportPossibleCrUseOfLaser({
                    error: Error()
                  }), Laser) : Laser);
                  scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo, _this3);
                  break;
              }

              _this3._refreshSkill();
            });
          } else if (!isNormalAttack && this.skillInfo.ID === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_SKILL.JET_FIRES) {
            this._isSkillReleasing = true;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes(this.skillInfo.resName + "/" + this.skillInfo.resName).then(function (prefab) {
              var _aniCom$defaultClip, _this3$scriptWarning;

              if (_this3.isMoving) {
                return;
              }

              var ndMonsterSkill = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, _this3.ndSocketDragonHead);
              ndMonsterSkill.eulerAngles = _this3._oriSkillEuler; // ndMonsterSkill.forward = this.attackForward.negative();

              var ndChild = ndMonsterSkill.getChildByName("boxCollider");
              ndChild.active = true;
              var scriptSkillCollider = ndMonsterSkill.getComponent(_crd && JetFires === void 0 ? (_reportPossibleCrUseOfJetFires({
                error: Error()
              }), JetFires) : JetFires);
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playTrail(ndMonsterSkill);
              scriptSkillCollider.init(_this3.skillInfo, _this3.baseInfo, _this3);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SOUND.JET_FIRE);
              var arrParticle = ndMonsterSkill.getComponentsInChildren(ParticleSystemComponent);
              arrParticle.forEach(function (element) {
                element.simulationSpeed = 1;
                element === null || element === void 0 ? void 0 : element.clear();
                element === null || element === void 0 ? void 0 : element.stop();
                element === null || element === void 0 ? void 0 : element.play();
              }); //播放触发器动画            

              var aniCom = ndMonsterSkill.getComponent(AnimationComponent);
              var aniState;
              var aniName = (_aniCom$defaultClip = aniCom.defaultClip) === null || _aniCom$defaultClip === void 0 ? void 0 : _aniCom$defaultClip.name;

              if (aniName) {
                aniCom.getState(aniName).time = 0;
                aniCom.getState(aniName).sample();
                aniCom.play();
                aniState = aniCom.getState(aniName);
                aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed;
              }

              aniCom.once(AnimationComponent.EventType.FINISHED, function () {
                ndChild.active = false;
              });
              (_this3$scriptWarning = _this3.scriptWarning) === null || _this3$scriptWarning === void 0 ? void 0 : _this3$scriptWarning.hideWarning();
              setTimeout(function () {
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(ndMonsterSkill);
              }, 4000);

              _this3._refreshSkill();
            });
          }
        }
        /**
         * 先移动
         *
         * @private
         * @memberof Monster
         */
        ;

        _proto._monsterMove = function _monsterMove() {
          _ref.prototype._monsterMove.call(this);
        }
        /**
         * 大龙受击打后闪白效果
         *
         * @memberof Boss
         */
        ;

        _proto.changeDragonMat = function changeDragonMat() {
          if (this._countdown <= 0) {
            var _this$meshDragon2;

            (_this$meshDragon2 = this.meshDragon) === null || _this$meshDragon2 === void 0 ? void 0 : _this$meshDragon2.setMaterial(this.matDragonHit, 0);
            this._countdown = 0.2;
          }
        };

        _proto.lateUpdate = function lateUpdate(deltaTime) {
          if (this._countdown > 0) {
            this._countdown -= deltaTime;

            if (this._countdown <= 0) {
              var _this$meshDragon3;

              (_this$meshDragon3 = this.meshDragon) === null || _this$meshDragon3 === void 0 ? void 0 : _this$meshDragon3.setMaterial(this.matDragon, 0);
            }
          }
        };

        return Boss;
      }(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
        error: Error()
      }), Monster) : Monster), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndSocketDragonHead", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "matDragon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "matDragonHit", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "meshDragon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=boss.js.map