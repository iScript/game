System.register([], function (_export, _context) {
  "use strict";

  var CjsLoader;
  return {
    setters: [],
    execute: function () {
      CjsLoader = class CjsLoader {
        constructor() {
          this._namedWrappers = {};
          this._resolveCache = {};
          this._moduleCache = {};
        }

        define(id, wrapper) {
          this._namedWrappers[id] = wrapper;
        }

        require(id) {
          return this._require(id);
        }

        createRequireWithReqMap(requireMap, originalRequire) {
          return specifier => {
            const resolved = requireMap[specifier];

            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        }

        throwInvalidWrapper(requestTarget, from) {
          throw new Error(`Module '${requestTarget}' imported from '${from}' is expected be an ESM-wrapped CommonJS module but it doesn't.`);
        }

        _require(id, parent) {
          const cachedModule = this._moduleCache[id];

          if (cachedModule) {
            return cachedModule.exports;
          }

          const module = {
            id,
            exports: {}
          };
          this._moduleCache[id] = module;

          this._tryModuleLoad(module, id);

          return module.exports;
        }

        _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        }

        _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent$reso, _cjsInfos$parent;

          if (specifier in cjsInfos) {
            return specifier;
          }

          if (!parent) {
            return;
          }

          return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) === null || _cjsInfos$parent === void 0 ? void 0 : _cjsInfos$parent.resolveCache[specifier]) !== null && _cjsInfos$parent$reso !== void 0 ? _cjsInfos$parent$reso : undefined;
        }

        _tryModuleLoad(module, id) {
          let threw = true;

          try {
            this._load(module, id);

            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        }

        _load(module, id) {
          const wrapper = this._loadWrapper(id);

          const require = this._createRequire(module);

          wrapper(module.exports, require, module);
        }

        _loadWrapper(id) {
          if (id in this._namedWrappers) {
            return this._namedWrappers[id];
          } else {
            return this._loadExternalWrapper(id);
          }
        }

        _loadExternalWrapper(id) {
          return exports => {
            let path;

            try {
              path = URL.fileURLToPath(id);
            } catch (err) {
              throw new Error(`${id} is not a valid file URL`);
            }

            const extern = require(path);

            Object.assign(exports, extern);
          };
        }

        _createRequire(module) {
          return specifier => this._require(specifier, module);
        }

        _throwUnresolved(specifier, parentUrl) {
          throw new Error(`Unable to resolve ${specifier} from ${parent}.`);
        }

      };

      _export("default", new CjsLoader());
    }
  };
});
//# sourceMappingURL=cjs-loader.js.map