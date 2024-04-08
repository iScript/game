System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameManager, clientEvent, constant, _decorator, Component, UITransformComponent, tween, clamp, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BossBloodBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransformComponent = _cc.UITransformComponent;
      tween = _cc.tween;
      clamp = _cc.clamp;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "320dc/VulBCMLlzDmV4dtU0", "bossBloodBar", undefined);

      //boss血条组件
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BossBloodBar", BossBloodBar = (_dec = ccclass('BossBloodBar'), _dec2 = property(UITransformComponent), _dec3 = property(UITransformComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BossBloodBar, _Component);

        function BossBloodBar() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "UIComWhiteBar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "UIComRedBar", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_whiteBarHeight", 28);

          _defineProperty(_assertThisInitialized(_this), "_redBarHeight", 28);

          _defineProperty(_assertThisInitialized(_this), "_totalBlood", 0);

          _defineProperty(_assertThisInitialized(_this), "_curBlood", 0);

          _defineProperty(_assertThisInitialized(_this), "_maxBossWhiteBarWidth", 560);

          _defineProperty(_assertThisInitialized(_this), "_maxBossRedBarWidth", 560);

          _defineProperty(_assertThisInitialized(_this), "_isBloodEmpty", false);

          return _this;
        }

        var _proto = BossBloodBar.prototype;

        //血条是否为空
        _proto.onEnable = function onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_BOSS_BLOOD, this._refreshBossBlood, this);
        };

        _proto.onDisable = function onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_BOSS_BLOOD, this._refreshBossBlood, this);
        };

        _proto.start = function start() {// [3]
        }
        /**
         * 展示血条
         *
         * @param {*} scriptParent 血条使用者绑定的节点，如玩家或者小怪
         * @param {number} totalBlood 总血量
         * @param {boolean} [isInit=true] 是否是初次展示，初次展示则显示完整血量，否则刷新的时候展示当前血量
         * @memberof BloodBar
         */
        ;

        _proto.show = function show(scriptParent, totalBlood, isInit) {
          if (isInit === void 0) {
            isInit = true;
          }

          this.node.active = true;
          this._totalBlood = totalBlood;
          this._isBloodEmpty = false;

          if (isInit) {
            this._curBlood = this._totalBlood;
          } //当前血量占全部的比例


          var ratio = this._curBlood / this._totalBlood;
          ratio = clamp(ratio, 0, 1); //进度条宽度设置

          this.UIComWhiteBar.setContentSize(ratio * this._maxBossWhiteBarWidth, this._whiteBarHeight);
          this.UIComRedBar.setContentSize(ratio * this._maxBossRedBarWidth, this._redBarHeight);
        }
        /**
         * 刷新boss血量
         *
         * @param {number} num 血量值
         * @memberof BossBloodBar
         */
        ;

        _proto._refreshBossBlood = function _refreshBossBlood(num) {
          var _this2 = this;

          this._curBlood += num;
          var ratio = this._curBlood / this._totalBlood;
          ratio = ratio <= 0 ? 0 : ratio;

          if (num < 0) {
            //减血
            this.UIComRedBar.setContentSize(this._maxBossRedBarWidth * ratio, this._whiteBarHeight);

            if (!this._isBloodEmpty) {
              this._isBloodEmpty = ratio <= 0;
              tween(this.UIComWhiteBar).to(0.7, {
                width: this._maxBossWhiteBarWidth * ratio
              }).call(function () {
                if (ratio <= 0) {
                  _this2.node.active = false;
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).scriptBoss.isDie = true;
                }
              }).start();
            }
          }
        };

        return BossBloodBar;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIComWhiteBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UIComRedBar", [_dec3], {
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
//# sourceMappingURL=bossBloodBar.js.map