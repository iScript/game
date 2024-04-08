System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, playerData, _decorator, Component, LabelComponent, SpriteComponent, Color, constant, GameManager, EffectManager, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, DebugSkillItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../fight/gameManager", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      EffectManager = _unresolved_5.EffectManager;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46cbc5Ll/lDvotI3m9eD0Of", "debugSkillItem", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DebugSkillItem", DebugSkillItem = (_dec = ccclass('DebugSkillItem'), _dec2 = property(LabelComponent), _dec3 = property(SpriteComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugSkillItem, _Component);

        function DebugSkillItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "lbLevelTxt", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spCom", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_colorSelected", new Color().fromHEX("#3CE649"));

          _defineProperty(_assertThisInitialized(_this), "_colorUnSelected", new Color().fromHEX("#ffffff"));

          _defineProperty(_assertThisInitialized(_this), "_isSelected", false);

          _defineProperty(_assertThisInitialized(_this), "_level", 0);

          _defineProperty(_assertThisInitialized(_this), "_itemInfo", null);

          return _this;
        }

        var _proto = DebugSkillItem.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.init = function init(itemInfo) {
          this.lbLevelTxt.string = itemInfo.name;
          this._itemInfo = itemInfo;

          this._changeState();
        }
        /**
         * 切换选中与非选中状态
         *
         * @private
         * @memberof DebugSkillItem
         */
        ;

        _proto._changeState = function _changeState() {
          this._isSelected = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.arrSkill.includes(this._itemInfo.ID);

          if (this._isSelected) {
            this.spCom.color = this._colorSelected;
          } else {
            this.spCom.color = this._colorUnSelected;
          }
        };

        _proto.onBtnClick = function onBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.GET_SKILL);

          if (this._isSelected) {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.reducePlayerSkill(this._itemInfo);
          } else {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.addPlayerSkill(this._itemInfo);
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.playEffect((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer, "levelUp/levelUp");
          }

          this._changeState();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return DebugSkillItem;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbLevelTxt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spCom", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=debugSkillItem.js.map