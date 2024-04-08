System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, EffectManager, _decorator, Component, constant, AudioManager, _dec, _class, _temp, _crd, ccclass, property, Laser;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
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
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      EffectManager = _unresolved_3.EffectManager;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "504049FuYdEFIRZxBEBstqp", "laser", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property; //激光技能组件

      _export("Laser", Laser = (_dec = ccclass('Laser'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Laser, _Component);

        function Laser() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "skillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "baseInfo", null);

          _defineProperty(_assertThisInitialized(_this), "scriptWarning", null);

          _defineProperty(_assertThisInitialized(_this), "timer", null);

          return _this;
        }

        var _proto = Laser.prototype;

        //
        _proto.start = function start() {// [3]
        };

        _proto.init = function init(skillInfo, baseInfo, scriptParent) {
          var _this2 = this;

          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.node.active = false;

          this._closeTimer();

          this.timer = setTimeout(function () {
            if (!scriptParent.isDie) {
              var _scriptParent$scriptW;

              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SOUND.LASER);
              _this2.node.active = true;
              scriptParent === null || scriptParent === void 0 ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) === null || _scriptParent$scriptW === void 0 ? void 0 : _scriptParent$scriptW.hideWarning();
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playTrail(_this2.node, 0, function () {
                _this2._closeTimer();

                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(_this2.node);
              }, skillInfo.flySpeed);
            } else {
              _this2._closeTimer();
            }
          }, 700);
        };

        _proto._closeTimer = function _closeTimer() {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Laser;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=laser.js.map