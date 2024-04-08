System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EffectManager, clientEvent, playerData, Monster, uiManager, MapManager, _decorator, Component, Node, CameraComponent, Vec3, SkeletalAnimationComponent, ParticleSystemComponent, AnimationComponent, find, GameCamera, Player, resourceUtil, poolManager, constant, localConfig, AudioManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./mapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCamera(extras) {
    _reporterNs.report("GameCamera", "./gameCamera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./boss", _context.meta, extras);
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
      CameraComponent = _cc.CameraComponent;
      Vec3 = _cc.Vec3;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      AnimationComponent = _cc.AnimationComponent;
      find = _cc.find;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      playerData = _unresolved_4.playerData;
    }, function (_unresolved_5) {
      Monster = _unresolved_5.Monster;
    }, function (_unresolved_6) {
      uiManager = _unresolved_6.uiManager;
    }, function (_unresolved_7) {
      MapManager = _unresolved_7.MapManager;
    }, function (_unresolved_8) {
      GameCamera = _unresolved_8.GameCamera;
    }, function (_unresolved_9) {
      Player = _unresolved_9.Player;
    }, function (_unresolved_10) {
      resourceUtil = _unresolved_10.resourceUtil;
    }, function (_unresolved_11) {
      poolManager = _unresolved_11.poolManager;
    }, function (_unresolved_12) {
      constant = _unresolved_12.constant;
    }, function (_unresolved_13) {
      localConfig = _unresolved_13.localConfig;
    }, function (_unresolved_14) {
      AudioManager = _unresolved_14.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74bb5fEKqJBI7792FWkxSP/", "gameManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && GameCamera === void 0 ? (_reportPossibleCrUseOfGameCamera({
        error: Error()
      }), GameCamera) : GameCamera), _dec3 = property({
        type: _crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
          error: Error()
        }), MapManager) : MapManager
      }), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);

        function GameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "camera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scriptMapManager", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ndLight", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "mapInfo", {});

          _defineProperty(_assertThisInitialized(_this), "arrMonsterSkill", []);

          _defineProperty(_assertThisInitialized(_this), "_oriMainLightWorPos", null);

          _defineProperty(_assertThisInitialized(_this), "_offsetWorPosMainLight", new Vec3());

          return _this;
        }

        var _proto = GameManager.prototype;

        //是否取得胜利
        _proto.onEnable = function onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
        };

        _proto.onDisable = function onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
        };

        _proto.start = function start() {
          var _this$camera, _this$camera2;

          GameManager.mainCamera = (_this$camera = this.camera) === null || _this$camera === void 0 ? void 0 : _this$camera.getComponent(CameraComponent);
          GameManager.scriptGameCamera = (_this$camera2 = this.camera) === null || _this$camera2 === void 0 ? void 0 : _this$camera2.getComponent(_crd && GameCamera === void 0 ? (_reportPossibleCrUseOfGameCamera({
            error: Error()
          }), GameCamera) : GameCamera);
          GameManager.ndGameManager = this.node;
          GameManager.ndMapManager = find("mapManager");
          GameManager.ndEffectManager = find("effectManager");
          this._oriMainLightWorPos = this.ndLight.worldPosition.clone();

          if (GameManager.isTesting) {
            //@ts-ignore
            window.uiManager = (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance; //@ts-ignore

            window.AudioManager = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance; //@ts-ignore

            window.playerData = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance; //@ts-ignore

            window.clientEvent = _crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent; //@ts-ignore

            window.ndGameManager = GameManager.ndGameManager; //@ts-ignore

            window.GameManager = GameManager; //@ts-ignore

            window.ndMapManager = GameManager.ndMapManager; //@ts-ignore

            window.EffectManager = (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance; //@ts-ignore

            window.ndEffectManager = GameManager.ndEffectManager; //@ts-ignore

            window.constant = _crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant; //@ts-ignore
            //@ts-ignore
          }
        }
        /**
         * 初始化游戏
         */
        ;

        _proto._onGameInit = function _onGameInit() {
          var level = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level;
          var totalLevel = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr("checkpoint").length; //游戏通关后从倒数第10关开始循环(61-70)

          if (level > totalLevel) {
            level = totalLevel - 10 + (level - totalLevel) % 10;
          }

          this.mapInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.queryByID("checkpoint", String(level)); //设置本层敌人属性加成比例

          GameManager.attackAddition = this.mapInfo.attackAddition;
          GameManager.defenseAddition = this.mapInfo.defenseAddition;
          GameManager.hpAddition = this.mapInfo.hpAddition;
          GameManager.moveSpeedAddition = this.mapInfo.moveSpeedAddition;
          GameManager.attackSpeedAddition = this.mapInfo.attackSpeedAddition;
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog("loading/loadingPanel");
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.HIDE_WARP_GATE);
          GameManager.isGameStart = false;
          GameManager.isGamePause = false;
          GameManager.isGameOver = false;
          GameManager.isWin = false;
          GameManager.isRevive = false;
          GameManager.arrMonster = [];
          GameManager.gameSpeed = 1;
          GameManager.ndBoss = null;
          GameManager.existentNum = 0;
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.addFightTimes();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.pauseAll();

          this._refreshLevel();
        }
        /**
         * 刷新关卡, 后期优化写法。。。
         */
        ;

        _proto._refreshLevel = function _refreshLevel() {
          var _this2 = this;

          //每层随机一张地图
          var arrMap = this.mapInfo.mapName.split("#");
          var mapName = arrMap[Math.floor(Math.random() * arrMap.length)];
          this.preloadMonsterSkill(mapName).then(function () {
            _this2._recycleAll();

            _this2._loadMap(mapName, function () {
              //第一次进入或者失败后被销毁需要重新创建
              if (!GameManager.ndPlayer) {
                _this2._createPlayer();
              } else {
                GameManager.scriptPlayer.resetPlayerState();
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).EVENT_TYPE.HIDE_LOADING_PANEL);
              }
            });
          });
        }
        /**
         * 加载地图数据
         *
         * @private
         * @param {Function} [cb=()=>{}]
         * @memberof GameManager
         */
        ;

        _proto._loadMap = function _loadMap(mapName, cb) {
          if (cb === void 0) {
            cb = function cb() {};
          }

          this.scriptMapManager.buildMap(mapName, function () {}, function () {
            cb && cb();
          });
        }
        /**
         * 创建玩家
         *
         * @private
         * @memberof GameManager
         */
        ;

        _proto._createPlayer = function _createPlayer() {
          var _this3 = this;

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadModelRes("player/player01").then(function (pf) {
            var _GameManager$mainCame, _GameManager$ndPlayer;

            GameManager.ndPlayer = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(pf, _this3.node);
            var scriptGameCamera = (_GameManager$mainCame = GameManager.mainCamera) === null || _GameManager$mainCame === void 0 ? void 0 : _GameManager$mainCame.node.getComponent(_crd && GameCamera === void 0 ? (_reportPossibleCrUseOfGameCamera({
              error: Error()
            }), GameCamera) : GameCamera);
            scriptGameCamera.ndFollowTarget = GameManager.ndPlayer;
            var scriptPlayer = (_GameManager$ndPlayer = GameManager.ndPlayer) === null || _GameManager$ndPlayer === void 0 ? void 0 : _GameManager$ndPlayer.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player);
            GameManager.scriptPlayer = scriptPlayer;
            scriptPlayer === null || scriptPlayer === void 0 ? void 0 : scriptPlayer.init(); //初次进入的时候需要预加载弓箭

            if (GameManager.isFirstLoad) {
              GameManager.isFirstLoad = false;
              scriptPlayer.preloadArrow(function () {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).EVENT_TYPE.HIDE_LOADING_PANEL);
              });
            } else {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).EVENT_TYPE.HIDE_LOADING_PANEL);
            }
          });
        }
        /**
         * 回收怪兽, 武器，特效等
         *
         * @private
         * @memberof GameManager
         */
        ;

        _proto._recycleAll = function _recycleAll() {
          this.scriptMapManager.recycle();

          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var ndChild = this.node.children[i];

            if (ndChild.name !== "player01") {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(ndChild);
            }
          }

          while (GameManager.ndEffectManager.children.length) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(GameManager.ndEffectManager.children[0]);
          }
        }
        /**
         * 游戏结束
         */
        ;

        _proto._onGameOver = function _onGameOver() {
          var _this4 = this;

          if (GameManager.isGameOver) {
            return;
          }

          GameManager.isGamePause = true;
          console.log("game over!", "isWin ?", GameManager.isWin);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog("fight/fightPanel");

          if (GameManager.isWin) {
            GameManager.isGameOver = true;

            this._recycleAll();

            var nextLevel = Number((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.level) + 1;
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.level = nextLevel; //更新已解锁最高层级

            if (nextLevel > (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.highestLevel) {
              (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                error: Error()
              }), playerData) : playerData).instance.playerInfo.highestLevel = nextLevel;
            }

            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.ON_GAME_INIT);
          } else {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showDialog("revive/revivePanel", [function () {
              if (GameManager.ndPlayer) {
                (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.putNode(GameManager.ndPlayer);
                GameManager.ndPlayer = null;
                GameManager.scriptPlayer = null;
              }

              _this4._recycleAll();
            }]);
          }
        }
        /**
         * 游戏暂停
         */
        ;

        _proto._onGamePause = function _onGamePause() {
          GameManager.isGamePause = true;
        }
        /**
         * 获取距离最近的小怪、boss节点
         * @returns 
         */
        ;

        GameManager.getNearestMonster = function getNearestMonster() {
          if (GameManager.arrMonster.length) {
            var _GameManager$ndPlayer2;

            var offsetA = new Vec3();
            var offsetB = new Vec3();
            var playerWorPos = (_GameManager$ndPlayer2 = GameManager.ndPlayer) === null || _GameManager$ndPlayer2 === void 0 ? void 0 : _GameManager$ndPlayer2.worldPosition;
            var arr = GameManager.arrMonster.sort(function (a, b) {
              var distanceA = Vec3.subtract(offsetA, playerWorPos, a.worldPosition).length();
              var distanceB = Vec3.subtract(offsetB, playerWorPos, b.worldPosition).length();
              return distanceA - distanceB;
            });
            arr = arr.filter(function (item) {
              var scriptMonster = item.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                error: Error()
              }), Monster) : Monster);
              return item.parent !== null && !scriptMonster.isDie;
            });
            return arr[0];
          } else if (GameManager.ndBoss && !GameManager.scriptBoss.isDie) {
            return GameManager.ndBoss;
          } else {
            return null;
          }
        }
        /**
         * 获取除了怪物本身自己外一定范围内的怪物
         *
         * @static
         * @param {Node} ndMonster 被击中的敌人
         * @param {boolean} [isAll=false] 是否返回全部敌人,否则只随机返回一个
         * @param {number} [range=5] 范围
         * @return {*} 
         * @memberof GameManager
         */
        ;

        GameManager.getNearbyMonster = function getNearbyMonster(ndMonster, isAll, range) {
          if (isAll === void 0) {
            isAll = false;
          }

          if (range === void 0) {
            range = 5;
          }

          //范围
          var arrMonster = [];
          var offsetPos = new Vec3();

          if (GameManager.arrMonster.length) {
            arrMonster = GameManager.arrMonster.concat();
          }

          if (GameManager.ndBoss) {
            arrMonster.push(GameManager.ndBoss);
          }

          arrMonster = arrMonster.filter(function (item) {
            var scriptMonster = item.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);
            Vec3.subtract(offsetPos, ndMonster.worldPosition, item.worldPosition);
            return item.parent !== null && !scriptMonster.isDie && offsetPos.length() <= range && ndMonster.worldPosition !== item.worldPosition;
          });

          if (arrMonster.length) {
            if (!isAll) {
              var index = Math.floor(Math.random() * arrMonster.length);
              return arrMonster = arrMonster.filter(function (ndChild, idx) {
                return idx === index;
              });
            } else {
              return arrMonster;
            }
          } else {
            return arrMonster;
          }
        }
        /**
         * 刷新自节点的动画、粒子播放速度
         * @param targetNode 
         * @param value 
         * @returns 
         */
        ;

        GameManager.refreshEffectSpeed = function refreshEffectSpeed(targetNode, value) {
          if (!targetNode) {
            return;
          }

          var arrAni = targetNode.getComponentsInChildren(AnimationComponent);
          arrAni.forEach(function (item) {
            item.clips.forEach(function (clip) {
              var aniName = clip === null || clip === void 0 ? void 0 : clip.name;
              var aniState = item.getState(aniName);
              aniState.speed = value;
            });
          });
          var arrSkeletalAni = targetNode.getComponentsInChildren(SkeletalAnimationComponent);
          arrSkeletalAni.forEach(function (item) {
            item.clips.forEach(function (clip) {
              var aniName = clip === null || clip === void 0 ? void 0 : clip.name;
              var aniState = item.getState(aniName);
              aniState.speed = value;
            });
          });
          var arrParticle = targetNode.getComponentsInChildren(ParticleSystemComponent);
          arrParticle.forEach(function (item) {
            item.simulationSpeed = value;
          });
        }
        /**
         * 添加钻石
         *
         * @static
         * @param {number} [value=1]
         * @memberof GameManager
         */
        ;

        GameManager.addGold = function addGold(value) {
          if (value === void 0) {
            value = 1;
          }

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.updatePlayerInfo('gold', Math.ceil(value));
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).EVENT_TYPE.REFRESH_GOLD);
        }
        /**
         * 每层进入前预加载该层所需的敌人技能
         *
         * @private
         * @memberof GameManager
         */
        ;

        _proto.preloadMonsterSkill = function preloadMonsterSkill(arrName) {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            var arrLoadSkill = []; //等待预加载的技能

            var arrInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getTableArr(arrName); //获取所有敌人信息

            arrInfo = arrInfo.filter(function (item) {
              return item.ID.startsWith("2");
            }); //获得敌人技能

            if (arrInfo.length) {
              arrInfo.forEach(function (element) {
                var arrSkill = element.skill === "" ? [] : element.skill.split("#");
                arrSkill.length && arrSkill.forEach(function (id) {
                  if (_this5.arrMonsterSkill.indexOf(id) === -1) {
                    _this5.arrMonsterSkill.push(id);

                    arrLoadSkill.push(id);
                  }
                });
              });
              var arrPromise = [];

              if (arrLoadSkill.length) {
                for (var i = 0; i < arrLoadSkill.length; i++) {
                  var element = arrLoadSkill[i]; //预加载敌人技能

                  var skillInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                    error: Error()
                  }), localConfig) : localConfig).instance.queryByID("monsterSkill", element);
                  var p = (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                    error: Error()
                  }), resourceUtil) : resourceUtil).loadEffectRes(skillInfo.resName + "/" + skillInfo.resName).then(function (prefab) {
                    var ndSkillCollider = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                      error: Error()
                    }), poolManager) : poolManager).instance.getNode(prefab, GameManager.ndGameManager);
                    ndSkillCollider.setWorldPosition(_this5.node.worldPosition.x, 30, _this5.node.worldPosition.z);
                  });
                  arrPromise.push(p);
                }

                Promise.all(arrPromise).then(function () {
                  resolve(null);
                })["catch"](function (e) {
                  console.error("预加载敌人技能报错", e);
                });
              } else {
                resolve(null);
              }
            } else {
              resolve(null);
            }
          });
        }
        /**
         * 判断本层的爱心、npc是否都已经触发
         *
         * @static
         * @memberof GameManager
         */
        ;

        GameManager.checkTriggerAll = function checkTriggerAll() {
          GameManager.existentNum -= 1;

          if (GameManager.existentNum <= 0) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.SHOW_WARP_GATE);
          }
        };

        _proto.update = function update(deltaTime) {
          //光源跟随玩家人物移动
          if (GameManager.scriptPlayer && GameManager.scriptPlayer.node && !GameManager.isGameOver) {
            Vec3.subtract(this._offsetWorPosMainLight, GameManager.ndPlayer.worldPosition, this._oriMainLightWorPos);

            this._offsetWorPosMainLight.set(this._offsetWorPosMainLight.x, 0, this._offsetWorPosMainLight.z);

            this.ndLight.setWorldPosition(this._offsetWorPosMainLight.add(this._oriMainLightWorPos));
          }
        };

        _createClass(GameManager, null, [{
          key: "isWin",
          get: function get() {
            return this._isWin;
          },
          set: //本层敌人攻速加成
          function set(value) {
            this._isWin = value;

            if (GameManager.isGameStart) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).EVENT_TYPE.ON_GAME_OVER);
            }
          }
        }, {
          key: "gameSpeed",
          get: function get() {
            return this._gameSpeed;
          },
          set: function set(value) {
            console.log("gameSpeed", GameManager.gameSpeed);
            this._gameSpeed = value;
            GameManager.refreshEffectSpeed(GameManager.ndGameManager, this._gameSpeed);
            GameManager.refreshEffectSpeed(GameManager.ndPlayer, this._gameSpeed);
            GameManager.refreshEffectSpeed(GameManager.ndEffectManager, this._gameSpeed);
          }
        }]);

        return GameManager;
      }(Component), _defineProperty(_class3, "mainCamera", null), _defineProperty(_class3, "isGameStart", false), _defineProperty(_class3, "isGamePause", false), _defineProperty(_class3, "isGameOver", false), _defineProperty(_class3, "scriptPlayer", null), _defineProperty(_class3, "scriptGameCamera", void 0), _defineProperty(_class3, "ndPlayer", null), _defineProperty(_class3, "ndBoss", null), _defineProperty(_class3, "scriptBoss", null), _defineProperty(_class3, "ndGameManager", void 0), _defineProperty(_class3, "ndEffectManager", null), _defineProperty(_class3, "ndMapManager", null), _defineProperty(_class3, "isRevive", false), _defineProperty(_class3, "isTesting", true), _defineProperty(_class3, "isFirstLoad", false), _defineProperty(_class3, "arrMonster", []), _defineProperty(_class3, "existentNum", 0), _defineProperty(_class3, "attackAddition", 1), _defineProperty(_class3, "defenseAddition", 1), _defineProperty(_class3, "hpAddition", 1), _defineProperty(_class3, "moveSpeedAddition", 1), _defineProperty(_class3, "attackSpeedAddition", 1), _defineProperty(_class3, "_gameSpeed", 1), _defineProperty(_class3, "_isWin", false), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scriptMapManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndLight", [_dec4], {
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
//# sourceMappingURL=gameManager.js.map