System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioManager, GameManager, constant, clientEvent, _decorator, Component, game, Game, PhysicsSystem, Node, profiler, playerData, StorageManager, localConfig, util, SdkUtil, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./framework/storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSdkUtil(extras) {
    _reporterNs.report("SdkUtil", "./framework/sdkUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      Game = _cc.Game;
      PhysicsSystem = _cc.PhysicsSystem;
      Node = _cc.Node;
      profiler = _cc.profiler;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      playerData = _unresolved_6.playerData;
    }, function (_unresolved_7) {
      StorageManager = _unresolved_7.StorageManager;
    }, function (_unresolved_8) {
      localConfig = _unresolved_8.localConfig;
    }, function (_unresolved_9) {
      util = _unresolved_9.util;
    }, function (_unresolved_10) {
      SdkUtil = _unresolved_10.SdkUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fbc8GNGL5CfZ4It+SsZdpq", "main", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Main", Main = (_dec = ccclass('Main'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class Main extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ndLoading", _descriptor, this);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
        }

        start() {
          var _instance$getGlobalDa;

          let frameRate = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("frameRate");

          if (typeof frameRate !== "number") {
            frameRate = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).GAME_FRAME; //@ts-ignore

            if (window.wx && (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).checkIsLowPhone()) {
              frameRate = 30;
            }

            (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.setGlobalData("frameRate", frameRate);
          }

          console.log("###frameRate", frameRate);
          game.setFrameRate(frameRate);
          PhysicsSystem.instance.fixedTimeStep = 1 / frameRate;
          let isDebugOpen = (_instance$getGlobalDa = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("debug")) !== null && _instance$getGlobalDa !== void 0 ? _instance$getGlobalDa : false;
          isDebugOpen === true ? profiler.showStats() : profiler.hideStats();
          this.ndLoading.active = true; //@ts-ignore

          if (window.cocosAnalytics) {
            //@ts-ignore
            window.cocosAnalytics.init({
              appID: "605630324",
              // 游戏ID
              version: '1.0.0',
              // 游戏/应用版本号
              storeID: "cocosPlay",
              // 分发渠道
              engine: "cocos" // 游戏引擎

            });
          }

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.loadGlobalCache();

          if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.userId) {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.generateRandomAccount();
            console.log("###生成随机userId", (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.userId);
          }

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.loadFromCache();

          if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo || !(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.createDate) {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.createPlayerInfo();
          } //加载CSV相关配置


          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.loadConfig(() => {
            this._loadFinish();

            (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
              error: Error()
            }), SdkUtil) : SdkUtil).shareGame("奔跑吧巨人", "");
          });
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.init(); //test
          // if (GameManager.isTesting) {
          //     playerData.instance.playerInfo.level = 3;
          //     playerData.instance.savePlayerInfoToLocalCache();
          // }
          //引导
          //GuideManager.instance.start();
          //加载子包
          // SubPackageManager.instance.loadAllPackage();
          //记录离线时间

          game.on(Game.EVENT_HIDE, () => {
            if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.settings) {
              (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                error: Error()
              }), playerData) : playerData).instance.settings = {};
            }

            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.settings.hideTime = Date.now();
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.saveAll();
            (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.save();
          });
        }

        _loadFinish() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isFirstLoad = true;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_GAME_INIT);
        }

        _hideLoadingPanel() {
          if (this.ndLoading.parent) {
            this.ndLoading.removeFromParent();
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndLoading", [_dec2], {
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
//# sourceMappingURL=main.js.map