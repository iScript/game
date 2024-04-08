System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EffectManager, GameManager, _decorator, Component, SpriteComponent, LabelComponent, Color, ButtonComponent, playerData, resourceUtil, AudioManager, constant, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, ShopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
      Color = _cc.Color;
      ButtonComponent = _cc.ButtonComponent;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      playerData = _unresolved_4.playerData;
    }, function (_unresolved_5) {
      resourceUtil = _unresolved_5.resourceUtil;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "049ebL3+7lNN5+LHpx6ehQr", "shopItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShopItem", ShopItem = (_dec = ccclass('ShopItem'), _dec2 = property(SpriteComponent), _dec3 = property(LabelComponent), _dec4 = property(LabelComponent), _dec5 = property(LabelComponent), _dec6 = property(ButtonComponent), _dec(_class = (_class2 = (_temp = class ShopItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spSkillIcon", _descriptor, this);

          _initializerDefineProperty(this, "lbName", _descriptor2, this);

          _initializerDefineProperty(this, "lbDesc", _descriptor3, this);

          _initializerDefineProperty(this, "lbGold", _descriptor4, this);

          _initializerDefineProperty(this, "btnCom", _descriptor5, this);

          _defineProperty(this, "_callback", null);

          _defineProperty(this, "_itemInfo", null);

          _defineProperty(this, "_colorRed", new Color(255, 0, 0, 255));

          _defineProperty(this, "_colorBlack", new Color(0, 0, 0, 255));

          _defineProperty(this, "_isMoneyEnough", false);
        }

        //是否有足够的钱购买技能 
        start() {// [3]
        }

        init(itemInfo, callback) {
          this._itemInfo = itemInfo;
          this._callback = callback;
          this.lbName.string = itemInfo.name;
          this.lbDesc.string = itemInfo.desc;
          this.lbGold.string = itemInfo.price;
          this._isMoneyEnough = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.gold >= itemInfo.price;
          this.btnCom.interactable = this._isMoneyEnough;

          if (!this._isMoneyEnough) {
            this.lbGold.color = this._colorRed;
          } else {
            this.lbGold.color = this._colorBlack;
          }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).setSpriteFrame(`texture/skillIcon/${itemInfo.icon}`, this.spSkillIcon, err => {});
        }

        onBtnItemClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.SELL);

          if (this._isMoneyEnough) {
            this._callback && this._callback();
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.addPlayerSkill(this._itemInfo);
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).addGold(-this._itemInfo.price);
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.playEffect((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer, "levelUp/levelUp");
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spSkillIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbDesc", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbGold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnCom", [_dec6], {
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
//# sourceMappingURL=shopItem.js.map