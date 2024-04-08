System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constant, GameManager, poolManager, _decorator, Component, Node, SpriteFrame, Prefab, LayoutComponent, Vec3, find, UITransformComponent, SpriteComponent, tween, clamp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, PlayerBloodBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      Prefab = _cc.Prefab;
      LayoutComponent = _cc.LayoutComponent;
      Vec3 = _cc.Vec3;
      find = _cc.find;
      UITransformComponent = _cc.UITransformComponent;
      SpriteComponent = _cc.SpriteComponent;
      tween = _cc.tween;
      clamp = _cc.clamp;
    }, function (_unresolved_2) {
      constant = _unresolved_2.constant;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f051daFE7VBBrMhCIXIdlGE", "playerBloodBar", undefined);

      //血条组件
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayerBloodBar", PlayerBloodBar = (_dec = ccclass('PlayerBloodBar'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(LayoutComponent), _dec5 = property(UITransformComponent), _dec6 = property(Node), _dec7 = property(UITransformComponent), _dec8 = property(Node), _dec9 = property(SpriteComponent), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(UITransformComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerBloodBar, _Component);

        function PlayerBloodBar() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "lineWidth", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pbLine", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ndContainer", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "layoutContainer", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "UIComWhiteBar", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ndWhiteBar", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "UIComCurBloodBar", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ndCurBloodBar", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spComBloodBar", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sfRed", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sfGreen", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "UIComBloodBar", _descriptor12, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_minBloodBarWidth", 100);

          _defineProperty(_assertThisInitialized(_this), "_bloodBarWidth", 0);

          _defineProperty(_assertThisInitialized(_this), "_minBloodBarItemWidth", 10);

          _defineProperty(_assertThisInitialized(_this), "_maxItemBlood", 200);

          _defineProperty(_assertThisInitialized(_this), "_totalBlood", 0);

          _defineProperty(_assertThisInitialized(_this), "_ndTarget", null);

          _defineProperty(_assertThisInitialized(_this), "_offsetPos", null);

          _defineProperty(_assertThisInitialized(_this), "_curPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curBlood", 0);

          _defineProperty(_assertThisInitialized(_this), "_scriptParent", null);

          _defineProperty(_assertThisInitialized(_this), "_scale", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_bloodBarHeight", 15);

          _defineProperty(_assertThisInitialized(_this), "_oriContainerPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curContainerPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_bloodBarPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_whiteBarPos", new Vec3());

          return _this;
        }

        var _proto = PlayerBloodBar.prototype;

        //白条位置
        _proto.start = function start() {// [3]
        }
        /**
         * 展示血条
         *
         * @param {*} scriptParent 血条使用者绑定的节点，如玩家或者小怪
         * @param {number} totalBlood 总血量
         * @param {number} bloodBarType 血条类型
         * @param {Vec3} offsetPos 血条位置偏差
         * @param {Vec3} scale 血条缩放大小
         * @param {(Function | null)} [callback] 
         * @param {boolean} [isInit=true] 是否是初次展示，初次展示则显示完整血量，否则刷新的时候展示当前血量
         * @memberof BloodBar
         */
        ;

        _proto.show = function show(scriptParent, totalBlood, offsetPos, scale, callback, isInit) {
          var _this2 = this;

          if (isInit === void 0) {
            isInit = true;
          }

          this._scriptParent = scriptParent;
          this._totalBlood = totalBlood;
          this._offsetPos = offsetPos;
          this._scale = scale;
          this._ndTarget = scriptParent.node;
          this.node.setScale(scale);

          if (isInit) {
            this._curBlood = this._totalBlood;
          } //血块数量


          var bloodItemNum = Math.ceil(totalBlood / this._maxItemBlood); //当前血量条最小长度

          this._bloodBarWidth = this._minBloodBarItemWidth * bloodItemNum; //所需血条总宽度大于最小整体血条宽度，需增大血条大小，反之使用最小血条宽度

          var isOutOfRange = this._bloodBarWidth > this._minBloodBarWidth;

          this._oriContainerPos.set(this.ndContainer.position);

          if (isOutOfRange) {
            this._curContainerPos.set(-this._bloodBarWidth * 0.5, this._oriContainerPos.y, 0);

            this.ndContainer.setPosition(this._curContainerPos);
          } else {
            this._bloodBarWidth = this._minBloodBarWidth;
          } //每个间隔线之间的距离，1为它本身的宽度，默认前后不显示


          this.layoutContainer.spacingX = this._bloodBarWidth / bloodItemNum - 1;
          this.ndContainer.children.forEach(function (item) {
            item.active = false;
          }); //当前血量占全部的比例

          var ratio = this._curBlood / this._totalBlood;
          ratio = clamp(ratio, 0, 1); //设置整体大小

          this.UIComBloodBar.setContentSize(this._bloodBarWidth + 2, this._bloodBarHeight);
          this.UIComBloodBar.priority = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PRIORITY.BLOOD; //根据当前血量刷新中间连接线

          for (var i = 0; i < bloodItemNum + 1; i++) {
            var ndLineItem = void 0;

            if (i >= this.ndContainer.children.length) {
              ndLineItem = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(this.pbLine, this.ndContainer);
            } else {
              ndLineItem = this.ndContainer.children[i];
            }

            ndLineItem.active = true;
            var UICom = ndLineItem.getComponent(UITransformComponent);

            if (i % 5 === 0) {
              UICom.setContentSize(1.5, 7);
            } else {
              UICom.setContentSize(1, 5);
            }
          }

          var layCom = this.ndContainer.getComponent(LayoutComponent); //立即执行更新布局

          layCom.updateLayout(); //头尾不展示中间线

          this.ndContainer.children.forEach(function (ndLineItem, i) {
            var spComLine = ndLineItem.getComponent(SpriteComponent);

            if (i === 0 || i === bloodItemNum || ndLineItem.position.x > _this2._bloodBarWidth * ratio) {
              spComLine.enabled = false;
            } else {
              spComLine.enabled = true;
            }
          }); //设置白色进度条长度和位置

          this.UIComWhiteBar.setContentSize(ratio * this._bloodBarWidth, this._bloodBarHeight * 0.8);

          this._whiteBarPos.set(this.ndContainer.position.x, 0.5, this.ndContainer.position.z);

          this.ndWhiteBar.setPosition(this._whiteBarPos); //设置血量进度条长度和位置

          this.UIComCurBloodBar.setContentSize(ratio * this._bloodBarWidth, this._bloodBarHeight * 0.8);

          this._bloodBarPos.set(this.ndContainer.position.x, 0, this.ndContainer.position.z);

          this.ndCurBloodBar.setPosition(this._bloodBarPos);
          callback && callback();
        }
        /**
         * 刷新血量
         *
         * @param {number} num 血量值
         * @param {boolean} [isIncreaseLimit=false] //是否增加上限
         * @memberof PlayerBloodBar
         */
        ;

        _proto.refreshBlood = function refreshBlood(num, isIncreaseLimit) {
          var _this3 = this;

          if (isIncreaseLimit === void 0) {
            isIncreaseLimit = false;
          }

          this._curBlood += num;
          this._curBlood = clamp(this._curBlood, 0, this._totalBlood);
          var ratio = this._curBlood / this._totalBlood;

          if (num < 0) {
            //减血
            ratio = ratio <= 0 ? 0 : ratio;
            this.UIComCurBloodBar.setContentSize(this._bloodBarWidth * ratio, this._bloodBarHeight * 0.8);

            if (ratio > 0) {
              this.ndContainer.children.forEach(function (ndChild) {
                var spComLine = ndChild.getComponent(SpriteComponent);

                if (spComLine.enabled && ndChild.position.x > _this3._bloodBarWidth * ratio) {
                  spComLine.enabled = false;
                }
              });
              tween(this.UIComWhiteBar).to(0.7, {
                width: this._bloodBarWidth * ratio
              }).call(function () {}).start();
            } else {
              // poolManager.instance.putNode(this.node);
              this.node.active = false;
              this._scriptParent.isDie = true;
              this._curBlood = 0;
            }
          } else {
            //加血
            if (isIncreaseLimit) {
              //增加上限,并增加多出来的血量，最多不超过上限
              this._curBlood += num;
              this._totalBlood += num;
              this._curBlood = this._curBlood >= this._totalBlood ? this._totalBlood : this._curBlood;
              ratio = this._curBlood / this._totalBlood;
            } else {
              //普通加血，最多不超过上限                
              ratio = ratio >= 1 ? 1 : ratio;
            }

            tween(this.UIComCurBloodBar).to(1, {
              width: this._bloodBarWidth * ratio
            }).call(function () {
              _this3.show(_this3._scriptParent, _this3._totalBlood, _this3._offsetPos, _this3._scale, null, false);
            }).start();
          }
        };

        _proto.update = function update(deltaTime) {
          // [4]
          //血条跟随人物移动
          if (this.node.parent && this.node.active && this._ndTarget && this._ndTarget.parent) {
            var _mainCamera;

            (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).mainCamera) === null || _mainCamera === void 0 ? void 0 : _mainCamera.convertToUINode(this._ndTarget.worldPosition, find("Canvas"), this._curPos);

            this._curPos.add(this._offsetPos);

            this.node.setPosition(this._curPos);
          }
        };

        return PlayerBloodBar;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pbLine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "layoutContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "UIComWhiteBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ndWhiteBar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "UIComCurBloodBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ndCurBloodBar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spComBloodBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sfRed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sfGreen", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "UIComBloodBar", [_dec12], {
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
//# sourceMappingURL=playerBloodBar.js.map