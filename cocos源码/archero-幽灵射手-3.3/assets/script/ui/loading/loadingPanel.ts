import { constant } from './../../framework/constant';
import { uiManager } from './../../framework/uiManager';
import { _decorator, Component, Node, Tween, tween, UIOpacityComponent, UIComponent, easing, AnimationComponent } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { GameManager } from '../../fight/gameManager';
const { ccclass, property } = _decorator;

@ccclass('LoadingPanel')
export class LoadingPanel extends Component {
    // @property(UIOpacityComponent)
    // public opacityCom: UIOpacityComponent = null!;

    @property(AnimationComponent)
    public aniCloud: AnimationComponent = null!;

    onEnable () {
        clientEvent.on(constant.EVENT_TYPE.SHOW_LOADING_PANEL, this._showLoadingPanel, this);
        clientEvent.on(constant.EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
    }

    onDisable () {
        clientEvent.off(constant.EVENT_TYPE.SHOW_LOADING_PANEL, this._showLoadingPanel, this);
        clientEvent.off(constant.EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
    }

    start () {
        // [3]
    }

    public show () {
        this._showLoadingPanel();
    }

    private _hideLoadingPanel () {
        GameManager.scriptGameCamera.resetCamera();       
       
        this.aniCloud.getState("cloudAnimationOut").time = 0;
        this.aniCloud.getState("cloudAnimationOut").sample();
        this.aniCloud.play("cloudAnimationOut");
        this.aniCloud.once(AnimationComponent.EventType.FINISHED, ()=>{
            uiManager.instance.hideDialog("loading/loadingPanel");
            uiManager.instance.showDialog("fight/fightPanel", [this]);
        });
    }

    private _showLoadingPanel () {
        this.aniCloud.getState("cloudAnimationIn").time = 0;
        this.aniCloud.getState("cloudAnimationIn").sample();
        this.aniCloud.play("cloudAnimationIn");
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}