import { constant } from './../../framework/constant';
import { uiManager } from './../../framework/uiManager';
import { playerData } from './../../framework/playerData';

import { _decorator, Component, Node, LabelComponent, SpriteComponent, Color } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { GameManager } from '../../fight/gameManager';
import { poolManager } from '../../framework/poolManager';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('DebugLevelItem')
export class DebugLevelItem extends Component {
    @property(LabelComponent)
    public lbLevelTxt: LabelComponent = null!;

    @property(SpriteComponent)
    public spCom: SpriteComponent = null!;

    private _colorSelected: Color = new Color().fromHEX("#3CE649");
    private _colorUnSelected: Color = new Color().fromHEX("#ffffff");
    private _isSelected: boolean = false;
    private _level: number = 0;
    private _itemInfo: any = null!;

    onEnable () {
        clientEvent.on(constant.EVENT_TYPE.HIDE_DEBUG_LEVEL_SELECTED, this._hideDebugLevelSelected, this);
    }

    onDisable () {
        clientEvent.off(constant.EVENT_TYPE.HIDE_DEBUG_LEVEL_SELECTED, this._hideDebugLevelSelected, this);
    }

    start () {
        // [3]
    }

    public init (itemInfo: any) {
        this._level = itemInfo.ID;
        this.lbLevelTxt.string = `${this._level}`;
        this._itemInfo = itemInfo;
        this._refreshState();
    }

    /**
     * 切换选中与非选中状态
     *
     * @private
     * @memberof DebugSkillItem
     */
    private _refreshState () {
        this._isSelected = playerData.instance.playerInfo.level === this._itemInfo.ID;
        if (this._isSelected) {
            this.spCom.color = this._colorSelected;
        } else {
            this.spCom.color = this._colorUnSelected;
        }
    }

    public onBtnClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        clientEvent.dispatchEvent(constant.EVENT_TYPE.HIDE_DEBUG_LEVEL_SELECTED);
        this._isSelected = true;
        this._refreshState();
        
        clientEvent.dispatchEvent(constant.EVENT_TYPE.RECYCLE_ALL);

        playerData.instance.playerInfo.level = Number(this._level);
        playerData.instance.savePlayerInfoToLocalCache();
        clientEvent.dispatchEvent(constant.EVENT_TYPE.ON_GAME_INIT);
        uiManager.instance.hideDialog("debug/debugPanel");
    }

    /**
     * 隐藏选中状态
     *
     * @private
     * @memberof DebugLevelItem
     */
    private _hideDebugLevelSelected () {
        this._isSelected = false;
        this._refreshState();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}