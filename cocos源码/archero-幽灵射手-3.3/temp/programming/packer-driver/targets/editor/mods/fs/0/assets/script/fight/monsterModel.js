System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SkeletalAnimationComponent, AnimationClip, constant, GameManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MonsterModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterModel", MonsterModel = (_dec = ccclass('MonsterModel'), _dec2 = property(SkeletalAnimationComponent), _dec(_class = (_class2 = (_temp = class MonsterModel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "aniComPlayer", _descriptor, this);

          _defineProperty(this, "isAniPlaying", false);

          _defineProperty(this, "scriptMonster", null);

          _defineProperty(this, "_aniType", "");

          _defineProperty(this, "_aniState", null);
        }

        //动画播放状态
        //是否正在跑
        get isRunning() {
          return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.RUN && this.isAniPlaying;
        } //是否站立


        get isIdle() {
          return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.IDLE && this.isAniPlaying;
        } //是否正在攻击


        get isAttacking() {
          return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.ATTACK && this.isAniPlaying || this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_1 && this.isAniPlaying || this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.ATTACK_2 && this.isAniPlaying;
        } //是否正在受到攻击


        get isHitting() {
          return this._aniType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MONSTER_ANI_TYPE.HIT && this.isAniPlaying;
          ;
        }

        start() {// [3]
        }
        /**
         * attack动画帧事件
         * @returns 
         */


        onFrameAttack(isNormalAttack = true) {
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


        playAni(aniType, isLoop = false, callback, pos) {
          var _this$aniComPlayer, _this$aniComPlayer2;

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
            this.aniComPlayer.once(SkeletalAnimationComponent.EventType.FINISHED, () => {
              this.isAniPlaying = false;
              callback && callback();
            });
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniComPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=monsterModel.js.map