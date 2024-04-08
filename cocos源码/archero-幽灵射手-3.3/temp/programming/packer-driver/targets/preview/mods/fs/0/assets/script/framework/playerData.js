System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, util, _decorator, Component, constant, localConfig, StorageManager, clientEvent, _dec, _class, _class2, _temp, _crd, ccclass, property, playerData;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "./clientEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      StorageManager = _unresolved_5.StorageManager;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5927B2lO9C6o5eLg2NmcKB", "playerData", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("playerData", playerData = (_dec = ccclass("playerData"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(playerData, _Component);

        function playerData() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "serverTime", 0);

          _defineProperty(_assertThisInitialized(_this), "localTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_userId", '');

          _defineProperty(_assertThisInitialized(_this), "_playerInfo", null);

          _defineProperty(_assertThisInitialized(_this), "_history", null);

          _defineProperty(_assertThisInitialized(_this), "_settings", null);

          _defineProperty(_assertThisInitialized(_this), "_isNewBee", false);

          _defineProperty(_assertThisInitialized(_this), "_dataVersion", '');

          return _this;
        }

        var _proto = playerData.prototype;

        /**
         * 加上用户数据
         */
        _proto.loadGlobalCache = function loadGlobalCache() {
          var userId = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getUserId();

          if (userId) {
            this._userId = userId;
          }
        }
        /**
         * 加载本地存储数据
         */
        ;

        _proto.loadFromCache = function loadFromCache() {
          //读取玩家基础数据
          this._playerInfo = this._loadDataByKey((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER);
          this._history = this._loadDataByKey((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.HISTORY);
          this._settings = this._loadDataByKey((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.SETTINGS);
        }
        /**
         * 获取本地存储数据
         * @param {string}keyName 
         * @returns 
         */
        ;

        _proto._loadDataByKey = function _loadDataByKey(keyName) {
          var ret = {};
          var str = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getConfigData(keyName);

          if (str) {
            try {
              ret = JSON.parse(str);
            } catch (e) {
              ret = {};
            }
          }

          return ret;
        }
        /**
         * 创建角色数据
         * @param loginData 
         */
        ;

        _proto.createPlayerInfo = function createPlayerInfo(loginData) {
          this._playerInfo = {
            diamond: 0,
            //钻石总数
            gold: 0,
            //金币数量
            key: 0,
            //钥匙数量
            level: 1,
            //当前层级
            highestLevel: 1,
            //已经解锁的最高层级
            arrSkill: [],
            //已经解锁的玩家技能ID
            createDate: new Date() //记录创建时间

          };
          this._isNewBee = true; //区分新老玩家

          if (loginData) {
            for (var key in loginData) {
              this._playerInfo[key] = loginData[key];
            }
          }

          this.savePlayerInfoToLocalCache();
        }
        /**
         * 生成随机账户
         * @returns
         */
        ;

        _proto.generateRandomAccount = function generateRandomAccount() {
          this.userId = "" + Date.now() + (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getRandomInt(0, 1000);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setUserId(this._userId);
        }
        /**
         * 存用户数据
         * @param userId 
         */
        ;

        _proto.saveAccount = function saveAccount(userId) {
          this._userId = userId;
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setUserId(userId);
        }
        /**
         * 保存玩家数据
         */
        ;

        _proto.savePlayerInfoToLocalCache = function savePlayerInfoToLocalCache() {
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this._playerInfo));
        }
        /**
         * 保存玩家设置相关信息
         */
        ;

        _proto.saveSettingsToLocalCache = function saveSettingsToLocalCache() {
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.SETTINGS, JSON.stringify(this._settings));
        }
        /**
         * 当数据同步完毕，即被覆盖的情况下，需要将数据写入到本地缓存，以免数据丢失
         */
        ;

        _proto.saveAll = function saveAll() {
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigDataWithoutSave((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this._playerInfo));
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigDataWithoutSave((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.HISTORY, JSON.stringify(this._history));
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigDataWithoutSave((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.SETTINGS, JSON.stringify(this._settings));
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.DATA_VERSION, this._dataVersion);
        }
        /**
         * 更新用户信息
         * 例如钻石、金币、道具
         * @param {String} key
         * @param {Number} value
         */
        ;

        _proto.updatePlayerInfo = function updatePlayerInfo(key, value) {
          var isChanged = false;

          if (this._playerInfo.hasOwnProperty(key)) {
            if (typeof value === 'number') {
              isChanged = true;
              this._playerInfo[key] += value;

              if (this._playerInfo[key] < 0) {
                this._playerInfo[key] = 0;
              } //return;

            } else if (typeof value === 'boolean' || typeof value === 'string') {
              isChanged = true;
              this._playerInfo[key] = value;
            }
          }

          if (isChanged) {
            //有修改就保存到localcache
            (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this._playerInfo));
          }
        }
        /**
         * 获取玩家杂项值
         * @param {string} key 
         */
        ;

        _proto.getSetting = function getSetting(key) {
          if (!this._settings) {
            return null;
          }

          if (!this._settings.hasOwnProperty(key)) {
            return null;
          }

          return this._settings[key];
        }
        /**
         * 设置玩家杂项值
         * @param {string} key 
         * @param {*} value 
         */
        ;

        _proto.setSetting = function setSetting(key, value) {
          if (!this._settings) {
            this._settings = {};
          }

          this._settings[key] = value;
          this.saveSettingsToLocalCache();
        }
        /**
         * 清除用户信息
         */
        ;

        _proto.clear = function clear() {
          this._playerInfo = {};
          this._settings = {};
          this.saveAll();
        }
        /**
         * 增加战斗次数
         * @param times 
         */
        ;

        _proto.addFightTimes = function addFightTimes(times) {
          if (times === void 0) {
            times = 1;
          }

          var fightTimes = this.getFightTimes();
          fightTimes += 1;
          this.setSetting((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SETTINGS_KEY.FIGHT_TIMES, fightTimes);
        }
        /**
         * 获取战斗次数
         * @returns 
         */
        ;

        _proto.getFightTimes = function getFightTimes() {
          var fightTimes = this.getSetting((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SETTINGS_KEY.FIGHT_TIMES);

          if (!fightTimes) {
            fightTimes = 0;
            this.setSetting((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SETTINGS_KEY.FIGHT_TIMES, 0);
          }

          return fightTimes;
        }
        /**
         * 获取未解锁的玩家技能
         *
         * @memberof playerData
         */
        ;

        _proto.getLockPlyerSkill = function getLockPlyerSkill() {
          var _this2 = this;

          var arrSkill = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr("playerSkill");
          var arrLock = [];
          arrLock = arrSkill.filter(function (item) {
            return !_this2.playerInfo.arrSkill.includes(item.ID) && item.ID !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).PLAYER_SKILL.RECOVERY;
          });
          return arrLock;
        }
        /**
         * 添加玩家某项技能
         *
         * @param {*} info
         * @memberof playerData
         */
        ;

        _proto.addPlayerSkill = function addPlayerSkill(info) {
          if (!this.playerInfo.arrSkill.includes(info.ID)) {
            this.playerInfo.arrSkill.push(info.ID);
            this.savePlayerInfoToLocalCache();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.PARSE_PLAYER_SKILL);
          }
        }
        /**
         * 删除玩家某项技能
         *
         * @param {*} info
         * @memberof playerData
         */
        ;

        _proto.reducePlayerSkill = function reducePlayerSkill(info) {
          if (this.playerInfo.arrSkill.includes(info.ID)) {
            var idx = this.playerInfo.arrSkill.findIndex(function (item) {
              return item === info.ID;
            });
            this.playerInfo.arrSkill.splice(idx, 1); // this.reduceValueChangeSkill(info.ID);

            this.savePlayerInfoToLocalCache();
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).EVENT_TYPE.PARSE_PLAYER_SKILL);
          }
        };

        _createClass(playerData, [{
          key: "userId",
          get: function get() {
            return this._userId;
          },
          set: function set(v) {
            this._userId = v;
          }
        }, {
          key: "settings",
          get: function get() {
            return this._settings;
          },
          set: function set(v) {
            this._settings = v;
          }
        }, {
          key: "playerInfo",
          get: function get() {
            return this._playerInfo;
          },
          set: function set(v) {
            this._playerInfo = v;
          }
        }, {
          key: "history",
          get: function get() {
            return this._history;
          },
          set: function set(v) {
            this._history = v;
          }
        }, {
          key: "isNewBee",
          get: function get() {
            return this._isNewBee;
          },
          set: function set(v) {
            this._isNewBee = v;
          } //是否已经解锁完成所有技能

        }, {
          key: "isPlayerSkillAllUnlock",
          get: function get() {
            var arrSkill = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getTableArr("playerSkill"); //生命回复技能不在技能列表里面出现，而是在游戏内多次出现，所以减去1

            return this.playerInfo.arrSkill.length === arrSkill.length - 1;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new playerData();
            return this._instance;
          }
        }]);

        return playerData;
      }(Component), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerData.js.map