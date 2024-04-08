System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, Director, PhysicsSystem, geometry, Vec3, physics, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, tmpRay, VerticalRaycast;

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
      director = _cc.director;
      Director = _cc.Director;
      PhysicsSystem = _cc.PhysicsSystem;
      geometry = _cc.geometry;
      Vec3 = _cc.Vec3;
      physics = _cc.physics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bee9ZF+0xGBYvUyQdNwUAq", "verticalRaycast", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      tmpRay = geometry.Ray.create(0, 0, 0, 0, -1, 0);

      _export("VerticalRaycast", VerticalRaycast = (_dec = ccclass('VerticalRaycast'), _dec2 = property({
        type: physics.PhysicsGroup
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VerticalRaycast, _Component);

        function VerticalRaycast() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "group", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = VerticalRaycast.prototype;

        _proto.start = function start() {
          director.on(Director.EVENT_AFTER_PHYSICS, this.raycast, this);
        };

        _proto.raycast = function raycast() {
          var pos = this.node.worldPosition;
          var offsetY = 1; //默认为1;

          var y = pos.y;
          Vec3.copy(tmpRay.o, pos);
          tmpRay.o.y += offsetY;

          if (PhysicsSystem.instance.raycastClosest(tmpRay, this.group, 1.2)) {
            y = PhysicsSystem.instance.raycastClosestResult.hitPoint.y;
          }

          tmpRay.o.y = y;
          this.node.worldPosition = tmpRay.o;
        };

        return VerticalRaycast;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=verticalRaycast.js.map