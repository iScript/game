import { localConfig } from './../../framework/localConfig';
import { GameManager } from './../../fight/gameManager';
import { SkillItem } from './skillItem';
import { util } from './../../framework/util';
import { uiManager } from './../../framework/uiManager';
import { constant } from './../../framework/constant';
import { playerData } from './../../framework/playerData';

import { _decorator, Component, Node, SpriteComponent, LabelComponent } from 'cc';
import { SdkUtil } from '../../framework/sdkUtil';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('SkillPanel')
export class SkillPanel extends Component {
    @property(Node)
    public ndSkills: Node = null!

    @property(SpriteComponent)
    public spRefreshIcon: SpriteComponent = null!;

    @property(LabelComponent)
    public lbGold: LabelComponent = null!;

    private _gold: number = 50;
    private _callback: Function = null!;

    start () {
        // [3]
    }

    public show (callback?: Function) {
        this._callback = callback!;
        this.lbGold.string = `获得 ${this._gold}`;

        SdkUtil.updatePayIcon(constant.SHARE_ID.SKILL_REFRESH, this.spRefreshIcon);

        let arrLock: any = playerData.instance.getLockPlyerSkill();
        arrLock = util.shuffle(arrLock);
        
        this.ndSkills.children.forEach((ndChild: Node, idx: number, arr: any)=>{
            if (arrLock[idx]) {
                let info: any = localConfig.instance.queryByID("playerSkill", arrLock[idx].ID);
                ndChild.active = true;
                let scriptItem = ndChild.getComponent(SkillItem) as SkillItem;
                scriptItem.init(info, ()=>{
                    this._close();
                });
            } else {
                ndChild.active = false;
            }
        })
    }

    public onBtnGiveUpClick () {
        AudioManager.instance.playSound(constant.SOUND.SELL);

        GameManager.addGold(this._gold);
        this._close();
    }

    public onBtnRefreshClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        SdkUtil.pay(constant.SHARE_ID.SKILL_REFRESH, (err: any)=>{
            if (!err) {
                this.show(this._callback);
            }
        })
    }

    private _close () {
        this._callback && this._callback();
        uiManager.instance.hideDialog("skill/skillPanel");
        uiManager.instance.showDialog("fight/fightPanel");
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
