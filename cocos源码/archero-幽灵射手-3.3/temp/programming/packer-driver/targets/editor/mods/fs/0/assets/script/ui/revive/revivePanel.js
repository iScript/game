System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, playerData, _decorator, Component, Node, SpriteComponent, LabelComponent, UITransformComponent, clientEvent, constant, SdkUtil, uiManager, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, RevivePanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSdkUtil(extras) {
    _reporterNs.report("SdkUtil", "../../framework/sdkUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
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
      UITransformComponent = _cc.UITransformComponent;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      SdkUtil = _unresolved_5.SdkUtil;
    }, function (_unresolved_6) {
      uiManager = _unresolved_6.uiManager;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e234a52wbRAh4xy02FAvDwv", "revivePanel", undefined);

      ({
        ccclass,
        property
      } = _decorator); //复活界面

      _export("RevivePanel", RevivePanel = (_dec = ccclass('RevivePanel'), _dec2 = property(SpriteComponent), _dec3 = property(LabelComponent), _dec4 = property(Node), _dec5 = property(LabelComponent), _dec(_class = (_class2 = (_temp = class RevivePanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spPayIcon", _descriptor, this);

          _initializerDefineProperty(this, "lbLevel", _descriptor2, this);

          _initializerDefineProperty(this, "ndMask", _descriptor3, this);

          _initializerDefineProperty(this, "lbCountDown", _descriptor4, this);

          _defineProperty(this, "_countDown", 10);

          _defineProperty(this, "_maxMaskHeight", 190);

          _defineProperty(this, "_curMaskHeight", 0);

          _defineProperty(this, "_callback", null);
        }

        set countDown(value) {
          var _this$ndMask$getCompo;

          this._countDown = value;
          this.lbCountDown.string = String(Math.floor(this._countDown));
          this.lbLevel.string = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level;
          this._curMaskHeight += this._maxMaskHeight / (this._countDown * 120);
          this._curMaskHeight = this._curMaskHeight >= this._maxMaskHeight ? this._maxMaskHeight : this._curMaskHeight;
          (_this$ndMask$getCompo = this.ndMask.getComponent(UITransformComponent)) === null || _this$ndMask$getCompo === void 0 ? void 0 : _this$ndMask$getCompo.setContentSize(260, this._curMaskHeight);

          if (value < 0) {
            this._close();
          }
        }

        get countDown() {
          return this._countDown;
        }

        start() {// [3]
        }

        show(callback) {
          this._countDown = 10;
          this._curMaskHeight = 0;
          this._callback = callback;
          (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
            error: Error()
          }), SdkUtil) : SdkUtil).updatePayIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_ID.REVIVE, this.spPayIcon);
        }

        onBtnSkipClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);

          this._close();
        }

        onBtnReviveClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
            error: Error()
          }), SdkUtil) : SdkUtil).pay((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_ID.REVIVE, err => {
            if (!err) {
              (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                error: Error()
              }), uiManager) : uiManager).instance.hideDialog("revive/revivePanel");
              (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                error: Error()
              }), uiManager) : uiManager).instance.showDialog("fight/fightPanel");
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).EVENT_TYPE.ON_REVIVE);
            }
          });
        }

        _close() {
          this._callback && this._callback();
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog("revive/revivePanel");
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog("settlement/settlementPanel");
        }

        update(deltaTime) {
          if (this.countDown > 0 && !(_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
            error: Error()
          }), SdkUtil) : SdkUtil).isWatchVideoAd) {
            this.countDown -= deltaTime;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spPayIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbCountDown", [_dec5], {
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
//# sourceMappingURL=revivePanel.js.map