System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Prefab, SpriteFrame, resources, error, Texture2D, instantiate, isValid, find, _dec, _class, _crd, ccclass, resourceUtil;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      error = _cc.error;
      Texture2D = _cc.Texture2D;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7844e1bOwZK+7JMYjENQU5v", "resourceUtil", undefined);

      ccclass = _decorator.ccclass;

      _export("resourceUtil", resourceUtil = (_dec = ccclass("resourceUtil"), _dec(_class = /*#__PURE__*/function () {
        function resourceUtil() {}

        /**
        * 加载资源
        * @param url   资源路径
        * @param type  资源类型
        * @param cb    回调
        * @method loadRes
        */
        resourceUtil.loadRes = function loadRes(url, type, cb) {
          if (cb === void 0) {
            cb = function cb() {};
          }

          resources.load(url, function (err, res) {
            if (err) {
              error(err.message || err);
              cb(err, res);
              return;
            }

            cb && cb(null, res);
          });
        }
        /**
         * 获取特效prefab
         * @param modulePath 路径
         * @returns 
         */
        ;

        resourceUtil.loadEffectRes = function loadEffectRes(modulePath) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this.loadRes("prefab/effect/" + modulePath, Prefab, function (err, prefab) {
              if (err) {
                console.error('effect load failed', modulePath);
                reject && reject();
                return;
              }

              resolve && resolve(prefab);
            });
          });
        }
        /**
         * 获取模型数据
         * @param modulePath 模型路径
         * @returns 
         */
        ;

        resourceUtil.loadModelRes = function loadModelRes(modulePath) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            _this2.loadRes("prefab/model/" + modulePath, Prefab, function (err, prefab) {
              if (err) {
                console.error("model load failed", modulePath);
                reject && reject();
                return;
              }

              resolve && resolve(prefab);
            });
          });
        }
        /**
         * 获取多模型数据
         * @param path 资源路径
         * @param arrName 资源名称
         * @param progressCb 过程回调函数
         * @param completeCb 完成回调函数
         */
        ;

        resourceUtil.loadModelResArr = function loadModelResArr(path, arrName, progressCb, completeCb) {
          var arrUrls = arrName.map(function (item) {
            return path + "/" + item;
          });
          resources.load(arrUrls, Prefab, progressCb, completeCb);
        }
        /**
         * 获取贴图资源
         * @param path 贴图路径
         * @returns 
         */
        ;

        resourceUtil.loadSpriteFrameRes = function loadSpriteFrameRes(path) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            _this3.loadRes(path, SpriteFrame, function (err, img) {
              if (err) {
                console.error('spriteFrame load failed!', path, err);
                reject && reject();
                return;
              }

              var texture = new Texture2D();
              texture.image = img;
              var sf = new SpriteFrame();
              sf.texture = texture;
              resolve && resolve(sf);
            });
          });
        }
        /**
         * 获取关卡数据
         * @param level 关卡
         * @param cb 回调函数
         */
        ;

        resourceUtil.getMap = function getMap(level, cb) {
          var levelStr = 'map'; //前面补0

          if (level >= 100) {
            levelStr += level;
          } else if (level >= 10) {
            levelStr += '0' + level;
          } else {
            levelStr += '00' + level;
          }

          this.loadRes("map/config/" + levelStr, null, function (err, txtAsset) {
            if (err) {
              cb(err, txtAsset);
              return;
            }

            var content = '';

            if (txtAsset._file) {
              //@ts-ignore
              if (window['LZString']) {
                //@ts-ignore
                content = window['LZString'].decompressFromEncodedURIComponent(txtAsset._file);
              }

              var objJson = JSON.parse(content);
              cb(null, objJson);
            } else if (txtAsset.text) {
              //@ts-ignore
              if (window['LZString']) {
                //@ts-ignore
                content = window['LZString'].decompressFromEncodedURIComponent(txtAsset.text);
              }

              var objJson = JSON.parse(content);
              cb(null, objJson);
            } else if (txtAsset.json) {
              cb(null, txtAsset.json);
            } else {
              cb('failed');
            }
          });
        }
        /**
         * 获取关卡数据
         * @param type 关卡类型
         * @param arrName 资源名称
         * @param progressCb 过程回调函数
         * @param completeCb 完成回调函数
         */
        ;

        resourceUtil.getMapObj = function getMapObj(type, arrName, progressCb, completeCb) {
          var arrUrls = [];

          for (var idx = 0; idx < arrName.length; idx++) {
            arrUrls.push("map/" + type + "/" + arrName[idx]);
          }

          resources.load(arrUrls, Prefab, progressCb, completeCb);
        }
        /**
         * 获取UI prefab
         * @param prefabPath prefab路径 
         * @param cb 回调函数
         */
        ;

        resourceUtil.getUIPrefabRes = function getUIPrefabRes(prefabPath, cb) {
          this.loadRes("prefab/ui/" + prefabPath, Prefab, cb);
        }
        /**
         * 创建ui界面
         * @param path ui路径
         * @param cb 回调函数
         * @param parent 父节点
         */
        ;

        resourceUtil.createUI = function createUI(path, cb, parent) {
          this.getUIPrefabRes(path, function (err, prefab) {
            if (err) return;
            var node = instantiate(prefab);
            node.setPosition(0, 0, 0);

            if (!parent) {
              parent = find("Canvas");
            }

            parent.addChild(node);
            cb && cb(null, node);
          });
        }
        /**
         * 获取json数据
         * @param fileName 文件名
         * @param cb 回调函数 
         */
        ;

        resourceUtil.getJsonData = function getJsonData(fileName, cb) {
          this.loadRes("datas/" + fileName, null, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            if (content.json) {
              cb(err, content.json);
            } else {
              cb('failed!!!');
            }
          });
        }
        /**
         * 获取文本数据
         * @param fileName 文件名
         * @param cb  回调函数
         */
        ;

        resourceUtil.getTextData = function getTextData(fileName, cb) {
          this.loadRes("datas/" + fileName, null, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            var text = content.text;
            cb(err, text);
          });
        }
        /**
         * 设置精灵贴图
         * @param path 资源路径
         * @param sprite 精灵
         * @param cb 回调函数
         */
        ;

        resourceUtil.setSpriteFrame = function setSpriteFrame(path, sprite, cb) {
          this.loadRes(path + '/spriteFrame', SpriteFrame, function (err, spriteFrame) {
            if (err) {
              console.error('set sprite frame failed! err:', path, err);
              cb(err);
              return;
            }

            if (sprite && isValid(sprite)) {
              sprite.spriteFrame = spriteFrame;
              cb(null);
            }
          });
        };

        return resourceUtil;
      }()) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=resourceUtil.js.map