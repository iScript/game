System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, uiManager, AudioManager, SpriteFrame, SpriteComponent, Vec3, profiler, LabelComponent, _decorator, Component, Node, StorageManager, constant, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, SettingPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "../../framework/storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      Vec3 = _cc.Vec3;
      profiler = _cc.profiler;
      LabelComponent = _cc.LabelComponent;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      uiManager = _unresolved_2.uiManager;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      StorageManager = _unresolved_4.StorageManager;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "97ae7Pk189CwayAava/p+Ah", "settingPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettingPanel", SettingPanel = (_dec = ccclass('SettingPanel'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class SettingPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sfSelect", _descriptor, this);

          _initializerDefineProperty(this, "sfUnSelect", _descriptor2, this);

          _initializerDefineProperty(this, "ndBtnVibration", _descriptor3, this);

          _initializerDefineProperty(this, "ndBtnMusic", _descriptor4, this);

          _initializerDefineProperty(this, "ndBtnDebug", _descriptor5, this);

          _defineProperty(this, "_isMusicOpen", false);

          _defineProperty(this, "_isVibrationOpen", false);

          _defineProperty(this, "_isDebugOpen", false);

          _defineProperty(this, "_curDotPos", new Vec3());
        }

        //当前选中点的位置
        start() {// [3]
        }

        show() {
          var _instance$getGlobalDa, _instance$getGlobalDa2;

          this._isMusicOpen = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.getAudioSetting(true);

          this._changeState(this.ndBtnMusic, this._isMusicOpen);

          this._isVibrationOpen = (_instance$getGlobalDa = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("vibration")) !== null && _instance$getGlobalDa !== void 0 ? _instance$getGlobalDa : true;

          this._changeState(this.ndBtnVibration, this._isVibrationOpen);

          this._isDebugOpen = (_instance$getGlobalDa2 = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("debug")) !== null && _instance$getGlobalDa2 !== void 0 ? _instance$getGlobalDa2 : false;

          this._changeState(this.ndBtnDebug, this._isDebugOpen);
        }

        _changeState(ndParget, isOpen) {
          var _ndDot$getChildByName;

          let spCom = ndParget.getComponent(SpriteComponent);
          let ndDot = ndParget.getChildByName("dot");
          let lbTxt = (_ndDot$getChildByName = ndDot.getChildByName("txt")) === null || _ndDot$getChildByName === void 0 ? void 0 : _ndDot$getChildByName.getComponent(LabelComponent);
          let ndDotPos = ndDot.position;

          if (isOpen) {
            spCom.spriteFrame = this.sfSelect;

            this._curDotPos.set(24, ndDotPos.y, ndDotPos.z);

            ndDot.setPosition(this._curDotPos);
            lbTxt.string = "开";
          } else {
            spCom.spriteFrame = this.sfUnSelect;

            this._curDotPos.set(-24, ndDotPos.y, ndDotPos.z);

            ndDot.setPosition(this._curDotPos);
            lbTxt.string = "关";
          }
        }

        onBtnVibrationClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          this._isVibrationOpen = !this._isVibrationOpen;

          this._changeState(this.ndBtnVibration, this._isVibrationOpen);

          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData("vibration", this._isVibrationOpen);
        }

        onBtnMusicClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          this._isMusicOpen = !this._isMusicOpen;

          this._changeState(this.ndBtnMusic, this._isMusicOpen);

          if (this._isMusicOpen) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.openMusic();
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.openSound();
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.closeMusic();
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.closeSound();
          }
        }

        onBtnDebugClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          this._isDebugOpen = !this._isDebugOpen;

          this._changeState(this.ndBtnDebug, this._isDebugOpen);

          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData("debug", this._isDebugOpen);
          this._isDebugOpen === true ? profiler.showStats() : profiler.hideStats();
        }

        onBtnCloseClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog("setting/settingPanel");
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfSelect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfUnSelect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnVibration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnMusic", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnDebug", [_dec6], {
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
//# sourceMappingURL=settingPanel.js.map