System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, poolManager, playerData, uiManager, Monster, GameManager, _decorator, Component, Quat, MeshColliderComponent, BoxColliderComponent, CylinderColliderComponent, Enum, CapsuleColliderComponent, constant, Arrow, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, COLLIDER_NAME, ColliderItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrow(extras) {
    _reporterNs.report("Arrow", "./arrow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Quat = _cc.Quat;
      MeshColliderComponent = _cc.MeshColliderComponent;
      BoxColliderComponent = _cc.BoxColliderComponent;
      CylinderColliderComponent = _cc.CylinderColliderComponent;
      Enum = _cc.Enum;
      CapsuleColliderComponent = _cc.CapsuleColliderComponent;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      playerData = _unresolved_3.playerData;
    }, function (_unresolved_4) {
      uiManager = _unresolved_4.uiManager;
    }, function (_unresolved_5) {
      Monster = _unresolved_5.Monster;
    }, function (_unresolved_6) {
      GameManager = _unresolved_6.GameManager;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }, function (_unresolved_8) {
      Arrow = _unresolved_8.Arrow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3c3eSoUrFKl5IFTQQGWnRd", "colliderItem", undefined);

      //碰撞器组件
      ({
        ccclass,
        property
      } = _decorator);
      COLLIDER_NAME = Enum({
        ARROW: 1,
        //弓箭
        HEART_BIG: 2,
        //大爱心, 玩家吃到后增加生命上限
        WARP_GATE: 3,
        //传送门
        NPC_BUSINESS_MAN: 4,
        //NPC商人
        NPC_WISE_MAN: 5,
        //NPC智慧老头
        HEART_SMALL: 6 //小爱心, 敌人掉落的爱心 

      }); //管理障碍类型

      _export("ColliderItem", ColliderItem = (_dec = ccclass('ColliderItem'), _dec2 = property({
        type: COLLIDER_NAME,
        displayOrder: 1
      }), _dec(_class = (_class2 = (_temp = _class3 = class ColliderItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "colliderName", _descriptor, this);

          _defineProperty(this, "colliderCom", null);

          _defineProperty(this, "ani", null);

          _defineProperty(this, "_curHeartBigQuat", new Quat());

          _defineProperty(this, "_timer", null);
        }

        set timer(obj) {
          if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
          }
        }

        //定时器
        onLoad() {
          this.colliderCom = this.node.getComponent(BoxColliderComponent) || this.node.getComponent(CylinderColliderComponent) || this.node.getComponent(CapsuleColliderComponent) || this.node.getComponent(MeshColliderComponent);

          if (!this.colliderCom) {
            console.error("this node does not have collider component");
          }
        }

        onEnable() {
          if (this.colliderCom.isTrigger) {
            this.colliderCom.on('onTriggerEnter', this._onTriggerEnterCb, this);
          } else {
            this.colliderCom.on('onCollisionEnter', this._onCollisionEnterCb, this);
          }
        }

        onDisable() {
          if (this.colliderCom.isTrigger) {
            this.colliderCom.off('onTriggerEnter', this._onTriggerEnterCb, this);
          } else {
            this.colliderCom.off('onCollisionEnter', this._onCollisionEnterCb, this);
          }
        }

        start() {}
        /**
         * 初始化
         */


        init() {}

        _onTriggerEnterCb(event) {
          this._hitTarget(event.otherCollider, event.selfCollider);
        }

        _onCollisionEnterCb(event) {
          this._hitTarget(event.otherCollider, event.selfCollider);
        }

        _hitTarget(otherCollider, selfCollider) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart) {
            return;
          } // console.log("getGroup", otherCollider.getGroup());


          if (otherCollider.getGroup() == (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PHY_GROUP.PLAYER && (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer) {
            switch (this.colliderName) {
              case COLLIDER_NAME.HEART_BIG:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.addBlood(300);
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(this.node);
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).checkTriggerAll();
                break;

              case COLLIDER_NAME.WARP_GATE:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptCharacterRigid.stopMove();
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).isWin = true;
                break;

              case COLLIDER_NAME.NPC_BUSINESS_MAN:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).isGamePause = true;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptCharacterRigid.stopMove();
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).PLAYER_ANI_TYPE.IDLE, true);

                if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                  error: Error()
                }), playerData) : playerData).instance.isPlayerSkillAllUnlock) {
                  //防错
                  (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                    error: Error()
                  }), uiManager) : uiManager).instance.showTips("所有技能均已解锁");
                  (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                    error: Error()
                  }), poolManager) : poolManager).instance.putNode(this.node);
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).isGamePause = false;
                } else {
                  (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                    error: Error()
                  }), uiManager) : uiManager).instance.hideDialog("fight/fightPanel");
                  (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                    error: Error()
                  }), uiManager) : uiManager).instance.showDialog("shop/shopPanel", [() => {
                    (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                      error: Error()
                    }), GameManager) : GameManager).isGamePause = false;
                    (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                      error: Error()
                    }), poolManager) : poolManager).instance.putNode(this.node);
                  }], () => {}, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).PRIORITY.DIALOG);
                }

                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).checkTriggerAll();
                break;

              case COLLIDER_NAME.NPC_WISE_MAN:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).isGamePause = true;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptCharacterRigid.stopMove();
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptPlayerModel.playAni((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).PLAYER_ANI_TYPE.IDLE, true);

                if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                  error: Error()
                }), playerData) : playerData).instance.isPlayerSkillAllUnlock) {
                  (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                    error: Error()
                  }), uiManager) : uiManager).instance.showTips("所有技能均已解锁");
                  (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                    error: Error()
                  }), poolManager) : poolManager).instance.putNode(this.node);
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).isGamePause = false;
                } else {
                  (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                    error: Error()
                  }), uiManager) : uiManager).instance.hideDialog("fight/fightPanel");
                  (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                    error: Error()
                  }), uiManager) : uiManager).instance.showDialog("skill/skillPanel", [() => {
                    (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                      error: Error()
                    }), poolManager) : poolManager).instance.putNode(this.node);
                    (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                      error: Error()
                    }), GameManager) : GameManager).isGamePause = false;
                  }], () => {}, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).PRIORITY.DIALOG);
                }

                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).checkTriggerAll();
                break;
            }
          } else if (otherCollider.getGroup() === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PHY_GROUP.OBSTACLE) {
            //箭碰到游戏中的障碍则回收
            switch (this.colliderName) {
              case COLLIDER_NAME.ARROW:
                let scriptArrow = this.node.getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                  error: Error()
                }), Arrow) : Arrow); // if (!GameManager.scriptPlayer.isArrowRebound) {

                scriptArrow.hideArrow(); // } else {
                //     if (scriptArrow.arrowReboundTimes < 2) {
                //         scriptArrow.playArrowRebound(selfCollider.node, otherCollider.node);
                //     } else {
                //         scriptArrow.hideArrow();
                //     }
                // }

                break;

              default:
                console.warn("colliderName not found", this.colliderName);
                break;
            }
          } else if (otherCollider.getGroup() === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).PHY_GROUP.MONSTER) {
            //箭碰到敌人
            switch (this.colliderName) {
              case COLLIDER_NAME.ARROW:
                let ndMonster = otherCollider.node;
                let scriptMonster = ndMonster.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                  error: Error()
                }), Monster) : Monster);
                let scriptArrow = this.node.getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                  error: Error()
                }), Arrow) : Arrow); //箭是否弹射

                if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.isArrowLaunch) {
                  if (!scriptArrow.isArrowLaunch) {
                    //第一次弹射
                    scriptArrow.playArrowLaunch(ndMonster);
                  } else {
                    //第二次直接隐藏
                    scriptArrow.hideArrow();
                  }
                } else if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.isArrowPenetrate) {//箭穿透
                } else {
                  scriptArrow.hideArrow();
                }

                scriptMonster.playHit(scriptArrow.isArrowLaunch); //龙被射到龙改变颜色

                if (ndMonster.name === "dragon") {
                  //@ts-ignore
                  scriptMonster.changeDragonMat();
                }

                break;

              default:
                console.warn("colliderName not found", this.colliderName);
                break;
            }
          }
        }

        update(deltaTime) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || !this.node.parent) {
            return;
          }

          if (this.colliderName === COLLIDER_NAME.HEART_BIG) {
            Quat.fromEuler(this._curHeartBigQuat, 0, 120 * deltaTime, 0);
            this.node.rotate(this._curHeartBigQuat);
          }
        }

      }, _defineProperty(_class3, "COLLIDER_NAME", COLLIDER_NAME), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colliderName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return COLLIDER_NAME.ARROW;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=colliderItem.js.map