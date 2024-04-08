System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, constant, localConfig, SkillIcon, poolManager, _decorator, Component, Prefab, playerData, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, SkillList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillIcon(extras) {
    _reporterNs.report("SkillIcon", "./skillIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      constant = _unresolved_2.constant;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      SkillIcon = _unresolved_4.SkillIcon;
    }, function (_unresolved_5) {
      poolManager = _unresolved_5.poolManager;
    }, function (_unresolved_6) {
      playerData = _unresolved_6.playerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f904J+miVGoI/YxEAcqFJg", "skillList", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SkillList", SkillList = (_dec = ccclass('SkillList'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkillList, _Component);

        function SkillList() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "pbSkillIcon", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SkillList.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.init = function init(callback) {
          var _this2 = this;

          var arrUnLockSkill = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.arrSkill.concat();
          this.node.children.forEach(function (ndChild) {
            ndChild.active = false;
          });

          if (arrUnLockSkill.length > (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MAX_SKILL_ICON_NUM) {
            arrUnLockSkill.length = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MAX_SKILL_ICON_NUM;
          }

          arrUnLockSkill.forEach(function (skillInfo, idx) {
            var ndChild;

            if (idx >= _this2.node.children.length) {
              ndChild = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(_this2.pbSkillIcon, _this2.node);
            } else {
              ndChild = _this2.node.children[idx];
            }

            ndChild.active = true;
            var itemInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID("playerSkill", arrUnLockSkill[idx]);
            var scriptSkillIcon = ndChild.getComponent(_crd && SkillIcon === void 0 ? (_reportPossibleCrUseOfSkillIcon({
              error: Error()
            }), SkillIcon) : SkillIcon);
            scriptSkillIcon.init(idx, itemInfo, callback);
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return SkillList;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pbSkillIcon", [_dec2], {
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
//# sourceMappingURL=skillList.js.map