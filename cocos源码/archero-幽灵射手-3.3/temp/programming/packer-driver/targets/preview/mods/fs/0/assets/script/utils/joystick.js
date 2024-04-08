System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioManager, playerData, constant, GameManager, _decorator, Component, Node, Enum, UITransformComponent, Vec3, view, clientEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, TOUCH_TYPE, DIRECTION_TYPE, screenHeight, Joystick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Enum = _cc.Enum;
      UITransformComponent = _cc.UITransformComponent;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      playerData = _unresolved_3.playerData;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      GameManager = _unresolved_5.GameManager;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce11cUqRdBM+6FZLQY6qG6q", "joystick", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property; //触摸类型

      TOUCH_TYPE = Enum({
        DEFAULT: 0,
        //按钮和背景距离不变，背景位置与触碰点一致，不可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后无法恢复到初始位置
        FOLLOW: 1,
        //按钮和背景距离不变，背景位置与触碰点一致，不可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后恢复到初始位置
        FOLLOW_ALWAYS: 2,
        //按钮和背景距离不变，背景位置与触碰点一致，可改变按钮背景位置，按钮背景随着按钮移动而移动，松手后恢复到初始位置
        FOLLOW_DOT: 3 //按钮和背景距离可改变，按钮位置与触碰点可不一致，不可改变按钮背景位置，按钮背景不随着按钮移动而移动，松手后恢复到初始位置

      }); //方向

      DIRECTION_TYPE = Enum({
        FOUR: 4,
        EIGHT: 8,
        ALL: 0
      });
      screenHeight = view.getVisibleSize().height; //屏幕可视范围高度

      _export("Joystick", Joystick = (_dec = ccclass("Joystick"), _dec2 = property({
        type: Node,
        displayName: '摇杆背景节点'
      }), _dec3 = property({
        type: Node,
        displayName: '摇杆节点'
      }), _dec4 = property({
        type: TOUCH_TYPE,
        displayName: '触摸类型'
      }), _dec5 = property({
        type: DIRECTION_TYPE,
        displayName: '方向类型'
      }), _dec6 = property({
        displayName: '启动半透明'
      }), _dec7 = property({
        displayName: '点击跟随'
      }), _dec8 = property({
        displayName: '内圈大小'
      }), _dec9 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Joystick, _Component);

        function Joystick() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "ndRing", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ndDot", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "touchType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "directionType", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "isEnableTransparent", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "isFollowStart", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "innerSize", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ndTip", _descriptor8, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "onClickCb", null);

          _defineProperty(_assertThisInitialized(_this), "onEndCb", null);

          _defineProperty(_assertThisInitialized(_this), "clearFECb", null);

          _defineProperty(_assertThisInitialized(_this), "onBeginFECb", null);

          _defineProperty(_assertThisInitialized(_this), "onSuccessFECb", null);

          _defineProperty(_assertThisInitialized(_this), "isMoving", false);

          _defineProperty(_assertThisInitialized(_this), "_angle", 0);

          _defineProperty(_assertThisInitialized(_this), "_stickPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_oriRingPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_targetRingPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_touchStartLocation", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_touchMoveLocation", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_touchEndLocation", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_isOutInnerSize", false);

          _defineProperty(_assertThisInitialized(_this), "_distanceRate", 0);

          _defineProperty(_assertThisInitialized(_this), "_checkInterval", 0.04);

          _defineProperty(_assertThisInitialized(_this), "_oldAngle", 0);

          _defineProperty(_assertThisInitialized(_this), "_currentTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_oriDotPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_movePos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curRingPos_1", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curRingPos_2", new Vec3());

          return _this;
        }

        var _proto = Joystick.prototype;

        //
        _proto.start = function start() {
          // Your initialization goes here.
          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level > 1 && this.ndTip.active) {
            this.ndTip.active = false;
          }
        };

        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this._touchStartEvent, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this); // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0

          this.node.on(Node.EventType.TOUCH_END, this._touchEndEvent, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
        };

        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this._touchStartEvent, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this); // 触摸在圆圈内离开或在圆圈外离开后，摇杆归位，player速度为0

          this.node.off(Node.EventType.TOUCH_END, this._touchEndEvent, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this); //重置

          this.isMoving = false;
          this.ndDot.setPosition(this._oriDotPos);
          this.ndRing.setPosition(this._oriRingPos);
        };

        _proto._touchStartEvent = function _touchStartEvent(event) {
          var _this$node$getCompone;

          // 记录触摸的世界坐标，给touch move使用
          // this.dot.opacity = 255;
          this._targetRingPos = null;
          var touch = event.getUILocation();

          this._touchStartLocation.set(touch.x, touch.y, 0);

          var touchPos = (_this$node$getCompone = this.node.getComponent(UITransformComponent)) === null || _this$node$getCompone === void 0 ? void 0 : _this$node$getCompone.convertToNodeSpaceAR(this._touchStartLocation);

          if (this._oriRingPos.length() === 0) {
            this._oriRingPos = this.ndRing.getPosition();
          } // 记录摇杆位置，给touch move使用


          this._stickPos.set(touchPos);

          this._isOutInnerSize = false;

          if (!this.isFollowStart) {
            var _this$ndRing$getCompo, _this$ndRing$getCompo2;

            touchPos = (_this$ndRing$getCompo = this.ndRing.getComponent(UITransformComponent)) === null || _this$ndRing$getCompo === void 0 ? void 0 : _this$ndRing$getCompo.convertToNodeSpaceAR(this._touchStartLocation); //触摸点与圆圈中心的距离

            var distance = touchPos.length();
            var width = (_this$ndRing$getCompo2 = this.ndRing.getComponent(UITransformComponent)) === null || _this$ndRing$getCompo2 === void 0 ? void 0 : _this$ndRing$getCompo2.contentSize.width; //圆圈半径

            var radius = width / 2; //手指在圆圈内触摸,控杆跟随触摸点

            if (radius > distance) {
              this.ndDot.setPosition(touchPos);

              this._updateAngle(touchPos);

              return true;
            }

            return false;
          } else {
            //设置遥感可移动范围
            if (this.touchType === TOUCH_TYPE.FOLLOW) {
              touchPos.y = touchPos.y >= -screenHeight / 6 ? -screenHeight / 6 : touchPos.y;
            }

            this.ndRing.setPosition(touchPos);
          }
        };

        _proto._touchMoveEvent = function _touchMoveEvent(event) {
          var _this$ndRing$getCompo3, _this$ndRing$getCompo4;

          var touch = event.getUILocation();

          this._touchMoveLocation.set(touch.x, touch.y, 0);

          var touchPos = (_this$ndRing$getCompo3 = this.ndRing.getComponent(UITransformComponent)) === null || _this$ndRing$getCompo3 === void 0 ? void 0 : _this$ndRing$getCompo3.convertToNodeSpaceAR(this._touchMoveLocation); // if (this.touchType === TOUCH_TYPE.FOLLOW) {
          //     let offsetPos = cc.v3(touchPos.x - this._stickPos.x, touchPos.y - this._stickPos.y, 0);
          //     touchPos = offsetPos;
          // }

          var distance = touchPos.length();

          if (distance > this.innerSize) {
            this.isMoving = true;
            this._isOutInnerSize = true;
          } else {
            this._isOutInnerSize = false;
          } //有拖动且有角度才视为开始游戏


          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart && this.isMoving) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).isGameStart = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.resumeAll();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.MONSTER_MOVE);

            if (this.ndTip.active) {
              this.ndTip.active = false;
            }

            this._currentTime = this._checkInterval;
          }

          var width = (_this$ndRing$getCompo4 = this.ndRing.getComponent(UITransformComponent)) === null || _this$ndRing$getCompo4 === void 0 ? void 0 : _this$ndRing$getCompo4.contentSize.width; //圆圈半径

          var radius = width / 2;
          var rate = 0; // 由于摇杆的postion是以父节点为锚点，所以定位要加上ring和dot当前的位置(stickX,stickY)

          if (radius > distance) {
            rate = Number((distance / radius).toFixed(3));
            this.ndDot.setPosition(touchPos);
          } else if (this.touchType !== TOUCH_TYPE.FOLLOW_DOT) {
            rate = 1; //控杆永远保持在圈内，并在圈内跟随触摸更新角度

            var radian = Math.atan2(touchPos.y, touchPos.x);
            var x = Math.cos(radian) * radius;
            var y = Math.sin(radian) * radius;

            this._movePos.set(x, y, 0);

            if (this.touchType === TOUCH_TYPE.FOLLOW_ALWAYS) {
              var _this$node$getCompone2;

              this._curRingPos_2.set(touch.x - x, touch.y - y, 0);

              var ringPos = (_this$node$getCompone2 = this.node.getComponent(UITransformComponent)) === null || _this$node$getCompone2 === void 0 ? void 0 : _this$node$getCompone2.convertToNodeSpaceAR(this._curRingPos_2);
              this._targetRingPos = ringPos;
            }

            this.ndDot.setPosition(this._movePos);
          } else {
            // 点跟随移动
            this.ndDot.setPosition(touchPos);
          } //更新角度


          this._updateAngle(touchPos); //更新遥感移动距离百分比


          this._distanceRate = rate;
        };

        _proto._touchEndEvent = function _touchEndEvent(event) {
          if (!this.isMoving) {
            //可以判断为点击
            this.onClickCb && this.onClickCb();
          } else {
            var _this$ndRing$getCompo5;

            var touch = event.getUILocation();

            this._touchEndLocation.set(touch.x, touch.y, 0);

            var touchPos = (_this$ndRing$getCompo5 = this.ndRing.getComponent(UITransformComponent)) === null || _this$ndRing$getCompo5 === void 0 ? void 0 : _this$ndRing$getCompo5.convertToNodeSpaceAR(this._touchEndLocation);
            var isDragToInner = false;

            if (touchPos.length() < this.innerSize) {
              //取消掉
              isDragToInner = true;
              this.onEndCb && this.onEndCb(isDragToInner);
            } else {
              this.onEndCb && this.onEndCb(isDragToInner);
            }
          }

          this.isMoving = false;
          this.ndDot.setPosition(this._oriDotPos);

          if (this.touchType === TOUCH_TYPE.FOLLOW || this.touchType === TOUCH_TYPE.FOLLOW_ALWAYS || this.touchType === TOUCH_TYPE.FOLLOW_DOT) {
            this._targetRingPos = null;
            this.ndRing.setPosition(this._oriRingPos);
          }
        };

        _proto._updateAngle = function _updateAngle(pos) {
          this._angle = Math.round(Math.atan2(pos.y, pos.x) * 180 / Math.PI);
          return this._angle;
        };

        _proto.reset = function reset() {
          this.isMoving = false;
          this.ndDot.setPosition(this._oriDotPos);
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer) {
            return;
          } //设置终终点按钮位置


          if (this._targetRingPos) {
            this._curRingPos_1.set(0, 0, 0);

            Vec3.lerp(this._curRingPos_1, this.ndRing.position, this._targetRingPos, 20 * deltaTime);
            this.ndRing.setPosition(this._curRingPos_1);
          }

          this._currentTime += deltaTime;

          if (this._currentTime >= this._checkInterval) {
            this._currentTime = 0;

            if (this.isMoving) {
              if (this.angle !== this._oldAngle) {
                this._oldAngle = this.angle;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.playAction({
                  action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).PLAYER_ACTION.MOVE,
                  value: this.angle
                });
              }
            } else {
              this.isMoving = false;

              if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).scriptPlayer.isMoving) {
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.playAction({
                  action: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).PLAYER_ACTION.STOP_MOVE
                });
              }
            }
          }
        };

        _createClass(Joystick, [{
          key: "distanceRate",
          get: //是否正在移动
          function get() {
            return this._distanceRate;
          }
        }, {
          key: "angle",
          get: function get() {
            return this._angle;
          },
          set: function set(v) {
            this._angle = v;
          }
        }]);

        return Joystick;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndRing", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndDot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "touchType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TOUCH_TYPE.DEFAULT;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "directionType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DIRECTION_TYPE.ALL;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isEnableTransparent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isFollowStart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "innerSize", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ndTip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=joystick.js.map