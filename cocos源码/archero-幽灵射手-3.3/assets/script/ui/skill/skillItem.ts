
import { _decorator, Component, Node, SpriteComponent, LabelComponent } from 'cc';
import { GameManager } from '../../fight/gameManager';
import { AudioManager } from '../../framework/audioManager';
import { constant } from '../../framework/constant';
import { EffectManager } from '../../framework/effectManager';
import { playerData } from '../../framework/playerData';
import { resourceUtil } from '../../framework/resourceUtil';
const { ccclass, property } = _decorator;

@ccclass('SkillItem')
export class SkillItem extends Component {
    @property(SpriteComponent)
    public spIcon: SpriteComponent = null!;
    
    @property(LabelComponent)
    public lbName: LabelComponent = null!;

    @property(LabelComponent)
    public lbDesc: LabelComponent = null!;

    private _callback: Function = null!;
    private _itemInfo: any = null!;

    start () {
        // [3]
    }

    public init (itemInfo: any, callback: Function) {
        this._itemInfo = itemInfo;
        this._callback = callback;

        this.lbName.string = itemInfo.name;
        this.lbDesc.string = itemInfo.desc;
        resourceUtil.setSpriteFrame(`texture/skillIcon/${itemInfo.icon}`, this.spIcon, (err: any)=>{});
    }

    public onBtnItemClick () {
        AudioManager.instance.playSound(constant.SOUND.GET_SKILL);

        this._callback && this._callback();
        playerData.instance.addPlayerSkill(this._itemInfo);
        EffectManager.instance.playEffect(GameManager.ndPlayer, "levelUp/levelUp");
    }
}
