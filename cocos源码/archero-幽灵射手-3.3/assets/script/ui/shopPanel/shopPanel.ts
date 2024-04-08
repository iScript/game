import { ShopItem } from './shopItem';
import { util } from './../../framework/util';
import { uiManager } from './../../framework/uiManager';
import { constant } from './../../framework/constant';
import { playerData } from './../../framework/playerData';
import { _decorator, Component, Node, SpriteComponent, LabelComponent } from 'cc';
import { SdkUtil } from '../../framework/sdkUtil';
import { localConfig } from '../../framework/localConfig';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('ShopPanel')
export class ShopPanel extends Component {
    @property(Node)
    public ndSkills: Node = null!;

    @property(SpriteComponent)
    public spRefreshIcon: SpriteComponent = null!;

    private _callback: Function = null!;

    start () {
        // [3]
    }

    public show (callback?: Function) {
        this._callback = callback!;
        SdkUtil.updatePayIcon(constant.SHARE_ID.SHOP_REFRESH, this.spRefreshIcon);

        let arrLock: any = playerData.instance.getLockPlyerSkill();
        arrLock = util.shuffle(arrLock);
        
        this.ndSkills.children.forEach((ndChild: Node, idx: number, arr: any)=>{
            if (arrLock[idx]) {
                let info: any = localConfig.instance.queryByID("playerSkill", arrLock[idx].ID);
                ndChild.active = true;
                let scriptItem = ndChild.getComponent(ShopItem) as ShopItem;
                scriptItem.init(info, ()=>{
                    this._close();
                });
            } else {
                ndChild.active = false;
            }
        })
    }

    public onBtnGiveUpClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._close();
    }

    public onBtnRefreshClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        SdkUtil.pay(constant.SHARE_ID.SHOP_REFRESH, (err: any)=>{
            if (!err) {
                this.show(this._callback);
            }
        })
    }

    private _close () {
        this._callback && this._callback();
        uiManager.instance.hideDialog("shop/shopPanel");
        uiManager.instance.showDialog("fight/fightPanel");
    }

    public onBtnCloseClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._close();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
