System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameManager, DebugSkillItem, constant, DebugLevelItem, poolManager, playerData, uiManager, localConfig, _decorator, Component, Node, Prefab, game, PhysicsSystem, profiler, StorageManager, clientEvent, EffectManager, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, DebugPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebugSkillItem(extras) {
    _reporterNs.report("DebugSkillItem", "./debugSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebugLevelItem(extras) {
    _reporterNs.report("DebugLevelItem", "./debugLevelItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "../../framework/storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      game = _cc.game;
      PhysicsSystem = _cc.PhysicsSystem;
      profiler = _cc.profiler;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      DebugSkillItem = _unresolved_3.DebugSkillItem;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      DebugLevelItem = _unresolved_5.DebugLevelItem;
    }, function (_unresolved_6) {
      poolManager = _unresolved_6.poolManager;
    }, function (_unresolved_7) {
      playerData = _unresolved_7.playerData;
    }, function (_unresolved_8) {
      uiManager = _unresolved_8.uiManager;
    }, function (_unresolved_9) {
      localConfig = _unresolved_9.localConfig;
    }, function (_unresolved_10) {
      StorageManager = _unresolved_10.StorageManager;
    }, function (_unresolved_11) {
      clientEvent = _unresolved_11.clientEvent;
    }, function (_unresolved_12) {
      EffectManager = _unresolved_12.EffectManager;
    }, function (_unresolved_13) {
      AudioManager = _unresolved_13.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2be6523odhOBpHGGn8NMbw1", "debugPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DebugPanel", DebugPanel = (_dec = ccclass('DebugPanel'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = (_temp = class DebugPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ndContentLevel", _descriptor, this);

          _initializerDefineProperty(this, "ndContentPlayerSkill", _descriptor2, this);

          _initializerDefineProperty(this, "pbLevelItem", _descriptor3, this);

          _initializerDefineProperty(this, "pbSkillItem", _descriptor4, this);
        }

        start() {// [3]
        }

        show() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause = true;

          this._initLevelView();

          this._initSkillView();
        }
        /**
         * 初始化关卡列表
         *
         * @private
         * @memberof DebugPanel
         */


        _initLevelView() {
          let mapInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr("checkpoint");
          this.ndContentLevel.children.forEach(item => {
            item.active = false;
          });
          mapInfo.forEach((itemInfo, idx, arr) => {
            let ndChild = null;

            if (idx < this.ndContentLevel.children.length) {
              ndChild = this.ndContentLevel.children[idx];
            } else {
              ndChild = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(this.pbLevelItem, this.ndContentLevel);
            }

            ndChild.active = true;
            let scriptDebugLevelItem = ndChild.getComponent(_crd && DebugLevelItem === void 0 ? (_reportPossibleCrUseOfDebugLevelItem({
              error: Error()
            }), DebugLevelItem) : DebugLevelItem);
            scriptDebugLevelItem.init(itemInfo);
          });
        }
        /**
         * 初始化玩家技能列表
         *
         * @private
         * @memberof DebugPanel
         */


        _initSkillView() {
          let playerSkillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr("playerSkill"); //策划说回复生命的不出现在技能列表里面

          playerSkillInfo = playerSkillInfo.concat().filter(item => {
            return item.ID !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RECOVERY;
          });
          this.ndContentPlayerSkill.children.forEach(item => {
            item.active = false;
          });
          playerSkillInfo.forEach((itemInfo, idx, arr) => {
            let ndChild = null;

            if (idx < this.ndContentPlayerSkill.children.length) {
              ndChild = this.ndContentPlayerSkill.children[idx];
            } else {
              ndChild = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(this.pbSkillItem, this.ndContentPlayerSkill);
            }

            ndChild.active = true;
            let scriptDebugLevelItem = ndChild.getComponent(_crd && DebugSkillItem === void 0 ? (_reportPossibleCrUseOfDebugSkillItem({
              error: Error()
            }), DebugSkillItem) : DebugSkillItem);
            scriptDebugLevelItem.init(itemInfo);
          });
        }
        /**
         * 关闭按钮
         *
         * @memberof DebugPanel
         */


        onBtnCloseClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog("debug/debugPanel");
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause = false;
        }
        /**
         * 清除玩家缓存
         *
         * @memberof DebugPanel
         */


        onBtnClearStorageClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo = {};
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.history = {};
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.settings = {};
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.saveAll();
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.jsonData = {};
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.save();
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showTips("游戏缓存已清除，请完全关闭游戏并重新打开！");
        }
        /**
         * 切换30帧
         *
         * @memberof DebugPanel
         */


        onToggleFrame30Click() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showTips("游戏已经切换为30帧");
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData("frameRate", 30);
          game.setFrameRate(30);
          PhysicsSystem.instance.fixedTimeStep = 1 / 30;

          this._showState();
        }
        /**
         * 切换60帧
         *
         * @memberof DebugPanel
         */


        onToggleFrame60Click() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showTips("游戏已经切换为60帧");
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData("frameRate", 60);
          game.setFrameRate(60);
          PhysicsSystem.instance.fixedTimeStep = 1 / 60;

          this._showState();
        }
        /**
         * 清除玩家全部技能
         *
         * @memberof DebugPanel
         */


        onBtnClearPlayerSkillClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.arrSkill = [];
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.savePlayerInfoToLocalCache();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.PARSE_PLAYER_SKILL);

          this._initSkillView();
        }
        /**
         *  拥有玩家全部技能
         *
         * @memberof DebugPanel
         */


        onBtnSelectAllPlayerSkillClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.GET_SKILL);
          let arrSkill = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr("playerSkill");
          let arr = [];
          arrSkill.forEach(item => {
            //生命回复改成在游戏内获得，不通过技能列表获得
            if (item.ID !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RECOVERY) {
              arr.push(item.ID);
            }
          });
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.arrSkill = arr;
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.savePlayerInfoToLocalCache();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.PARSE_PLAYER_SKILL);

          this._initSkillView();

          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playEffect((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer, "levelUp/levelUp");
        }
        /**
         * 切换调试状态
         *
         * @private
         * @memberof DebugPanel
         */


        _showState() {
          var _instance$getGlobalDa;

          let isDebugOpen = (_instance$getGlobalDa = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("debug")) !== null && _instance$getGlobalDa !== void 0 ? _instance$getGlobalDa : false;
          isDebugOpen ? profiler.showStats() : profiler.hideStats();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndContentLevel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndContentPlayerSkill", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pbLevelItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pbSkillItem", [_dec5], {
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
//# sourceMappingURL=debugPanel.js.map