System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioManager, util, GameManager, poolManager, _decorator, Component, Node, Vec3, ParticleSystemComponent, math, resourceUtil, constant, _dec, _class, _temp, _crd, ccclass, property, Arrow;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      math = _cc.math;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      poolManager = _unresolved_5.poolManager;
    }, function (_unresolved_6) {
      resourceUtil = _unresolved_6.resourceUtil;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b706mx99ZI/ZmcpsAOpihz", "arrow", undefined);

      //单只弓箭组件
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Arrow", Arrow = (_dec = ccclass('Arrow'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Arrow, _Component);

        function Arrow() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "isAutoRotate", true);

          _defineProperty(_assertThisInitialized(_this), "isArrowLaunch", false);

          _defineProperty(_assertThisInitialized(_this), "_ndBody", null);

          _defineProperty(_assertThisInitialized(_this), "_curSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_targetSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_oriPos", null);

          _defineProperty(_assertThisInitialized(_this), "_oriEulerAngles", null);

          _defineProperty(_assertThisInitialized(_this), "_offsetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_disappearRange", 25);

          _defineProperty(_assertThisInitialized(_this), "_isLoadEffectOver", false);

          _defineProperty(_assertThisInitialized(_this), "_isNeedShowEffect", false);

          _defineProperty(_assertThisInitialized(_this), "_targetWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curEulerAngles", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_oriForward", null);

          _defineProperty(_assertThisInitialized(_this), "_curForward", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_releaseWorPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_offsetPos_1", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_offsetPos_2", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_cross", new Vec3());

          return _this;
        }

        var _proto = Arrow.prototype;

        //两个向量叉乘
        _proto.start = function start() {// [3]
        }
        /**
        * 初始化 
        */
        ;

        _proto.init = function init(speed, releaseWorPos) {
          this._releaseWorPos.set(releaseWorPos);

          if (!this._ndBody) {
            this._ndBody = this.node.getChildByName("body");
          }

          this._isLoadEffectOver = false;
          this._isNeedShowEffect = false;
          this.isArrowLaunch = false; // this.isArrowRebound = false;
          // this.arrowReboundTimes = 0;

          if (!this._oriPos) {
            this._oriPos = this.node.position.clone();
          }

          if (!this._oriEulerAngles) {
            this._oriEulerAngles = this.node.eulerAngles.clone();
          }

          if (!this._oriForward) {
            this._oriForward = this.node.forward.clone();
          }

          this.node.active = false;
          this.node.setPosition(this._oriPos);
          this.node.eulerAngles = this._oriEulerAngles;

          this._curForward.set(this._oriForward);

          this._targetSpeed = speed;
          this._curSpeed = speed * 0.5;

          this._ndBody.children.forEach(function (ndChild) {
            if (ndChild.name.startsWith("arrow")) {
              ndChild.active = false;
            }
          });

          var isHasIce = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowIce;
          var isHasFire = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowFire;
          var isHasLightning = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowLightning; //根据玩家拥有的不同技能展示对应特效

          if (isHasFire || isHasIce || isHasLightning) {
            this._isNeedShowEffect = true;

            if (isHasFire && isHasIce && isHasLightning) {
              this._showTrail("arrowAll");
            } else {
              if (isHasFire && isHasIce || isHasFire && isHasLightning || isHasIce && isHasLightning) {
                if (isHasFire && isHasIce) {
                  this._showTrail("arrowFireIce");

                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SOUND.FIRE);
                } else if (isHasLightning && isHasFire) {
                  this._showTrail("arrowLightningFire");

                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SOUND.LIGHTNING);
                } else if (isHasLightning && isHasIce) {
                  this._showTrail("arrowLightningIce");

                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SOUND.ICE);
                }
              } else {
                if (isHasFire) {
                  this._showTrail("arrowFire");

                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SOUND.FIRE);
                } else if (isHasIce) {
                  this._showTrail("arrowIce");

                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SOUND.ICE);
                } else if (isHasLightning) {
                  this._showTrail("arrowLightning");

                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SOUND.LIGHTNING);
                }
              }
            }
          } else {
            //不展示特效
            this._ndBody.children.forEach(function (ndChild) {
              if (ndChild.name.startsWith("arrow")) {
                ndChild.active = false;
              }
            });

            this.node.active = true;

            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).isGameStart) {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SOUND.LOOSE);
            }
          }
        }
        /**
         * 展示箭的特效拖尾
         *
         * @private
         * @param {string} effectName
         * @memberof Arrow
         */
        ;

        _proto._showTrail = function _showTrail(effectName) {
          var _this2 = this;

          var ndTrail = this._ndBody.getChildByName(effectName);

          if (ndTrail) {
            ndTrail.active = true;
            this.node.active = true;
            this._isLoadEffectOver = true;
          } else {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes("arrow/" + effectName).then(function (pf) {
              ndTrail = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(pf, _this2._ndBody);
              _this2.node.active = true;
              _this2._isLoadEffectOver = true;
            });
          }
        }
        /**
         *  回收弓箭组，在weapon/arrow下
         *
         * @memberof Arrow
         */
        ;

        _proto.recycleArrowGroup = function recycleArrowGroup() {
          if (this.node.parent) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.node.parent);
          }
        }
        /**
         * 击中目标,隐藏箭
         *
         * @memberof Arrow
         */
        ;

        _proto.hideArrow = function hideArrow() {
          var _this$node$parent;

          if (!this.node.parent) {
            return;
          } //清除拖尾特效残留


          var arrParticle = this._ndBody.getComponentsInChildren(ParticleSystemComponent);

          arrParticle.forEach(function (item) {
            item.simulationSpeed = 1;
            item === null || item === void 0 ? void 0 : item.clear();
            item === null || item === void 0 ? void 0 : item.stop();
          });
          this.node.active = false; //如果弓箭组里所有的箭都隐藏了则回收整个弓箭组

          var isAllArrowHide = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.children.every(function (ndArrow) {
            return ndArrow.active === false;
          });

          if (isAllArrowHide) {
            this.recycleArrowGroup();
          }
        }
        /**
         * 箭弹射给一定范围内的某个敌人
         *
         * @param {Node} ndMonster
         * @memberof Arrow
         */
        ;

        _proto.playArrowLaunch = function playArrowLaunch(ndMonster) {
          this.isArrowLaunch = true;
          var arrTargets = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getNearbyMonster(ndMonster);

          if (arrTargets.length) {
            var ndTarget = arrTargets[0];

            this._offsetPos_1.set(this._releaseWorPos.x - this.node.worldPosition.x, 0, this._releaseWorPos.z - this.node.worldPosition.z);

            this._offsetPos_2.set(this.node.worldPosition.x - ndTarget.worldPosition.x, 0, this.node.worldPosition.z - ndTarget.worldPosition.z); //两个向量之间弧度


            var radian = Vec3.angle(this._offsetPos_1, this._offsetPos_2); //角度

            var angle = math.toDegree(radian); //叉乘

            Vec3.cross(this._cross, this._offsetPos_1, this._offsetPos_2); //判断正反角度

            if (this._cross.y > 0) {
              this._curEulerAngles.y = angle;
            } else {
              this._curEulerAngles.y = -angle;
            }

            this.node.eulerAngles = this._curEulerAngles;
          }
        } //箭在目标墙上反弹
        // public playArrowRebound (ndArrow: Node, ndObstacle: Node) {
        //     this.arrowReboundTimes += 1;
        //     //碰撞面对应的法向量
        //     let v_normal_1 = new Vec3();
        //     //旋转后的法向量
        //     let v_normal_2 = new Vec3();
        //     if (ndObstacle.name == "collider1" || ndObstacle.name === "collider2") {
        //         v_normal_1.set(1, 0, 0);
        //     } else {
        //         v_normal_1.set(0, 0, 1);
        //     }
        //     //旋转一定弧度后的法线
        //     Vec3.rotateY(v_normal_2, v_normal_1, new Vec3(), ndObstacle.parent!.eulerAngles.y);
        //     //箭和法线之间的弧度
        //     let radian = Vec3.angle(v_normal_2, new Vec3(ndArrow.worldPosition.x, 0, ndObstacle.parent!.worldPosition.z));
        //     let angle = math.toDegree(radian);
        //     if (angle > 90) {
        //         angle = -270 + angle;
        //     } else {
        //         angle = 90 + angle;
        //     }
        //     this._curEulerAngles.y = angle;
        //     this.node.eulerAngles = this._curEulerAngles;
        // }
        ;

        _proto.update = function update(deltaTime) {
          if (!this.node.parent || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause || this._isNeedShowEffect && !this._isLoadEffectOver) {
            return;
          } //朝forward方向飞行


          this._curSpeed = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).lerp(this._targetSpeed, this._curSpeed, 0.25);

          this._targetWorPos.set(0, 0, -deltaTime * this._curSpeed);

          this.node.translate(this._targetWorPos, Node.NodeSpace.LOCAL);

          this._curWorPos.set(this.node.worldPosition); //超过玩家一定范围则隐藏


          Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);

          if (this._offsetPos && this._offsetPos.length() >= this._disappearRange) {
            this.hideArrow();
          }
        };

        return Arrow;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=arrow.js.map