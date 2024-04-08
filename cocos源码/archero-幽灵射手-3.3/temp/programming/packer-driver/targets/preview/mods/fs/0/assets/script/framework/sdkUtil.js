System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, sys, playerData, constant, AudioManager, StorageManager, _crd, SdkUtil;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./storageManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      StorageManager = _unresolved_5.StorageManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8753/f8aJIM6kpa2WkESB8", "sdkUtil", undefined);

      //管理广告、分享、SDK相关内容的组件
      _export("SdkUtil", SdkUtil = /*#__PURE__*/function () {
        function SdkUtil() {}

        //平台
        //登录后会检查是否展示登录界面，而且只检查一次
        //是否正在播放广告
        //是否允许屏幕上下移动
        //是否允许屏幕缩放
        //未解锁日记
        //两次震动之间的间隔,AppActivity里面的震动间隔也是100
        //上次震动时间

        /**
           * 自定义事件统计
           *
           * @param {string} eventType
           * @param {object} objParams
           */
        SdkUtil.customEventStatistics = function customEventStatistics(eventType, objParams) {
          eventType = eventType.toString();

          if (!objParams) {
            objParams = {};
          } // console.log({'eventType': eventType},{'objParams': objParams});


          objParams.isNewBee = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.isNewBee;

          if (this.platform === 'wx') {
            //@ts-ignore
            if (window['wx'] && window['wx']['aldSendEvent']) {
              //@ts-ignore
              window.wx['aldSendEvent'](eventType, objParams);
            }
          } //@ts-ignore


          if (this.platform === 'cocos' && window.cocosAnalytics && window.cocosAnalytics.isInited()) {
            console.log("###统计", eventType, objParams); //@ts-ignore

            window.cocosAnalytics.CACustomEvent.onStarted(eventType, objParams);
          }
        }
        /**
         * 调用震动
         */
        ;

        SdkUtil.vibrateShort = function vibrateShort() {
          var _instance$getGlobalDa;

          var isEnableVibrate = (_instance$getGlobalDa = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("vibration")) !== null && _instance$getGlobalDa !== void 0 ? _instance$getGlobalDa : true;

          if (isEnableVibrate) {
            var now = Date.now();

            if (now - this.vibratePreTime >= this.vibrateInterval) {
              if (sys.isNative) {
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "vibrator", "()V"); //@ts-ignore
              } else if (window.wx) {
                //@ts-ignore
                wx.vibrateShort({
                  success: function success(result) {},
                  fail: function fail() {},
                  complete: function complete() {}
                });
              }

              this.vibratePreTime = now;
            }
          }
        }
        /**
         * 微信分享
         * 
         * @static
         * @param {string} title
         * @param {string} imageUrl
         * @returns
         * @memberof SdkUtil
         */
        ;

        SdkUtil.shareGame = function shareGame(title, imageUrl) {
          //@ts-ignore
          if (!window.wx) {
            return;
          } //@ts-ignore


          wx.showShareMenu({
            withShareTicket: true,
            complete: function complete() {}
          }); //@ts-ignore

          if (wx.aldOnShareAppMessage) {
            //@ts-ignore
            wx.aldOnShareAppMessage(function () {
              // 用户点击了“转发”按钮
              return {
                title: title,
                imageUrl: imageUrl
              };
            });
          } else {
            //@ts-ignore
            wx.onShareAppMessage(function () {
              // 用户点击了“转发”按钮
              return {
                title: title,
                imageUrl: imageUrl
              };
            });
          }
        }
        /**
         * 根据功能设置图标对应展示
         *
         * @static
         * @param {string} funStr
         * @param {SpriteComponent} spIcon
         * @param {Function} [callback]
         * @param {SpriteFrame} [imgAd]
         * @param {SpriteFrame} [imgShare]
         * @memberof gameLogic
         */
        ;

        SdkUtil.updatePayIcon = function updatePayIcon(shareId, spIcon, _callback, imgAd, imgShare) {
          var _this = this;

          if (this.platform === 'ios' || this.platform === 'wx') {
            //策划说ios平台都是视频广告，不用改
            if (this.platform === 'ios') {
              return;
            } //@ts-ignore


            if (window.bondSDK) {
              //@ts-ignore
              window.bondSDK.getPayType({
                shareId: shareId,
                callback: function callback(type) {
                  console.log("###updatePayIcon.type", type);

                  switch (type) {
                    case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                      error: Error()
                    }), constant) : constant).OPEN_REWARD_TYPE.AD:
                      spIcon.node.active = true;

                      if (imgAd) {
                        spIcon.spriteFrame = imgAd;
                      } else {
                        spIcon.spriteFrame = _this.imgAd;
                      }

                      break;

                    case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                      error: Error()
                    }), constant) : constant).OPEN_REWARD_TYPE.SHARE:
                      spIcon.node.active = true;

                      if (imgShare) {
                        spIcon.spriteFrame = imgShare;
                      } else {
                        spIcon.spriteFrame = _this.imgShare;
                      }

                      break;

                    case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                      error: Error()
                    }), constant) : constant).OPEN_REWARD_TYPE.NULL:
                      spIcon.node.active = false; //策划说不管有广告还是没有广告都展示广告图标

                      break;
                  }

                  if (_callback) {
                    _callback(type);
                  }
                }
              });
            }
          } else if (this.platform === 'cocosPlay') {
            //策划说不管有没有广告都展示视频icon
            return; //@ts-ignore

            jkwSDK.checkRewardedVideoAd(function (err) {
              console.log("###updatePayIcon.checkRewardedVideoAd.err", err);

              if (!err) {
                spIcon.node.active = true;

                if (imgAd) {
                  spIcon.spriteFrame = imgAd;
                } else {
                  spIcon.spriteFrame = _this.imgAd;
                }

                _callback && _callback((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).OPEN_REWARD_TYPE.AD);
              } else {
                spIcon.node.active = false;
                _callback && _callback((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).OPEN_REWARD_TYPE.NULL);
              }
            });
          } else {
            spIcon.node.active = false;
            _callback && _callback((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).OPEN_REWARD_TYPE.NULL);
          }
        };

        SdkUtil.getPayType = function getPayType(shareId, _callback2) {
          //@ts-ignore
          if (window.bondSDK) {
            //@ts-ignore
            window.bondSDK.getPayType({
              shareId: shareId,
              callback: function callback(type) {
                console.log("###getPayType.type", type);

                _callback2(type);
              }
            });
          } else if (this.platform === 'cocosPlay') {//     jkwSDK.checkRewardedVideoAd((err)=>{
            //         console.log("###getPayType.err", err);
            //         if (!err) {
            //            callback(constant.OPEN_REWARD_TYPE.AD);
            //         } else {
            //            callback(constant.OPEN_REWARD_TYPE.NULL);    
            //         }   
            //    })
          } else {
            _callback2 && _callback2((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).OPEN_REWARD_TYPE.NULL);
          }
        };

        SdkUtil.pay = function pay(shareId, callback) {
          var _this2 = this;

          console.log("###gameLogic.pay", "shareId", shareId);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.pauseAll();
          this.isWatchVideoAd = true; //@ts-ignore

          if ((this.platform === 'ios' || this.platform === 'wx') && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.pay({
              shareId: shareId,
              success: function success() {
                console.log("###pay.success", "shareId", shareId);
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.resumeAll();
                _this2.isWatchVideoAd = false;
                callback(null);
              },
              fail: function fail(err) {
                console.log("###pay.fail", "shareId", shareId);
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.resumeAll(); // uiManager.instance.showTips('No ads, please try again later');

                _this2.isWatchVideoAd = false;
                callback('fail', err);
              }
            });
          } else if (this.platform === 'cocosPlay') {// jkwSDK.showRewardedVideoAd((err)=>{
            //     AudioManager.instance.resumeAll();
            //     if (!err) {
            //         callback && callback(null);
            //     } else {
            //         callback && callback('fail', err);
            //         //播放失败则给个提示,让玩家重试一下
            //         if (err ==='failed') {
            //             UIManager.instance.showTips('No ads, please try again later');
            //         }
            //     }
            // })
          } else {
            this.isWatchVideoAd = false;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.resumeAll();
            callback && callback(null);
          }
        };

        SdkUtil.showBannerAd = function showBannerAd(adPlaceName) {
          //@ts-ignore
          if (this.platform === 'wx' && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.showKeepOutBanner({
              adPlaceName: adPlaceName
            });
          } //@ts-ignore
          else if (this.platform === 'ios' && window.bondSDK) {
              //@ts-ignore
              window.bondSDK.showAdBanner({
                adPlaceName: adPlaceName
              });
            } else if (this.platform === 'cocosPlay') {// jkwSDK.showBannerAd();
            }
        };

        SdkUtil.hideBannerAd = function hideBannerAd() {
          //@ts-ignore
          if (this.platform === 'wx' && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.hideKeepOutBanner();
          } //@ts-ignore
          else if (this.platform === 'ios' && window.bondSDK) {
              //@ts-ignore
              window.bondSDK.hideAdBanner();
            } else if (this.platform === 'cocosPlay') {// jkwSDK.hideBannerAd();
            }
        };

        return SdkUtil;
      }());

      _defineProperty(SdkUtil, "platform", 'cocos');

      _defineProperty(SdkUtil, "imgAd", null);

      _defineProperty(SdkUtil, "imgShare", null);

      _defineProperty(SdkUtil, "isDebugMode", false);

      _defineProperty(SdkUtil, "onlineInterval", -1);

      _defineProperty(SdkUtil, "isEnableVibrate", true);

      _defineProperty(SdkUtil, "isCheckOffline", false);

      _defineProperty(SdkUtil, "isWatchVideoAd", false);

      _defineProperty(SdkUtil, "isEnableMoving", false);

      _defineProperty(SdkUtil, "isEnableZoom", false);

      _defineProperty(SdkUtil, "arrLockDiary", []);

      _defineProperty(SdkUtil, "vibrateInterval", 100);

      _defineProperty(SdkUtil, "vibratePreTime", 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=sdkUtil.js.map