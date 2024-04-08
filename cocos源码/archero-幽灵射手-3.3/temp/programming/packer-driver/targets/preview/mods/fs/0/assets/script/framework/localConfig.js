System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, resources, CSVManager, resourceUtil, _dec, _class, _class2, _temp, _crd, ccclass, property, localConfig;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCSVManager(extras) {
    _reporterNs.report("CSVManager", "./csvManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      CSVManager = _unresolved_2.CSVManager;
    }, function (_unresolved_3) {
      resourceUtil = _unresolved_3.resourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12facSZhFRGIYa7yxiLVDOp", "localConfig", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("localConfig", localConfig = (_dec = ccclass("localConfig"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function localConfig() {
          _defineProperty(this, "_csvManager", new (_crd && CSVManager === void 0 ? (_reportPossibleCrUseOfCSVManager({
            error: Error()
          }), CSVManager) : CSVManager)());

          _defineProperty(this, "_callback", new Function());

          _defineProperty(this, "_currentLoad", 0);

          _defineProperty(this, "_cntLoad", 0);
        }

        var _proto = localConfig.prototype;

        /**
         * 加载配置文件
         * @param {Function}cb 回调函数 
         */
        _proto.loadConfig = function loadConfig(cb) {
          this._callback = cb;

          this._loadCSV();
        };

        _proto._loadCSV = function _loadCSV() {
          var _this = this;

          //新增数据表 请往该数组中添加....
          resources.loadDir("datas", function (err, assets) {
            if (err) {
              return;
            }

            var arrCsvFiles = assets.filter(function (item) {
              return item._native !== ".md";
            });
            _this._cntLoad = arrCsvFiles.length; //客户端加载

            if (arrCsvFiles.length) {
              arrCsvFiles.forEach(function (item, index, array) {
                (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                  error: Error()
                }), resourceUtil) : resourceUtil).getTextData(item.name, function (err, content) {
                  _this._csvManager.addTable(item.name, content);

                  _this._tryToCallbackOnFinished();
                });
              });
            } else {
              _this._tryToCallbackOnFinished();
            }
          });
        }
        /**
         * 查询一条表内容
         * @param {string} tableName 表名
         * @param {string} key 列名
         * @param {any} value 值
         * @returns {Object} 一条表内容
         */
        ;

        _proto.queryOne = function queryOne(tableName, key, value) {
          return this._csvManager.queryOne(tableName, key, value);
        }
        /**
         * 根据ID查询一条表内容
         * @param {string}tableName 表名
         * @param {string}ID
         * @returns {Object} 一条表内容
         */
        ;

        _proto.queryByID = function queryByID(tableName, ID) {
          return this._csvManager.queryByID(tableName, ID);
        }
        /**
         * 根据表名获取表的所有内容
         * @param {string} tableName  表名
         * @returns {object} 表内容
         */
        ;

        _proto.getTable = function getTable(tableName) {
          return this._csvManager.getTable(tableName);
        }
        /**
         * 根据表名获取表的所有内容
         * @param {string} tableName  表名
         * @returns {object} 表内容
         */
        ;

        _proto.getTableArr = function getTableArr(tableName) {
          return this._csvManager.getTableArr(tableName);
        }
        /**
         * 查询key和value对应的所有行内容
         * @param {string} tableName 表名
         * @param {string} key 列名
         * @param {any} value 值
         * @returns {Object}
         */
        ;

        _proto.queryAll = function queryAll(tableName, key, value) {
          return this._csvManager.queryAll(tableName, key, value);
        } // 

        /**
         * 选出指定表里所有 key 的值在 values 数组中的数据，返回 Object，key 为 ID
         * @param {string} tableName 表名
         * @param {string} key  列名
         * @param {Array}values 数值
         * @returns 
         */
        ;

        _proto.queryIn = function queryIn(tableName, key, values) {
          return this._csvManager.queryIn(tableName, key, values);
        }
        /**
         * 选出符合条件的数据。condition key 为表格的key，value 为值的数组。返回的object，key 为数据在表格的ID，value为具体数据
         * @param {string} tableName 表名
         * @param {any} condition 筛选条件
         * @returns 
         */
        ;

        _proto.queryByCondition = function queryByCondition(tableName, condition) {
          return this._csvManager.queryByCondition(tableName, condition);
        };

        _proto._tryToCallbackOnFinished = function _tryToCallbackOnFinished() {
          if (this._callback) {
            this._currentLoad++;

            if (this._currentLoad >= this._cntLoad) {
              this._callback();
            }
          }
        };

        _createClass(localConfig, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new localConfig();
            return this._instance;
          }
        }]);

        return localConfig;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=localConfig.js.map