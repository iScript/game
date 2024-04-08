System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MapManager, util, AudioManager, EffectManager, playerData, localConfig, PlayerModel, poolManager, clientEvent, _decorator, Component, Quat, Vec3, macro, RigidBodyComponent, CapsuleColliderComponent, geometry, constant, GameManager, resourceUtil, Arrow, uiManager, CharacterRigid, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, qt_0, v3_0, v3_1, v3_2, ray, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(_crd && PlayerModel === void 0 ? (_reportPossibleCrUseOfPlayerModel({
        error: Error()
      }), PlayerModel) : PlayerModel), _dec3 = property(RigidBodyComponent), _dec4 = property(CapsuleColliderComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scriptPlayerModel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "rigidComPlayer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "colliderComPlayer", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "scriptBloodBar", null);

          _defineProperty(_assertThisInitialized(_this), "isMoving", false);

          _defineProperty(_assertThisInitialized(_this), "isPlayRotate", false);

          _defineProperty(_assertThisInitialized(_this), "scriptCharacterRigid", null);

          _defineProperty(_assertThisInitialized(_this), "playerBaseInfo", {});

          _defineProperty(_assertThisInitialized(_this), "isArrowDouble", false);

          _defineProperty(_assertThisInitialized(_this), "isArrowPenetrate", false);

          _defineProperty(_assertThisInitialized(_this), "isArrowContinuous", false);

          _defineProperty(_assertThisInitialized(_this), "isArrowIce", false);

          _defineProperty(_assertThisInitialized(_this), "isArrowFire", false);

          _defineProperty(_assertThisInitialized(_this), "isBloodthirsty", false);

          _defineProperty(_assertThisInitialized(_this), "isArrowLightning", false);

          _defineProperty(_assertThisInitialized(_this), "isArrowLaunch", false);

          _defineProperty(_assertThisInitialized(_this), "curAttackPower", 20);

          _defineProperty(_assertThisInitialized(_this), "curDefensePower", 1);

          _defineProperty(_assertThisInitialized(_this), "curAttackSpeed", 1);

          _defineProperty(_assertThisInitialized(_this), "curDodgeRate", 0);

          _defineProperty(_assertThisInitialized(_this), "curCriticalHitRate", 0);

          _defineProperty(_assertThisInitialized(_this), "curCriticalHitDamage", 0);

          _defineProperty(_assertThisInitialized(_this), "curHpLimit", 0);

          _defineProperty(_assertThisInitialized(_this), "_arrFormChangeSkill", []);

          _defineProperty(_assertThisInitialized(_this), "_arrValueChangeSkill", []);

          _defineProperty(_assertThisInitialized(_this), "_arrBuffSkill", []);

          _defineProperty(_assertThisInitialized(_this), "_arrTriggerSkill", []);

          _defineProperty(_assertThisInitialized(_this), "_hp", 0);

          _defineProperty(_assertThisInitialized(_this), "_isDie", false);

          _defineProperty(_assertThisInitialized(_this), "_horizontal", 0);

          _defineProperty(_assertThisInitialized(_this), "_vertical", 0);

          _defineProperty(_assertThisInitialized(_this), "_targetAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curAngleY", 0);

          _defineProperty(_assertThisInitialized(_this), "_ndTarget", null);

          _defineProperty(_assertThisInitialized(_this), "_throwArrowSpeed", 30);

          _defineProperty(_assertThisInitialized(_this), "_arrowPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_bloodTipOffsetPos", new Vec3(-10, 150, 0));

          _defineProperty(_assertThisInitialized(_this), "_playerMonsterOffset", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_isUseFullAngle", true);

          _defineProperty(_assertThisInitialized(_this), "_oriPlayerPos", new Vec3(0, 1.7, 0));

          _defineProperty(_assertThisInitialized(_this), "_oriPlayerScale", new Vec3(4, 4, 4));

          _defineProperty(_assertThisInitialized(_this), "_oriPlayerAngle", new Vec3(0, -90, 0));

          _defineProperty(_assertThisInitialized(_this), "_curAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curAngle_2", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_rotateDirection", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_ndRunSmokeEffect", null);

          _defineProperty(_assertThisInitialized(_this), "_originAngle", new Vec3(0, -90, 0));

          _defineProperty(_assertThisInitialized(_this), "_tempAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_forWard", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_range", 0.01);

          _defineProperty(_assertThisInitialized(_this), "_curMoveSpeed", 0);

          return _this;
        }

        var _proto = Player.prototype;

        //当前玩家移动速度
        _proto.onEnable = function onEnable() {
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
        };

        _proto.onDisable = function onDisable() {
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
        };

        _proto.start = function start() {};

        _proto.init = function init() {
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
            var arrScale = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).parseStringData(this.playerBaseInfo.scale, ",");

            this._oriPlayerScale.set(arrScale[0], arrScale[1], arrScale[2]);

            this.node.setScale(this._oriPlayerScale);
            this.resetPlayerWorPos(); //设置角度

            var arrAngle = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
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
          }), uiManager) : uiManager).instance.showPlayerBloodBar(this, this._hp, function () {}, this._bloodTipOffsetPos);
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
        ;

        _proto.resetPlayerState = function resetPlayerState() {
          this.rigidComPlayer.clearState();
          this.resetPlayerWorPos();
          this.node.eulerAngles = this._originAngle;
          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.IDLE, true); //将未播放结束的特效节点隐藏，避免到下一层还在展示特效

          this.node.children.forEach(function (ndChild) {
            if (ndChild.name !== "body") {
              ndChild.active = false;
            }
          });
        }
        /**
         * 根据an、anS两张图设置不同的玩家初始位置
         */
        ;

        _proto.resetPlayerWorPos = function resetPlayerWorPos() {
          var arrPosition = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
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
        ;

        _proto._parsePlayerSkill = function _parsePlayerSkill(isCoverSkill) {
          if (isCoverSkill === void 0) {
            isCoverSkill = false;
          }

          var arrSkill = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.arrSkill;
          var arrFormChangeSkill = [];
          var arrValueChangeSkill = [];
          var arrBuffSkill = [];
          var arrTriggerSkill = [];

          if (arrSkill.length) {
            arrSkill.forEach(function (item) {
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
            var oriAttackPower = this.playerBaseInfo.attackPower;
            var curAttackPower = oriAttackPower; //攻击力1

            var raiseAttackPowerRate_1 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_01);
            curAttackPower = oriAttackPower * (1 + raiseAttackPowerRate_1); //攻击力2

            var raiseAttackPowerRate_2 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_02);
            this.curAttackPower = curAttackPower * (1 + raiseAttackPowerRate_2); //闪避率提升百分比

            var oriDodgeRate = this.playerBaseInfo.dodgeRate;
            var raiseDodgeRate = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_DODGE);
            this.curDodgeRate = oriDodgeRate + raiseDodgeRate; //注：以加法形式增加
            //攻速提升百分比

            var oriAttackSpeed = this.playerBaseInfo.attackSpeed;
            var curAttackSpeed = oriAttackSpeed; //攻速1

            var raiseAttackSpeedRate_1 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_SPEED_01);
            curAttackSpeed = oriAttackSpeed * (1 + raiseAttackSpeedRate_1); //攻速2

            var raiseAttackSpeedRate_2 = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_ATTACK_SPEED_02);
            this.curAttackSpeed = curAttackSpeed * (1 + raiseAttackSpeedRate_2);

            if (!isCoverSkill) {
              var oriHpLimit = this.playerBaseInfo.hp;
              var raiseHpLimitRate = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.RAISE_HP_LIMIT);
              var offsetHp = oriHpLimit * raiseHpLimitRate;
              var curHpLimit = oriHpLimit + offsetHp;

              if (curHpLimit > this.curHpLimit) {
                this.addBlood(offsetHp, true);
                this.curHpLimit = curHpLimit;
                this._hp += offsetHp;
              }
            } //移速提升百分比


            var oriMoveSpeed = this.playerBaseInfo.moveSpeed;
            var raiseMoveSpeedRate = this.getValueSkillRate((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.MOVE_SPEED);
            this.curMoveSpeed = oriMoveSpeed * (1 + raiseMoveSpeedRate); //暴击+爆伤提升百分比

            var oriCriticalHitRate = this.playerBaseInfo.criticalHitRate;
            var oriCriticalHitDamage = this.playerBaseInfo.criticalHitDamage;
            var arrCritical_1 = [0, 0]; //暴击率,暴击伤害比

            var arrCritical_2 = [0, 0]; //暴击率,暴击伤害比

            arrCritical_1 = this.getValueSkillRateArr((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_CRITICAL_HIT_DAMAGE_01);
            arrCritical_2 = this.getValueSkillRateArr((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RAISE_CRITICAL_HIT_DAMAGE_02);
            var raiseCriticalHitRate = arrCritical_1[0] + arrCritical_2[0];
            var raiseCriticalHitDamage = arrCritical_1[1] + arrCritical_2[1];

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
        ;

        _proto.getValueSkillRate = function getValueSkillRate(key) {
          var _rate;

          var rate = 0; //百分比

          if (this._arrValueChangeSkill.indexOf(key) !== -1) {
            var skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID("playerSkill", key);
            rate = Number(skillInfo.value);
          }

          return (_rate = rate) !== null && _rate !== void 0 ? _rate : 0;
        }
        /**
         * 返回当前数值技能提升比例数组
         */
        ;

        _proto.getValueSkillRateArr = function getValueSkillRateArr(key) {
          var arrRate = [];

          if (this._arrValueChangeSkill.indexOf(key) !== -1) {
            var skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID("playerSkill", key);
            arrRate = skillInfo.value.split("#");
          }

          arrRate = arrRate.map(function (item) {
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
        ;

        _proto.playAction = function playAction(obj) {
          if (this.isDie) {
            return;
          }

          switch (obj.action) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_ACTION.MOVE:
              var angle = obj.value + 135;
              var radian = angle * macro.RAD;
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
        ;

        _proto._onPlayerStopMove = function _onPlayerStopMove() {
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
        ;

        _proto._attackMonster = function _attackMonster() {
          var _mainCamera,
              _mainCamera2,
              _this2 = this;

          this._ndTarget = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getNearestMonster();

          if (!this._ndTarget || this.isDie) {
            return;
          } //先转向目标小怪


          var screenPos1 = (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) === null || _mainCamera === void 0 ? void 0 : _mainCamera.worldToScreen(this._ndTarget.worldPosition);
          var screenPos2 = (_mainCamera2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) === null || _mainCamera2 === void 0 ? void 0 : _mainCamera2.worldToScreen(this.node.worldPosition);
          Vec3.subtract(this._playerMonsterOffset, screenPos1, screenPos2);
          var angleY = Math.round(Math.atan2(this._playerMonsterOffset.y, this._playerMonsterOffset.x) * 180 / Math.PI); // if (angleY !== this._curAngleY) {

          this.playAction({
            action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_ACTION.MOVE,
            value: angleY
          }); // }

          this.isMoving = false; //再播放攻击动画

          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.ATTACK, false, function () {
            if (!_this2.scriptPlayerModel.isRunning) {
              _this2._attackMonster();
            }
          });
        }
        /**
         * 向敌人射箭
         *
         * @returns
         * @memberof Player
         */
        ;

        _proto.throwArrowToEnemy = function throwArrowToEnemy() {
          var _this3 = this;

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

            this._arrFormChangeSkill.forEach(function (item) {
              var skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID("playerSkill", String(item));

              if (item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_REVERSE || item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_SIDE || item === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).PLAYER_SKILL.ARROW_UMBRELLA) {
                _this3._initArrow(skillInfo.resName);
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
        ;

        _proto._initArrow = function _initArrow(arrowName) {
          var _this4 = this;

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadModelRes("weapon/arrow/" + arrowName).then(function (prefab) {
            if (_this4.isMoving) {
              return;
            }

            var ndArrow = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndGameManager);
            var playerWorPos = _this4.node.worldPosition;

            _this4._arrowPos.set(playerWorPos.x, 3, playerWorPos.z); // if (GameManager.isTesting) {
            //     this._arrowPos.set(playerWorPos.x, -3, playerWorPos.z);
            // }


            ndArrow.setWorldPosition(_this4._arrowPos); // ndArrow.eulerAngles = Vec3.ZERO;
            // ndArrow.eulerAngles = ndArrow.eulerAngles.add(this.node.eulerAngles);

            ndArrow.eulerAngles = _this4.node.eulerAngles;
            ndArrow.children.forEach(function (ndArrowItem) {
              var scriptArrowItem = ndArrowItem.getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                error: Error()
              }), Arrow) : Arrow);
              scriptArrowItem.init(_this4._throwArrowSpeed, _this4.node.worldPosition);
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
        ;

        _proto.addBlood = function addBlood(bloodNum, isIncreaseLimit) {
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
        ;

        _proto.reduceBlood = function reduceBlood(baseInfo) {
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
            var tipType = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).FIGHT_TIP.REDUCE_BLOOD; //敌人扣到

            var damage = baseInfo.attackPower * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).attackAddition * (1 - this.playerBaseInfo.defensePower / (this.playerBaseInfo.defensePower + 400));
            var isCriticalHit = Math.random() <= baseInfo.criticalHitRate; //是否暴击

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
        ;

        _proto.playRunSmoke = function playRunSmoke() {
          var _this5 = this;

          // console.log("展示烟雾");
          if (!this._ndRunSmokeEffect) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes("runSmoke/runSmoke").then(function (pf) {
              _this5._ndRunSmokeEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(pf, _this5.node);
              _this5._ndRunSmokeEffect.active = true;
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playTrail(_this5._ndRunSmokeEffect);
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
        ;

        _proto.hideRunSmoke = function hideRunSmoke() {
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
        ;

        _proto.preloadArrow = function preloadArrow(callback) {
          var _this6 = this;

          var loadNum = 1;

          var loadArrow = function loadArrow(arrowName) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadModelRes("weapon/arrow/" + arrowName).then(function (prefab) {
              var ndArrow = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndGameManager);
              ndArrow.setWorldPosition(new Vec3(0, 30, 0));
              ndArrow.children.forEach(function (ndArrowItem) {
                var scriptArrowItem = ndArrowItem.getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                  error: Error()
                }), Arrow) : Arrow);
                scriptArrowItem.init(_this6._throwArrowSpeed, _this6.node.worldPosition);
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

            this._arrFormChangeSkill.forEach(function (item) {
              var skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
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
        };

        _proto._showDie = function _showDie() {
          this.scriptCharacterRigid.stopMove();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.PLAYER_01_DIE);
          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.DIE, false, function () {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).isWin = false;
          });
        }
        /**
         * 玩家复活
         */
        ;

        _proto._onRevive = function _onRevive() {
          var _this7 = this;

          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause = false;
          this.addBlood(this.curHpLimit * 0.5);
          this.scriptBloodBar.node.active = true;
          this.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PLAYER_ANI_TYPE.REVIVE, false, function () {
            _this7.isDie = false;

            _this7.playAction({
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
        };

        _proto.update = function update(deltaTime) {
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


            var isEqual = this._curAngle.equals(this._targetAngle, this._range);

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
        ;

        _createClass(Player, [{
          key: "isDie",
          get: function get() {
            return this._isDie;
          } //是否拥有形态技能
          ,
          set: //玩家在base.csv的基础数据
          function set(v) {
            this._isDie = v;

            if (this._isDie) {
              this._showDie();
            }
          }
        }, {
          key: "curMoveSpeed",
          get: function get() {
            return this._curMoveSpeed;
          } //技能数组
          ,
          set: //当前玩家生命值上限（这个是上限，是生命上限，不是当前生命值）
          function set(v) {
            this._curMoveSpeed = v;
            this.scriptCharacterRigid.initSpeed(v);
          }
        }]);

        return Player;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scriptPlayerModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidComPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colliderComPlayer", [_dec4], {
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
//# sourceMappingURL=player.js.map