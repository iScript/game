System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, AudioClip, AudioSource, game, director, StorageManager, resourceUtil, lodash, _dec, _class, _class2, _temp, _crd, ccclass, property, AudioManager;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioManager", AudioManager = (_dec = ccclass("AudioManager"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function AudioManager() {
          _defineProperty(this, "_persistRootNode", null);

          _defineProperty(this, "_audioSources", []);

          _defineProperty(this, "dictWeaponSoundIndex", {});

          _defineProperty(this, "musicVolume", 0.8);

          _defineProperty(this, "soundVolume", 1);

          _defineProperty(this, "audios", {});

          _defineProperty(this, "arrSound", []);
        }

        var _proto = AudioManager.prototype;

        _proto.init = function init() {
          if (this._persistRootNode) return; //避免切换场景初始化报错

          this._persistRootNode = new Node('audio');
          director.getScene().addChild(this._persistRootNode);
          game.addPersistRootNode(this._persistRootNode);
          this.musicVolume = this.getAudioSetting(true) ? 0.8 : 0;
          this.soundVolume = this.getAudioSetting(false) ? 1 : 0;
        };

        _proto._getAudioSource = function _getAudioSource(clip) {
          var result;

          for (var i = 0; i < this._audioSources.length; ++i) {
            var audioSource = this._audioSources[i];

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
        };

        _proto.getAudioSetting = function getAudioSetting(isMusic) {
          var state;

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
        ;

        _proto.playMusic = function playMusic(name, loop) {
          var _this = this;

          var path = 'audio/music/' + name; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // if (name !== 'click') {
          //     path =  path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadRes(path, AudioClip, function (err, clip) {
            var source = _this._getAudioSource(clip);

            var tmp = {
              source: source,
              isMusic: true
            };
            _this.audios[name] = tmp;
            source.volume = _this.musicVolume;
            source.loop = loop;
            source.play();
          });
        }
        /**
         * 播放音效
         * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
         * @param {Boolean} loop 是否循环播放
         */
        ;

        _proto.playSound = function playSound(name, loop) {
          var _this2 = this;

          if (loop === void 0) {
            loop = false;
          }

          if (!this.soundVolume) {
            return;
          } //音效一般是多个的，不会只有一个


          var path = 'audio/sound/'; // if (name !== 'click') {
          //     path = path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadRes(path + name, AudioClip, function (err, clip) {
            var source = _this2._getAudioSource(clip);

            var tmp = {
              source: source,
              isMusic: false
            };

            _this2.arrSound.push(tmp);

            if (loop) {
              _this2.audios[name] = tmp;
            }

            source.volume = _this2.soundVolume;
            source.loop = loop;
            source.play();
            source.node.on(AudioSource.EventType.ENDED, function () {
              (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
                error: Error()
              }), lodash) : lodash).remove(_this2.arrSound, function (obj) {
                return obj.source === tmp.source;
              });
            });
          });
        };

        _proto.stop = function stop(name) {
          if (this.audios.hasOwnProperty(name)) {
            var audio = this.audios[name];
            audio.source.stop();
          }
        };

        _proto.stopAll = function stopAll() {
          for (var i in this.audios) {
            if (this.audios.hasOwnProperty(i)) {
              var audio = this.audios[i];
              audio.source.stop();
            }
          }
        };

        _proto.getMusicVolume = function getMusicVolume() {
          return this.musicVolume;
        };

        _proto.setMusic = function setMusic(flag) {
          this.musicVolume = flag;

          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item) && this.audios[item].isMusic) {
              // this.changeState(item, flag);
              var audio = this.audios[item];
              audio.source.volume = this.musicVolume;
            }
          }
        } //看广告时先将音乐暂停
        ;

        _proto.pauseAll = function pauseAll() {
          console.log("pause all music!!!");

          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
              var audio = this.audios[item];
              audio.source.pause();
            }
          }
        };

        _proto.resumeAll = function resumeAll() {
          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
              var audio = this.audios[item];
              audio.source.play();
            }
          }
        };

        _proto.openMusic = function openMusic() {
          this.setMusic(0.8);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('music', 'true');
        };

        _proto.closeMusic = function closeMusic() {
          this.setMusic(0);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('music', 'false');
        };

        _proto.openSound = function openSound() {
          this.setSound(1);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('sound', 'true');
        };

        _proto.closeSound = function closeSound() {
          this.setSound(0);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('sound', 'false');
        };

        _proto.setSound = function setSound(flag) {
          this.soundVolume = flag;

          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item) && !this.audios[item].isMusic) {
              // this.changeState(item, flag);
              var audio = this.audios[item];
              audio.source.volume = this.soundVolume;
            }
          }

          for (var idx = 0; idx < this.arrSound.length; idx++) {
            var _audio = this.arrSound[idx];
            _audio.source.volume = this.soundVolume;
          }
        };

        _proto.stopSingleSound = function stopSingleSound(name) {
          if (this.audios.hasOwnProperty(name) && !this.audios[name].isMusic) {
            var audio = this.audios[name];
            audio.source.stop();
          }
        };

        _createClass(AudioManager, null, [{
          key: "instance",
          get: function get() {
            if (this._instance) {
              return this._instance;
            }

            this._instance = new AudioManager();
            return this._instance;
          }
        }]);

        return AudioManager;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=audioManager.js.map