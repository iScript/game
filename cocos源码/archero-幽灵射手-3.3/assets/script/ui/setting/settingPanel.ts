import { uiManager } from './../../framework/uiManager';
import { AudioManager } from './../../framework/audioManager';
import { SpriteFrame, SpriteComponent, Vec3, profiler, LabelComponent } from 'cc';
import { _decorator, Component, Node } from 'cc';
import { StorageManager } from '../../framework/storageManager';
import { constant } from '../../framework/constant';
const { ccclass, property } = _decorator;

@ccclass('SettingPanel')
export class SettingPanel extends Component {
    @property(SpriteFrame)
    public sfSelect: SpriteFrame = null!;

    @property(SpriteFrame)
    public sfUnSelect: SpriteFrame = null!;

    @property(Node)
    public ndBtnVibration: Node = null!;

    @property(Node)
    public ndBtnMusic: Node = null!;

    @property(Node)
    public ndBtnDebug: Node = null!;
    
    private _isMusicOpen: boolean = false;
    private _isVibrationOpen: boolean = false;
    private _isDebugOpen: boolean = false;
    private _curDotPos: Vec3 = new Vec3();//当前选中点的位置

    start () {
        // [3]
    }

    public show () {
        this._isMusicOpen = AudioManager.instance.getAudioSetting(true);
        this._changeState(this.ndBtnMusic, this._isMusicOpen);

        this._isVibrationOpen = StorageManager.instance.getGlobalData("vibration") ?? true;
        this._changeState(this.ndBtnVibration, this._isVibrationOpen);

        this._isDebugOpen = StorageManager.instance.getGlobalData("debug") ?? false;
        this._changeState(this.ndBtnDebug, this._isDebugOpen);
    }

    private _changeState (ndParget: Node, isOpen: boolean) {
        let spCom = ndParget.getComponent(SpriteComponent) as SpriteComponent;
        let ndDot = ndParget.getChildByName("dot") as Node;
        let lbTxt = ndDot.getChildByName("txt")?.getComponent(LabelComponent) as LabelComponent;
        let ndDotPos = ndDot.position;

        if (isOpen) {
            spCom.spriteFrame = this.sfSelect;
            this._curDotPos.set(24, ndDotPos.y, ndDotPos.z);
            ndDot.setPosition(this._curDotPos);
            lbTxt.string = "开";
        } else {
            spCom.spriteFrame = this.sfUnSelect;
            this._curDotPos.set(-24, ndDotPos.y, ndDotPos.z);
            ndDot.setPosition(this._curDotPos);
            lbTxt.string = "关";
        }
    }

    public onBtnVibrationClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._isVibrationOpen = !this._isVibrationOpen;
        this._changeState(this.ndBtnVibration, this._isVibrationOpen);
        StorageManager.instance.setGlobalData("vibration", this._isVibrationOpen);
    }

    public onBtnMusicClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._isMusicOpen = !this._isMusicOpen;
        this._changeState(this.ndBtnMusic, this._isMusicOpen);

        if (this._isMusicOpen) {
            AudioManager.instance.openMusic();
            AudioManager.instance.openSound();
        } else {
            AudioManager.instance.closeMusic();
            AudioManager.instance.closeSound();
        }
    }

    public onBtnDebugClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        this._isDebugOpen = !this._isDebugOpen;
        this._changeState(this.ndBtnDebug, this._isDebugOpen);
        StorageManager.instance.setGlobalData("debug", this._isDebugOpen);

        this._isDebugOpen === true ? profiler.showStats() : profiler.hideStats();
    }

    public onBtnCloseClick () {
        AudioManager.instance.playSound(constant.SOUND.CLICK);

        uiManager.instance.hideDialog("setting/settingPanel");
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
