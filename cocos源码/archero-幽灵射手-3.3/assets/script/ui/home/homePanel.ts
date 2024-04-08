import { uiManager } from './../../framework/uiManager';
import { playerData } from './../../framework/playerData';

import { _decorator, Component, Node, LabelComponent, SpriteComponent } from 'cc';
import { clientEvent } from '../../framework/clientEvent';
import { constant } from '../../framework/constant';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('HomePanel')
export class HomePanel extends Component {
    @property(SpriteComponent)
    public spLevelName: SpriteComponent = null!;

    @property(LabelComponent)
    public lbLevel: LabelComponent = null!;

    onEnable () {

    }

    onDisable () {
        
    }

    start () {
        // [3]
    }

    show () {
        //已经解锁的最高层级
        this.lbLevel.string = `${playerData.instance.playerInfo.highestLevel}层`;
    }

    onBtnSettingClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.showDialog("setting/settingPanel", [], ()=>{}, constant.PRIORITY.DIALOG);
    }

    onBtnStartClick () {
        AudioManager.instance.playSound(constant.SOUND.HOME_PANEL_CLICK);

        uiManager.instance.hideDialog("home/homePanel");
        clientEvent.dispatchEvent(constant.EVENT_TYPE.ON_GAME_INIT);
    }

    onBtnLeftClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

    }

    onBtnRightClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

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
