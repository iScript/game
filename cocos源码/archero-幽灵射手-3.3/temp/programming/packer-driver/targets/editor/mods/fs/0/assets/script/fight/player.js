System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MapManager, util, AudioManager, EffectManager, playerData, localConfig, PlayerModel, poolManager, clientEvent, _decorator, Component, Quat, Vec3, macro, RigidBodyComponent, CapsuleColliderComponent, geometry, constant, GameManager, resourceUtil, Arrow, uiManager, CharacterRigid, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, qt_0, v3_0, v3_1, v3_2, ray, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./mapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerModel(extras) {
    _reporterNs.report("PlayerModel", "./playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrow(extras) {
    _reporterNs.report("Arrow", "./arrow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerBloodBar(extras) {
    _reporterNs.report("PlayerBloodBar", "../ui/fight/playerBloodBar", _context.meta, extras);
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
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      macro = _cc.macro;
      RigidBodyComponent = _cc.RigidBodyComponent;
      CapsuleColliderComponent = _cc.CapsuleColliderComponent;
      geometry = _cc.geometry;
    }, function (_unresolved_2) {
      MapManager = _unresolved_2.MapManager;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      EffectManager = _unresolved_5.EffectManager;
    }, function (_unresolved_6) {
      playerData = _unresolved_6.playerData;
    }, function (_unresolved_7) {
      localConfig = _unresolved_7.localConfig;
    }, function (_unresolved_8) {
      PlayerModel = _unresolved_8.PlayerModel;
    }, function (_unresolved_9) {
      poolManager = _unresolved_9.poolManager;
    }, function (_unresolved_10) {
      clientEvent = _unresolved_10.clientEvent;
    }, function (_unresolved_11) {
      constant = _unresolved_11.constant;
    }, function (_unresolved_12) {
      GameManager = _unresolved_12.GameManager;
    }, function (_unresolved_13) {
      resourceUtil = _unresolved_13.resourceUtil;
    }, function (_unresolved_14) {
      Arrow = _unresolved_14.Arrow;
    }, function (_unresolved_15) {
      uiManager = _unresolved_15.uiManager;
    }, function (_unresolved_16) {
      CharacterRigid = _unresolved_16.CharacterRigid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00abeCWTxpAwrraoA+2UT4q", "player", undefined);

      qt_0 = new Quat();
      v3_0 = new Vec3();
      v3_1 = new Vec3();
      v3_2 = new Vec3();
      ray = new geometry.Ray();
      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(_crd && PlayerModel === void 0 ? (_reportPossibleCrUseOfPlayerModel({
        error: Error()
      }), PlayerModel) : PlayerModel), _dec3 = property(RigidBodyComponent), _dec4 = property(CapsuleColliderComponent), _dec(_class = (_class2 = (_temp = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scriptPlayerModel", _descriptor, this);

          _initializerDefineProperty(this, "rigidComPlayer", _descriptor2, this);

          _initializerDefineProperty(this, "colliderComPlayer", _descriptor3, this);

          _defineProperty(this, "scriptBloodBar", null);

          _defineProperty(this, "isMoving", false);

          _defineProperty(this, "isPlayRotate", false);

          _defineProperty(this, "scriptCharacterRigid", null);

          _defineProperty(this, "playerBaseInfo", {});

          _defineProperty(this, "isArrowDouble", false);

          _defineProperty(this, "isArrowPenetrate", false);

          _defineProperty(this, "isArrowContinuous", false);

          _defineProperty(this, "isArrowIce", false);

          _defineProperty(this, "isArrowFire", false);

          _defineProperty(this, "isBloodthirsty", false);

          _defineProperty(this, "isArrowLightning", false);

          _defineProperty(this, "isArrowLaunch", false);

          _defineProperty(this, "curAttackPower", 20);

          _defineProperty(this, "curDefensePower", 1);

          _defineProperty(this, "curAttackSpeed", 1);

          _defineProperty(this, "curDodgeRate", 0);

          _defineProperty(this, "curCriticalHitRate", 0);

          _defineProperty(this, "curCriticalHitDamage", 0);

          _defineProperty(this, "curHpLimit", 0);

          _defineProperty(this, "_arrFormChangeSkill", []);

          _defineProperty(this, "_arrValueChangeSkill", []);

          _defineProperty(this, "_arrBuffSkill", []);

          _defineProperty(this, "_arrTriggerSkill", []);

          _defineProperty(this, "_hp", 0);

          _defineProperty(this, "_isDie", false);

          _defineProperty(this, "_horizontal", 0);

          _defineProperty(this, "_vertical", 0);

          _defineProperty(this, "_targetAngle", new Vec3());

          _defineProperty(this, "_curAngleY", 0);

          _defineProperty(this, "_ndTarget", null);

          _defineProperty(this, "_throwArrowSpeed", 30);

          _defineProperty(this, "_arrowPos", new Vec3());

          _defineProperty(this, "_bloodTipOffsetPos", new Vec3(-10, 150, 0));

          _defineProperty(this, "_playerMonsterOffset", new Vec3());

          _defineProperty(this, "_isUseFullAngle", true);

          _defineProperty(this, "_oriPlayerPos", new Vec3(0, 1.7, 0));

          _defineProperty(this, "_oriPlayerScale", new Vec3(4, 4, 4));

          _defineProperty(this, "_oriPlayerAngle", new Vec3(0, -90, 0));

          _defineProperty(this, "_curAngle", new Vec3());

          _defineProperty(this, "_curAngle_2", new Vec3());

          _defineProperty(this, "_rotateDirection", new Vec3());

          _defineProperty(this, "_curWorPos", new Vec3());

          _defineProperty(this, "_ndRunSmokeEffect", null);

          _defineProperty(this, "_originAngle", new Vec3(0, -90, 0));

          _defineProperty(this, "_tempAngle", new Vec3());

          _defineProperty(this, "_forWard", new Vec3());

          _defineProperty(this, "_range", 0.01);

          _defineProperty(this, "_curMoveSpeed", 0);
        }

        //玩家在base.csv的基础数据
        set isDie(v) {
          this._isDie = v;

          if (this._isDie) {
            this._showDie();
          }
        }

        get isDie() {
          return this._isDie;
        } //是否拥有形态技能


        //当前玩家生命值上限（这个是上限，是生命上限，不是当前生命值）
        set curMoveSpeed(v) {
          this._curMoveSpeed = v;
          this.scriptCharacterRigid.initSpeed(v);
        }

        get curMoveSpeed() {
          return this._curMoveSpeed;
        } //技能数组


        //当前玩家移动速度
        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.PARSE_PLAYER_SKILL, this._parsePlayerSkill, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_REVIVE, this._onRevive, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.PARSE_PLAYER_SKILL, this._parsePlayerSkill, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_REVIVE, this._onRevive, this);

          if (this.scriptBloodBar) {
            this.scriptBloodBar.node.destroy();
            this.scriptBloodBar = null;
          }
        }

        start() {}

        init() {
          this.isMoving = false;
          this.isDie = false;
          this.isPlayRotate = false;
          this.isArrowDouble = false;
          this.isArrowPenetrate = false; // this.isArrowRebound = false;

          this.isArrowContinuous = false;
          this.isArrowIce = false;
          this.isArrowFire = false;
          this.isBloodthirsty = false;
          this.isArrowLightning = false;
          this.isArrowLaunch = false;
          this._horizontal = 0;
          this._vertical = 0;
          this._ndTarget = null;
          this.scriptCharacterRigid = this.node.getComponent(_crd && CharacterRigid === void 0 ? (_reportPossibleCrUseOfCharacterRigid({
            error: Error()
          }), CharacterRigid) : CharacterRigid); //获取玩家基础数据

          this.playerBaseInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.queryByID("base", (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).BASE.PLAYER_01);

          if (this.playerBaseInfo) {
            //设置玩家大小
            let arrScale = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).parseStringData(this.playerBaseInfo.scale, ",");

            this._oriPlayerScale.set(arrScale[0], arrScale[1], arrScale[2]);

            this.node.setScale(this._oriPlayerScale);
            this.resetPlayerWorPos(); //设置角度

            let arrAngle = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).parseStringData(this.playerBaseInfo.angle, ",");

            this._oriPlayerAngle.set(arrAngle[0], arrAngle[1], arrAngle[2]);

            this.node.eulerAngles = this._oriPlayerAngle;
            this.curAttackPower = this.playerBaseInfo.attackPower;
            this.curDefensePower = this.playerBaseInfo.defensePower;
            this.curAttackSpeed = this.playerBaseInfo.attackSpeed;
            this.curMoveSpeed = this.playerBaseInfo.moveSpeed;
            this.curDodgeRate = this.playerBaseInfo.dodgeRate;
            this.curCriticalHitRate = this.playerBaseInfo.criticalHitRate;
            this.curCriticalHitDamage = this.playerBaseInfo.criticalHitDamage;
            this.curHpLimit = this.playerBaseInfo.hp;
            this._hp = this.playerBaseInfo.hp;
          }

          this._parsePlayerSkill(true); //展示血条


          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showPlayerBloodBar(this, this._hp, () => {}, this._bloodTipOffsetPos);
          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.IDLE, true);
          this.scriptPlayerModel.init();
          this.rigidComPlayer.clearState();
        }
        /**
         * 每次成功进入新的一层则更新玩家状态
         *
         * @memberof Player
         */


        resetPlayerState() {
          this.rigidComPlayer.clearState();
          this.resetPlayerWorPos();
          this.node.eulerAngles = this._originAngle;
          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.IDLE, true); //将未播放结束的特效节点隐藏，避免到下一层还在展示特效

          this.node.children.forEach(ndChild => {
            if (ndChild.name !== "body") {
              ndChild.active = false;
            }
          });
        }
        /**
         * 根据an、anS两张图设置不同的玩家初始位置
         */


        resetPlayerWorPos() {
          let arrPosition = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).parseStringData(this.playerBaseInfo.position, ",");

          if ((_crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
            error: Error()
          }), MapManager) : MapManager).isMapAnS) {
            this._oriPlayerPos.set(-16.742, arrPosition[1], -0.719);
          } else {
            //设置坐标
            this._oriPlayerPos.set(arrPosition[0], arrPosition[1], arrPosition[2]);
          }

          this.node.setPosition(this._oriPlayerPos);
        }
        /**
         * 解析玩家当前技能
         * 
         * @param {boolean} isCoverSkill 是否重新覆盖技能，主角初始化的要，其他时候不需要
         * @memberof Player
         */


        _parsePlayerSkill(isCoverSkill = false) {
          let arrSkill = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.arrSkill;
          let arrFormChangeSkill = [];
          let arrValueChangeSkill = [];
          let arrBuffSkill = [];
          let arrTriggerSkill = [];

          if (arrSkill.length) {
            arrSkill.forEach(item => {
              if (item.startsWith((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL_USE.FORM_CHANGE)) {
                arrFormChangeSkill.push(item);
              } else if (item.startsWith((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL_USE.VALUE)) {
                arrValueChangeSkill.push(item);
              } else if (item.startsWith((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL_USE.BUFF)) {
                arrBuffSkill.push(item);
              } else if (item.startsWith((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL_USE.TRIGGER)) {
                arrTriggerSkill.push(item);
              }
            });
          }

          this._arrFormChangeSkill = arrFormChangeSkill;
          this._arrValueChangeSkill = arrValueChangeSkill;
          this._arrBuffSkill = arrBuffSkill;
          this._arrTriggerSkill = arrTriggerSkill; // console.log("###_arrFormChangeSkill", this._arrFormChangeSkill);
          // console.log("###_arrValueChangeSkill", this._arrValueChangeSkill);
          // console.log("###_arrBuffSkill", this._arrBuffSkill);
          // console.log("###_arrTriggerSkill", this._arrTriggerSkill);

          if (this._arrFormChangeSkill.length) {
            this.isArrowDouble = this._arrFormChangeSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.ARROW_DOUBLE) !== -1;
            this.isArrowPenetrate = this._arrFormChangeSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.ARROW_PENETRATE) !== -1; // this.isArrowRebound = this._arrFormChangeSkill.indexOf(constant.PLAYER_SKILL.ARROW_REBOUND) !== -1;

            this.isArrowContinuous = this._arrFormChangeSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.ARROW_CONTINUOUS) !== -1;
          } else {
            this.isArrowDouble = false;
            this.isArrowPenetrate = false; // this.isArrowRebound = false;

            this.isArrowContinuous = false;
          } //数值技能只使用一次, 注意：每次获得到需用乘法都是用当前值去乘，而不是乘以最开始的值


          if (this._arrValueChangeSkill.length) {
            //攻击力提升百分比
            let oriAttackPower = this.playerBaseInfo.attackPower;
            let curAttackPower = oriAttackPower; //攻击力1

            let raiseAttackPowerRate_1 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_01);
            curAttackPower = oriAttackPower * (1 + raiseAttackPowerRate_1); //攻击力2

            let raiseAttackPowerRate_2 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_02);
            this.curAttackPower = curAttackPower * (1 + raiseAttackPowerRate_2); //闪避率提升百分比

            let oriDodgeRate = this.playerBaseInfo.dodgeRate;
            let raiseDodgeRate = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_DODGE);
            this.curDodgeRate = oriDodgeRate + raiseDodgeRate; //注：以加法形式增加
            //攻速提升百分比

            let oriAttackSpeed = this.playerBaseInfo.attackSpeed;
            let curAttackSpeed = oriAttackSpeed; //攻速1

            let raiseAttackSpeedRate_1 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_SPEED_01);
            curAttackSpeed = oriAttackSpeed * (1 + raiseAttackSpeedRate_1); //攻速2

            let raiseAttackSpeedRate_2 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_SPEED_02);
            this.curAttackSpeed = curAttackSpeed * (1 + raiseAttackSpeedRate_2);

            if (!isCoverSkill) {
              let oriHpLimit = this.playerBaseInfo.hp;
              let raiseHpLimitRate = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.RAISE_HP_LIMIT);
              let offsetHp = oriHpLimit * raiseHpLimitRate;
              let curHpLimit = oriHpLimit + offsetHp;

              if (curHpLimit > this.curHpLimit) {
                this.addBlood(offsetHp, true);
                this.curHpLimit = curHpLimit;
                this._hp += offsetHp;
              }
            } //移速提升百分比


            let oriMoveSpeed = this.playerBaseInfo.moveSpeed;
            let raiseMoveSpeedRate = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.MOVE_SPEED);
            this.curMoveSpeed = oriMoveSpeed * (1 + raiseMoveSpeedRate); //暴击+爆伤提升百分比

            let oriCriticalHitRate = this.playerBaseInfo.criticalHitRate;
            let oriCriticalHitDamage = this.playerBaseInfo.criticalHitDamage;
            let arrCritical_1 = [0, 0]; //暴击率,暴击伤害比

            let arrCritical_2 = [0, 0]; //暴击率,暴击伤害比

            arrCritical_1 = this.getValueSkillRateArr((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_CRITICAL_HIT_DAMAGE_01);
            arrCritical_2 = this.getValueSkillRateArr((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_CRITICAL_HIT_DAMAGE_02);
            let raiseCriticalHitRate = arrCritical_1[0] + arrCritical_2[0];
            let raiseCriticalHitDamage = arrCritical_1[1] + arrCritical_2[1];

            if (raiseCriticalHitRate) {
              this.curCriticalHitRate = oriCriticalHitRate + raiseCriticalHitRate; //注：以加法形式增加
            }

            if (raiseCriticalHitDamage) {
              this.curCriticalHitDamage = oriCriticalHitDamage + raiseCriticalHitDamage; //注：以加法形式增加
            }
          } else {
            this.curAttackPower = this.playerBaseInfo.attackPower;
            this.curAttackSpeed = this.playerBaseInfo.attackSpeed;
            this.curMoveSpeed = this.playerBaseInfo.moveSpeed;
            this.curDodgeRate = this.playerBaseInfo.dodgeRate;
            this.curCriticalHitRate = this.playerBaseInfo.criticalHitRate;
            this.curCriticalHitDamage = this.playerBaseInfo.criticalHitDamage;
            this.curHpLimit = this.playerBaseInfo.hp;
          }

          if (this._arrBuffSkill.length) {
            this.isArrowIce = this._arrBuffSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.ARROW_ICE) !== -1;
            this.isArrowFire = this._arrBuffSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.ARROW_FIRE) !== -1;
          } else {
            this.isArrowIce = false;
            this.isArrowFire = false;
          }

          if (this._arrTriggerSkill.length) {
            this.isArrowLightning = this._arrTriggerSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.ARROW_LIGHTNING) !== -1;
            this.isArrowLaunch = this._arrTriggerSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.ARROW_LAUNCH) !== -1;
            this.isBloodthirsty = this._arrTriggerSkill.indexOf((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.BLOODTHIRSTY) !== -1;
          } else {
            this.isArrowLightning = false;
            this.isArrowLaunch = false;
            this.isBloodthirsty = false;
          }
        }
        /**
         * 返回当前数值技能提升比例
         */


        getValueSkillRate(key) {
          var _rate;

          let rate = 0; //百分比

          if (this._arrValueChangeSkill.indexOf(key) !== -1) {
            let skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID("playerSkill", key);
            rate = Number(skillInfo.value);
          }

          return (_rate = rate) !== null && _rate !== void 0 ? _rate : 0;
        }
        /**
         * 返回当前数值技能提升比例数组
         */


        getValueSkillRateArr(key) {
          let arrRate = [];

          if (this._arrValueChangeSkill.indexOf(key) !== -1) {
            let skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID("playerSkill", key);
            arrRate = skillInfo.value.split("#");
          }

          arrRate = arrRate.map(item => {
            return item ? Number(item) : 0;
          });

          if (arrRate.length === 0) {
            arrRate = [0, 0];
          }

          return arrRate;
        }
        /**
         * 玩家行为
         *
         * @param {*} obj
         * @memberof Player
         */


        playAction(obj) {
          if (this.isDie) {
            return;
          }

          switch (obj.action) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_ACTION.MOVE:
              let angle = obj.value + 135;
              let radian = angle * macro.RAD;
              this._horizontal = Math.round(Math.cos(radian) * 1);
              this._vertical = Math.round(Math.sin(radian) * 1);
              this.isMoving = true;
              this._curAngleY = obj.value;
              this._curAngleY = this._curAngleY < 0 ? this._curAngleY + 360 : this._curAngleY > 360 ? this._curAngleY - 360 : this._curAngleY;
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_ACTION.STOP_MOVE:
              this._horizontal = 0;
              this._vertical = 0;

              this._onPlayerStopMove();

              this.isMoving = false;
              this.rigidComPlayer.clearState();
              this.scriptCharacterRigid.stopMove();
              break;

            default:
              break;
          }
        }
        /**
         * 玩家不移动时：a) 地图上没有怪物：在原地待机。b) 地图上有怪物：向怪物方向攻击。
         *
         * @private
         * @memberof Player
         */


        _onPlayerStopMove() {
          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver && (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart) {
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).arrMonster.length || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndBoss) {
              this._attackMonster();
            } else {
              this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_ANI_TYPE.IDLE, true);
            }
          }
        }
        /**
         * 向怪物方向攻击
         */


        _attackMonster() {
          var _mainCamera, _mainCamera2;

          this._ndTarget = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getNearestMonster();

          if (!this._ndTarget || this.isDie) {
            return;
          } //先转向目标小怪


          let screenPos1 = (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) === null || _mainCamera === void 0 ? void 0 : _mainCamera.worldToScreen(this._ndTarget.worldPosition);
          let screenPos2 = (_mainCamera2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) === null || _mainCamera2 === void 0 ? void 0 : _mainCamera2.worldToScreen(this.node.worldPosition);
          Vec3.subtract(this._playerMonsterOffset, screenPos1, screenPos2);
          let angleY = Math.round(Math.atan2(this._playerMonsterOffset.y, this._playerMonsterOffset.x) * 180 / Math.PI); // if (angleY !== this._curAngleY) {

          this.playAction({
            action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_ACTION.MOVE,
            value: angleY
          }); // }

          this.isMoving = false; //再播放攻击动画

          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.ATTACK, false, () => {
            if (!this.scriptPlayerModel.isRunning) {
              this._attackMonster();
            }
          });
        }
        /**
         * 向敌人射箭
         *
         * @returns
         * @memberof Player
         */


        throwArrowToEnemy() {
          //todo：射击摇摆
          this.node.forward = Vec3.subtract(this._forWard, this.node.worldPosition, this._ndTarget.worldPosition).normalize().negative(); //使用形态变换技能

          if (this._arrFormChangeSkill.length) {
            //使用技能
            if (this.isArrowDouble) {
              if (this.isArrowContinuous) {
                this._initArrow("arrowDoubleContinuous");
              } else {
                this._initArrow("arrowDouble");
              }
            } else {
              if (this.isArrowContinuous) {
                this._initArrow("arrowSingleContinuous");
              } else {
                this._initArrow("arrowSingle");
              }
            }

            this._arrFormChangeSkill.forEach(item => {
              let skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID("playerSkill", String(item));

              if (item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_REVERSE || item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_SIDE || item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_UMBRELLA) {
                this._initArrow(skillInfo.resName);
              }
            });
          } else {
            //没有技能则默认连续射单只箭
            this._initArrow("arrowSingle");
          }
        }
        /**
         * 初始化箭
         *
         * @private
         * @param {string} arrowName
         * @memberof Player
         */


        _initArrow(arrowName) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadModelRes(`weapon/arrow/${arrowName}`).then(prefab => {
            if (this.isMoving) {
              return;
            }

            let ndArrow = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndGameManager);
            let playerWorPos = this.node.worldPosition;

            this._arrowPos.set(playerWorPos.x, 3, playerWorPos.z); // if (GameManager.isTesting) {
            //     this._arrowPos.set(playerWorPos.x, -3, playerWorPos.z);
            // }


            ndArrow.setWorldPosition(this._arrowPos); // ndArrow.eulerAngles = Vec3.ZERO;
            // ndArrow.eulerAngles = ndArrow.eulerAngles.add(this.node.eulerAngles);

            ndArrow.eulerAngles = this.node.eulerAngles;
            ndArrow.children.forEach(ndArrowItem => {
              let scriptArrowItem = ndArrowItem.getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                error: Error()
              }), Arrow) : Arrow);
              scriptArrowItem.init(this._throwArrowSpeed, this.node.worldPosition);
            });
          });
        }
        /**
         * 玩家加血、增加血量上限
         *
         * @param {number} bloodNum
         * @param {boolean} [isIncreaseLimit]
         * @memberof Player
         */


        addBlood(bloodNum, isIncreaseLimit) {
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playEffect(this.node, "recovery/recovery", false, true);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showBloodTips(this, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).FIGHT_TIP.ADD_BLOOD, bloodNum, this._bloodTipOffsetPos);
          this.scriptBloodBar.refreshBlood(bloodNum, isIncreaseLimit);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.RECOVERY);
        }
        /**
         * 玩家扣血
         *
         * @param {*} baseInfo 敌人基础信息
         * @return {*} 
         * @memberof Player
         */


        reduceBlood(baseInfo) {
          if (this.isDie) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.HIT_PLAYER);

          if (Math.random() > this.playerBaseInfo.dodgeRate) {
            //扣血
            let tipType = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).FIGHT_TIP.REDUCE_BLOOD; //敌人扣到

            let damage = baseInfo.attackPower * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).attackAddition * (1 - this.playerBaseInfo.defensePower / (this.playerBaseInfo.defensePower + 400));
            let isCriticalHit = Math.random() <= baseInfo.criticalHitRate; //是否暴击

            if (isCriticalHit) {
              damage = damage * baseInfo.criticalHitDamage;
              tipType = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).FIGHT_TIP.CRITICAL_HIT;
            }

            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showBloodTips(this, tipType, -damage, this._bloodTipOffsetPos);
            this.scriptBloodBar.refreshBlood(-damage);
          }
        }
        /**
         * 奔跑的时候加个烟雾
         *
         * @memberof Player
         */


        playRunSmoke() {
          // console.log("展示烟雾");
          if (!this._ndRunSmokeEffect) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes("runSmoke/runSmoke").then(pf => {
              this._ndRunSmokeEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(pf, this.node);
              this._ndRunSmokeEffect.active = true;
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playTrail(this._ndRunSmokeEffect);
            });
          } else {
            this._ndRunSmokeEffect.active = true;
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.playTrail(this._ndRunSmokeEffect);
          }
        }
        /**
         * 攻击的时候隐藏烟雾
         *
         * @memberof Player
         */


        hideRunSmoke() {
          if (this._ndRunSmokeEffect && this._ndRunSmokeEffect.active) {
            this._ndRunSmokeEffect.active = false; // console.log("隐藏烟雾");
          }
        }
        /**
         * 预加载箭
         *
         * @private
         * @memberof GameManager
         */


        preloadArrow(callback) {
          let loadNum = 1;

          let loadArrow = arrowName => {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadModelRes(`weapon/arrow/${arrowName}`).then(prefab => {
              let ndArrow = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndGameManager);
              ndArrow.setWorldPosition(new Vec3(0, 30, 0));
              ndArrow.children.forEach(ndArrowItem => {
                let scriptArrowItem = ndArrowItem.getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                  error: Error()
                }), Arrow) : Arrow);
                scriptArrowItem.init(this._throwArrowSpeed, this.node.worldPosition);
              });
              loadNum -= 1;

              if (loadNum === 0) {
                callback();
              }
            });
          }; //没有技能,默认单只箭


          if (this._arrFormChangeSkill.length) {
            //使用技能
            if (this.isArrowDouble) {
              if (this.isArrowContinuous) {
                loadArrow("arrowDoubleContinuous");
              } else {
                loadArrow("arrowDouble");
              }
            } else {
              if (this.isArrowContinuous) {
                loadArrow("arrowSingleContinuous");
              } else {
                loadArrow("arrowSingle");
              }
            }

            this._arrFormChangeSkill.forEach(item => {
              let skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID("playerSkill", String(item));

              if (item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_REVERSE || item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_SIDE || item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_UMBRELLA) {
                loadNum += 1;
                loadArrow(skillInfo.resName);
              }
            });
          } else {
            //默认连续射单只箭
            loadArrow("arrowSingle");
          }
        }

        _showDie() {
          this.scriptCharacterRigid.stopMove();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.PLAYER_01_DIE);
          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.DIE, false, () => {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).isWin = false;
          });
        }
        /**
         * 玩家复活
         */


        _onRevive() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause = false;
          this.addBlood(this.curHpLimit * 0.5);
          this.scriptBloodBar.node.active = true;
          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.REVIVE, false, () => {
            this.isDie = false;
            this.playAction({
              action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_ACTION.STOP_MOVE
            });
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.MONSTER_MOVE);
          });
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.REVIVE);
        }

        update(deltaTime) {
          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause || this.isDie) {
            return;
          } //玩家旋转


          if (this.isPlayRotate) {
            //当前玩家角度
            this._tempAngle.set(this.node.eulerAngles);

            this._tempAngle.y = this._tempAngle.y < 0 ? this._tempAngle.y + 360 : this._tempAngle.y;
            this.node.eulerAngles = this._tempAngle;

            this._curAngle.set(0, this._tempAngle.y, 0);

            if (this._horizontal === 0 && this._vertical === 0) {
              this._range = 0.1;
            } else {
              this._range = 0.01;
            } //第二个参数越小朝向敌人越精确


            let isEqual = this._curAngle.equals(this._targetAngle, this._range);

            if (!isEqual) {
              Vec3.lerp(this._curAngle, this._curAngle, this._targetAngle, 0.167);
              this.node.eulerAngles = this._curAngle;
            } else {
              this.isPlayRotate = false;
              this.node.eulerAngles = this._targetAngle;
            }
          }

          if (this._horizontal !== 0 || this._vertical !== 0) {
            //计算出旋转角度
            this._rotateDirection.set(this._horizontal, 0, -this._vertical);

            this._rotateDirection.normalize();

            Quat.fromViewUp(qt_0, this._rotateDirection);
            Quat.toEuler(v3_0, qt_0);
            v3_0.y = v3_0.y < 0 ? v3_0.y + 360 : v3_0.y; // console.log("v3_0", v3_0.y);

            this.isPlayRotate = true; //设置当前玩家角度为正数

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

              this._targetAngle.set(0, this._targetAngle.y, 0);

              if (Math.abs(this._targetAngle.y - this._curAngle_2.y) > 180) {
                if (this._targetAngle.y > this._curAngle_2.y) {
                  this._targetAngle.y -= 360;
                } else {
                  this._targetAngle.y += 360;
                }
              } // console.log("this._targetAngle.y", this._targetAngle.y);

            } else {
              this.isPlayRotate = false;
              this.node.eulerAngles = v3_0;
            }

            if (!this.isMoving) {
              return;
            }

            this.scriptCharacterRigid.move(this._rotateDirection.x * this.curMoveSpeed * 0.5 * deltaTime, this._rotateDirection.z * this.curMoveSpeed * 0.5 * deltaTime);

            if (!this.scriptPlayerModel.isRunning && !this.isDie) {
              this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_ANI_TYPE.RUN, true);
            }
          } else {
            if (!this.isDie && !this.scriptPlayerModel.isIdle && !this.scriptPlayerModel.isAttacking) {
              this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_ANI_TYPE.IDLE, true);
              this.scriptCharacterRigid.stopMove();
            }
          }
        } //检查玩家和四周meshRenderer是否碰撞
        // private _checkIsHitWall () {
        //     let isHitObstacle = false;
        //     let aabb1: geometry.AABB = this.meshComPlayer.model?.modelBounds as geometry.AABB;
        //     for (let i = 0; i < GameManager.arrMeshComAn.length; i++) {
        //         const element = GameManager.arrMeshComAn[i];
        //         let aabb2: geometry.AABB = element.model?.modelBounds as geometry.AABB;
        //         let obb1: geometry.OBB = new geometry.OBB();
        //         let obb2: geometry.OBB = new geometry.OBB();
        //         obb1.halfExtents = aabb1.halfExtents;
        //         obb2.halfExtents = aabb2.halfExtents;
        //         obb1.translateAndRotate(this.meshComPlayer.node.worldMatrix, this.meshComPlayer.node.worldRotation, obb1);
        //         obb2.translateAndRotate(element.node.worldMatrix, element.node.worldRotation, obb2);
        //         console.log(geometry.intersect.obbWithOBB(obb1, obb2));  
        //         isHitObstacle = Boolean(geometry.intersect.obbWithOBB(obb1, obb2));
        //         if (isHitObstacle) {
        //             break;
        //         }
        //     }
        //     this._isHitObstacle = isHitObstacle;
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scriptPlayerModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidComPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colliderComPlayer", [_dec4], {
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
//# sourceMappingURL=player.js.map