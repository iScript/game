import { AudioClip, AudioSource } from "cc";
import { myLog } from "../../common/MyLog";
import { constants } from "../data/constants";
import { resManager } from "./ResManager";

class AudioManager {
  private static _instance: AudioManager;
  private constructor() {}
  public static get instance(): AudioManager {
    if (!this._instance) {
      this._instance = new AudioManager();
    }
    return this._instance;
  }

  musicAudioSource: AudioSource;
  effectAudioSource: AudioSource;

  audioClips: any = {};

  musicVolume: number = 1;
  effectVolume: number = 1;
  musicName: string = "";

  setMusicAudioSource(audioSource: AudioSource) {
    this.musicAudioSource = audioSource;
  }

  setEffectAudioSource(audioSource: AudioSource) {
    this.effectAudioSource = audioSource;
  }

  initData(data: any) {
    if (!data) {
      data = {};
    }

    if (data.musicVolume != undefined) {
      this.musicVolume = data.musicVolume;
    }

    if (data.effectVolume != undefined) {
      this.effectVolume = data.effectVolume;
    }
  }

  getSaveData(now: Date) {
    let data: any = {};
    data.musicVolume = this.musicVolume;
    data.effectVolume = this.effectVolume;

    return data;
  }

  loadAllAudio(onProgress?: Function, onComplete?: Function) {
    resManager.loadAssetByBundleDir(
      constants.bundles.audio,
      "",
      AudioClip,
      (percent: number, item: any) => {
        if (percent > 0.96) {
          // 解决提前回调百分百导致的音频资源还未缓存到audioClips
          percent = 0.96;
        }
        if (onProgress) {
          onProgress(percent);
        }
      },
      (assetArr: any) => {
        for (let i in assetArr) {
          let asset = assetArr[i];
          let name = asset.name;
          if (!name) {
            continue;
          }
          this.audioClips[name] = asset;
        }
        if (onComplete) {
          onComplete();
        }
      }
    );
  }

  loadAudios(pathArr: any, onProgress?: Function, onComplete?: Function) {
    resManager.loadAssetByPathArr(
      constants.bundles.audio,
      pathArr,
      AudioClip,
      (percent: number) => {
        if (percent > 0.96) {
          // 解决提前回调百分百导致的音频资源还未缓存到audioClips
          percent = 0.96;
        }
        if (onProgress) {
          onProgress(percent);
        }
      },
      (assetArr: any) => {
        for (let i in assetArr) {
          let asset = assetArr[i];
          let name = asset.name;
          if (!name) {
            continue;
          }
          this.audioClips[name] = asset;
        }
        if (onComplete) {
          onComplete();
        }
      }
    );
  }

  loadAudio(path: string, onComplete?: Function) {
    resManager.loadAsset(
      constants.bundles.audio,
      path,
      AudioClip,
      null,
      (err: any, asset: AudioClip) => {
        if (err) {
          if (onComplete) {
            onComplete();
          }
          return;
        }
        this.audioClips[asset.name] = asset;
        if (onComplete) {
          onComplete(asset);
        }
      }
    );
  }

  getMusiceVolume(): number {
    return this.musicVolume;
  }
  setMusicVolume(val: number) {
    val = Math.round(val * 1000) / 1000;
    this.musicVolume = val;
    this.musicAudioSource.volume = val;

    if (val <= 0) {
      this.musicAudioSource.pause();
      return;
    }
    this.playMusic(this.musicName);
  }
  async playMusic(musicName: string) {
    if (!musicName) {
      return;
    }
    this.musicName = musicName;
    if (this.musicVolume <= 0) {
      return;
    }
    let clip: any = await this.getAudioClip(musicName);
    if (!clip) {
      return;
    }
    if (this.musicAudioSource.playing) {
      if (this.musicAudioSource.clip == clip) {
        return;
      }
      this.musicAudioSource.stop();
    }
    this.musicAudioSource.clip = clip;
    this.musicAudioSource.loop = true;
    this.musicAudioSource.play();
  }

  gameOnShow(force: boolean = false) {
    if (!this.musicAudioSource || this.musicVolume <= 0) {
      return;
    }
    myLog.i(
      "===========gameOnShow:",
      this.musicAudioSource.playing,
      this.musicAudioSource.state
    );
    if (!this.musicAudioSource.playing || force) {
      myLog.i("=======call playing");
      this.musicAudioSource.play();
    }
  }

  getEffectVolume(): number {
    return this.effectVolume;
  }
  setEffectVolume(val: number) {
    val = Math.round(val * 1000) / 1000;
    this.effectVolume = val;
    this.effectAudioSource.volume = val;
  }
  async playEffect(effectName: string) {
    if (!effectName || this.effectVolume <= 0) {
      return;
    }
    let clip: any = await this.getAudioClip(effectName);
    if (!clip) {
      return;
    }
    this.effectAudioSource.playOneShot(clip);
  }

  getAudioClip(name: string) {
    return new Promise((resolve) => {
      let clip = this.audioClips[name];
      if (clip) {
        resolve(clip);
        return;
      }
      this.loadAudio(name, (clip: AudioClip) => {
        resolve(clip);
      });
    });
  }
}

export const audioManager = AudioManager.instance;
