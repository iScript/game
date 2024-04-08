import { playerData } from './../../framework/playerData';
import { _decorator, Component, Node, Sprite, SpriteComponent, LabelComponent, UITransformComponent } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { constant } from '../../framework/constant';
import { SdkUtil } from '../../framework/sdkUtil';
import { uiManager } from '../../framework/uiManager';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;
//复活界面
@ccclass('RevivePanel')
export class RevivePanel extends Component {
    @property(SpriteComponent)
    public spPayIcon: SpriteComponent = null!;

    @property(LabelComponent)
    public lbLevel: LabelComponent = null!;

    @property(Node)
    public ndMask: Node = null!;

    @property(LabelComponent)
    public lbCountDown: LabelComponent = null!;

    public set countDown (value: number) {
        this._countDown = value;
        this.lbCountDown.string = String(Math.floor(this._countDown));
        this.lbLevel.string = playerData.instance.playerInfo.level;

        this._curMaskHeight += this._maxMaskHeight / (this._countDown * 120);
        this._curMaskHeight = this._curMaskHeight >= this._maxMaskHeight ? this._maxMaskHeight : this._curMaskHeight;
        this.ndMask.getComponent(UITransformComponent)?.setContentSize(260, this._curMaskHeight);

        if (value < 0) {
           this._close();
        }
    } 

    public get countDown () {
        return this._countDown;
    }

    private _countDown: number = 10;
    private _maxMaskHeight: number = 190;
    private _curMaskHeight: number = 0;
    private _callback: Function = null!;

    start () {
        // [3]
    }

    public show (callback: Function) {
        this._countDown = 10;
        this._curMaskHeight = 0;
        this._callback = callback;

        SdkUtil.updatePayIcon(constant.SHARE_ID.REVIVE, this.spPayIcon);
    }

    public onBtnSkipClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._close()
    }

    public onBtnReviveClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        SdkUtil.pay(constant.SHARE_ID.REVIVE, (err: any)=>{
            if (!err) {
                uiManager.instance.hideDialog("revive/revivePanel");
                uiManager.instance.showDialog("fight/fightPanel");
                clientEvent.dispatchEvent(constant.EVENT_TYPE.ON_REVIVE);
            }
        })
    }

    private _close () {
        this._callback && this._callback();
        uiManager.instance.hideDialog("revive/revivePanel");
        uiManager.instance.showDialog("settlement/settlementPanel");
    }

    update (deltaTime: number) {
        if (this.countDown > 0 && !SdkUtil.isWatchVideoAd) {
            this.countDown -= deltaTime;
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
