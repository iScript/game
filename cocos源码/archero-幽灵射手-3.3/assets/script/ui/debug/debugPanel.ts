import { GameManager } from './../../fight/gameManager';
import { DebugSkillItem } from './debugSkillItem';
import { constant } from './../../framework/constant';
import { DebugLevelItem } from './debugLevelItem';
import { poolManager } from './../../framework/poolManager';
import { playerData } from './../../framework/playerData';
import { uiManager } from './../../framework/uiManager';
import { localConfig } from './../../framework/localConfig';
import { _decorator, Component, Node, Prefab, ToggleComponent, game, PhysicsSystem, profiler } from 'cc';
import { StorageManager } from '../../framework/storageManager';
import { clientEvent } from '../../framework/clientEvent';
import { EffectManager } from '../../framework/effectManager';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('DebugPanel')
export class DebugPanel extends Component {
    @property(Node)
    public ndContentLevel: Node = null!;

    @property(Node)
    public ndContentPlayerSkill: Node = null!;

    @property(Prefab)
    public pbLevelItem: Prefab = null!;

    @property(Prefab)
    public pbSkillItem: Prefab = null!;

    start () {
        // [3]
    }

    public show () {
        GameManager.isGamePause = true;

        this._initLevelView();
        this._initSkillView();
    }

    /**
     * 初始化关卡列表
     *
     * @private
     * @memberof DebugPanel
     */
    private _initLevelView () {
        let mapInfo = localConfig.instance.getTableArr("checkpoint");

        this.ndContentLevel.children.forEach((item: Node)=>{
            item.active = false;
        })
        
        mapInfo.forEach((itemInfo: any, idx: number, arr: any) => {
            let ndChild: Node = null!;

            if (idx < this.ndContentLevel.children.length) {
                ndChild = this.ndContentLevel.children[idx];
            } else {
                ndChild = poolManager.instance.getNode(this.pbLevelItem, this.ndContentLevel);
            }

            ndChild.active = true;
            let scriptDebugLevelItem = ndChild.getComponent(DebugLevelItem) as DebugLevelItem;
            scriptDebugLevelItem.init(itemInfo);
        });
    }

    /**
     * 初始化玩家技能列表
     *
     * @private
     * @memberof DebugPanel
     */
    private _initSkillView () {
        let playerSkillInfo = localConfig.instance.getTableArr("playerSkill");
        //策划说回复生命的不出现在技能列表里面
        playerSkillInfo = playerSkillInfo.concat().filter((item: any)=>{
            return item.ID !== constant.PLAYER_SKILL.RECOVERY;
        })

        this.ndContentPlayerSkill.children.forEach((item: Node)=>{
            item.active = false;
        })
        
        playerSkillInfo.forEach((itemInfo: any, idx: number, arr: any) => {
            let ndChild: Node = null!;

            if (idx < this.ndContentPlayerSkill.children.length) {
                ndChild = this.ndContentPlayerSkill.children[idx];
            } else {
                ndChild = poolManager.instance.getNode(this.pbSkillItem, this.ndContentPlayerSkill);
            }

            ndChild.active = true;
            let scriptDebugLevelItem = ndChild.getComponent(DebugSkillItem) as DebugSkillItem;            
            scriptDebugLevelItem.init(itemInfo);
        });        
    }

    /**
     * 关闭按钮
     *
     * @memberof DebugPanel
     */
    public onBtnCloseClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.hideDialog("debug/debugPanel");

        GameManager.isGamePause = false;
    }

    /**
     * 清除玩家缓存
     *
     * @memberof DebugPanel
     */
    public onBtnClearStorageClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        playerData.instance.playerInfo = {};
        playerData.instance.history = {};
        playerData.instance.settings = {};
        playerData.instance.saveAll();

        StorageManager.instance.jsonData = {};
        StorageManager.instance.save();
        uiManager.instance.showTips("游戏缓存已清除，请完全关闭游戏并重新打开！");
    }

    /**
     * 切换30帧
     *
     * @memberof DebugPanel
     */
    public onToggleFrame30Click () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.showTips("游戏已经切换为30帧");
        StorageManager.instance.setGlobalData("frameRate", 30);
        game.setFrameRate(30);
        PhysicsSystem.instance.fixedTimeStep = 1 / 30;
        
        this._showState();
    }

    /**
     * 切换60帧
     *
     * @memberof DebugPanel
     */
    public onToggleFrame60Click () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.showTips("游戏已经切换为60帧");
        StorageManager.instance.setGlobalData("frameRate", 60);
        game.setFrameRate(60);
        PhysicsSystem.instance.fixedTimeStep = 1 / 60;

        this._showState();
    }

    /**
     * 清除玩家全部技能
     *
     * @memberof DebugPanel
     */
    public onBtnClearPlayerSkillClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        playerData.instance.playerInfo.arrSkill = [];
        playerData.instance.savePlayerInfoToLocalCache();
        clientEvent.dispatchEvent(constant.EVENT_TYPE.PARSE_PLAYER_SKILL);
        this._initSkillView();
    }

    /**
     *  拥有玩家全部技能
     *
     * @memberof DebugPanel
     */
    public onBtnSelectAllPlayerSkillClick () {
        AudioManager.instance.playSound(constant.SOUND.GET_SKILL);

        let arrSkill = localConfig.instance.getTableArr("playerSkill");
        let arr: any = [];
        arrSkill.forEach((item: any) => {
            //生命回复改成在游戏内获得，不通过技能列表获得
            if (item.ID !== constant.PLAYER_SKILL.RECOVERY) {
                arr.push(item.ID);
            }
        });

        playerData.instance.playerInfo.arrSkill = arr;
        playerData.instance.savePlayerInfoToLocalCache();
        clientEvent.dispatchEvent(constant.EVENT_TYPE.PARSE_PLAYER_SKILL);
        this._initSkillView();

        EffectManager.instance.playEffect(GameManager.ndPlayer, "levelUp/levelUp");
    }

    /**
     * 切换调试状态
     *
     * @private
     * @memberof DebugPanel
     */
    private _showState () {
        let isDebugOpen = StorageManager.instance.getGlobalData("debug") ?? false;
        isDebugOpen ? profiler.showStats() : profiler.hideStats();
    }
}