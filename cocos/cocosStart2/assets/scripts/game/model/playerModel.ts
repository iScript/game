class PlayerModel {
  private static _instance: PlayerModel;
  private constructor() {}
  public static get instance(): PlayerModel {
    if (!this._instance) {
      this._instance = new PlayerModel();
    }
    return this._instance;
  }

  now: Date = new Date();
  secondInterval: any;
  saveTime: Date;
  skillFreeRefreshCount = 0;

  // 是否强制打开开发环境
  isOpenDev: boolean = false;
  // 运营录制视频版本
  isRecordAd: boolean = false;

  dayTaskObj: any = {};
  energyObj: any = {};
  daySignObj: any = {};
  vipObj: any = {};
  shareObj: any = {};

  isLetterAward = 0;

  skillBombNum = 1;
  skillHealNum = 1;
  skillMagnetNum = 0;
  skillLifeNum = 0;

  init() {
    let now = new Date();
    // let data: any = UserData.getInstance().playerData;
    // utilTools.timeStrToDate(data);

    // audioManager.initData(data.audio);
    // this.initData(data.player, now);
    // mapModel.initData(data.fight, now);

    // this.openSecondInterval();
    // eventManager.on(msgac.saveDataBefore, this.onSaveData, this);
  }

  /**
   * 是否处于开发环境
   */
  isInDevelopmentEnvironment(): boolean {
    return this.isOpenDev;
  }
}

export const playerModel = PlayerModel.instance;
