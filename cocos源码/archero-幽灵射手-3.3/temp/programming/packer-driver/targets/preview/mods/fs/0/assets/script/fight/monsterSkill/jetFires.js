System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, JetFires;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20cb3raNbRA/YYlE7ckG1Nj", "jetFires", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property; //直线范围型的火焰

      _export("JetFires", JetFires = (_dec = ccclass('JetFires'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JetFires, _Component);

        function JetFires() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "skillInfo", null);

          _defineProperty(_assertThisInitialized(_this), "baseInfo", null);

          return _this;
        }

        var _proto = JetFires.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.init = function init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return JetFires;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=jetFires.js.map