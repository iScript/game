import { constant } from './../../framework/constant';

import { _decorator, Component, Node, ButtonComponent, Button, SpriteComponent } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { resourceUtil } from '../../framework/resourceUtil';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('SkillIcon')
export class SkillIcon extends Component {
    @property(ButtonComponent)
    public btnCom: ButtonComponent = null!;

    @property(SpriteComponent)
    public spIcon: SpriteComponent = null!;

    @property(Node)
    public ndBg: Node = null!;

    private _callback: Function = null!;
    private _itemInfo: any = null!;
    private _isSelected: boolean = false;

    onEnable () {
        clientEvent.on(constant.EVENT_TYPE.HIDE_SKILL_ICON_SELECTED, this._hideSelected, this);
    }

    onDisable () {
        clientEvent.off(constant.EVENT_TYPE.HIDE_SKILL_ICON_SELECTED, this._hideSelected, this);
    }

    start () {
        // [3]
    }

    public init (idx: number, itemInfo: any, callback?: Function) {
        this._itemInfo = itemInfo;
        this._callback = callback!;
        this._isSelected = false;

        if (idx === 0 && this._callback) {
            this._showSelected();
            this._callback(this._itemInfo);
        } else {
            this._hideSelected();
        }

        if (callback) {
            this.btnCom.transition = ButtonComponent.Transition.SCALE;
        } else {
            this.btnCom.transition = ButtonComponent.Transition.NONE;
        }

        resourceUtil.setSpriteFrame(`texture/skillIcon/${itemInfo.icon}`, this.spIcon, (err: any)=>{});
    }

    public onItemClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        if (!this._isSelected && this._callback) {
            clientEvent.dispatchEvent(constant.EVENT_TYPE.HIDE_SKILL_ICON_SELECTED);
            this._callback(this._itemInfo);
            this._showSelected();
        }
    }

    private _showSelected () {
        this._isSelected = true;
        this.ndBg.active = true;
    }

    private _hideSelected () {
        this._isSelected = false;
        this.ndBg.active = false;
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
