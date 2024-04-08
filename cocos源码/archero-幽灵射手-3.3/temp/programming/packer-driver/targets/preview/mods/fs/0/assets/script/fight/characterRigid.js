System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constant, _decorator, Component, Vec3, RigidBodyComponent, EPSILON, ColliderComponent, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, v3_0, v3_1, ContactPoint, _ctPool, ContactPool, CharacterRigid;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      RigidBodyComponent = _cc.RigidBodyComponent;
      EPSILON = _cc.EPSILON;
      ColliderComponent = _cc.ColliderComponent;
    }, function (_unresolved_2) {
      constant = _unresolved_2.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "661afbK8/hPNbWGsBzk8GsI", "characterRigid", undefined);

      //角色刚体碰撞检测组件
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      v3_0 = new Vec3();
      v3_1 = new Vec3();

      ContactPoint = /*#__PURE__*/function () {
        function ContactPoint() {
          _defineProperty(this, "point", new Vec3());

          _defineProperty(this, "normal", new Vec3());
        }

        var _proto = ContactPoint.prototype;

        _proto.assign = function assign(ce, c) {
          if (ce.isBodyA) {
            ce.getWorldNormalOnB(this.normal);
            ce.getWorldPointOnA(this.point);
          } else {
            ce.getWorldNormalOnA(this.normal);
            ce.getWorldPointOnB(this.point);
          }

          this.collider = c;
          return this;
        };

        return ContactPoint;
      }();

      _ctPool = [];

      ContactPool = /*#__PURE__*/function () {
        function ContactPool() {}

        ContactPool.getContacts = function getContacts(ces, c, cps) {
          for (var i = 0; i < ces.length; i++) {
            cps.push(this.getContact(ces[i], c));
          }
        };

        ContactPool.getContact = function getContact(ce, c) {
          var cp = _ctPool.length > 0 ? _ctPool.pop() : new ContactPoint();
          return cp.assign(ce, c);
        };

        ContactPool.recyContacts = function recyContacts(cps) {
          var _Array$prototype$push;

          (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [_ctPool].concat(cps));

          cps.length = 0;
        };

        return ContactPool;
      }();

      _export("CharacterRigid", CharacterRigid = (_dec = ccclass('CharacterRigid'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CharacterRigid, _Component);

        function CharacterRigid() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "damping", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gravity", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_rigidBody", null);

          _defineProperty(_assertThisInitialized(_this), "_collider", null);

          _defineProperty(_assertThisInitialized(_this), "_grounded", true);

          _defineProperty(_assertThisInitialized(_this), "_contacts", []);

          _defineProperty(_assertThisInitialized(_this), "_groundContact", null);

          _defineProperty(_assertThisInitialized(_this), "_groundNormal", Vec3.UP.clone());

          _defineProperty(_assertThisInitialized(_this), "_velocity", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curMaxSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_stateX", 0);

          _defineProperty(_assertThisInitialized(_this), "_stateZ", 0);

          return _this;
        }

        var _proto2 = CharacterRigid.prototype;

        _proto2.onLoad = function onLoad() {
          this._rigidBody = this.getComponent(RigidBodyComponent);
          this._collider = this.getComponent(ColliderComponent);
        };

        _proto2.onEnable = function onEnable() {
          this._collider.on('onCollisionEnter', this._onCollision, this);

          this._collider.on('onCollisionStay', this._onCollision, this);

          this._collider.on('onCollisionExit', this._onCollision, this);
        };

        _proto2.onDisable = function onDisable() {
          this._collider.off('onCollisionEnter', this._onCollision, this);

          this._collider.off('onCollisionStay', this._onCollision, this);

          this._collider.off('onCollisionExit', this._onCollision, this);
        };

        _proto2.start = function start() {};

        _proto2.initSpeed = function initSpeed(moveSpeed, ratio) {
          if (ratio === void 0) {
            ratio = 1;
          }

          this._curMaxSpeed = moveSpeed * ratio;
        }
        /**
         * 角色移动传入x和z
         *
         * @param {number} x
         * @param {number} z
         */
        ;

        _proto2.move = function move(x, z) {
          if (x > 0 && this._stateX < 0 || x < 0 && this._stateX > 0 || z > 0 && this._stateZ < 0 || z < 0 && this._stateZ > 0) {
            this.clearVelocity(); // console.log("方向不一致则清除速度,避免惯性太大");
          }

          this._stateX = x;
          this._stateZ = z; // console.log("_stateX", this._stateX, "z", this._stateZ);
        }
        /**
         * 刚体停止移动
         *
         */
        ;

        _proto2.stopMove = function stopMove() {
          this._stateX = 0;
          this._stateZ = 0;
          this.clearVelocity();
        }
        /**
         * 更新刚体状态
         *
         * @private
         * @param {number} dt
         * @return {*} 
         */
        ;

        _proto2._updateCharacter = function _updateCharacter(dt) {
          this.updateFunction(dt);
          if (!this.onGround) return;

          if (this._stateX || this._stateZ) {
            v3_0.set(this._stateX, 0, this._stateZ);
            v3_0.normalize().negative();
            this.rigidMove(v3_0, 1);
          }
        }
        /**
         * 清除移动速度
         */
        ;

        _proto2.clearVelocity = function clearVelocity() {
          this._rigidBody.clearVelocity();
        }
        /**
         * 刚体移动
         *
         * @param {Vec3} dir
         * @param {number} speed
         */
        ;

        _proto2.rigidMove = function rigidMove(dir, speed) {
          this._rigidBody.getLinearVelocity(v3_1);

          Vec3.scaleAndAdd(v3_1, v3_1, dir, speed);
          var ms = this._curMaxSpeed;
          var len = v3_1.lengthSqr();

          if (len > ms) {
            v3_1.normalize();
            v3_1.multiplyScalar(ms);
          }

          this._rigidBody.setLinearVelocity(v3_1); // console.log('setLinearVelocity1' + v3_1);

        }
        /**
         * 刷新
         * @param dt 
         */
        ;

        _proto2.updateFunction = function updateFunction(dt) {
          // if (GameManager.isGameStart && !GameManager.isGameOver && !GameManager.isGamePause) {
          this._updateContactInfo();

          this._applyGravity();

          this._applyDamping();

          this._saveState(); // }

        }
        /**
         * 施加阻尼
         *
         * @private
         * @param {number} [dt=1 / constant.GAME_FRAME]
         */
        ;

        _proto2._applyDamping = function _applyDamping(dt) {
          if (dt === void 0) {
            dt = 1 / (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).GAME_FRAME;
          }

          this._rigidBody.getLinearVelocity(v3_1); // console.log('getLinearVelocity2' + v3_1);


          if (v3_1.lengthSqr() > EPSILON) {
            v3_1.multiplyScalar(Math.pow(1.0 - this.damping, dt));

            this._rigidBody.setLinearVelocity(v3_1); // console.log('setLinearVelocity2' + v3_1);

          }
        }
        /**
         * 施加重力
         *
         * @private
         */
        ;

        _proto2._applyGravity = function _applyGravity() {
          var g = this.gravity;
          var m = this._rigidBody.mass;
          v3_1.set(0, m * g, 0);

          this._rigidBody.applyForce(v3_1);
        }
        /**
         * 获取线性速度
         *
         * @private
         */
        ;

        _proto2._saveState = function _saveState() {
          this._rigidBody.getLinearVelocity(this._velocity); // console.log('getLinearVelocity3' + this._velocity  + ":" + this._grounded);

        }
        /**
         * 更新碰撞信息，判断是否角色着地
         *
         * @private
         */
        ;

        _proto2._updateContactInfo = function _updateContactInfo() {
          this._grounded = false;
          this._groundContact = null;
          var wp = this.node.worldPosition;
          var maxY = -0.001;
          var offsetY = 0.5; //默认为0.1

          for (var i = 0; i < this._contacts.length; i++) {
            var c = this._contacts[i];
            var n = c.normal,
                p = c.point;
            if (n.y <= 0.0001) continue;else {
              if (n.y > maxY && p.y > wp.y - offsetY) {
                this._grounded = true;
                maxY = n.y;
                this._groundContact = c;
              }
            }
          }

          if (this._grounded) {
            Vec3.copy(this._groundNormal, this._groundContact.normal);
          } else {
            Vec3.copy(this._groundNormal, Vec3.UP); // console.log("没着地", this.node.name);
          }

          ContactPool.recyContacts(this._contacts);
        }
        /**
         * 检测碰撞，收集碰撞信息
         *
         * @private
         * @param {ICollisionEvent} event
         */
        ;

        _proto2._onCollision = function _onCollision(event) {
          ContactPool.getContacts(event.contacts, event.selfCollider, this._contacts);
        };

        _proto2.update = function update(dtS) {
          var dt = 1000 / (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).GAME_FRAME;

          this._updateCharacter(dt);
        };

        _createClass(CharacterRigid, [{
          key: "velocity",
          get: function get() {
            return this._velocity;
          }
        }, {
          key: "onGround",
          get: function get() {
            return this._grounded;
          }
        }]);

        return CharacterRigid;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damping", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gravity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=characterRigid.js.map