System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, ParticleSystemComponent, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, Test;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b6adRTWCtEz5SjJi1RaOm5", "test", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property([Node]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Test, _Component);

        function Test() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "speed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "range", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "arrNdTarget", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_arrOriPos", []);

          _defineProperty(_assertThisInitialized(_this), "_arrArriveEnd", []);

          return _this;
        }

        var _proto = Test.prototype;

        _proto.start = function start() {
          var _this2 = this;

          // [3]
          this._arrOriPos = [];
          this._arrArriveEnd = [];
          this.arrNdTarget.forEach(function (ndItem) {
            _this2._arrOriPos.push(ndItem.worldPosition.clone());
          });
        };

        _proto._resetAllPos = function _resetAllPos() {
          var _this3 = this;

          this.arrNdTarget.forEach(function (ndItem, idx) {
            ndItem.setWorldPosition(_this3._arrOriPos[idx]); //清除拖尾特效残留

            var arrParticle = ndItem.getComponentsInChildren(ParticleSystemComponent);
            arrParticle.forEach(function (item) {
              item.simulationSpeed = 1;
              item === null || item === void 0 ? void 0 : item.clear();
              item === null || item === void 0 ? void 0 : item.stop();
              item === null || item === void 0 ? void 0 : item.play();
            });
          });
          this._arrArriveEnd = [];
        };

        _proto.update = function update(deltaTime) {
          // [4]
          if (this.arrNdTarget.length) {
            for (var idx = 0; idx < this.arrNdTarget.length; idx++) {
              var ndItem = this.arrNdTarget[idx];
              var pos = ndItem.worldPosition.clone();

              if (pos.length() >= this.range) {
                if (this._arrArriveEnd.indexOf(idx) === -1) {
                  this._arrArriveEnd.push(idx);
                }

                if (this._arrArriveEnd.length >= this.arrNdTarget.length) {
                  this._resetAllPos();

                  break;
                }
              } else {
                ndItem.translate(new Vec3(0, 0, -deltaTime * this.speed), Node.NodeSpace.LOCAL);
              }
            }
          }
        };

        return Test;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "range", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrNdTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=test.js.map