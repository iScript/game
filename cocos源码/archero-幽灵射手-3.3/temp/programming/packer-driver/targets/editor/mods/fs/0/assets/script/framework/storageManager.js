System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, sys, log, util, _dec, _class, _class2, _temp, _crd, ccclass, property, StorageManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      sys = _cc.sys;
      log = _cc.log;
    }, function (_unresolved_2) {
      util = _unresolved_2.util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5689348bSJGyYo12WGa6eeJ", "storageManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StorageManager", StorageManager = (_dec = ccclass("StorageManager"), _dec(_class = (_temp = _class2 = class StorageManager {
        constructor() {
          _defineProperty(this, "_path", null);

          _defineProperty(this, "_keyConfig", 'archero');

          _defineProperty(this, "_markSave", false);

          _defineProperty(this, "_saveTimer", -1);

          _defineProperty(this, "jsonData", {});
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new StorageManager();

          this._instance.start();

          return this._instance;
        }

        start() {
          this.jsonData = {
            "userId": ""
          };
          this._path = this._getConfigPath();
          var content;

          if (sys.isNative) {
            var valueObject = jsb.fileUtils.getValueMapFromFile(this._path);
            content = valueObject[this._keyConfig];
          } else {
            content = sys.localStorage.getItem(this._keyConfig);
          } // // 解密代码
          // if (cc.game.config["encript"]) {
          //     var newContent = new Xxtea("upgradeHeroAbility").xxteaDecrypt(content);
          //     if (newContent && newContent.length > 0) {
          //         content = newContent;
          //     }
          // }


          if (content && content.length) {
            if (content.startsWith('@')) {
              content = content.substring(1);
              content = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
                error: Error()
              }), util) : util).decrypt(content);
            }

            try {
              //初始化操作
              var jsonData = JSON.parse(content);
              this.jsonData = jsonData;
            } catch (excepaiton) {}
          } //启动无限定时器，每1秒保存一次数据，而不是无限保存数据
          // this._saveTimer = setInterval(() =>{
          //     this.scheduleSave();
          // }, 500);
          //每隔5秒保存一次数据，主要是为了保存最新在线时间，方便离线奖励时间判定


          this._saveTimer = setInterval(() => {
            this.scheduleSave();
          }, 5000);
        }
        /**
         * 存储配置文件，不保存到本地
         * @param {string}key  关键字
         * @param {any}value  存储值
         */


        setConfigDataWithoutSave(key, value) {
          let account = this.jsonData.userId;

          if (this.jsonData[account]) {
            this.jsonData[account][key] = value;
          } else {
            console.error("no account can not save");
          }
        }
        /**
           * 存储配置文件，保存到本地
           * @param {string}key  关键字
           * @param {any}value  存储值
           */


        setConfigData(key, value) {
          this.setConfigDataWithoutSave(key, value);
          this._markSave = true; //标记为需要存储，避免一直在写入，而是每隔一段时间进行写入
        }
        /**
         * 根据关键字获取数值
         * @param {string} key 关键字
         * @returns 
         */


        getConfigData(key) {
          let account = this.jsonData.userId;

          if (this.jsonData[account]) {
            var value = this.jsonData[account][key];
            return value ? value : "";
          } else {
            log("no account can not load");
            return "";
          }
        }
        /**
         * 设置全局数据
         * @param {string} key 关键字
         * @param {any}value  存储值
         * @returns 
         */


        setGlobalData(key, value) {
          this.jsonData[key] = value;
          this.save();
        }
        /**
         * 获取全局数据
         * @param {string} key 关键字
         * @returns 
         */


        getGlobalData(key) {
          return this.jsonData[key];
        }
        /**
         * 设置用户唯一标示符
         * @param {string} userId 用户唯一标示符
         * @param {any}value  存储值
         * @returns 
         */


        setUserId(userId) {
          this.jsonData.userId = userId;

          if (!this.jsonData[userId]) {
            this.jsonData[userId] = {};
          }

          this.save();
        }
        /**
         * 获取用户唯一标示符
         * @returns {string}
         */


        getUserId() {
          return this.jsonData.userId;
        }
        /**
         * 定时存储
         * @returns 
         */


        scheduleSave() {
          if (!this._markSave) {
            return;
          }

          this.save();
        }
        /**
         * 标记为已修改
         */


        markModified() {
          this._markSave = true;
        }
        /**
         * 保存配置文件
         * @returns 
         */


        save() {
          // 写入文件
          var str = JSON.stringify(this.jsonData); // // 加密代码
          // if (cc.game.config["encript"]) {
          //     str = new Xxtea("upgradeHeroAbility").xxteaEncrypt(str);
          // }

          let zipStr = '@' + (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).encrypt(str); // let zipStr = str;

          this._markSave = false;

          if (!sys.isNative) {
            var ls = sys.localStorage;
            ls.setItem(this._keyConfig, zipStr);
            return;
          }

          var valueObj = {};
          valueObj[this._keyConfig] = zipStr; // jsb.fileUtils.writeToFile(valueObj, this._path);

          jsb.fileUtils.writeToFile(valueObj);
        }
        /**
         * 获取配置文件路径
         * @returns 获取配置文件路径
         */


        _getConfigPath() {
          let platform = sys.platform;
          let path = "";

          if (platform === sys.OS.WINDOWS) {
            path = "src/conf";
          } else if (platform === sys.OS.LINUX) {
            path = "./conf";
          } else {
            if (sys.isNative) {
              path = jsb.fileUtils.getWritablePath();
              path = path + "conf";
            } else {
              path = "src/conf";
            }
          }

          return path;
        }

      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=storageManager.js.map