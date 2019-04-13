import audioConf from '../../confs/audio-conf'
import gameView from '../game/view'

class AudioManager {
    constructor () {
        this.init()
    }

    init () {
        for (let key in audioConf.audioSources) {
            if(typeof(wx) == "undefined"){
                this[key] = document.createElement("audio");
            }else{
                this[key] = wx.createInnerAudioContext() ;
            }
            
            this[key].src = audioConf.audioSources[key]
        }
        this.shrink_end.loop = true
        
        if(typeof(wx) != "undefined"){
             //是否下压的， 下压状态shrink播放完后，循环播放shrink_end
            this.shrink.onEnded ( () => {
                if (gameView.gamePage.bottle.status == 'shrink') {
                    this.shrink_end.play()
                }
            })
        }

       
    }
}

export default new AudioManager()