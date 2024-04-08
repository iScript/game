System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, AnimationComponent, ParticleSystemComponent, Vec3, find, AnimationClip, poolManager, resourceUtil, WarningCircle, Reward, WarningStrip, WarningLine, _dec, _class, _class2, _temp, _crd, v3_goldPos, ccclass, property, EffectManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarningCircle(extras) {
    _reporterNs.report("WarningCircle", "../fight/warningSkill/warningCircle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReward(extras) {
    _reporterNs.report("Reward", "../fight/reward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarningStrip(extras) {
    _reporterNs.report("WarningStrip", "../fight/warningSkill/warningStrip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarningLine(extras) {
    _reporterNs.report("WarningLine", "../fight/warningSkill/warningLine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AnimationComponent = _cc.AnimationComponent;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      Vec3 = _cc.Vec3;
      find = _cc.find;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      resourceUtil = _unresolved_3.resourceUtil;
    }, function (_unresolved_4) {
      WarningCircle = _unresolved_4.WarningCircle;
    }, function (_unresolved_5) {
      Reward = _unresolved_5.Reward;
    }, function (_unresolved_6) {
      WarningStrip = _unresolved_6.WarningStrip;
    }, function (_unresolved_7) {
      WarningLine = _unresolved_7.WarningLine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "554baRvdXVCaZZeXFSvvApe", "effectManager", undefined);

      v3_goldPos = new Vec3();
      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectManager", EffectManager = (_dec = ccclass('EffectManager'), _dec(_class = (_temp = _class2 = class EffectManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_ndParent", null);

          _defineProperty(this, "_ndGoldParent", null);
        }

        get ndParent() {
          if (!this._ndParent) {
            this._ndParent = find("effectManager");
          }

          return this._ndParent;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new EffectManager();
          return this._instance;
        }

        start() {}
        /**
         * 播放模型的动画
         * @param {string} path 动画节点路径
         * @param {string} aniName 
         * @param {vec3} worPos 世界坐标
         * @param {boolean} isLoop 是否循环
         * @param {boolean} isRecycle 是否回收
         * @param {number} [scale=1] 缩放倍数 
         * @param {Function} [callback=()=>{}] 回调函数 
         */


        playAni(path, aniName, worPos = new Vec3(), isLoop = false, isRecycle = false, scale = 1, callback = () => {}) {
          let childName = path.split("/")[1];
          let ndEffect = this.ndParent.getChildByName(childName);

          let cb = () => {
            var _ndEffect, _ndEffect2, _ndEffect3;

            (_ndEffect = ndEffect) === null || _ndEffect === void 0 ? void 0 : _ndEffect.setScale(new Vec3(scale, scale, scale));
            (_ndEffect2 = ndEffect) === null || _ndEffect2 === void 0 ? void 0 : _ndEffect2.setWorldPosition(worPos);
            let ani = (_ndEffect3 = ndEffect) === null || _ndEffect3 === void 0 ? void 0 : _ndEffect3.getComponent(AnimationComponent);
            ani.play(aniName);
            let aniState = ani.getState(aniName);

            if (aniState) {
              if (isLoop) {
                aniState.wrapMode = AnimationClip.WrapMode.Loop;
              } else {
                aniState.wrapMode = AnimationClip.WrapMode.Normal;
              }
            }

            ani.once(AnimationComponent.EventType.FINISHED, () => {
              callback && callback();

              if (isRecycle && ndEffect) {
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(ndEffect);
              }
            });
          };

          if (!ndEffect) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadModelRes(path).then(prefab => {
              ndEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, this.ndParent);
              ndEffect.setScale(new Vec3(scale, scale, scale));
              ndEffect.setWorldPosition(worPos);
              cb();
            });
          } else {
            cb();
          }
        }
        /**
         * 移除特效
         * @param {string} name  特效名称
         * @param {Node}} ndParent 特效父节点
         */


        removeEffect(name, ndParent = this.ndParent) {
          let ndEffect = ndParent.getChildByName(name);

          if (ndEffect) {
            let arrAni = ndEffect.getComponentsInChildren(AnimationComponent);
            arrAni.forEach(element => {
              element.stop();
            });
            let arrParticle = ndEffect === null || ndEffect === void 0 ? void 0 : ndEffect.getComponentsInChildren(ParticleSystemComponent);
            arrParticle.forEach(element => {
              element === null || element === void 0 ? void 0 : element.clear();
              element === null || element === void 0 ? void 0 : element.stop();
            });
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(ndEffect);
          }
        }
        /**
         * 播放粒子特效
         * @param {string} path 特效路径
         * @param {vec3}worPos 特效世界坐标 
         * @param {number} [recycleTime=0] 特效节点回收时间，如果为0，则使用默认duration
         * @param  {number} [scale=1] 缩放倍数
         * @param {vec3} eulerAngles 特效角度
         * @param {Function} [callback=()=>{}] 回调函数
         */


        playParticle(path, worPos, recycleTime = 0, scale = 1, eulerAngles, callback) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadEffectRes(path).then(prefab => {
            let ndEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, this.ndParent);
            ndEffect.setScale(new Vec3(scale, scale, scale));
            ndEffect.setWorldPosition(worPos);

            if (eulerAngles) {
              ndEffect.eulerAngles = eulerAngles;
            }

            let maxDuration = 0;
            let arrParticle = ndEffect.getComponentsInChildren(ParticleSystemComponent);
            arrParticle.forEach(item => {
              item.simulationSpeed = 1;
              item === null || item === void 0 ? void 0 : item.clear();
              item === null || item === void 0 ? void 0 : item.stop();
              item === null || item === void 0 ? void 0 : item.play();
              let duration = item.duration;
              maxDuration = duration > maxDuration ? duration : maxDuration;
            });
            let seconds = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;
            setTimeout(() => {
              if (ndEffect.parent) {
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(ndEffect);
                callback && callback();
              }
            }, seconds * 1000);
          });
        }
        /**
         * 播放节点下面的动画和粒子
         *
         * @param {Node} targetNode 特效挂载节点
         * @param {string} effectPath 特效路径
         * @param {boolean} [isPlayAni=true] 是否播放动画
         * @param {boolean} [isPlayParticle=true] 是否播放特效
         * @param {number} [recycleTime=0] 特效节点回收时间，如果为0，则使用默认duration
         * @param {number} [scale=1] 缩放倍数
         * @param {Vec3} [pos=new Vec3()] 位移
         * @param {Function} [callback=()=>{}] 回调函数
         * @returns
         * @memberof EffectManager
         */


        playEffect(targetNode, effectPath, isPlayAni = true, isPlayParticle = true, recycleTime = 0, scale = 1, pos, eulerAngles, callback) {
          if (!targetNode.parent) {
            //父节点被回收的时候不播放
            return;
          }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadEffectRes(effectPath).then(prefab => {
            let ndEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, targetNode);
            ndEffect.setScale(new Vec3(scale, scale, scale));

            if (pos) {
              ndEffect.setPosition(pos);
            }

            if (eulerAngles) {
              ndEffect.eulerAngles = eulerAngles;
            }

            let maxDuration = 0;

            if (isPlayAni) {
              let arrAni = ndEffect.getComponentsInChildren(AnimationComponent);
              arrAni.forEach((element, idx) => {
                var _element$defaultClip;

                element === null || element === void 0 ? void 0 : element.play();
                let aniName = element === null || element === void 0 ? void 0 : (_element$defaultClip = element.defaultClip) === null || _element$defaultClip === void 0 ? void 0 : _element$defaultClip.name;

                if (aniName) {
                  let aniState = element.getState(aniName);

                  if (aniState) {
                    let duration = aniState.duration;
                    maxDuration = duration > maxDuration ? duration : maxDuration;
                    aniState.speed = 1;
                  }
                }
              });
            }

            if (isPlayParticle) {
              let arrParticle = ndEffect.getComponentsInChildren(ParticleSystemComponent);
              arrParticle.forEach(element => {
                element.simulationSpeed = 1;
                element === null || element === void 0 ? void 0 : element.clear();
                element === null || element === void 0 ? void 0 : element.stop();
                element === null || element === void 0 ? void 0 : element.play();
                let duration = element.duration;
                maxDuration = duration > maxDuration ? duration : maxDuration;
              });
            }

            let seconds = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;
            setTimeout(() => {
              if (ndEffect.parent) {
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(ndEffect);
                callback && callback();
              }
            }, seconds * 1000);
          });
        }
        /**
         * 展示奖励(金币、爱心)弹跳
         *
         * @param {Node} ndMonster
         * @param {string} modelPath
         * @param {number} [rewardNum=1]
         * @param {Function} [callback=()=>{}]
         * @memberof EffectManager
         */


        showRewardBounce(ndMonster, modelPath, rewardNum = 1, callback = () => {}) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadModelRes(modelPath).then(pf => {
            for (let i = 0; i < rewardNum; i++) {
              let ndReward = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(pf, this.ndParent);
              ndReward.setWorldPosition(ndMonster.worldPosition.x, 1.65, ndMonster.worldPosition.z);
              ndReward.active = false;
              let scriptReward = ndReward.getComponent(_crd && Reward === void 0 ? (_reportPossibleCrUseOfReward({
                error: Error()
              }), Reward) : Reward);
              scriptReward.init((i + 1) * 0.15, this.ndParent);
            }

            callback && callback();
          });
        }
        /**
         * 播放拖尾特效
         *
         * @param {Node} ndParent
         * @memberof EffectManager
         */


        playTrail(ndParent, recycleTime = 0, callback, speed = 1) {
          let maxDuration = 0;
          let arrParticle = ndParent.getComponentsInChildren(ParticleSystemComponent);
          arrParticle.forEach(element => {
            element.simulationSpeed = speed;
            element === null || element === void 0 ? void 0 : element.clear();
            element === null || element === void 0 ? void 0 : element.stop();
            element === null || element === void 0 ? void 0 : element.play();
            let duration = element.duration;
            maxDuration = duration > maxDuration ? duration : maxDuration;
          });
          let seconds = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;
          setTimeout(() => {
            callback && callback();
          }, seconds * 1000);
        }
        /**
         * 展示预警
         *
         * @param {string} warningName
         * @param {number} scale
         * @param {*} scriptParent
         * @memberof EffectManager
         */


        showWarning(warningName, scale, scriptParent, callback) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadEffectRes(`warning/${warningName}`).then(pf => {
            let ndWarning = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(pf, this.ndParent);
            let scriptWarning = null;

            if (warningName === "warningLine") {
              scriptWarning = ndWarning.getComponent(_crd && WarningLine === void 0 ? (_reportPossibleCrUseOfWarningLine({
                error: Error()
              }), WarningLine) : WarningLine);
            } else if (warningName === "warningStrip") {
              scriptWarning = ndWarning.getComponent(_crd && WarningStrip === void 0 ? (_reportPossibleCrUseOfWarningStrip({
                error: Error()
              }), WarningStrip) : WarningStrip);
            } else if (warningName === "warningCircle") {
              scriptWarning = ndWarning.getComponent(_crd && WarningCircle === void 0 ? (_reportPossibleCrUseOfWarningCircle({
                error: Error()
              }), WarningCircle) : WarningCircle);
            }

            scriptWarning.init(scale, scriptParent);
            scriptParent.scriptWarning = scriptWarning;
            callback && callback();
          });
        }

        showLightningChain(ndParent, ndTarget) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadEffectRes(`lightningChain/lightningChain`).then(pf => {
            let ndEffect = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(pf, ndParent);
            ndEffect.setWorldPosition(new Vec3(ndParent.worldPosition.x, 2.3, ndParent.worldPosition.z));
            let offsetPos = new Vec3();
            Vec3.subtract(offsetPos, ndTarget.worldPosition, ndParent.worldPosition);
            ndEffect.setWorldScale(1, offsetPos.length(), 1);
            ndEffect.forward = offsetPos.normalize().negative();
            setTimeout(() => {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(ndEffect);
            }, 100);
          });
        }

      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=effectManager.js.map