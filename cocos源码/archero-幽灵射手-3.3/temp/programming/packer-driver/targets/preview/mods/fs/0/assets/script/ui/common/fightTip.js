System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, constant, LabelComponent, tween, Vec3, UITransformComponent, view, _decorator, Component, find, util, GameManager, _dec, _class, _temp, _crd, ccclass, property, FightTip;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../fight/gameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      LabelComponent = _cc.LabelComponent;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      UITransformComponent = _cc.UITransformComponent;
      view = _cc.view;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      util = _unresolved_4.util;
    }, function (_unresolved_5) {
      GameManager = _unresolved_5.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4caf7l6Ri5P6JX9Le02LsCW", "fightTip", undefined);

      //战斗血量增减提示组件
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FightTip", FightTip = (_dec = ccclass('FightTip'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FightTip, _Component);

        function FightTip() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_tweenTip", null);

          _defineProperty(_assertThisInitialized(_this), "_costTime", 1.5);

          _defineProperty(_assertThisInitialized(_this), "_arrDirection", (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).objectToArray((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).BLOOD_TIP_DIRECTION));

          _defineProperty(_assertThisInitialized(_this), "_isChangePos", false);

          _defineProperty(_assertThisInitialized(_this), "_targetPos", new Vec3(0, 200, 0));

          _defineProperty(_assertThisInitialized(_this), "_oriWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_oriScale", new Vec3(0.7, 0.7, 0.7));

          _defineProperty(_assertThisInitialized(_this), "_oriAngle", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_scale_1", new Vec3(1, 1, 1));

          _defineProperty(_assertThisInitialized(_this), "_scale_2", new Vec3());

          return _this;
        }

        var _proto = FightTip.prototype;

        //最终缩放
        _proto.start = function start() {// Your initialization goes here.
        }
        /**
         * 展示血量提示
         *
         * @param {*} scriptParent 关联的血条脚本
         * @param {number} tipType 提示类型
         * @param {string} bloodNum 数值
         * @param {Function} [callback] 回调函数
         * @memberof FightTip
         */
        ;

        _proto.show = function show(scriptParent, tipType, bloodNum, callback) {
          var _ndSub$getChildByName,
              _ndSub$getComponent,
              _ndSub$getComponent2,
              _this2 = this;

          this._closeTweenTip();

          this.node.eulerAngles = this._oriAngle;
          this.node.setScale(this._oriScale);
          this._isChangePos = false;

          this._oriWorPos.set(scriptParent.node.worldPosition);

          var arrChildren = this.node.children;
          arrChildren.forEach(function (item) {
            item.active = false;
          });
          var UICom = this.node.getComponent(UITransformComponent);
          UICom.priority = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PRIORITY.BLOOD_TIP;
          bloodNum = Math.round(bloodNum);
          var lbHitNum;
          var ndSub = null;

          if (tipType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).FIGHT_TIP.ADD_BLOOD) {
            ndSub = this.node.getChildByName("addBlood");
          } else if (tipType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).FIGHT_TIP.REDUCE_BLOOD) {
            ndSub = this.node.getChildByName("reduceBlood");
          } else if (tipType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).FIGHT_TIP.CRITICAL_HIT) {
            ndSub = this.node.getChildByName("criticalHit");
            UICom.priority = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PRIORITY.BLOOD_CRITICAL_TIP;
          }

          lbHitNum = (_ndSub$getChildByName = ndSub.getChildByName('num')) === null || _ndSub$getChildByName === void 0 ? void 0 : _ndSub$getChildByName.getComponent(LabelComponent);
          lbHitNum && (lbHitNum.string = String(bloodNum));
          ndSub.active = true;
          var pos = this.node.getPosition();
          var width = (_ndSub$getComponent = ndSub.getComponent(UITransformComponent)) === null || _ndSub$getComponent === void 0 ? void 0 : _ndSub$getComponent.width;
          var height = (_ndSub$getComponent2 = ndSub.getComponent(UITransformComponent)) === null || _ndSub$getComponent2 === void 0 ? void 0 : _ndSub$getComponent2.height;

          if (Math.abs(pos.x) + width / 2 > view.getCanvasSize().width / 2) {
            var w = view.getCanvasSize().width / 2 - width / 2;
            pos.x = pos.x > 0 ? w : -w;
          }

          if (Math.abs(pos.y) + height / 2 > view.getCanvasSize().height / 2) {
            var h = view.getCanvasSize().height / 2 - height / 2;
            pos.y = pos.y > 0 ? h : -h;
          }

          this.node.setPosition(pos);
          this.getTargetPos(scriptParent);
          this._isChangePos = true;
          this._tweenTip = tween(this.node).to(this._costTime * 0.4, {
            scale: this._scale_1
          }, {
            easing: 'smooth'
          }).to(this._costTime * 0.2, {
            scale: this._scale_2
          }, {
            easing: "backIn"
          }).call(function () {
            _this2._closeTweenTip();

            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(_this2.node);
            callback && callback();
            _this2._isChangePos = false;
          }).start();
        }
        /**
         * 获取跟上次血量提示不一样方向的提示
         */
        ;

        _proto.getTargetPos = function getTargetPos(scriptParent) {
          var dir;

          var arr = this._arrDirection.concat();

          arr = arr.filter(function (item) {
            return item !== scriptParent.bloodTipDirection;
          });
          dir = arr[Math.floor(Math.random() * arr.length)];

          switch (dir) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BLOOD_TIP_DIRECTION.LEFT_UP:
              this._targetPos.set(-2, 5, 0);

              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BLOOD_TIP_DIRECTION.MID_UP:
              this._targetPos.set(0, 4, 0);

              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BLOOD_TIP_DIRECTION.RIGHT_UP:
              this._targetPos.set(2, 2, 0);

              break;

            default:
              break;
          }

          this._targetPos.add(scriptParent.node.worldPosition.clone());

          scriptParent.bloodTipDirection = dir;
        };

        _proto._closeTweenTip = function _closeTweenTip() {
          if (this._tweenTip) {
            this._tweenTip.stop();

            this._tweenTip = null;
          }
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          if (this._isChangePos) {
            var _mainCamera;

            this._oriWorPos.lerp(this._targetPos, 0.05);

            (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).mainCamera) === null || _mainCamera === void 0 ? void 0 : _mainCamera.convertToUINode(this._oriWorPos, find('Canvas'), this._curWorPos);
            this.node.setPosition(this._curWorPos);
          }
        };

        return FightTip;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fightTip.js.map