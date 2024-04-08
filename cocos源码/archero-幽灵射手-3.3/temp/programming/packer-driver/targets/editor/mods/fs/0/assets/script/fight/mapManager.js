System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constant, Monster, Boss, _decorator, Component, Node, Vec3, localConfig, poolManager, resourceUtil, GameManager, clientEvent, AudioManager, _dec, _class, _class2, _temp, _crd, ccclass, property, MapManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      constant = _unresolved_2.constant;
    }, function (_unresolved_3) {
      Monster = _unresolved_3.Monster;
    }, function (_unresolved_4) {
      Boss = _unresolved_4.Boss;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      poolManager = _unresolved_6.poolManager;
    }, function (_unresolved_7) {
      resourceUtil = _unresolved_7.resourceUtil;
    }, function (_unresolved_8) {
      GameManager = _unresolved_8.GameManager;
    }, function (_unresolved_9) {
      clientEvent = _unresolved_9.clientEvent;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3b32wEGk5A9ptwhpJ6lghY", "mapManager", undefined);

      ({
        ccclass,
        property
      } = _decorator); //关卡模型管理组件（怪物、爱心、障碍、npc）

      _export("MapManager", MapManager = (_dec = ccclass('MapManager'), _dec(_class = (_temp = _class2 = class MapManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_dictModuleType", void 0);

          _defineProperty(this, "arrModuleData", {});

          _defineProperty(this, "_ndAn", null);

          _defineProperty(this, "_ndAnS", null);

          _defineProperty(this, "_ndCloud", null);

          _defineProperty(this, "_warpGateWorPos_1", new Vec3(16.414, 1.635, -0.804));

          _defineProperty(this, "_warpGateWorPos_2", new Vec3(34.61, 1.635, -20));

          _defineProperty(this, "_ndWarpGate", null);

          _defineProperty(this, "_completeListener", null);

          _defineProperty(this, "_arrItem", []);

          _defineProperty(this, "_arrMap", []);
        }

        //当前关卡数据表
        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.SHOW_WARP_GATE, this._showWarpGate, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.HIDE_WARP_GATE, this._hideWarpGate, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.SHOW_WARP_GATE, this._showWarpGate, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.HIDE_WARP_GATE, this._hideWarpGate, this);
        }

        start() {// [3]
        }

        buildMap(mapName, progressCb, completeCb) {
          this._completeListener = completeCb;
          this._dictModuleType = {};
          this._arrItem = [];
          this._arrMap = [];
          this._arrMap = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr(mapName).concat();

          let cb = () => {
            if (mapName.startsWith("map1")) {
              this._ndAn && (this._ndAn.active = false);
              this._ndAnS && (this._ndAnS.active = true);
              MapManager.isMapAnS = true;
            } else {
              this._ndAn && (this._ndAn.active = true);
              this._ndAnS && (this._ndAnS.active = false);
              MapManager.isMapAnS = false;
            }

            for (let i = this._arrMap.length - 1; i >= 0; i--) {
              const item = this._arrMap[i];
              let baseInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID('base', item.ID);

              if (!this._dictModuleType.hasOwnProperty(baseInfo.type)) {
                this._dictModuleType[baseInfo.type] = [];
              }

              this._dictModuleType[baseInfo.type].push(item);
            }

            let arrPromise = [];

            for (const i in this._dictModuleType) {
              let item = this._dictModuleType[i];

              if (item.length) {
                arrPromise.push(this._buildModel(i));
              }
            }

            Promise.all(arrPromise).then(() => {
              this._completeListener && this._completeListener();
              console.log(`load ${mapName} over`);
            }).catch(e => {
              console.error("load item module err", e);
            });
          };

          if (!this._ndCloud) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadModelRes('scene/cloud').then(prefab => {
              this._ndCloud = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, this.node.parent);
            });
          }

          if (mapName.startsWith("map0") && !this._ndAn) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadModelRes('scene/an').then(prefab => {
              this._ndAn = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, this.node.parent);
              cb();
            });
          } else if (mapName.startsWith("map1") && !this._ndAnS) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadModelRes('scene/anS').then(prefab => {
              this._ndAnS = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, this.node.parent);
              cb();
            });
          } else {
            cb();
          }
        }

        _buildModel(type) {
          return new Promise((resolve, reject) => {
            let arrPromise = [];
            let objItems = this._dictModuleType[type]; //同类型的信息

            this._dictModuleType[type] = [];

            for (let idx = 0; idx < objItems.length; idx++) {
              //怪物在该层级别的配置信息
              let layerInfo = objItems[idx]; //怪物的模块数据

              let baseInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID("base", layerInfo.ID);
              let modelPath = `${type}/${baseInfo.resName}`;
              let p = (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                error: Error()
              }), resourceUtil) : resourceUtil).loadModelRes(modelPath).then(prefab => {
                let parentName = type + 'Group'; //先创建父节点

                let ndParent = this.node.getChildByName(parentName);

                if (!ndParent) {
                  ndParent = new Node(parentName);
                  ndParent.parent = this.node;
                }

                let ndChild = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.getNode(prefab, ndParent);
                let position = layerInfo.position ? layerInfo.position.split(',') : baseInfo.position.split(',');
                let angle = layerInfo.angle ? layerInfo.angle.split(',') : baseInfo.angle.split(',');
                let scale = layerInfo.scale ? layerInfo.scale.split(',') : baseInfo.scale.split(',');
                ndChild.setPosition(new Vec3(Number(position[0]), Number(position[1]), Number(position[2])));
                ndChild.eulerAngles = new Vec3(Number(angle[0]), Number(angle[1]), Number(angle[2]));
                ndChild.setScale(new Vec3(Number(scale[0]), Number(scale[1]), Number(scale[2]))); //test

                if (baseInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BASE_TYPE.MONSTER) {
                  let scriptMonster = ndChild === null || ndChild === void 0 ? void 0 : ndChild.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                    error: Error()
                  }), Monster) : Monster);
                  scriptMonster.init(baseInfo, layerInfo);
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).arrMonster.push(ndChild);
                } else if (baseInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BASE_TYPE.BOSS) {
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).ndBoss = ndChild;
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).scriptBoss = ndChild === null || ndChild === void 0 ? void 0 : ndChild.getComponent(_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
                    error: Error()
                  }), Boss) : Boss);
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).scriptBoss.init(baseInfo, layerInfo);
                } else if (baseInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BASE_TYPE.NPC) {
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).existentNum += 1;
                } else if (baseInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BASE_TYPE.HEART) {
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).existentNum += 1;
                }

                this._arrItem.push(ndChild);
              });
              arrPromise.push(p);
            }

            Promise.all(arrPromise).then(() => {
              resolve(null);
            }).catch(e => {
              console.error("e", e);
            });
          });
        }
        /**
         * 回收模块
         */


        recycle() {
          for (let index = 0; index < this._arrItem.length; index++) {
            const element = this._arrItem[index];

            this._recycleModel(element);
          }

          this.node.removeAllChildren();
        }
        /**
         * 回收子模块
         * @param ndItem 
         */


        _recycleModel(ndItem) {
          (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
            error: Error()
          }), poolManager) : poolManager).instance.putNode(ndItem);
        }
        /**
         * 展示传送门
         *
         * @private
         * @memberof GameManager
         */


        _showWarpGate() {
          let cb = () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SOUND.SHOW_WRAP_GATE);

            if (this._ndAn && this._ndAn.active) {
              this._ndWarpGate.setWorldPosition(this._warpGateWorPos_1);
            } else {
              this._ndWarpGate.setWorldPosition(this._warpGateWorPos_2);
            }

            this._ndWarpGate.active = true;
          };

          if (!this._ndWarpGate) {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).loadModelRes(`warpGate/warpGate`).then(pf => {
              this._ndWarpGate = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(pf, this.node.parent);
              cb();
            });
          } else {
            cb();
          }
        }
        /**
         * 隐藏传送门
         *
         * @private
         * @memberof GameManager
         */


        _hideWarpGate() {
          if (this._ndWarpGate) {
            this._ndWarpGate.active = false;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _defineProperty(_class2, "isMapAnS", false), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=mapManager.js.map