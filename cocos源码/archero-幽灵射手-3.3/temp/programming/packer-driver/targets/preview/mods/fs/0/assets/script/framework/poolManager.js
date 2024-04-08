System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, instantiate, NodePool, _dec, _class, _class2, _temp, _crd, ccclass, property, poolManager;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4ab6T5/1VCqK/Vn+UcADNM", "poolManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("poolManager", poolManager = (_dec = ccclass("poolManager"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function poolManager() {
          _defineProperty(this, "_dictPool", {});

          _defineProperty(this, "_dictPrefab", {});
        }

        var _proto = poolManager.prototype;

        /**
         * 根据预设从对象池中获取对应节点
         */
        _proto.getNode = function getNode(prefab, parent) {
          var name = prefab.name; //@ts-ignore

          if (!prefab.position) {
            //@ts-ignore
            name = prefab.data.name;
          }

          this._dictPrefab[name] = prefab;
          var node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool = new NodePool();

            this._dictPool[name] = _pool;
            node = instantiate(prefab);
          }

          node.parent = parent;
          node.active = true;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         */
        ;

        _proto.putNode = function putNode(node) {
          if (!node) {
            return;
          }

          var name = node.name;
          var pool = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this._dictPool[name];
          } else {
            //没有对应对象池，创建他！
            pool = new NodePool();
            this._dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */
        ;

        _proto.clearPool = function clearPool(name) {
          if (this._dictPool.hasOwnProperty(name)) {
            var pool = this._dictPool[name];
            pool.clear();
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(poolManager, null, [{
          key: "instance",
          get:
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new poolManager();
            return this._instance;
          }
        }]);

        return poolManager;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=poolManager.js.map