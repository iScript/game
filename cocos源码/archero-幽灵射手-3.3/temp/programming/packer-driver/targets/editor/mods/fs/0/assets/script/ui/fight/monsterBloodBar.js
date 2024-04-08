System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constant, _decorator, Component, UITransformComponent, tween, clamp, Vec3, find, GameManager, poolManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, MonsterBloodBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      find = _cc.find;
    }, function (_unresolved_2) {
      constant = _unresolved_2.constant;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a19fvFDdxLCIBJjW6IGGh4", "monsterBloodBar", undefined);

      //boss和小怪血条组件
      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterBloodBar", MonsterBloodBar = (_dec = ccclass('MonsterBloodBar'), _dec2 = property(UITransformComponent), _dec3 = property(UITransformComponent), _dec4 = property(UITransformComponent), _dec(_class = (_class2 = (_temp = class MonsterBloodBar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "UIComWhiteBar", _descriptor, this);

          _initializerDefineProperty(this, "UIComRedBar", _descriptor2, this);

          _initializerDefineProperty(this, "UIComBloodBar", _descriptor3, this);

          _defineProperty(this, "_whiteBarHeight", 19);

          _defineProperty(this, "_redBarHeight", 19);

          _defineProperty(this, "_totalBlood", 0);

          _defineProperty(this, "_curBlood", 0);

          _defineProperty(this, "_scriptParent", null);

          _defineProperty(this, "_maxWhiteBarWidth", 104);

          _defineProperty(this, "_maxRedBarWidth", 104);

          _defineProperty(this, "_ndTarget", null);

          _defineProperty(this, "_offsetPos", null);

          _defineProperty(this, "_curPos", new Vec3());

          _defineProperty(this, "_isBloodEmpty", false);

          _defineProperty(this, "_isStopMove", false);

          _defineProperty(this, "_prevBloodPos", new Vec3());
        }

        //血量为空前的血条位置
        start() {// [3]
        }
        /**
         * 展示血条
         *
         * @param {*} scriptParent 
         * @param {number} totalBlood
         * @param {Vec3} offsetPos
         * @param {Vec3} scale
         * @param {(Function | null)} [callback]
         * @param {boolean} [isInit=true]
         * @memberof MonsterBloodBar
         */


        show(scriptParent, totalBlood, offsetPos, scale, callback, isInit = true) {
          this._scriptParent = scriptParent;
          this._totalBlood = totalBlood * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).hpAddition;
          this._offsetPos = offsetPos;
          this._ndTarget = scriptParent.node;
          this._isBloodEmpty = false;

          this._prevBloodPos.set(this._ndTarget.worldPosition);

          if (isInit) {
            this._curBlood = this._totalBlood;
          } //当前血量占全部的比例


          let ratio = this._curBlood / this._totalBlood;
          ratio = clamp(ratio, 0, 1); //进度条宽度设置

          this.UIComWhiteBar.setContentSize(ratio * this._maxWhiteBarWidth, this._whiteBarHeight);
          this.UIComRedBar.setContentSize(ratio * this._maxRedBarWidth, this._redBarHeight);
          this.UIComBloodBar.priority = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PRIORITY.BLOOD;
          callback && callback();
        }
        /**
         * 刷新血量
         *
         * @param {number} num 血量值
         * @memberof MonsterBloodBar
         */


        refreshBlood(num) {
          this._curBlood += num;
          let ratio = this._curBlood / this._totalBlood;

          if (num < 0) {
            //减血
            ratio = ratio <= 0 ? 0 : ratio;
            this.UIComRedBar.setContentSize(this._maxRedBarWidth * ratio, this._redBarHeight);

            if (!this._isBloodEmpty) {
              this._isBloodEmpty = ratio <= 0;
              tween(this.UIComWhiteBar).to(0.7, {
                width: this._maxWhiteBarWidth * ratio
              }).call(() => {
                if (this._isBloodEmpty) {
                  (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                    error: Error()
                  }), poolManager) : poolManager).instance.putNode(this.node);
                }
              }).start();

              if (this._isBloodEmpty) {
                this._scriptParent.isDie = true;
              }
            } else {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(this.node);
              this._scriptParent.isDie = true;
            }
          }
        }

        update() {
          if (this.node.parent && this.node.active && this._ndTarget && this._ndTarget.parent) {
            var _mainCamera;

            let worPos = this._ndTarget.worldPosition;

            if (this._isBloodEmpty) {
              worPos = this._prevBloodPos;
            } else {
              this._prevBloodPos.set(worPos);
            }

            (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).mainCamera) === null || _mainCamera === void 0 ? void 0 : _mainCamera.convertToUINode(worPos, find("Canvas"), this._curPos);

            this._curPos.add(this._offsetPos);

            this.node.setPosition(this._curPos);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIComWhiteBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UIComRedBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "UIComBloodBar", [_dec4], {
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
//# sourceMappingURL=monsterBloodBar.js.map