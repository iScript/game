import { uiManager } from './../../framework/uiManager';
import { BossBloodBar } from './bossBloodBar';
import { GameManager } from './../../fight/gameManager';
import { util } from './../../framework/util';
import { playerData } from './../../framework/playerData';
import { constant } from './../../framework/constant';
import { clientEvent } from './../../framework/clientEvent';
import { _decorator, Component, Node, LabelComponent, Label, ProgressBar, UITransform, profiler } from 'cc';
import { localConfig } from '../../framework/localConfig';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('FightPanel')
export class FightPanel extends Component {
    @property(Node)
    public ndJoystick: Node = null!;//手柄节点

    @property(LabelComponent)
    public lbGold: LabelComponent = null!;//金币数量

    @property(LabelComponent)
    public lbLevel: LabelComponent = null!;//等级

    @property(Node)
    public ndBossBloodBar: Node = null!;//boss血量进度条节点

    private _debugClickTimes: number = 0;//调试点击次数

    onEnable () {
        clientEvent.on(constant.EVENT_TYPE.REFRESH_GOLD, this._refreshGold, this);
        clientEvent.on(constant.EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
    }

    onDisable () {
        clientEvent.off(constant.EVENT_TYPE.REFRESH_GOLD, this._refreshGold, this);
        clientEvent.off(constant.EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
    }

    start () {
        // [3]
    }

    show () {
        this.ndBossBloodBar.active = false;

        this._refreshGold();
        this._refreshLevel();

        if (GameManager.ndBoss) {
            let bossInfo = localConfig.instance.queryByID("base", constant.BASE.BOSS_01);
            let scriptBossBloodBar = this.ndBossBloodBar.getComponent(BossBloodBar) as BossBloodBar;
            scriptBossBloodBar.show(GameManager.scriptBoss, bossInfo.hp);
        }

        this._debugClickTimes = 0;
    }

    private _refreshGold () {
        this.lbGold.string = util.formatMoney(playerData.instance.playerInfo.gold);
    }

    private _refreshLevel () {
        this.lbLevel.string = `第${playerData.instance.playerInfo.level}层`;
    }

    public onBtnPauseClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.showDialog("pause/pausePanel", [], ()=>{}, constant.PRIORITY.DIALOG);
        GameManager.isGamePause = true;
    }

    public onBtnDebugClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._debugClickTimes += 1;

        if (this._debugClickTimes >= 1) {
            this._debugClickTimes = 0;
            uiManager.instance.showDialog("debug/debugPanel", [], ()=>{}, constant.PRIORITY.DIALOG);
        }
    }
}
