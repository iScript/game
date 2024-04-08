System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, Director, PhysicsSystem, geometry, Vec3, physics, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, tmpRay, VerticalRaycast;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);
      tmpRay = geometry.Ray.create(0, 0, 0, 0, -1, 0);

      _export("VerticalRaycast", VerticalRaycast = (_dec = ccclass('VerticalRaycast'), _dec2 = property({
        type: physics.PhysicsGroup
      }), _dec(_class = (_class2 = (_temp = class VerticalRaycast extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "group", _descriptor, this);
        }

        start() {
          director.on(Director.EVENT_AFTER_PHYSICS, this.raycast, this);
        }

        raycast() {
          const pos = this.node.worldPosition;
          const offsetY = 1; //默认为1;

          let y = pos.y;
          Vec3.copy(tmpRay.o, pos);
          tmpRay.o.y += offsetY;

          if (PhysicsSystem.instance.raycastClosest(tmpRay, this.group, 1.2)) {
            y = PhysicsSystem.instance.raycastClosestResult.hitPoint.y;
          }

          tmpRay.o.y = y;
          this.node.worldPosition = tmpRay.o;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=verticalRaycast.js.map