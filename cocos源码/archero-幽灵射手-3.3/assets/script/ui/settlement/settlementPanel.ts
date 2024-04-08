import { constant } from './../../framework/constant';
import { playerData } from './../../framework/playerData';
import { GameManager } from './../../fight/gameManager';
import { SpriteComponent } from 'cc';
import { uiManager } from './../../framework/uiManager';

import { _decorator, Component, Node, SpriteFrame, Label, LabelComponent } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { SkillList } from '../pause/skillList';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('SettlementPanel')
export class SettlementPanel extends Component {
    @property(SpriteFrame)
    public sfTitleWin: SpriteFrame = null!;

    @property(SpriteFrame)
    public sfTitleFail: SpriteFrame = null!;

    @property(SpriteComponent)
    public spTitle: SpriteComponent = null!;

    @property(LabelComponent)
    public lbLevel: LabelComponent = null!;

    @property(Node)
    public ndSkillList: Node = null!;

    private _callback: Function = null!;

    start () {
        // [3]
    }

    public show (callback: Function) {
        this._callback = callback;

        this.lbLevel.string = playerData.instance.playerInfo.level;

        if (GameManager.isWin) {
            this.spTitle.spriteFrame = this.sfTitleWin;
        } else {
            this.spTitle.spriteFrame = this.sfTitleWin;
        }

        let scriptSkillList = this.ndSkillList.getComponent(SkillList) as SkillList;
        scriptSkillList.init();
    }

    public onBtnHomeClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._callback && this._callback();

        if (!GameManager.isWin) {
            //失败的时候清空技能和层级
            playerData.instance.playerInfo.arrSkill = [];
            playerData.instance.playerInfo.level = 1;
            playerData.instance.savePlayerInfoToLocalCache();
        }

        uiManager.instance.hideDialog("settlement/settlementPanel");
        uiManager.instance.showDialog("home/homePanel");
    }

    public onBtnPlayAgainClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.hideDialog("settlement/settlementPanel");

        uiManager.instance.showDialog("fight/fightPanel");
        clientEvent.dispatchEvent(constant.EVENT_TYPE.ON_GAME_INIT);
    }


    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
