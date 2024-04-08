import { EffectManager } from './../../framework/effectManager';
import { GameManager } from './../../fight/gameManager';

import { _decorator, Component, Node, SpriteComponent, LabelComponent, Color, ButtonComponent } from 'cc';
import { playerData } from '../../framework/playerData';
import { resourceUtil } from '../../framework/resourceUtil';
import { AudioManager } from '../../framework/audioManager';
import { constant } from '../../framework/constant';
const { ccclass, property } = _decorator;

@ccclass('ShopItem')
export class ShopItem extends Component {
    @property(SpriteComponent)
    public spSkillIcon: SpriteComponent = null!;
    
    @property(LabelComponent)
    public lbName: LabelComponent = null!;

    @property(LabelComponent)
    public lbDesc: LabelComponent = null!;

    @property(LabelComponent)
    public lbGold: LabelComponent = null!;

    @property(ButtonComponent)
    public btnCom: ButtonComponent = null!;

    private _callback: Function = null!;
    private _itemInfo: any = null!;
    private _colorRed: Color = new Color(255, 0, 0, 255);
    private _colorBlack: Color = new Color(0, 0, 0, 255);
    private _isMoneyEnough: boolean = false;//是否有足够的钱购买技能 

    start () {
        // [3]
    }

    public init (itemInfo: any, callback: Function) {
        this._itemInfo = itemInfo;
        this._callback = callback;

        this.lbName.string = itemInfo.name;
        this.lbDesc.string = itemInfo.desc;
        this.lbGold.string = itemInfo.price;
        
        this._isMoneyEnough = playerData.instance.playerInfo.gold >= itemInfo.price;
        this.btnCom.interactable = this._isMoneyEnough;

        if (!this._isMoneyEnough) {
            this.lbGold.color = this._colorRed; 
        } else {
            this.lbGold.color = this._colorBlack;
        }

        resourceUtil.setSpriteFrame(`texture/skillIcon/${itemInfo.icon}`, this.spSkillIcon, (err: any)=>{});
    }

    public onBtnItemClick () {
        AudioManager.instance.playSound(constant.SOUND.SELL);

        if (this._isMoneyEnough) {
            this._callback && this._callback();
            playerData.instance.addPlayerSkill(this._itemInfo);
            GameManager.addGold(-this._itemInfo.price);

            EffectManager.instance.playEffect(GameManager.ndPlayer, "levelUp/levelUp");
        }
    }
}
