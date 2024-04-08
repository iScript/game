System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, localConfig, GameManager, SkillItem, util, uiManager, constant, playerData, _decorator, Component, Node, SpriteComponent, LabelComponent, SdkUtil, AudioManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, SkillPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillItem(extras) {
    _reporterNs.report("SkillItem", "./skillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSdkUtil(extras) {
    _reporterNs.report("SdkUtil", "../../framework/sdkUtil", _context.meta, extras);
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
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      SkillItem = _unresolved_4.SkillItem;
    }, function (_unresolved_5) {
      util = _unresolved_5.util;
    }, function (_unresolved_6) {
      uiManager = _unresolved_6.uiManager;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }, function (_unresolved_8) {
      playerData = _unresolved_8.playerData;
    }, function (_unresolved_9) {
      SdkUtil = _unresolved_9.SdkUtil;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ccff8loXZRAR5uAetyAqv+L", "skillPanel", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SkillPanel", SkillPanel = (_dec = ccclass('SkillPanel'), _dec2 = property(Node), _dec3 = property(SpriteComponent), _dec4 = property(LabelComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkillPanel, _Component);

        function SkillPanel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "ndSkills", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spRefreshIcon", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lbGold", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_gold", 50);

          _defineProperty(_assertThisInitialized(_this), "_callback", null);

          return _this;
        }

        var _proto = SkillPanel.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.show = function show(callback) {
          var _this2 = this;

          this._callback = callback;
          this.lbGold.string = "\u83B7\u5F97 " + this._gold;
          (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
            error: Error()
          }), SdkUtil) : SdkUtil).updatePayIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_ID.SKILL_REFRESH, this.spRefreshIcon);
          var arrLock = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getLockPlyerSkill();
          arrLock = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).shuffle(arrLock);
          this.ndSkills.children.forEach(function (ndChild, idx, arr) {
            if (arrLock[idx]) {
              var info = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID("playerSkill", arrLock[idx].ID);
              ndChild.active = true;
              var scriptItem = ndChild.getComponent(_crd && SkillItem === void 0 ? (_reportPossibleCrUseOfSkillItem({
                error: Error()
              }), SkillItem) : SkillItem);
              scriptItem.init(info, function () {
                _this2._close();
              });
            } else {
              ndChild.active = false;
            }
          });
        };

        _proto.onBtnGiveUpClick = function onBtnGiveUpClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.SELL);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).addGold(this._gold);

          this._close();
        };

        _proto.onBtnRefreshClick = function onBtnRefreshClick() {
          var _this3 = this;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
            error: Error()
          }), SdkUtil) : SdkUtil).pay((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_ID.SKILL_REFRESH, function (err) {
            if (!err) {
              _this3.show(_this3._callback);
            }
          });
        };

        _proto._close = function _close() {
          this._callback && this._callback();
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog("skill/skillPanel");
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog("fight/fightPanel");
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return SkillPanel;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndSkills", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spRefreshIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbGold", [_dec4], {
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
//# sourceMappingURL=skillPanel.js.map