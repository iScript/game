System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, AudioClip, AudioSource, game, director, StorageManager, resourceUtil, lodash, _dec, _class, _class2, _temp, _crd, ccclass, property, AudioManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "./lodash", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      game = _cc.game;
      director = _cc.director;
    }, function (_unresolved_2) {
      StorageManager = _unresolved_2.StorageManager;
    }, function (_unresolved_3) {
      resourceUtil = _unresolved_3.resourceUtil;
    }, function (_unresolved_4) {
      lodash = _unresolved_4.lodash;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e2ecZFEJFEHoCgx6lXVYHB", "audioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass("AudioManager"), _dec(_class = (_temp = _class2 = class AudioManager {
        constructor() {
          _defineProperty(this, "_persistRootNode", null);

          _defineProperty(this, "_audioSources", []);

          _defineProperty(this, "dictWeaponSoundIndex", {});

          _defineProperty(this, "musicVolume", 0.8);

          _defineProperty(this, "soundVolume", 1);

          _defineProperty(this, "audios", {});

          _defineProperty(this, "arrSound", []);
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();
          return this._instance;
        }

        init() {
          if (this._persistRootNode) return; //避免切换场景初始化报错

          this._persistRootNode = new Node('audio');
          director.getScene().addChild(this._persistRootNode);
          game.addPersistRootNode(this._persistRootNode);
          this.musicVolume = this.getAudioSetting(true) ? 0.8 : 0;
          this.soundVolume = this.getAudioSetting(false) ? 1 : 0;
        }

        _getAudioSource(clip) {
          let result;

          for (let i = 0; i < this._audioSources.length; ++i) {
            let audioSource = this._audioSources[i];

            if (!audioSource.playing) {
              result = audioSource;
              break;
            }
          }

          if (!result) {
            result = this._persistRootNode.addComponent(AudioSource);

            this._audioSources.push(result);
          }

          result.node.off(AudioSource.EventType.ENDED);
          result.clip = clip;
          result.currentTime = 0;
          return result;
        }

        getAudioSetting(isMusic) {
          let state;

          if (isMusic) {
            state = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.getGlobalData('music');
          } else {
            state = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.getGlobalData('sound');
          } // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);


          return !state || state === 'true' ? true : false;
        }
        /**
         * 播放音乐
         * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
         * @param {Boolean} loop 是否循环播放
         */


        playMusic(name, loop) {
          let path = 'audio/music/' + name; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // if (name !== 'click') {
          //     path =  path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadRes(path, AudioClip, (err, clip) => {
            let source = this._getAudioSource(clip);

            let tmp = {
              source,
              isMusic: true
            };
            this.audios[name] = tmp;
            source.volume = this.musicVolume;
            source.loop = loop;
            source.play();
          });
        }
        /**
         * 播放音效
         * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
         * @param {Boolean} loop 是否循环播放
         */


        playSound(name, loop = false) {
          if (!this.soundVolume) {
            return;
          } //音效一般是多个的，不会只有一个


          let path = 'audio/sound/'; // if (name !== 'click') {
          //     path = path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadRes(path + name, AudioClip, (err, clip) => {
            let source = this._getAudioSource(clip);

            let tmp = {
              source,
              isMusic: false
            };
            this.arrSound.push(tmp);

            if (loop) {
              this.audios[name] = tmp;
            }

            source.volume = this.soundVolume;
            source.loop = loop;
            source.play();
            source.node.on(AudioSource.EventType.ENDED, () => {
              (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).remove(this.arrSound, obj => {
                return obj.source === tmp.source;
              });
            });
          });
        }

        stop(name) {
          if (this.audios.hasOwnProperty(name)) {
            let audio = this.audios[name];
            audio.source.stop();
          }
        }

        stopAll() {
          for (const i in this.audios) {
            if (this.audios.hasOwnProperty(i)) {
              let audio = this.audios[i];
              audio.source.stop();
            }
          }
        }

        getMusicVolume() {
          return this.musicVolume;
        }

        setMusic(flag) {
          this.musicVolume = flag;

          for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item) && this.audios[item].isMusic) {
              // this.changeState(item, flag);
              let audio = this.audios[item];
              audio.source.volume = this.musicVolume;
            }
          }
        } //看广告时先将音乐暂停


        pauseAll() {
          console.log("pause all music!!!");

          for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
              let audio = this.audios[item];
              audio.source.pause();
            }
          }
        }

        resumeAll() {
          for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
              let audio = this.audios[item];
              audio.source.play();
            }
          }
        }

        openMusic() {
          this.setMusic(0.8);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('music', 'true');
        }

        closeMusic() {
          this.setMusic(0);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('music', 'false');
        }

        openSound() {
          this.setSound(1);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('sound', 'true');
        }

        closeSound() {
          this.setSound(0);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('sound', 'false');
        }

        setSound(flag) {
          this.soundVolume = flag;

          for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item) && !this.audios[item].isMusic) {
              // this.changeState(item, flag);
              let audio = this.audios[item];
              audio.source.volume = this.soundVolume;
            }
          }

          for (let idx = 0; idx < this.arrSound.length; idx++) {
            let audio = this.arrSound[idx];
            audio.source.volume = this.soundVolume;
          }
        }

        stopSingleSound(name) {
          if (this.audios.hasOwnProperty(name) && !this.audios[name].isMusic) {
            let audio = this.audios[name];
            audio.source.stop();
          }
        }

      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=audioManager.js.map