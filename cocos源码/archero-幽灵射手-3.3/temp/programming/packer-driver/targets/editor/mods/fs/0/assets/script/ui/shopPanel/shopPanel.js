System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ShopItem, util, uiManager, constant, playerData, _decorator, Component, Node, SpriteComponent, SdkUtil, localConfig, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ShopPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfShopItem(extras) {
    _reporterNs.report("ShopItem", "./shopItem", _context.meta, extras);
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
      SpriteComponent = _cc.SpriteComponent;
    }, function (_unresolved_2) {
      ShopItem = _unresolved_2.ShopItem;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      uiManager = _unresolved_4.uiManager;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }, function (_unresolved_6) {
      playerData = _unresolved_6.playerData;
    }, function (_unresolved_7) {
      SdkUtil = _unresolved_7.SdkUtil;
    }, function (_unresolved_8) {
      localConfig = _unresolved_8.localConfig;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "434ebEgTgJEaYZMyqxnlnJN", "shopPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShopPanel", ShopPanel = (_dec = ccclass('ShopPanel'), _dec2 = property(Node), _dec3 = property(SpriteComponent), _dec(_class = (_class2 = (_temp = class ShopPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ndSkills", _descriptor, this);

          _initializerDefineProperty(this, "spRefreshIcon", _descriptor2, this);

          _defineProperty(this, "_callback", null);
        }

        start() {// [3]
        }

        show(callback) {
          this._callback = callback;
          (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
            error: Error()
          }), SdkUtil) : SdkUtil).updatePayIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_ID.SHOP_REFRESH, this.spRefreshIcon);
          let arrLock = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getLockPlyerSkill();
          arrLock = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).shuffle(arrLock);
          this.ndSkills.children.forEach((ndChild, idx, arr) => {
            if (arrLock[idx]) {
              let info = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID("playerSkill", arrLock[idx].ID);
              ndChild.active = true;
              let scriptItem = ndChild.getComponent(_crd && ShopItem === void 0 ? (_reportPossibleCrUseOfShopItem({
                error: Error()
              }), ShopItem) : ShopItem);
              scriptItem.init(info, () => {
                this._close();
              });
            } else {
              ndChild.active = false;
            }
          });
        }

        onBtnGiveUpClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);

          this._close();
        }

        onBtnRefreshClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
            error: Error()
          }), SdkUtil) : SdkUtil).pay((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_ID.SHOP_REFRESH, err => {
            if (!err) {
              this.show(this._callback);
            }
          });
        }

        _close() {
          this._callback && this._callback();
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog("shop/shopPanel");
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog("fight/fightPanel");
        }

        onBtnCloseClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);

          this._close();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndSkills", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spRefreshIcon", [_dec3], {
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
//# sourceMappingURL=shopPanel.js.map