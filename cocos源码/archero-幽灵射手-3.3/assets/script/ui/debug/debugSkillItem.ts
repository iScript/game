import { playerData } from './../../framework/playerData';

import { _decorator, Component, Node, LabelComponent, SpriteComponent, Color } from 'cc';
import { constant } from '../../framework/constant';
import { GameManager } from '../../fight/gameManager';
import { EffectManager } from '../../framework/effectManager';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('DebugSkillItem')
export class DebugSkillItem extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(LabelComponent)
    public lbLevelTxt: LabelComponent = null!;

    @property(SpriteComponent)
    public spCom: SpriteComponent = null!;

    private _colorSelected: Color = new Color().fromHEX("#3CE649");
    private _colorUnSelected: Color = new Color().fromHEX("#ffffff");
    private _isSelected: boolean = false;
    private _level: number = 0;
    private _itemInfo: any = null!;

    start () {
        // [3]
    }

    public init (itemInfo: any) {
        this.lbLevelTxt.string = itemInfo.name;
        this._itemInfo = itemInfo;      
        this._changeState();
    }

    /**
     * 切换选中与非选中状态
     *
     * @private
     * @memberof DebugSkillItem
     */
    private _changeState () {
        this._isSelected = playerData.instance.playerInfo.arrSkill.includes(this._itemInfo.ID);

        if (this._isSelected) {
            this.spCom.color = this._colorSelected;
        } else {
            this.spCom.color = this._colorUnSelected;
        }
    }

    public onBtnClick () {
        AudioManager.instance.playSound(constant.SOUND.GET_SKILL);

        if (this._isSelected) {
            playerData.instance.reducePlayerSkill(this._itemInfo);
        } else {
            playerData.instance.addPlayerSkill(this._itemInfo);
            EffectManager.instance.playEffect(GameManager.ndPlayer, "levelUp/levelUp");
        }

        this._changeState();
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
