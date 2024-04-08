System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SkeletalAnimationComponent, AnimationClip, constant, GameManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MonsterModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      constant = _unresolved_2.constant;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15aa8oJcxdFKKBQnRjjhjLX", "monsterModel", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MonsterModel", MonsterModel = (_dec = ccclass('MonsterModel'), _dec2 = property(SkeletalAnimationComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MonsterModel, _Component);

        function MonsterModel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "aniComPlayer", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "isAniPlaying", false);

          _defineProperty(_assertThisInitialized(_this), "scriptMonster", null);

          _defineProperty(_assertThisInitialized(_this), "_aniType", "");

          _defineProperty(_assertThisInitialized(_this), "_aniState", null);

          return _this;
        }

        var _proto = MonsterModel.prototype;

        _proto.start = function start() {// [3]
        }
        /**
         * attack动画帧事件
         * @returns 
         */
        ;

        _proto.onFrameAttack = function onFrameAttack(isNormalAttack) {
          if (isNormalAttack === void 0) {
            isNormalAttack = true;
          }

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause) {
            return;
          }

          this.scriptMonster.releaseSkillToPlayer(isNormalAttack);
        }
        /**
         * 播放小怪动画
         *
         * @param {string} aniType 动画类型
         * @param {boolean} [isLoop=false] 是否循环
         * @param {Function} [callback] 回调函数
         * @param {number} [pos] 调用播放动画的位置，方便用于测试
         * @returns
         * @memberof Player
         */
        ;

        _proto.playAni = function playAni(aniType, isLoop, callback, pos) {
          var _this$aniComPlayer,
              _this$aniComPlayer2,
              _this2 = this;

          if (isLoop === void 0) {
            isLoop = false;
          }

          // console.log("monsterAniType", aniType, "curAni", this._aniType, "pos", pos);
          this._aniType = aniType;
          (_this$aniComPlayer = this.aniComPlayer) === null || _this$aniComPlayer === void 0 ? void 0 : _this$aniComPlayer.play(aniType);
          this.isAniPlaying = true;
          this._aniState = (_this$aniComPlayer2 = this.aniComPlayer) === null || _this$aniComPlayer2 === void 0 ? void 0 : _this$aniComPlayer2.getState(aniType);

          if (this._aniState) {
            if (isLoop) {
              this._aniState.wrapMode = AnimationClip.WrapMode.Loop;
            } else {
              this._aniState.wrapMode = AnimationClip.WrapMode.Normal;
            }

            switch (aniType) {
              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.ATTACK:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).attackSpeedAddition * this.scriptMonster.curAttackSpeed;
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_1:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).attackSpeedAddition * this.scriptMonster.curAttackSpeed;
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_2:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).attackSpeedAddition * this.scriptMonster.curAttackSpeed;
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.RUN:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed * (this.scriptMonster.curMoveSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).moveSpeedAddition / this.scriptMonster.baseInfo.moveSpeed);
                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MONSTER_ANI_TYPE.IDLE:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed;
                break;

              default:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed;
                break;
            }
          }

          if (!isLoop) {
            this.aniComPlayer.once(SkeletalAnimationComponent.EventType.FINISHED, function () {
              _this2.isAniPlaying = false;
              callback && callback();
            });
          }
        };

        _createClass(MonsterModel, [{
          key: "isRunning",
          get: //动画播放状态
          //是否正在跑
          function get() {
            return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ANI_TYPE.RUN && this.isAniPlaying;
          } //是否站立

        }, {
          key: "isIdle",
          get: function get() {
            return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ANI_TYPE.IDLE && this.isAniPlaying;
          } //是否正在攻击

        }, {
          key: "isAttacking",
          get: function get() {
            return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ANI_TYPE.ATTACK && this.isAniPlaying || this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_1 && this.isAniPlaying || this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_2 && this.isAniPlaying;
          } //是否正在受到攻击

        }, {
          key: "isHitting",
          get: function get() {
            return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MONSTER_ANI_TYPE.HIT && this.isAniPlaying;
            ;
          }
        }]);

        return MonsterModel;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniComPlayer", [_dec2], {
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
//# sourceMappingURL=monsterModel.js.map