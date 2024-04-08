System.register([], function (_export, _context) {
  "use strict";

  var CjsLoader;
  return {
    setters: [],
    execute: function () {
      CjsLoader = /*#__PURE__*/function () {
        function CjsLoader() {
          this._namedWrappers = {};
          this._resolveCache = {};
          this._moduleCache = {};
        }

        var _proto = CjsLoader.prototype;

        _proto.define = function define(id, wrapper) {
          this._namedWrappers[id] = wrapper;
        };

        _proto.require = function require(id) {
          return this._require(id);
        };

        _proto.createRequireWithReqMap = function createRequireWithReqMap(requireMap, originalRequire) {
          return function (specifier) {
            var resolved = requireMap[specifier];

            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        };

        _proto.throwInvalidWrapper = function throwInvalidWrapper(requestTarget, from) {
          throw new Error("Module '" + requestTarget + "' imported from '" + from + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };

        _proto._require = function _require(id, parent) {
          var cachedModule = this._moduleCache[id];

          if (cachedModule) {
            return cachedModule.exports;
          }

          var module = {
            id: id,
            exports: {}
          };
          this._moduleCache[id] = module;

          this._tryModuleLoad(module, id);

          return module.exports;
        };

        _proto._resolve = function _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        };

        _proto._resolveFromInfos = function _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent$reso, _cjsInfos$parent;

          if (specifier in cjsInfos) {
            return specifier;
          }

          if (!parent) {
            return;
          }

          return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) === null || _cjsInfos$parent === void 0 ? void 0 : _cjsInfos$parent.resolveCache[specifier]) !== null && _cjsInfos$parent$reso !== void 0 ? _cjsInfos$parent$reso : undefined;
        };

        _proto._tryModuleLoad = function _tryModuleLoad(module, id) {
          var threw = true;

          try {
            this._load(module, id);

            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        };

        _proto._load = function _load(module, id) {
          var wrapper = this._loadWrapper(id);

          var require = this._createRequire(module);

          wrapper(module.exports, require, module);
        };

        _proto._loadWrapper = function _loadWrapper(id) {
          if (id in this._namedWrappers) {
            return this._namedWrappers[id];
          } else {
            return this._loadExternalWrapper(id);
          }
        };

        _proto._loadExternalWrapper = function _loadExternalWrapper(id) {
          return function (exports) {
            var path;

            try {
              path = URL.fileURLToPath(id);
            } catch (err) {
              throw new Error(id + " is not a valid file URL");
            }

            var extern = require(path);

            Object.assign(exports, extern);
          };
        };

        _proto._createRequire = function _createRequire(module) {
          var _this = this;

          return function (specifier) {
            return _this._require(specifier, module);
          };
        };

        _proto._throwUnresolved = function _throwUnresolved(specifier, parentUrl) {
          throw new Error("Unable to resolve " + specifier + " from " + parent + ".");
        };

        return CjsLoader;
      }();

      _export("default", new CjsLoader());
    }
  };
});
//# sourceMappingURL=cjs-loader.js.map