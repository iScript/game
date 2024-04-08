System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, util, _decorator, Component, LabelComponent, Vec3, tween, UIOpacityComponent, isValid, SpriteFrame, SpriteComponent, UITransformComponent, Color, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, tips;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../../framework/util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      LabelComponent = _cc.LabelComponent;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      UIOpacityComponent = _cc.UIOpacityComponent;
      isValid = _cc.isValid;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      UITransformComponent = _cc.UITransformComponent;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a91d7M56W1FG4vm4cXb+REy", "tips", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("tips", tips = (_dec = ccclass('tips'), _dec2 = property(LabelComponent), _dec3 = property(SpriteComponent), _dec4 = property(SpriteComponent), _dec5 = property(UIOpacityComponent), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tips, _Component);

        function tips() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "lbTips", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spIcon", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spBg", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "UIOpacityBg", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sfGold", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sfHeart", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_isShow", false);

          _defineProperty(_assertThisInitialized(_this), "_movePos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curTipPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_tipTotalHeight", 0);

          _defineProperty(_assertThisInitialized(_this), "_tipSpeedAddTimes", 0);

          _defineProperty(_assertThisInitialized(_this), "_type", '');

          _defineProperty(_assertThisInitialized(_this), "_uiTipTargetPos", new Vec3(0, 230, 0));

          return _this;
        }

        var _proto = tips.prototype;

        //文字提示目标位置
        _proto.start = function start() {};

        _proto.show = function show(content, type, targetPos, scale, callback) {
          var _this$lbTips,
              _this$lbTips$node,
              _this$lbTips$node$get,
              _this2 = this;

          if (callback === void 0) {
            callback = function callback() {};
          }

          this._type = type;
          this.node.setScale(new Vec3(scale, scale, scale));
          var size = (_this$lbTips = this.lbTips) === null || _this$lbTips === void 0 ? void 0 : (_this$lbTips$node = _this$lbTips.node) === null || _this$lbTips$node === void 0 ? void 0 : (_this$lbTips$node$get = _this$lbTips$node.getComponent(UITransformComponent)) === null || _this$lbTips$node$get === void 0 ? void 0 : _this$lbTips$node$get.contentSize;

          if (!isValid(size)) {
            //size不存在，自我销毁
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.node);
            return;
          }

          this.lbTips.string = content;
          this.lbTips.color = new Color(214, 132, 53, 255);

          if (type === 'gold' || type === 'heart') {
            this.spBg.enabled = false;

            this._movePos.set(0, 0, 0);

            this._curTipPos.set(0, 0, 0);

            this._tipSpeedAddTimes = 0;
            this._tipTotalHeight = 0;
            this._isShow = true;
            this.UIOpacityBg.opacity = 50;

            if (type === 'gold') {
              this.spIcon.spriteFrame = this.sfGold;
            } else if (type === 'heart') {
              this.spIcon.spriteFrame = this.sfHeart;
            }

            this.lbTips.color = new Color(255, 255, 255, 255);
            this.lbTips.string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).formatValue(Number(content));
            tween(this.node).to(1.2, {
              scale: new Vec3(scale, scale, scale)
            }, {
              easing: 'smooth'
            }).start();
            tween(this.UIOpacityBg).to(0.8, {
              opacity: 255
            }, {
              easing: 'smooth'
            }).to(0.4, {
              opacity: 0
            }, {
              easing: 'smooth'
            }).call(function () {
              _this2._isShow = false;
              callback && callback();
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(_this2.node);
            }).start();
          } else {
            //纯文字提示
            this.spBg.enabled = true;
            this.UIOpacityBg.opacity = 255;
            this.node.setPosition(targetPos);
            this.spIcon.node.active = false;
            this.scheduleOnce(function () {
              tween(_this2.node).to(1.1, {
                position: _this2._uiTipTargetPos
              }, {
                easing: 'smooth'
              }).call(function () {
                callback && callback();
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(_this2.node);
              }).start();
              tween(_this2.UIOpacityBg).to(0.7, {
                opacity: 220
              }, {
                easing: 'smooth'
              }).to(0.4, {
                opacity: 0
              }, {
                easing: 'smooth'
              }).call(function () {}).start();
            }, 0.8);
          }
        };

        _proto.update = function update(deltaTime) {// Your update function goes here.
          // if ((this.type === 'gold' || this.type === 'heart') && this.isShow && this.tipTotalHeight <= 70) {
          //     GameManager.mainCamera.convertToUINode(this.targetPos, find('Canvas') as Node, this.movePos);
          //     this.tipSpeedAddTimes += deltaTime * 10;
          //     let ratio = 0.020 - this.tipSpeedAddTimes * 0.01;
          //     ratio = ratio <= 0.01 ? 0.01 : ratio 
          //     let tipSpeed = Math.pow(this.tipSpeedAddTimes, 3) * ratio;
          //     this.tipTotalHeight += tipSpeed;
          //     this.curTipPos.add3f(0, tipSpeed,0);
          //     this.movePos.add(this.curTipPos);
          //     this.node.setPosition(this.movePos);
          // }
        };

        return tips;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "UIOpacityBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sfGold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sfHeart", [_dec7], {
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
//# sourceMappingURL=tips.js.map