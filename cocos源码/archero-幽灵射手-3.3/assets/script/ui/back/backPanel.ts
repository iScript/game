import { AudioManager } from './../../framework/audioManager';
import { uiManager } from './../../framework/uiManager';
import { _decorator, Component, Node } from 'cc';
import { constant } from '../../framework/constant';
const { ccclass, property } = _decorator;

@ccclass('BackPanel')
export class BackPanel extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    private _callback: Function = null!;

    start () {
        // [3]
    }

    public show (callback: Function) {
        this._callback = callback;
    }

    public onBtnYesClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.hideDialog("back/backPanel");
        this._callback && this._callback();
    }

    public onBtnNoClick () {
        uiManager.instance.hideDialog("back/backPanel");

        AudioManager.instance.playSound(constant.SOUND.CLICK);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
