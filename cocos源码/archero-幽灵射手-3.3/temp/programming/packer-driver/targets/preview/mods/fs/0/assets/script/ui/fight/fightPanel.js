System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, uiManager, BossBloodBar, GameManager, util, playerData, constant, clientEvent, _decorator, Component, Node, LabelComponent, localConfig, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, FightPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossBloodBar(extras) {
    _reporterNs.report("BossBloodBar", "./bossBloodBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
    }, function (_unresolved_2) {
      uiManager = _unresolved_2.uiManager;
    }, function (_unresolved_3) {
      BossBloodBar = _unresolved_3.BossBloodBar;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      util = _unresolved_5.util;
    }, function (_unresolved_6) {
      playerData = _unresolved_6.playerData;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }, function (_unresolved_8) {
      clientEvent = _unresolved_8.clientEvent;
    }, function (_unresolved_9) {
      localConfig = _unresolved_9.localConfig;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f952f4sQGRHoaTmPC6i11vU", "fightPanel", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FightPanel", FightPanel = (_dec = ccclass('FightPanel'), _dec2 = property(Node), _dec3 = property(LabelComponent), _dec4 = property(LabelComponent), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FightPanel, _Component);

        function FightPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "ndJoystick", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lbGold", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lbLevel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ndBossBloodBar", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_debugClickTimes", 0);

          return _this;
        }

        var _proto = FightPanel.prototype;

        //调试点击次数
        _proto.onEnable = function onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_GOLD, this._refreshGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
        };

        _proto.onDisable = function onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_GOLD, this._refreshGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
        };

        _proto.start = function start() {// [3]
        };

        _proto.show = function show() {
          this.ndBossBloodBar.active = false;

          this._refreshGold();

          this._refreshLevel();

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndBoss) {
            var bossInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID("base", (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BASE.BOSS_01);
            var scriptBossBloodBar = this.ndBossBloodBar.getComponent(_crd && BossBloodBar === void 0 ? (_reportPossibleCrUseOfBossBloodBar({
              error: Error()
            }), BossBloodBar) : BossBloodBar);
            scriptBossBloodBar.show((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptBoss, bossInfo.hp);
          }

          this._debugClickTimes = 0;
        };

        _proto._refreshGold = function _refreshGold() {
          this.lbGold.string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).formatMoney((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.gold);
        };

        _proto._refreshLevel = function _refreshLevel() {
          this.lbLevel.string = "\u7B2C" + (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level + "\u5C42";
        };

        _proto.onBtnPauseClick = function onBtnPauseClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog("pause/pausePanel", [], function () {}, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PRIORITY.DIALOG);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause = true;
        };

        _proto.onBtnDebugClick = function onBtnDebugClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          this._debugClickTimes += 1;

          if (this._debugClickTimes >= 1) {
            this._debugClickTimes = 0;
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showDialog("debug/debugPanel", [], function () {}, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PRIORITY.DIALOG);
          }
        };

        return FightPanel;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndJoystick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbGold", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbLevel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndBossBloodBar", [_dec5], {
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
//# sourceMappingURL=fightPanel.js.map