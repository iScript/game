import { GameManager } from './../../fight/gameManager';
import { clientEvent } from './../../framework/clientEvent';
import { poolManager } from './../../framework/poolManager';
import { constant } from './../../framework/constant';
import { _decorator, Component, UITransformComponent, SpriteComponent, tween, clamp } from 'cc';
//boss血条组件

const { ccclass, property } = _decorator;

@ccclass('BossBloodBar')
export class BossBloodBar extends Component {
    @property(UITransformComponent)
    public UIComWhiteBar: UITransformComponent = null!;//白色进度条的UI组件

    @property(UITransformComponent)
    public UIComRedBar: UITransformComponent = null!;//血量进度条的UI组件

    private _whiteBarHeight: number = 28;//白色进度条高度
    private _redBarHeight: number = 28;//血量进度条高度
    private _totalBlood: number = 0;//总的血量
    private _curBlood: number = 0;//当前血量值
    private _maxBossWhiteBarWidth: number = 560;//当前boss血条中白色进度条长度
    private _maxBossRedBarWidth: number = 560;//当前boss血条中血量条长度
    private _isBloodEmpty: boolean = false;//血条是否为空

    onEnable () {
        clientEvent.on(constant.EVENT_TYPE.REFRESH_BOSS_BLOOD, this._refreshBossBlood, this);
    }

    onDisable () {
        clientEvent.off(constant.EVENT_TYPE.REFRESH_BOSS_BLOOD, this._refreshBossBlood, this);
    }

    start () {
        // [3]
    }

    /**
     * 展示血条
     *
     * @param {*} scriptParent 血条使用者绑定的节点，如玩家或者小怪
     * @param {number} totalBlood 总血量
     * @param {boolean} [isInit=true] 是否是初次展示，初次展示则显示完整血量，否则刷新的时候展示当前血量
     * @memberof BloodBar
     */
    public show (scriptParent: any, totalBlood: number, isInit: boolean = true) {
        this.node.active = true;

        this._totalBlood = totalBlood;
        this._isBloodEmpty = false;

        if (isInit) {
            this._curBlood = this._totalBlood;
        }

        //当前血量占全部的比例
        let ratio = this._curBlood / this._totalBlood;
        ratio = clamp(ratio, 0, 1);

        //进度条宽度设置
        this.UIComWhiteBar.setContentSize(ratio * this._maxBossWhiteBarWidth, this._whiteBarHeight);
        this.UIComRedBar.setContentSize(ratio * this._maxBossRedBarWidth, this._redBarHeight);
    }

    /**
     * 刷新boss血量
     *
     * @param {number} num 血量值
     * @memberof BossBloodBar
     */
    private _refreshBossBlood (num: number) {
        this._curBlood += num;

        let ratio = this._curBlood / this._totalBlood;
        ratio = ratio <= 0 ? 0 : ratio;

        if (num < 0) {//减血
            this.UIComRedBar.setContentSize(this._maxBossRedBarWidth * ratio, this._whiteBarHeight);
    
            if (!this._isBloodEmpty) {
                this._isBloodEmpty = ratio <= 0;

                tween(this.UIComWhiteBar)
                .to(0.7, {width: this._maxBossWhiteBarWidth * ratio})
                .call(()=>{
                    if (ratio <= 0) {
                        this.node.active = false;
                        GameManager.scriptBoss.isDie = true;
                    }
                })
                .start();
            } 
        } 
    }
}
