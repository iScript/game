System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, poolManager, _dec, _class, _temp, _crd, ccclass, property, WarningLine;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "249fettRepLDLPIq30iHueC", "warningLine", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WarningLine", WarningLine = (_dec = ccclass('WarningLine'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WarningLine, _Component);

        function WarningLine() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_scriptParent", null);

          return _this;
        }

        var _proto = WarningLine.prototype;

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
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return WarningLine;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=warningLine.js.map