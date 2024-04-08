import { AudioManager } from './framework/audioManager';
import { GameManager } from './fight/gameManager';
import { constant } from './framework/constant';
import { clientEvent } from './framework/clientEvent';
import { _decorator, Component, game, Game, PhysicsSystem, Node, profiler, TERRAIN_HEIGHT_BASE } from 'cc';
import { playerData } from './framework/playerData';
import { StorageManager } from './framework/storageManager';
import { localConfig } from './framework/localConfig';
import { util } from './framework/util';
import { SdkUtil } from './framework/sdkUtil';

const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    @property(Node)
    public ndLoading: Node = null!;

    onEnable () {
        clientEvent.on(constant.EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
    }

    onDisable () {
        clientEvent.off(constant.EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
    }

    start () {
        let frameRate = StorageManager.instance.getGlobalData("frameRate");
        if (typeof frameRate !== "number") {
            frameRate = constant.GAME_FRAME;
            //@ts-ignore
            if (window.wx && util.checkIsLowPhone()) {
                frameRate = 30;
            } 

            StorageManager.instance.setGlobalData("frameRate", frameRate);
        } 

        console.log("###frameRate", frameRate);

        game.setFrameRate(frameRate);
        PhysicsSystem.instance.fixedTimeStep = 1 / frameRate;


        let isDebugOpen = StorageManager.instance.getGlobalData("debug") ?? false;
        isDebugOpen === true ? profiler.showStats() : profiler.hideStats();

        this.ndLoading.active = true;        

        //@ts-ignore
        if (window.cocosAnalytics) {
            //@ts-ignore
            window.cocosAnalytics.init({
                appID: "605630324",              // 游戏ID
                version: '1.0.0',           // 游戏/应用版本号
                storeID: "cocosPlay",     // 分发渠道
                engine: "cocos",            // 游戏引擎
            });
        }
        
        playerData.instance.loadGlobalCache();
        if (!playerData.instance.userId) {
            playerData.instance.generateRandomAccount();
            console.log("###生成随机userId", playerData.instance.userId);
        }

        playerData.instance.loadFromCache();

        if (!playerData.instance.playerInfo || !playerData.instance.playerInfo.createDate) {
            playerData.instance.createPlayerInfo();
        }

        //加载CSV相关配置
        localConfig.instance.loadConfig(()=>{
            this._loadFinish();
            SdkUtil.shareGame("奔跑吧巨人", "");
        })

        AudioManager.instance.init();

        //test
        // if (GameManager.isTesting) {
        //     playerData.instance.playerInfo.level = 3;
        //     playerData.instance.savePlayerInfoToLocalCache();
        // }

        //引导
        //GuideManager.instance.start();

        //加载子包
        // SubPackageManager.instance.loadAllPackage();

        //记录离线时间
        game.on(Game.EVENT_HIDE, ()=>{
            if (!playerData.instance.settings) {
                playerData.instance.settings = {}
            }

            playerData.instance.settings.hideTime = Date.now();
            playerData.instance.saveAll();
            StorageManager.instance.save();
        })
    }

    private _loadFinish () {
        GameManager.isFirstLoad = true;
        clientEvent.dispatchEvent(constant.EVENT_TYPE.ON_GAME_INIT);
    }

    private _hideLoadingPanel () {
        if (this.ndLoading.parent) {
            this.ndLoading.removeFromParent();
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
