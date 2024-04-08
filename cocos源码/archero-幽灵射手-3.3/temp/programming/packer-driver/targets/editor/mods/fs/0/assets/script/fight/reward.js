System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EffectManager, util, poolManager, constant, _decorator, Component, Vec3, Quat, clamp, tween, Enum, clientEvent, GameManager, resourceUtil, AudioManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, REWARD_TYPE, ccclass, property, Reward;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../framework/audioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      clamp = _cc.clamp;
      tween = _cc.tween;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      GameManager = _unresolved_7.GameManager;
    }, function (_unresolved_8) {
      resourceUtil = _unresolved_8.resourceUtil;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b12d072FhMU41q2basHIT2", "reward", undefined);

      //奖品(奖励)组件：金币和爱心
      //奖励类型
      REWARD_TYPE = Enum({
        GOLD: 1,
        //金币
        HEART: 2 //爱心

      });
      ({
        ccclass,
        property
      } = _decorator);

      _export("Reward", Reward = (_dec = ccclass('Reward'), _dec2 = property({
        type: REWARD_TYPE,
        displayOrder: 1
      }), _dec(_class = (_class2 = (_temp = class Reward extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rewardType", _descriptor, this);

          _defineProperty(this, "isDropOver", false);

          _defineProperty(this, "_trialScale", new Vec3(3, 3, 3));

          _defineProperty(this, "_trialPos", new Vec3(0, -0.1, 0));

          _defineProperty(this, "_tweenBounce", null);

          _defineProperty(this, "_curQuat", new Quat());

          _defineProperty(this, "_isAutoRotate", false);

          _defineProperty(this, "_isInhaling", false);

          _defineProperty(this, "_oriScale", null);

          _defineProperty(this, "_ndParent", null);

          _defineProperty(this, "_ndTrial", null);

          _defineProperty(this, "_endTargetPos", new Vec3());

          _defineProperty(this, "_midTargetPos", new Vec3());

          _defineProperty(this, "_stepTargetPos", new Vec3());

          _defineProperty(this, "_upSpeedY", 0.2);

          _defineProperty(this, "_downSpeedY", 0.2);

          _defineProperty(this, "_curSpeedY", 0);

          _defineProperty(this, "_oriWorPos", new Vec3());

          _defineProperty(this, "_isArriveMinPos", false);

          _defineProperty(this, "_rewardWorPos", new Vec3());

          _defineProperty(this, "_playerWorPos", new Vec3());

          _defineProperty(this, "_nextWorPos", new Vec3());

          _defineProperty(this, "_offsetPos", new Vec3());

          _defineProperty(this, "_targetWorPos", new Vec3());

          _defineProperty(this, "_totalFlyTime", 0);

          _defineProperty(this, "_curFlyTime", 0);

          _defineProperty(this, "_raiseTimes", 1);

          _defineProperty(this, "_bouncePos", new Vec3(0, 0.618, 0));

          _defineProperty(this, "_bounceScale", new Vec3(0.2, 0.2, 0.2));
        }

        //回收缓动缩放
        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.INHALE_REWARD, this._inhaleReward, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.INHALE_REWARD, this._inhaleReward, this);
        }

        start() {}

        init(time, ndParent) {
          this._ndParent = ndParent;

          if (this._oriScale) {
            this.node.setScale(this._oriScale);
          } else {
            this._oriScale = this.node.getScale();
          }

          this._isAutoRotate = false;
          this._isInhaling = false;
          this._curSpeedY = this._upSpeedY;

          this._oriWorPos.set(this.node.getWorldPosition().x, 1.65, this.node.getWorldPosition().z);

          this._isArriveMinPos = false;
          this.isDropOver = false;
          this._totalFlyTime = 0;
          this._curFlyTime = 0;
          this._raiseTimes = 1; //依次弹出奖品

          this.scheduleOnce(() => {
            this.show();
          }, time);

          if (!this._ndTrial) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadEffectRes("trail/coinTrail").then(pf => {
              this._ndTrial = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(pf, this.node);
              this._ndTrial.active = false;

              this._ndTrial.setScale(this._trialScale);

              this._ndTrial.setPosition(this._trialPos);
            });
          } else {
            this._ndTrial.active = false;
          }
        }

        show() {
          this.node.active = true;
          let x = Math.random() * 6 - 3; //-3~3

          let y = 4; //最高的高度4~4.5;

          let z = Math.random() * 6 - 3; //-3~3

          this._endTargetPos = this._endTargetPos.set(this._oriWorPos).add3f(x, 0, z);
          this._midTargetPos = this._midTargetPos.set(this._oriWorPos).add3f(x / 2, y, z / 2); // console.log("终点位置", this._endTargetPos, "中间位置", this._midTargetPos);

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SOUND.GOLD_DROP);
        }
        /**
         * 检查所有敌人是否已经击败，且奖品是否都全部掉落完毕
         *
         * @protected
         * @memberof Reward
         */


        _checkMonsterClearOver() {
          let ndTarget = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getNearestMonster();

          if (!ndTarget) {
            let arrReward = this._ndParent.children.filter(ndChild => {
              return ndChild.name === "gold" || ndChild.name === "heart";
            });

            let isAllDropOver = arrReward.every(ndReward => {
              let scriptReward = ndReward.getComponent(Reward);
              return scriptReward.isDropOver === true;
            });

            if (isAllDropOver) {
              console.log("###所有的奖品都已经掉落到地上了");
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).EVENT_TYPE.INHALE_REWARD);
            }
          }
        }
        /**
         * 玩家吸入奖品
         *
         * @protected
         * @memberof Reward
         */


        _inhaleReward() {
          //先弹跳
          this._closeTween();

          this._tweenBounce = tween(this.node).by(0.3, {
            position: this._bouncePos,
            scale: this._bounceScale
          }, {
            easing: "bounceInOut"
          }).call(() => {
            //播放粒子特效，不要勾选粒子的prewarm属性，免得出现概率性没有播放拖尾
            this._ndTrial.active = true;
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.playTrail(this._ndTrial); //再吸入

            this._isInhaling = true;
          }).start();
        }

        _closeTween() {
          if (this._tweenBounce) {
            this._tweenBounce.stop();

            this._tweenBounce = null;
          }
        }
        /**
         *  检查所有奖品是否吸收完毕
         *
         * @protected
         * @memberof Reward
         */


        _checkInhaleOver() {
          let isNoReward = this._ndParent.children.every(ndChild => {
            return ndChild.name !== "gold" && ndChild.name === "heart";
          });

          if (isNoReward) {
            console.log("###已吸入全部奖品");
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.GOLD_COLLECT);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.SHOW_WARP_GATE);
          }
        }

        update(deltaTime) {
          //奖品上下弹跳
          if (!this.isDropOver) {
            this._rewardWorPos.set(this.node.position); //先抬高


            if (!this._isArriveMinPos) {
              this._stepTargetPos = this._rewardWorPos.lerp(this._midTargetPos, 0.03);
              this._curSpeedY = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).lerp(this._upSpeedY, this._curSpeedY, 0.03);
              this._nextWorPos = this._nextWorPos.set(this._stepTargetPos).add3f(0, this._curSpeedY, 0);
              this._nextWorPos.y = clamp(this._nextWorPos.y, 0, this._midTargetPos.y);
              this.node.setPosition(this._nextWorPos); // if (pos.equals(this._midTargetPos, 0.2)) {

              if (this._nextWorPos.y >= this._midTargetPos.y) {
                this._isArriveMinPos = true;
                this._curSpeedY = 0; // console.log("到达中间位置");
              }
            } else {
              //后降落
              this._stepTargetPos = this._rewardWorPos.lerp(this._endTargetPos, 0.02);
              this._curSpeedY = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).lerp(this._downSpeedY, this._curSpeedY, 0.05); // console.log("_upSpeedY", this._curSpeedY);

              this._nextWorPos = this._nextWorPos.set(this._stepTargetPos).add3f(0, -this._curSpeedY, 0);
              this._nextWorPos.y = clamp(this._nextWorPos.y, this._endTargetPos.y, this._midTargetPos.y);
              this.node.setPosition(this._nextWorPos);

              if (this._nextWorPos.equals(this._endTargetPos, 0.3)) {
                this.isDropOver = true; // console.log("到达地板上");

                this._isAutoRotate = true;

                this._checkMonsterClearOver();
              }
            }
          } //奖品落地后自动旋转


          if (this._isAutoRotate) {
            Quat.fromEuler(this._curQuat, 0, 120 * deltaTime, 0);
            this.node.rotate(this._curQuat);
          } //奖品被玩家吸入


          if (this._isInhaling) {
            //位置靠近玩家
            this._playerWorPos.set((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.node.worldPosition);

            this._rewardWorPos.set(this.node.worldPosition); //向量差


            Vec3.subtract(this._offsetPos, this._playerWorPos, this._rewardWorPos);

            if (!this._totalFlyTime) {
              this._totalFlyTime = this._offsetPos.length() / 2;
            } // 由慢到快


            this._raiseTimes += deltaTime;
            let offset = Math.pow(this._raiseTimes, 0.5) - 1;
            this._curFlyTime += deltaTime + offset;
            this._curFlyTime = this._curFlyTime >= this._totalFlyTime ? this._totalFlyTime : this._curFlyTime;
            let percent = Number((this._curFlyTime / this._totalFlyTime).toFixed(2)); // console.log("percent", percent);

            this._targetWorPos.set(this._rewardWorPos.x + this._offsetPos.x * percent, this._playerWorPos.y, this._rewardWorPos.z + this._offsetPos.z * percent);

            this.node.setWorldPosition(this._targetWorPos);

            if (this._targetWorPos.equals(this._playerWorPos, 0.1)) {
              this._isInhaling = false;
              this._ndTrial.active = false;
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(this.node);

              if (this.rewardType === REWARD_TYPE.GOLD) {
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).addGold();
              } else if (this.rewardType === REWARD_TYPE.HEART) {
                //回复5%的血量
                let bloodNum = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.curHpLimit * 0.05;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.addBlood(bloodNum);
              }

              this._checkInhaleOver(); // console.log("吸收奖品");

            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rewardType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return REWARD_TYPE.GOLD;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=reward.js.map