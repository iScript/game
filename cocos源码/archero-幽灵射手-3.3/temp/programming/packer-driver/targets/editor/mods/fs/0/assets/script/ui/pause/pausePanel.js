System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, clientEvent, constant, GameManager, uiManager, SkillList, _decorator, Component, Node, SpriteComponent, LabelComponent, SpriteFrame, AudioManager, resourceUtil, playerData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PausePanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillList(extras) {
    _reporterNs.report("SkillList", "./skillList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      uiManager = _unresolved_5.uiManager;
    }, function (_unresolved_6) {
      SkillList = _unresolved_6.SkillList;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }, function (_unresolved_8) {
      resourceUtil = _unresolved_8.resourceUtil;
    }, function (_unresolved_9) {
      playerData = _unresolved_9.playerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18bb8GQWdpFobKK4cKvVrXH", "pausePanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PausePanel", PausePanel = (_dec = ccclass('PausePanel'), _dec2 = property(SpriteComponent), _dec3 = property(LabelComponent), _dec4 = property(LabelComponent), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteComponent), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = class PausePanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spSkillIcon", _descriptor, this);

          _initializerDefineProperty(this, "lbSkillName", _descriptor2, this);

          _initializerDefineProperty(this, "lbSkillDesc", _descriptor3, this);

          _initializerDefineProperty(this, "ndSkillList", _descriptor4, this);

          _initializerDefineProperty(this, "sfMusicOn", _descriptor5, this);

          _initializerDefineProperty(this, "sfMusicOff", _descriptor6, this);

          _initializerDefineProperty(this, "spBtnSound", _descriptor7, this);

          _initializerDefineProperty(this, "ndSkillItem", _descriptor8, this);

          _defineProperty(this, "_isMusicOpen", false);
        }

        start() {// [3]
        }

        show() {
          let arrSkill = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.arrSkill;

          if (!arrSkill.length) {
            this.ndSkillItem.active = false;
            this.ndSkillList.active = false;
          } else {
            this.ndSkillItem.active = true;
            this.ndSkillList.active = true;
            let scriptSkillList = this.ndSkillList.getComponent(_crd && SkillList === void 0 ? (_reportPossibleCrUseOfSkillList({
              error: Error()
            }), SkillList) : SkillList);
            scriptSkillList.init(itemInfo => {
              this.lbSkillName.string = itemInfo.name;
              this.lbSkillDesc.string = itemInfo.desc;
              (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                error: Error()
              }), resourceUtil) : resourceUtil).setSpriteFrame(`texture/skillIcon/${itemInfo.icon}`, this.spSkillIcon, err => {});
            });
          }

          this._isMusicOpen = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.getAudioSetting(true);
          this.changeState();
        }

        changeState() {
          if (this._isMusicOpen) {
            this.spBtnSound.spriteFrame = this.sfMusicOn;
          } else {
            this.spBtnSound.spriteFrame = this.sfMusicOff;
          }
        }

        onBtnSoundClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          this._isMusicOpen = !this._isMusicOpen;
          this.changeState();

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

        onBtnHomeClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog("back/backPanel", [() => {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.hideDialog("fight/fightPanel");
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.hideDialog("pause/pausePanel");
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).isGameOver = true;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.RECYCLE_ALL);
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showDialog("home/homePanel");
          }], () => {}, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PRIORITY.WAITING);
        }

        onBtnPlayClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.CLICK);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog("pause/pausePanel");
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause = false;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spSkillIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbSkillName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbSkillDesc", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndSkillList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sfMusicOn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sfMusicOff", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spBtnSound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ndSkillItem", [_dec9], {
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
//# sourceMappingURL=pausePanel.js.map