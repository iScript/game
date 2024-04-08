System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioManager, util, localConfig, EffectManager, uiManager, poolManager, _decorator, Component, Vec3, macro, Quat, RigidBodyComponent, constant, GameManager, clientEvent, MonsterModel, resourceUtil, EnergyBall, FireBall, DispersionSurround, Dispersion, FireBallBig, Tornado, Laser, CharacterRigid, _dec, _class, _temp, _crd, qt_0, v3_0, ccclass, property, Monster;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBloodBar(extras) {
    _reporterNs.report("MonsterBloodBar", "../ui/fight/monsterBloodBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterModel(extras) {
    _reporterNs.report("MonsterModel", "./monsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnergyBall(extras) {
    _reporterNs.report("EnergyBall", "./monsterSkill/energyBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBall(extras) {
    _reporterNs.report("FireBall", "./monsterSkill/fireBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersionSurround(extras) {
    _reporterNs.report("DispersionSurround", "./monsterSkill/dispersionSurround", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersion(extras) {
    _reporterNs.report("Dispersion", "./monsterSkill/dispersion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBallBig(extras) {
    _reporterNs.report("FireBallBig", "./monsterSkill/fireBallBig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornado(extras) {
    _reporterNs.report("Tornado", "./monsterSkill/tornado", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLaser(extras) {
    _reporterNs.report("Laser", "./monsterSkill/laser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterRigid(extras) {
    _reporterNs.report("CharacterRigid", "./characterRigid", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      macro = _cc.macro;
      Quat = _cc.Quat;
      RigidBodyComponent = _cc.RigidBodyComponent;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      EffectManager = _unresolved_5.EffectManager;
    }, function (_unresolved_6) {
      uiManager = _unresolved_6.uiManager;
    }, function (_unresolved_7) {
      poolManager = _unresolved_7.poolManager;
    }, function (_unresolved_8) {
      constant = _unresolved_8.constant;
    }, function (_unresolved_9) {
      GameManager = _unresolved_9.GameManager;
    }, function (_unresolved_10) {
      clientEvent = _unresolved_10.clientEvent;
    }, function (_unresolved_11) {
      MonsterModel = _unresolved_11.MonsterModel;
    }, function (_unresolved_12) {
      resourceUtil = _unresolved_12.resourceUtil;
    }, function (_unresolved_13) {
      EnergyBall = _unresolved_13.EnergyBall;
    }, function (_unresolved_14) {
      FireBall = _unresolved_14.FireBall;
    }, function (_unresolved_15) {
      DispersionSurround = _unresolved_15.DispersionSurround;
    }, function (_unresolved_16) {
      Dispersion = _unresolved_16.Dispersion;
    }, function (_unresolved_17) {
      FireBallBig = _unresolved_17.FireBallBig;
    }, function (_unresolved_18) {
      Tornado = _unresolved_18.Tornado;
    }, function (_unresolved_19) {
      Laser = _unresolved_19.Laser;
    }, function (_unresolved_20) {
      CharacterRigid = _unresolved_20.CharacterRigid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75fe4NpEqNMNZSSj5Z9vDnA", "monster", undefined);

      //怪物组件
      qt_0 = new Quat();
      v3_0 = new Vec3();
      ccclass = _decorator.ccclass;
      property = _decorator.property; //普通怪物组件

      _export("Monster", Monster = (_dec = ccclass('Monster'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Monster, _Component);

        function Monster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "scriptMonsterModel", null);

          _defineProperty(_assertThisInitialized(_this), "isMoving", false);

          _defineProperty(_assertThisInitialized(_this), "scriptBloodBar", null);

          _defineProperty(_assertThisInitialized(_this), "bloodTipDirection", (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).BLOOD_TIP_DIRECTION.LEFT_UP);

          _defineProperty(_assertThisInitialized(_this), "skillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "allSkillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "baseInfo", null);

          _defineProperty(_assertThisInitialized(_this), "layerInfo", null);

          _defineProperty(_assertThisInitialized(_this), "curAttackSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "scriptWarning", null);

          _defineProperty(_assertThisInitialized(_this), "attackForward", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "attackPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "rigidComMonster", null);

          _defineProperty(_assertThisInitialized(_this), "scriptCharacterRigid", null);

          _defineProperty(_assertThisInitialized(_this), "_isDie", false);

          _defineProperty(_assertThisInitialized(_this), "_curAttackInterval", 0);

          _defineProperty(_assertThisInitialized(_this), "_isHitByPlayer", false);

          _defineProperty(_assertThisInitialized(_this), "_isInitBloodBar", false);

          _defineProperty(_assertThisInitialized(_this), "_bloodTipOffsetPos", new Vec3(0, 50, 0));

          _defineProperty(_assertThisInitialized(_this), "_hideBloodCountDown", 3);

          _defineProperty(_assertThisInitialized(_this), "_hitEffectPos", new Vec3(0, 0.2, 0));

          _defineProperty(_assertThisInitialized(_this), "_isAllowToAttack", false);

          _defineProperty(_assertThisInitialized(_this), "_playerMonsterOffset", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curAngleY", 0);

          _defineProperty(_assertThisInitialized(_this), "_horizontal", 0);

          _defineProperty(_assertThisInitialized(_this), "_vertical", 0);

          _defineProperty(_assertThisInitialized(_this), "_iceDamageCountDown", 0);

          _defineProperty(_assertThisInitialized(_this), "_fireDamageCountDown", 0);

          _defineProperty(_assertThisInitialized(_this), "_ndMonsterSkill", null);

          _defineProperty(_assertThisInitialized(_this), "_skillIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "_minLength", 3);

          _defineProperty(_assertThisInitialized(_this), "_curMoveSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_moveMode", 0);

          _defineProperty(_assertThisInitialized(_this), "_movePattern", 0);

          _defineProperty(_assertThisInitialized(_this), "_moveFrequency", 0);

          _defineProperty(_assertThisInitialized(_this), "_offsetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_offsetPos_2", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_mixOffset", new Vec3(1, 0, 1));

          _defineProperty(_assertThisInitialized(_this), "_targetWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_isPlayRotate", false);

          _defineProperty(_assertThisInitialized(_this), "_curAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curAngle_2", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_tempAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_rotateDirection", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_forWard", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_ndRunSmokeEffect", null);

          _defineProperty(_assertThisInitialized(_this), "_originAngle", new Vec3(0, -90, 0));

          _defineProperty(_assertThisInitialized(_this), "_targetAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_checkInterval", 0.04);

          _defineProperty(_assertThisInitialized(_this), "_currentTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_ndBody", null);

          _defineProperty(_assertThisInitialized(_this), "_curMoveWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_isArrived", false);

          _defineProperty(_assertThisInitialized(_this), "_checkMoveInterval", 0);

          _defineProperty(_assertThisInitialized(_this), "_prevMoveWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_moveUnit", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_minLengthRatio", 1.1);

          _defineProperty(_assertThisInitialized(_this), "_randomMoveTryTimes", 5);

          return _this;
        }

        var _proto = Monster.prototype;

        //每次随机移动位置最多计算次数
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
          }), constant) : constant).EVENT_TYPE.MONSTER_MOVE, this._monsterMove, this); //回收血条节点

          if (this.scriptBloodBar) {
            if (this.scriptBloodBar.node.parent) {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(this.scriptBloodBar.node);
            }

            this.scriptBloodBar = null;
          } //回收预警节点


          this.recycleWarning(); //回收技能节点

          if (this._ndMonsterSkill) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this._ndMonsterSkill);
            this._ndMonsterSkill = null;
          }
        };

        _proto.start = function start() {// [3]
        };

        _proto.init = function init(baseInfo, layerInfo) {
          this.baseInfo = baseInfo;
          this.layerInfo = layerInfo;
          this.isDie = false;
          this.recycleWarning();
          this._ndBody = this.node.getChildByName("body");
          this.scriptCharacterRigid = this.node.getComponent(_crd && CharacterRigid === void 0 ? (_reportPossibleCrUseOfCharacterRigid({
            error: Error()
          }), CharacterRigid) : CharacterRigid);

          if (!this.rigidComMonster) {
            this.rigidComMonster = this.node.getComponent(RigidBodyComponent);
          }

          this.rigidComMonster.clearState();
          this.scriptMonsterModel = this._ndBody.getComponent(_crd && MonsterModel === void 0 ? (_reportPossibleCrUseOfMonsterModel({
            error: Error()
          }), MonsterModel) : MonsterModel);
          this.scriptMonsterModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.IDLE, true);
          this._curAttackInterval = 0;
          this._isHitByPlayer = false;
          this._isInitBloodBar = false;
          this._isAllowToAttack = false;
          this._isArrived = false;
          this._checkMoveInterval = 0;
          this._iceDamageCountDown = 0;
          this._fireDamageCountDown = 0;
          this._ndMonsterSkill = null;
          this._skillIndex = 0;
          this._moveUnit = new Vec3(); // this._isCloseFighting = false;

          this._movePattern = layerInfo.movePattern ? layerInfo.movePattern : this.baseInfo.movePattern;
          this.scriptBloodBar = null;

          this._refreshSkill();

          this.scriptMonsterModel.scriptMonster = this;
          this.curAttackSpeed = this.baseInfo.attackSpeed;
          this.curMoveSpeed = this.baseInfo.moveSpeed;

          this._getMinLength();
        }
        /**
         * 获取怪物和玩家之间的最小距离
         *
         * @memberof Monster
         */
        ;

        _proto._getMinLength = function _getMinLength() {
          if (this.node.name === "aula") {
            this._minLength = 2;
          } else if (this.node.name === "boomDragon") {
            this._minLength = 2;
          } else if (this.node.name === "hellFire") {
            this._minLength = 2.5;
          } else if (this.node.name === "magician") {
            this._minLength = 2.5;
          } else if (this.node.name === "dragon") {
            this._minLength = 5;
          }
        }
        /**
         * 刷新当前使用技能
         *
         * @private
         * @memberof Monster
         */
        ;

        _proto._refreshSkill = function _refreshSkill() {
          this.allSkillInfo = this.layerInfo.skill === "" ? [] : this.layerInfo.skill.split("#");

          if (this.allSkillInfo.length) {
            this._skillIndex = this._skillIndex >= this.allSkillInfo.length ? 0 : this._skillIndex;
            var skillID = this.allSkillInfo[this._skillIndex];
            this.skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID("monsterSkill", skillID);
            this._skillIndex += 1;
          }
        }
        /**
         * 怪物阵亡
         *
         * @memberof Monster
         */
        ;

        _proto.showDie = function showDie() {
          var _this2 = this;

          this.scriptCharacterRigid.stopMove();
          this.recycleWarning();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(this.node.name + "Die");
          var sound = '';

          if (this.node.name === "aula") {
            sound = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.AULA_DIE;
          } else if (this.node.name === "boomDragon") {
            sound = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.BOOM_DRAGON_DIE;
          } else if (this.node.name === "hellFire") {
            sound = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.HELL_FIRE_DIE;
          } else if (this.node.name === "magician") {
            sound = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.MAGICIAN_DIE;
          } else if (this.node.name === "dragon") {
            sound = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.DRAGON_DIE;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(sound);
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
              _this2.scriptBloodBar = null;
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(_this2.node);
            }
          });
        };

        _proto.recycleWarning = function recycleWarning() {
          //回收预警节点
          if (this.scriptWarning) {
            if (this.scriptWarning.node.parent) {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(this.scriptWarning.node);
            }

            this.scriptWarning = null;
          }
        }
        /**
         * 怪物播放受击效果
         *
         * @param {boolean} isArrowLaunch 是否被弹射的弓箭射中，如果是则造成普通伤害
         * @param {boolean} isPassiveLightning 是否被动受到电击
         * @return {*} 
         * @memberof Monster
         */
        ;

        _proto.playHit = function playHit(isArrowLaunch, isPassiveLightning) {
          var _this3 = this;

          if (isArrowLaunch === void 0) {
            isArrowLaunch = false;
          }

          if (isPassiveLightning === void 0) {
            isPassiveLightning = false;
          }

          if (this.isDie) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.HIT_MONSTER); //播放受击特效

          var effectPath = "hit/hit";
          var arrEffectPath = [];
          var recycleTime = 1.2;
          var isHasIce = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowIce;
          var isHasFire = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowFire;
          var isHasLightning = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowLightning;

          if (isHasFire || isHasIce || isHasLightning) {
            if (isHasFire && isHasIce && isHasLightning) {
              arrEffectPath = ["hit/hitFire", "hit/hitIce", "hit/hitLightning"];
            } else {
              if (isHasFire && isHasIce || isHasFire && isHasLightning || isHasIce && isHasLightning) {
                if (isHasFire && isHasIce) {
                  arrEffectPath = ["hit/hitFire", "hit/hitIce"];
                } else if (isHasLightning && isHasFire) {
                  arrEffectPath = ["hit/hitFire", "hit/hitLightning"];
                } else if (isHasLightning && isHasIce) {
                  arrEffectPath = ["hit/hitIce", "hit/hitLightning"];
                }
              } else {
                if (isHasFire) {
                  arrEffectPath = ["hit/hitFire"];
                } else if (isHasIce) {
                  arrEffectPath = ["hit/hitIce"];
                } else if (isHasLightning) {
                  arrEffectPath = ["hit/hitLightning"];
                }
              }
            }

            effectPath = arrEffectPath[Math.floor(Math.random() * arrEffectPath.length)];

            if (effectPath === "hit/hitFire") {
              //灼烧技能持续2秒
              recycleTime = 2;
            } else if (effectPath === "hit/hitIce") {
              recycleTime = 1;
            } //被冰冻技能击中


            if (isHasIce && this._iceDamageCountDown <= 0) {
              this._iceDamageCountDown = 1;
            } //被灼烧技能击中


            if (isHasFire && this._fireDamageCountDown <= 0) {
              this._fireDamageCountDown = 2;
            }
          }

          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playEffect(this.node, effectPath, false, true, recycleTime, 1, this._hitEffectPos); //攻击的时候霸体状态

          if (!this.scriptMonsterModel.isAttacking) {
            this.scriptMonsterModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ANI_TYPE.HIT);
          } //受到攻击的敌人会向身旁一定范围内的所有敌人发射闪电，减少生命上限5%的生命值


          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowLightning && !isPassiveLightning) {
            var arrTargets = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getNearbyMonster(this.node, true);

            if (arrTargets) {
              arrTargets.forEach(function (ndChild) {
                (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                  error: Error()
                }), EffectManager) : EffectManager).instance.showLightningChain(_this3.node, ndChild);
                var scriptMonster = ndChild.getComponent(Monster);
                scriptMonster.playHit(false, true);
              });
            }
          } //怪物扣血


          if (Math.random() > this.baseInfo.dodgeRate) {
            //闪避失败
            var tipType = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).FIGHT_TIP.REDUCE_BLOOD;
            var damage = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.curAttackPower * (1 - this.baseInfo.defensePower * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).defenseAddition / (this.baseInfo.defensePower + 400));
            var isCriticalHit = Math.random() <= (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.curCriticalHitRate; //是否暴击
            //是否暴击

            if (isCriticalHit) {
              //不是被弹射的箭击中，且不是被动受到电击
              if (!isArrowLaunch && !isPassiveLightning) {
                damage = damage * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.curCriticalHitDamage;
                tipType = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).FIGHT_TIP.CRITICAL_HIT;
              }
            }

            if (isPassiveLightning) {
              damage = this.baseInfo.hp * 0.05 * (1 - this.baseInfo.defensePower / (this.baseInfo.defensePower + 400));
            }

            this.refreshBlood(-damage, tipType);
          }
        }
        /**
         * 刷新血量
         *
         * @private
         * @param {number} bloodNum
         * @memberof Monster
         */
        ;

        _proto.refreshBlood = function refreshBlood(bloodNum, tipType) {
          var _this4 = this;

          var cb = function cb() {
            _this4.scriptBloodBar.refreshBlood(bloodNum);

            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showBloodTips(_this4, tipType, bloodNum, _this4._bloodTipOffsetPos);
          };

          this._curAttackInterval = 0;

          if (!this._isInitBloodBar) {
            this._isInitBloodBar = true;
            console.log("###小怪生成新的血条", this.node.name);
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showMonsterBloodBar(this, this.baseInfo.hp, function () {
              cb();
            });
          } else {
            if (this.scriptBloodBar) {
              this.scriptBloodBar.node.active = true;
              cb();
            }
          }
        }
        /**
         * 怪物行为
         *
         * @param {*} obj
         * @memberof Player
         */
        ;

        _proto.playAction = function playAction(obj) {
          switch (obj.action) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ACTION.MOVE:
              var angle = obj.value + 135;
              var radian = angle * macro.RAD;
              this._horizontal = Math.round(Math.cos(radian) * 1);
              this._vertical = Math.round(Math.sin(radian) * 1);
              this.isMoving = true;
              this._curAngleY = obj.value;
              this._curAngleY = this._curAngleY < 0 ? this._curAngleY + 360 : this._curAngleY > 360 ? this._curAngleY - 360 : this._curAngleY;

              this._prevMoveWorPos.set(this.node.worldPosition);

              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ACTION.STOP_MOVE:
              this._horizontal = 0;
              this._vertical = 0;

              if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndPlayer) {
                this._attackPlayer();
              } else {
                this.scriptMonsterModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_ANI_TYPE.IDLE, true);
              }

              this.isMoving = false;
              this.scriptCharacterRigid.stopMove();
              break;

            default:
              break;
          }
        }
        /**
         * 攻击玩家
        */
        ;

        _proto._attackPlayer = function _attackPlayer() {
          var _this5 = this;

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isDie || this.scriptMonsterModel.isAttacking) {
            return;
          }

          Vec3.subtract(this._offsetPos_2, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition, this.node.worldPosition);

          var length = this._offsetPos_2.length();

          this.attackForward = this._offsetPos_2.normalize().negative();
          this.attackPos.set((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition); //预警

          if (this.allSkillInfo.length && this.skillInfo && this.skillInfo.warning) {
            var scale = 1;

            if (this.skillInfo.ID === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_SKILL.FIRE_BALL) {
              scale = 0.1;
            } else if (this.skillInfo.ID === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_SKILL.FIRE_BALL_BIG) {
              scale = 0.4;
            } else if (this.skillInfo.ID === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_SKILL.LASER) {
              scale = 3;
            } else if (this.skillInfo.ID === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_SKILL.ENERGY_BALL) {
              scale = length;
            } //回收预警节点


            this.recycleWarning();
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.showWarning(this.skillInfo.warning, scale, this, function () {
              _this5.playAttackAni();
            });
          } else {
            this.playAttackAni();
          }
        }
        /**
         * 播放攻击动画
         *
         * @protected
         * @memberof Monster
         */
        ;

        _proto.playAttackAni = function playAttackAni() {
          var _this6 = this;

          var attackAniName = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.ATTACK;

          if (this.baseInfo.resName === "hellFire") {
            //hellFire的攻击动画有两个，其他小怪动画只有一个
            if (!this.allSkillInfo.length) {
              //近战
              attackAniName = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_1;
            } else {
              //远程
              attackAniName = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_2;
            }
          } //远程


          if (this.allSkillInfo.length) {
            this.scriptMonsterModel.playAni(attackAniName, false, function () {
              if (!_this6.isDie && !_this6.scriptMonsterModel.isHitting) {
                _this6.scheduleOnce(function () {
                  _this6._monsterMove();
                }, _this6.baseInfo.moveFrequency);
              }
            });
          } else {
            //近战
            var offsetLength = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).getTwoNodeXZLength(this.node, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer);

            if (offsetLength <= this._minLength * this._minLengthRatio) {
              this.scriptMonsterModel.playAni(attackAniName, false, function () {
                if (!_this6.isDie && !_this6.scriptMonsterModel.isHitting) {
                  _this6.scheduleOnce(function () {
                    _this6._monsterMove();
                  }, _this6.baseInfo.moveFrequency);
                }
              });
            } else {
              if (!this.isDie && !this.scriptMonsterModel.isHitting) {
                this.scheduleOnce(function () {
                  _this6._monsterMove();
                }, this.baseInfo.moveFrequency);
              }
            }
          }
        };

        _proto._getRandomMovePos = function _getRandomMovePos() {
          this._randomMoveTryTimes -= 1; //随机移动：先以怪物圆环区间(1, minLength)随机移动,再朝向玩家,然后攻击

          var x = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getRandom(1, 3) * (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getRandomDirector();
          var z = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getRandom(1, 3) * (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getRandomDirector(); // console.log("###随机移动", x, z);

          this._targetWorPos.set((_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).toFixed(this.node.worldPosition.x + x), (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).toFixed(this.node.worldPosition.y), (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).toFixed(this.node.worldPosition.z + z));

          var offsetLength = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getTwoPosXZLength(this._targetWorPos.x, this._targetWorPos.z, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition.x, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition.z); //当目标位置和玩家大于最小距离，进行移动

          if (offsetLength > this._minLength) {
            Vec3.subtract(this._offsetPos, this._targetWorPos, this.node.worldPosition);
            this._offsetPos.y = 0;
            Vec3.normalize(this._moveUnit, this._offsetPos);

            this._lookAtTargetWorPos(this._targetWorPos);

            this.isMoving = true;
            this._isArrived = false;
          } else {
            //否则尝试5次随机移动，都没合适的位置则进行进攻
            if (this._randomMoveTryTimes <= 0) {
              // console.log("###随机移动", this._randomMoveTryTimes);
              this.playAction({
                action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_ACTION.STOP_MOVE
              });
            } else {
              this._getRandomMovePos(); // console.log("###随机移动", this._randomMoveTryTimes);

            }
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
          if (this.isDie) {
            return;
          }

          if (!this._isAllowToAttack) {
            this._isAllowToAttack = true;
          }

          if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
            //不移动，原地攻击玩家
            this._lookAtTargetWorPos();
          } else if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_MOVE_PATTERN.RANDOM) {
            this._randomMoveTryTimes = 5;

            this._getRandomMovePos();
          } else if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_MOVE_PATTERN.FORWARD_PLAYER) {
            //面向玩家移动：先面向玩家，再移动，然后攻击
            this._lookAtTargetWorPos();

            Vec3.subtract(this._offsetPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer.worldPosition, this.node.worldPosition);
            this._offsetPos.y = 0;
            var offsetLength = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).getTwoNodeXZLength(this.node, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer); //当怪物和玩家小于2个最小距离之和或者大于一个最小距离且小于两个最小距离，进行移动

            if (offsetLength > this._minLength * 2 || offsetLength > this._minLength && offsetLength < this._minLength * 2) {
              //单位向量
              Vec3.normalize(this._moveUnit, this._offsetPos);
              Vec3.multiplyScalar(this._offsetPos, this._moveUnit, this._minLength);

              if (offsetLength > this._minLength * 2) {
                //向玩家移动2个单位向量
                Vec3.add(this._targetWorPos, this.node.worldPosition, this._offsetPos);
              } else {
                Vec3.subtract(this._targetWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).ndPlayer.worldPosition, this._offsetPos);
              }

              this._targetWorPos.set((_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).toFixed(this._targetWorPos.x), (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).toFixed(this.node.worldPosition.y), (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).toFixed(this._targetWorPos.z));

              this.isMoving = true;
            } else {
              //否则原地进行攻击
              this.playAction({
                action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).MONSTER_ACTION.STOP_MOVE
              });
            }
          }
        }
        /**
         * 怪物面向目标的世界坐标
         *
         * @private
         * @memberof Monster
         */
        ;

        _proto._lookAtTargetWorPos = function _lookAtTargetWorPos(targetWorPos) {
          var _mainCamera, _mainCamera2;

          var screenPos1 = (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) === null || _mainCamera === void 0 ? void 0 : _mainCamera.worldToScreen((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);
          var screenPos2 = (_mainCamera2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) === null || _mainCamera2 === void 0 ? void 0 : _mainCamera2.worldToScreen(this.node.worldPosition);

          if (targetWorPos) {
            var _mainCamera3;

            screenPos1 = (_mainCamera3 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).mainCamera) === null || _mainCamera3 === void 0 ? void 0 : _mainCamera3.worldToScreen(targetWorPos);
          }

          Vec3.subtract(this._playerMonsterOffset, screenPos1, screenPos2);
          var angleY = Math.round(Math.atan2(this._playerMonsterOffset.y, this._playerMonsterOffset.x) * 180 / Math.PI); // if (angleY !== this._curAngleY) {

          this.playAction({
            action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ACTION.MOVE,
            value: angleY
          }); // }
        }
        /**
         * 向玩家释放技能
         *
         * @returns
         * @memberof Player
         */
        ;

        _proto.releaseSkillToPlayer = function releaseSkillToPlayer(isNormalAttack) {
          var _this7 = this;

          //没有技能则使用近战
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

          this.node.forward = Vec3.subtract(this._forWard, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition, this.node.worldPosition).normalize(); //加载对应技能

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadEffectRes(this.skillInfo.resName + "/" + this.skillInfo.resName).then(function (prefab) {
            if (_this7.isMoving) {
              return;
            }

            _this7._ndMonsterSkill = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndGameManager);

            _this7._ndMonsterSkill.setWorldPosition(_this7.node.worldPosition.x, 2.5, _this7.node.worldPosition.z);

            _this7._ndMonsterSkill.forward = _this7.attackForward.negative();
            var scriptSkillCollider = null; //怪物技能初始化

            switch (_this7.skillInfo.ID) {
              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_SKILL.ENERGY_BALL:
                scriptSkillCollider = _this7._ndMonsterSkill.getComponent(_crd && EnergyBall === void 0 ? (_reportPossibleCrUseOfEnergyBall({
                  error: Error()
                }), EnergyBall) : EnergyBall);
                scriptSkillCollider.init(_this7.skillInfo, _this7.baseInfo, _this7);
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_SKILL.FIRE_BALL:
                scriptSkillCollider = _this7._ndMonsterSkill.getComponent(_crd && FireBall === void 0 ? (_reportPossibleCrUseOfFireBall({
                  error: Error()
                }), FireBall) : FireBall);
                scriptSkillCollider.init(_this7.skillInfo, _this7.baseInfo, _this7);
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_SKILL.DISPERSION:
                _this7._ndMonsterSkill.children.forEach(function (ndChild, idx) {
                  var scriptSkillCollider = ndChild.getComponent(_crd && Dispersion === void 0 ? (_reportPossibleCrUseOfDispersion({
                    error: Error()
                  }), Dispersion) : Dispersion);
                  scriptSkillCollider.init(_this7.skillInfo, _this7.baseInfo);
                });

                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_SKILL.TORNADO:
                scriptSkillCollider = _this7._ndMonsterSkill.getComponent(_crd && Tornado === void 0 ? (_reportPossibleCrUseOfTornado({
                  error: Error()
                }), Tornado) : Tornado);
                scriptSkillCollider.init(_this7.skillInfo, _this7.baseInfo, _this7);
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_SKILL.FIRE_BALL_BIG:
                scriptSkillCollider = _this7._ndMonsterSkill.getComponent(_crd && FireBallBig === void 0 ? (_reportPossibleCrUseOfFireBallBig({
                  error: Error()
                }), FireBallBig) : FireBallBig);
                scriptSkillCollider.init(_this7.skillInfo, _this7.baseInfo, _this7);
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_SKILL.DISPERSION_SURROUND:
                _this7._ndMonsterSkill.children.forEach(function (ndChild) {
                  var scriptSkillCollider = ndChild.getComponent(_crd && DispersionSurround === void 0 ? (_reportPossibleCrUseOfDispersionSurround({
                    error: Error()
                  }), DispersionSurround) : DispersionSurround);
                  scriptSkillCollider.init(_this7.skillInfo, _this7.baseInfo);
                });

                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_SKILL.LASER:
                scriptSkillCollider = _this7._ndMonsterSkill.getComponent(_crd && Laser === void 0 ? (_reportPossibleCrUseOfLaser({
                  error: Error()
                }), Laser) : Laser);
                scriptSkillCollider.init(_this7.skillInfo, _this7.baseInfo, _this7);
                break;
            }

            _this7._refreshSkill();
          });
        };

        _proto.update = function update(deltaTime) {
          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause || this.isDie || !this._isAllowToAttack || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isDie) {
            return;
          } //3秒未被攻击则会隐藏血条


          if (!this._isHitByPlayer && this.scriptBloodBar) {
            this._curAttackInterval += deltaTime;

            if (this._curAttackInterval >= this._hideBloodCountDown && this.scriptBloodBar.node.active) {
              this.scriptBloodBar.node.active = false;
            }
          }

          if (this.isMoving) {
            if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_MOVE_PATTERN.RANDOM) {
              //如果移动到目标位置就停止移动
              var offsetLength = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).getTwoPosXZLength(this.node.worldPosition.x, this.node.worldPosition.z, this._targetWorPos.x, this._targetWorPos.z);
              var offsetTarget = 0.05; //爆炸龙的位移是跳，不容易精准到达目标位置,把达到范围适当增大

              if (this.baseInfo.resName === 'boomDragon') {
                offsetTarget = 0.5;
              }

              if (offsetLength <= offsetTarget && !this._isArrived) {
                // console.log("###到达目标位置，面向玩家");
                this._isArrived = true;

                this._lookAtTargetWorPos();
              }
            } else if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_MOVE_PATTERN.FORWARD_PLAYER) {
              //如果移动到目标位置就停止移动
              var _offsetLength = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).getTwoPosXZLength(this.node.worldPosition.x, this.node.worldPosition.z, this._targetWorPos.x, this._targetWorPos.z);

              if (_offsetLength <= 0.05) {
                // 进行攻击
                this.playAction({
                  action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).MONSTER_ACTION.STOP_MOVE
                });
              }
            }
          } //怪物旋转


          if (this._isPlayRotate) {
            //当前怪物角度
            this._tempAngle.set(this.node.eulerAngles);

            this._tempAngle.y = this._tempAngle.y < 0 ? this._tempAngle.y + 360 : this._tempAngle.y;

            if (this._curAngle.length() === 0) {
              this._curAngle.set(this._tempAngle);
            }

            this.node.eulerAngles = this._tempAngle; //第二个参数越小朝向越精确

            var isEqual = this._curAngle.equals(this._targetAngle, 0.01);

            if (!isEqual) {
              Vec3.lerp(this._curAngle, this._curAngle, this._targetAngle, 0.167);
              this.node.eulerAngles = this._curAngle;
            } else {
              this._isPlayRotate = false;
              this.node.eulerAngles = this._targetAngle;

              this._curAngle.set(0, 0, 0);

              if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_MOVE_PATTERN.RANDOM) {
                if (this._isArrived) {
                  // console.log("###面向玩家角度结束，发起进攻1");
                  this.playAction({
                    action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                      error: Error()
                    }), constant) : constant).MONSTER_ACTION.STOP_MOVE
                  });
                }
              } else if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
                // console.log("###面向玩家角度结束，发起进攻2");
                this.playAction({
                  action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).MONSTER_ACTION.STOP_MOVE
                });
              }
            }
          }

          if (this._horizontal !== 0 || this._vertical !== 0) {
            //计算出旋转角度
            this._rotateDirection.set(this._horizontal, 0, -this._vertical);

            this._rotateDirection = this._rotateDirection.normalize();
            Quat.fromViewUp(qt_0, this._rotateDirection);
            Quat.toEuler(v3_0, qt_0);
            v3_0.y = v3_0.y < 0 ? v3_0.y + 360 : v3_0.y;
            this._isPlayRotate = true; //设置当前怪物角度为正数

            this._curAngle_2.set(this.node.eulerAngles);

            if (this._curAngle_2.y < 0) {
              this._curAngle_2.y += 360;
              this.node.eulerAngles = this._curAngle_2; // 转为0~360
            } else if (this._curAngle_2.y > 360) {
              this._curAngle_2.y -= 360;
              this.node.eulerAngles = this._curAngle_2; // 转为0~360
            } //设置目标旋转角度


            if (!v3_0.equals(this.node.eulerAngles, 0.01)) {
              this._targetAngle.y = this._curAngleY + 225;
              this._targetAngle.y = this._targetAngle.y < 0 ? this._targetAngle.y + 360 : this._targetAngle.y > 360 ? this._targetAngle.y - 360 : this._targetAngle.y;
              this._targetAngle.x = 0;
              this._targetAngle.z = 0;

              if (Math.abs(this._targetAngle.y - this._curAngle_2.y) > 180) {
                if (this._targetAngle.y > this._curAngle_2.y) {
                  this._targetAngle.y -= 360;
                } else {
                  this._targetAngle.y += 360;
                }
              } //每次有新的_targetAngle之后，先将_curAngle初始化


              this._curAngle.set(0, 0, 0);
            } else {
              this._isPlayRotate = false;
              this.node.eulerAngles = v3_0;

              if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_MOVE_PATTERN.RANDOM) {
                if (this._isArrived) {
                  // console.log("###面向玩家角度结束，发起进攻1-1");
                  this.playAction({
                    action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                      error: Error()
                    }), constant) : constant).MONSTER_ACTION.STOP_MOVE
                  });
                }
              } else if (this._movePattern === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
                // console.log("###面向玩家角度结束，发起进攻2-1");
                this.playAction({
                  action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).MONSTER_ACTION.STOP_MOVE
                });
              }
            }

            if (!this.isMoving) {
              return;
            } //怪物朝着目标位置移动：


            if (this._movePattern !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
              this.scriptCharacterRigid.move(-this._moveUnit.x * this.curMoveSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).moveSpeedAddition * 0.5 * deltaTime, -this._moveUnit.z * this.curMoveSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).moveSpeedAddition * 0.5 * deltaTime);
            }

            if (!this.scriptMonsterModel.isRunning && this._movePattern !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
              this.scriptMonsterModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.RUN, true);
            }
          } else {
            if (!this.isDie && !this.scriptMonsterModel.isIdle && !this.scriptMonsterModel.isAttacking && !this.scriptMonsterModel.isHitting) {
              this.scriptMonsterModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.IDLE, true);
              this.scriptCharacterRigid.stopMove();
            }
          } //冰冻持续降低攻击力和伤害


          if (this._iceDamageCountDown > 0) {
            this._iceDamageCountDown -= deltaTime;
            this.curAttackSpeed = this.baseInfo.attackSpeed * (1 - 0.1);
            this.curMoveSpeed = this.baseInfo.moveSpeed * (1 - 0.5);

            if (this._iceDamageCountDown <= 0) {
              this.curAttackSpeed = this.baseInfo.attackSpeed;
              this.curMoveSpeed = this.baseInfo.moveSpeed;
            }
          } //灼烧持续扣血


          if (this._fireDamageCountDown > 0) {
            this._fireDamageCountDown -= deltaTime;
            var countDown = Number(this._fireDamageCountDown.toFixed(2));
            countDown = countDown * 100 % 50;

            if (countDown === 0) {
              // console.log("灼烧扣血", this._fireDamageCountDown);
              var bloodNum = this.baseInfo.hp * 0.05;
              this.refreshBlood(-bloodNum, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).FIGHT_TIP.REDUCE_BLOOD);
            }
          } //检查当前是否碰到障碍或者其他物体导致无法达到目标位置


          if (this._movePattern !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
            this._checkMoveInterval += deltaTime;

            if (this._checkMoveInterval >= 0.2) {
              this._checkMoveInterval = 0;

              if (this._isStopAttack) {
                this.playAction({
                  action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).MONSTER_ACTION.STOP_MOVE
                });
                console.log("###碰到障碍, 停止移动");
              } else {
                this._prevMoveWorPos.set(this.node.worldPosition);
              }
            }
          }
        };

        _createClass(Monster, [{
          key: "curMoveSpeed",
          get: function get() {
            return this._curMoveSpeed;
          },
          set: function set(v) {
            this._curMoveSpeed = v;
            this.scriptCharacterRigid.initSpeed(v, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).moveSpeedAddition);
          }
        }, {
          key: "isDie",
          get: function get() {
            return this._isDie;
          },
          set: function set(v) {
            this._isDie = v;

            if (this._isDie) {
              this.showDie();
            }
          }
        }, {
          key: "_isStopAttack",
          get: //灼烧伤害倒计时
          function get() {
            //当前是否停止攻击,且原地跑
            return !this.isDie && !this.scriptMonsterModel.isIdle && !this.scriptMonsterModel.isAttacking && !this.scriptMonsterModel.isHitting && this._prevMoveWorPos.equals(this.node.worldPosition, 0.01);
          }
        }]);

        return Monster;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=monster.js.map