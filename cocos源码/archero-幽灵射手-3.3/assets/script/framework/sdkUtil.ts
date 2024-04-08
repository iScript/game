
import { _decorator, Vec3, SpriteFrame, SpriteComponent, sys, Node } from "cc";
import { playerData } from "./playerData";
import { constant } from './constant';
import { AudioManager } from './audioManager';
import { StorageManager } from './storageManager';
//管理广告、分享、SDK相关内容的组件
export class SdkUtil {
    public static platform: string = 'cocos'; //平台
    public static imgAd: SpriteFrame = null!;
    public static imgShare: SpriteFrame = null!;
    public static isDebugMode: boolean = false;
    public static onlineInterval: number = -1;
    public static isEnableVibrate: boolean = true;
    public static isCheckOffline: boolean = false; //登录后会检查是否展示登录界面，而且只检查一次
    public static isWatchVideoAd: boolean = false;//是否正在播放广告
    public static isEnableMoving: boolean = false;//是否允许屏幕上下移动
    public static isEnableZoom: boolean = false;//是否允许屏幕缩放
    public static arrLockDiary = [];//未解锁日记
    public static vibrateInterval: number = 100;//两次震动之间的间隔,AppActivity里面的震动间隔也是100
    public static vibratePreTime: number = 0;//上次震动时间

    /**
       * 自定义事件统计
       *
       * @param {string} eventType
       * @param {object} objParams
       */
    public static customEventStatistics(eventType: string, objParams?: any) {
        eventType = eventType.toString();
        if (!objParams) {
            objParams = {};
        }

        // console.log({'eventType': eventType},{'objParams': objParams});

        objParams.isNewBee = playerData.instance.isNewBee;

        if (this.platform === 'wx') {
            //@ts-ignore
            if (window['wx'] && window['wx']['aldSendEvent']) {
                //@ts-ignore
                window.wx['aldSendEvent'](eventType, objParams);
            }
        }

        //@ts-ignore
        if (this.platform === 'cocos' && window.cocosAnalytics && window.cocosAnalytics.isInited()) {
            console.log("###统计", eventType, objParams);
            //@ts-ignore
            window.cocosAnalytics.CACustomEvent.onStarted(eventType, objParams);
        }
    }

    /**
     * 调用震动
     */
    public static vibrateShort() {
        let isEnableVibrate = StorageManager.instance.getGlobalData("vibration") ?? true;

        if (isEnableVibrate) {
            let now = Date.now();

            if (now - this.vibratePreTime >= this.vibrateInterval) {
                if (sys.isNative) {
                    jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "vibrator", "()V");
                //@ts-ignore
                } else if (window.wx) {
                //@ts-ignore
                    wx.vibrateShort({
                        success: (result: any) => {

                        },
                        fail: () => { },
                        complete: () => { }
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
    public static shareGame(title: string, imageUrl: string) {
        //@ts-ignore
        if (!window.wx) {
            return;
        }

        //@ts-ignore
        wx.showShareMenu({
            withShareTicket: true,
            complete: () => {

            }
        });

        //@ts-ignore
        if (wx.aldOnShareAppMessage) {
            //@ts-ignore
            wx.aldOnShareAppMessage(function () {
                // 用户点击了“转发”按钮
                return {
                    title: title,
                    imageUrl: imageUrl,

                };
            });
        } else {
            //@ts-ignore
            wx.onShareAppMessage(function () {
                // 用户点击了“转发”按钮
                return {
                    title: title,
                    imageUrl: imageUrl,

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
    public static updatePayIcon(shareId: number, spIcon: SpriteComponent, callback?: Function, imgAd?: SpriteFrame, imgShare?: SpriteFrame) {
        if (this.platform === 'ios' || this.platform === 'wx') {
            //策划说ios平台都是视频广告，不用改
            if (this.platform === 'ios') {
                return;
            }
            //@ts-ignore
            if (window.bondSDK) {
                //@ts-ignore
                window.bondSDK.getPayType({
                    shareId: shareId,
                    callback: (type: number) => {
                        console.log("###updatePayIcon.type", type);
                        switch (type) {
                            case constant.OPEN_REWARD_TYPE.AD:
                                spIcon.node.active = true;
                                if (imgAd) {
                                    spIcon.spriteFrame = imgAd;
                                } else {
                                    spIcon.spriteFrame = this.imgAd;
                                }
                                break;
                            case constant.OPEN_REWARD_TYPE.SHARE:
                                spIcon.node.active = true;
                                if (imgShare) {
                                    spIcon.spriteFrame = imgShare;
                                } else {
                                    spIcon.spriteFrame = this.imgShare;
                                }
                                break;
                            case constant.OPEN_REWARD_TYPE.NULL:
                                spIcon.node.active = false;
                                //策划说不管有广告还是没有广告都展示广告图标
                                break;
                        }

                        if (callback) {
                            callback(type);
                        }
                    }
                });
            }
        } else if (this.platform === 'cocosPlay') {
            //策划说不管有没有广告都展示视频icon
            return;
            //@ts-ignore
            jkwSDK.checkRewardedVideoAd((err) => {
                console.log("###updatePayIcon.checkRewardedVideoAd.err", err);
                if (!err) {
                    spIcon.node.active = true;
                    if (imgAd) {
                        spIcon.spriteFrame = imgAd;
                    } else {
                        spIcon.spriteFrame = this.imgAd;
                    }
                    callback && callback(constant.OPEN_REWARD_TYPE.AD);
                } else {
                    spIcon.node.active = false;
                    callback && callback(constant.OPEN_REWARD_TYPE.NULL);
                }
            })
        } else {
            spIcon.node.active = false;
            callback && callback(constant.OPEN_REWARD_TYPE.NULL);
        }
    }

    public static getPayType(shareId: number, callback: Function) {
        //@ts-ignore
        if (window.bondSDK) {
            //@ts-ignore
            window.bondSDK.getPayType({
                shareId: shareId,
                callback: (type: number) => {
                    console.log("###getPayType.type", type);
                    callback(type);
                }
            });
        } else if (this.platform === 'cocosPlay') {
            //     jkwSDK.checkRewardedVideoAd((err)=>{
            //         console.log("###getPayType.err", err);

            //         if (!err) {
            //            callback(constant.OPEN_REWARD_TYPE.AD);
            //         } else {
            //            callback(constant.OPEN_REWARD_TYPE.NULL);    
            //         }   
            //    })
        } else {
            callback && callback(constant.OPEN_REWARD_TYPE.NULL);
        }
    }

    public static pay(shareId: number, callback: Function) {
        console.log("###gameLogic.pay", "shareId", shareId);

        AudioManager.instance.pauseAll();

        this.isWatchVideoAd = true;
        //@ts-ignore
        if ((this.platform === 'ios' || this.platform === 'wx') && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.pay({
                shareId: shareId,
                success: () => {
                    console.log("###pay.success", "shareId", shareId);
                    AudioManager.instance.resumeAll();
                    this.isWatchVideoAd = false;
                    callback(null);
                },
                fail: (err: any) => {
                    console.log("###pay.fail", "shareId", shareId);
                    AudioManager.instance.resumeAll();
                    // uiManager.instance.showTips('No ads, please try again later');
                    this.isWatchVideoAd = false;
                    callback('fail', err);
                }
            });
        } else if (this.platform === 'cocosPlay') {
            // jkwSDK.showRewardedVideoAd((err)=>{
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
            AudioManager.instance.resumeAll();
            callback && callback(null);
        }
    }

    public static showBannerAd(adPlaceName: string) {
            //@ts-ignore
        if (this.platform === 'wx' && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.showKeepOutBanner({
                adPlaceName: adPlaceName
            });
        }
        //@ts-ignore
        else if (this.platform === 'ios' && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.showAdBanner({
                adPlaceName: adPlaceName
            })
        } else if (this.platform === 'cocosPlay') {
            // jkwSDK.showBannerAd();
        }
    }

    public static hideBannerAd() {
        //@ts-ignore
        if (this.platform === 'wx' && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.hideKeepOutBanner();
        }
        //@ts-ignore
        else if (this.platform === 'ios' && window.bondSDK) {
            //@ts-ignore
            window.bondSDK.hideAdBanner();
        } else if (this.platform === 'cocosPlay') {
            // jkwSDK.hideBannerAd();
        }
    }
}
