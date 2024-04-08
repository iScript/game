System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FightTip, _decorator, find, isValid, Vec3, UITransformComponent, resourceUtil, poolManager, tips, GameManager, PlayerBloodBar, MonsterBloodBar, constant, _dec, _class, _class2, _temp, _crd, ccclass, property, SHOW_STR_INTERVAL_TIME, v3_playerBloodOffsetPos, v3_playerBloodScale, v3_monsterBloodOffsetPos, v3_monsterBloodScale, v3_targetPosOffset, uiManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFightTip(extras) {
    _reporterNs.report("FightTip", "./../ui/common/fightTip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftips(extras) {
    _reporterNs.report("tips", "../ui/common/tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerBloodBar(extras) {
    _reporterNs.report("PlayerBloodBar", "../ui/fight/playerBloodBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBloodBar(extras) {
    _reporterNs.report("MonsterBloodBar", "../ui/fight/monsterBloodBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      find = _cc.find;
      isValid = _cc.isValid;
      Vec3 = _cc.Vec3;
      UITransformComponent = _cc.UITransformComponent;
    }, function (_unresolved_2) {
      FightTip = _unresolved_2.FightTip;
    }, function (_unresolved_3) {
      resourceUtil = _unresolved_3.resourceUtil;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }, function (_unresolved_5) {
      tips = _unresolved_5.tips;
    }, function (_unresolved_6) {
      GameManager = _unresolved_6.GameManager;
    }, function (_unresolved_7) {
      PlayerBloodBar = _unresolved_7.PlayerBloodBar;
    }, function (_unresolved_8) {
      MonsterBloodBar = _unresolved_8.MonsterBloodBar;
    }, function (_unresolved_9) {
      constant = _unresolved_9.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9384FYDp5GqoW+CtrCla3U", "uiManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      SHOW_STR_INTERVAL_TIME = 800;
      v3_playerBloodOffsetPos = new Vec3(-10, 100, 0); //血条距离玩家节点位置

      v3_playerBloodScale = new Vec3(1.5, 1.5, 1.5); //玩家血条缩放大小

      v3_monsterBloodOffsetPos = new Vec3(-10, 100, 0); //血条距离小怪节点位置

      v3_monsterBloodScale = new Vec3(1.5, 1.5, 1.5); //小怪血条缩放大小

      v3_targetPosOffset = new Vec3(0, 200, 0); //缓动目标位置

      _export("uiManager", uiManager = (_dec = ccclass("uiManager"), _dec(_class = (_temp = _class2 = class uiManager {
        constructor() {
          _defineProperty(this, "_dictSharedPanel", {});

          _defineProperty(this, "_dictLoading", {});

          _defineProperty(this, "_arrPopupDialog", []);

          _defineProperty(this, "_showTipsTime", 0);
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new uiManager();
          return this._instance;
        }
        /**
         * 检查当前界面是否正在展示
         * @param panelPath 
         */


        isDialogVisible(panelPath) {
          if (!this._dictSharedPanel.hasOwnProperty(panelPath)) {
            return false;
          }

          let panel = this._dictSharedPanel[panelPath];
          return isValid(panel) && panel.active && panel.parent;
        }
        /**
         * 显示单例界面
         * @param {String} panelPath 
         * @param {Array} args 
         * @param {Function} cb 回调函数，创建完毕后回调
         */


        showDialog(panelPath, args, cb, panelPriority = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
          error: Error()
        }), constant) : constant).PRIORITY.NORMAL) {
          if (this._dictLoading[panelPath]) {
            return;
          }

          let idxSplit = panelPath.lastIndexOf('/');
          let scriptName = panelPath.slice(idxSplit + 1);

          if (!args) {
            args = [];
          }

          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            let panel = this._dictSharedPanel[panelPath];

            if (isValid(panel)) {
              panel.parent = find("Canvas");
              panel.active = true;
              let script = panel.getComponent(scriptName);
              let script2 = panel.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

              if (script && script.show) {
                script.show.apply(script, args);
                cb && cb(script);
              } else if (script2 && script2.show) {
                script2.show.apply(script2, args);
                cb && cb(script2);
              } else {
                throw `查找不到脚本文件${scriptName}`;
              }

              return;
            }
          }

          this._dictLoading[panelPath] = true;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).createUI(panelPath, (err, node) => {
            //判断是否有可能在显示前已经被关掉了？
            let isCloseBeforeShow = false;

            if (!this._dictLoading[panelPath]) {
              //已经被关掉
              isCloseBeforeShow = true;
            }

            this._dictLoading[panelPath] = false;

            if (err) {
              console.error(err);
              return;
            }

            node.getComponent(UITransformComponent).priority = panelPriority;
            this._dictSharedPanel[panelPath] = node;
            let script = node.getComponent(scriptName);
            let script2 = node.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

            if (script && script.show) {
              script.show.apply(script, args);
              cb && cb(script);
            } else if (script2 && script2.show) {
              script2.show.apply(script2, args);
              cb && cb(script2);
            } else {
              throw `查找不到脚本文件${scriptName}`;
            }

            if (isCloseBeforeShow) {
              //如果在显示前又被关闭，则直接触发关闭掉
              this.hideDialog(panelPath);
            }
          });
        }
        /**
         * 隐藏单例界面
         * @param {String} panelPath 
         * @param {fn} callback
         */


        hideDialog(panelPath, callback) {
          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            let panel = this._dictSharedPanel[panelPath];

            if (panel && isValid(panel)) {
              let ani = panel.getComponent('animationUI');

              if (ani) {
                ani.close(() => {
                  panel.parent = null;

                  if (callback && typeof callback === 'function') {
                    callback();
                  }
                });
              } else {
                panel.parent = null;

                if (callback && typeof callback === 'function') {
                  callback();
                }
              }
            } else if (callback && typeof callback === 'function') {
              callback();
            }
          }

          this._dictLoading[panelPath] = false;
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {string} panelPath 
         * @param {string} scriptName 
         * @param {*} param 
         */


        pushToPopupSeq(panelPath, scriptName, param) {
          let popupDialog = {
            panelPath: panelPath,
            scriptName: scriptName,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.push(popupDialog);

          this._checkPopupSeq();
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {number} index 
         * @param {string} panelPath 
         * @param {string} scriptName 
         * @param {*} param 
         */


        insertToPopupSeq(index, panelPath, param) {
          let popupDialog = {
            panelPath: panelPath,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.splice(index, 0, popupDialog); //this._checkPopupSeq();

        }
        /**
         * 将弹窗从弹出窗队列中移除
         * @param {string} panelPath 
         */


        shiftFromPopupSeq(panelPath) {
          this.hideDialog(panelPath, () => {
            if (this._arrPopupDialog[0] && this._arrPopupDialog[0].panelPath === panelPath) {
              this._arrPopupDialog.shift();

              this._checkPopupSeq();
            }
          });
        }
        /**
         * 检查当前是否需要弹窗
         */


        _checkPopupSeq() {
          if (this._arrPopupDialog.length > 0) {
            let first = this._arrPopupDialog[0];

            if (!first.isShow) {
              this.showDialog(first.panelPath, first.param);
              this._arrPopupDialog[0].isShow = true;
            }
          }
        }
        /**
         * 显示提示
         * @param {String} content 
         * @param {Function} cb 
         */


        showTips(content, type = 'txt', targetPos = new Vec3(), scale = 1, callback = () => {}) {
          let str = String(content);

          let next = () => {
            this._showTipsAni(str, type, targetPos, scale, callback);
          };

          var now = Date.now();

          if (now - this._showTipsTime < SHOW_STR_INTERVAL_TIME && type !== 'gold' && type !== 'heart') {
            var spareTime = SHOW_STR_INTERVAL_TIME - (now - this._showTipsTime);
            setTimeout(() => {
              next();
            }, spareTime);
            this._showTipsTime = now + spareTime;
          } else {
            next();
            this._showTipsTime = now;
          }
        }
        /**
         * 内部函数
         * @param {String} content 
         * @param {Function} cb 
         */


        _showTipsAni(content, type, targetPos, scale, callback) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getUIPrefabRes('common/tips', function (err, prefab) {
            if (err) {
              return;
            }

            let tipsNode = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, find("Canvas"));
            let tipScript = tipsNode.getComponent(_crd && tips === void 0 ? (_reportPossibleCrUseOftips({
              error: Error()
            }), tips) : tips);
            tipScript.show(content, type, targetPos, scale, callback);
          });
        }
        /**
         * 展示血条
         * @param scriptParent 
         * @param totalBlood 
         * @param bloodBarType 
         * @param offsetPos 
         * @param scale 
         */


        showPlayerBloodBar(scriptParent, totalBlood, callback = () => {}, offsetPos = v3_playerBloodOffsetPos, scale = v3_playerBloodScale) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getUIPrefabRes('fight/playerBloodBar', function (err, prefab) {
            if (err) {
              return;
            }

            let ndBloodBar = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, find("Canvas"));
            let scriptBloodBar = ndBloodBar.getComponent(_crd && PlayerBloodBar === void 0 ? (_reportPossibleCrUseOfPlayerBloodBar({
              error: Error()
            }), PlayerBloodBar) : PlayerBloodBar);
            scriptParent.scriptBloodBar = scriptBloodBar;
            scriptBloodBar.show(scriptParent, totalBlood, offsetPos, scale, callback);
          });
        }
        /**
         * 展示小怪血条
         *  
         * @param {*} scriptParent 
         * @param {number} totalBlood
         * @param {number} bloodBarType
         * @param {Function} [callback=()=>{}]
         * @param {Vec3} [offsetPos=MONSTER_BLOOD_OFFSET_POS]
         * @param {Vec3} [scale=MONSTER_BLOOD_SCALE]
         * @memberof uiManager
         */


        showMonsterBloodBar(scriptParent, totalBlood, callback = () => {}, offsetPos = v3_monsterBloodOffsetPos, scale = v3_monsterBloodScale) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getUIPrefabRes('fight/monsterBloodBar', function (err, prefab) {
            if (err) {
              return;
            }

            let ndBloodBar = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, find("Canvas"));
            let scriptBloodBar = ndBloodBar.getComponent(_crd && MonsterBloodBar === void 0 ? (_reportPossibleCrUseOfMonsterBloodBar({
              error: Error()
            }), MonsterBloodBar) : MonsterBloodBar);
            scriptParent.scriptBloodBar = scriptBloodBar;
            scriptBloodBar.show(scriptParent, totalBlood, offsetPos, scale, callback);
          });
        }
        /**
         * 展示血量提示
         */


        showBloodTips(scriptParent, type, bloodNum, offset, callback) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getUIPrefabRes('common/fightTip', (err, prefab) => {
            var _mainCamera;

            if (err) {
              return;
            }

            let ndTip = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, find("Canvas"));
            let pos = (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).mainCamera) === null || _mainCamera === void 0 ? void 0 : _mainCamera.convertToUINode(scriptParent.node.worldPosition, find('Canvas'));
            pos.add(offset);
            ndTip.setPosition(pos);
            let scriptTip = ndTip.getComponent(_crd && FightTip === void 0 ? (_reportPossibleCrUseOfFightTip({
              error: Error()
            }), FightTip) : FightTip);
            scriptTip.show(scriptParent, type, bloodNum, callback);
          });
        }

      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=uiManager.js.map