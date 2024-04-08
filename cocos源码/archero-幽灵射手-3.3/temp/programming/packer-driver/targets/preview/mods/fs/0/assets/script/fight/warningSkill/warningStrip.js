System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, WarningStrip;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a816bqAQNtKtp+4XcORW3SO", "warningStrip", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WarningStrip", WarningStrip = (_dec = ccclass('WarningStrip'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WarningStrip, _Component);

        function WarningStrip() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_scriptParent", null);

          return _this;
        }

        var _proto = WarningStrip.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.init = function init(scale, scriptParent) {
          scriptParent.recycleWarning();
          this._scriptParent = scriptParent;
          this.node.setWorldPosition(scriptParent.node.worldPosition.x, 2.5, scriptParent.node.worldPosition.z);
          this.node.forward = scriptParent.attackForward;
          this.node.setScale(1, 1, scale);
          this.showWarning();
        };

        _proto.showWarning = function showWarning() {};

        _proto.hideWarning = function hideWarning() {
          (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
            error: Error()
          }), poolManager) : poolManager).instance.putNode(this.node);
        };

        return WarningStrip;
      }(Component), _temp)) || _class));
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
//# sourceMappingURL=warningStrip.js.map