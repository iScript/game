const constants = {
  gameName: "mrtgd",

  animations: {
    animation: "animation",

    standBy: "standby",
    attack: "attack",
    hit: "hit",
    die: "die",
    appear: "appear",
    walk: "walk",
  },

  audioNames: {
    home: "home",
    map: "map",
    win: "win",
  },

  propIds: {
    coin: 101,
    dayAct: 107,
    energy: 108,

    exp: 201,
    magnet: 301,
    addHpPercent: 401,
    bomb: 501,
    box1: 601,
    box2: 701,
    diamond: 801,
    boxMonsterCoin: 1001,
    equip: 1002,
  },
  propTypes: {
    coin: 1,
    exp: 2,
    skin: 17,
  },

  mapTypes: {
    main: 1,
    tower: 2,
  },

  materials: {
    shineColor: "shader/shineColor",
    shineColorSpine: "shader/shineColorSpine",
  },

  monsterTypes: {
    common: 1,
    elite: 2,
    boss: 3,
  },
  monsterIds: {
    boxMonster: 24,
  },

  skillTypes: {
    // 锤子
    hammer: 1,
    // 转盘
    disk: 2,
  },

  times: {
    minute: 60 * 1000,
    houre: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
  },

  tableName: {
    map: "map",
    level: "level",
    monster: "monster",
    weapon: "weapon",
    bullet: "bullet",
    skill: "skill",
    skill2: "skill2",
    expLv: "expLv",
    expType: "expType",
    prop: "prop",
    box1: "box1",
    config: "config",
    heroLevel: "heroLevel",
    suit: "suit",
    draw: "draw",
    weaponOpt: "weaponOpt",
    towerFloor: "towerFloor",
    dayTask: "dayTask",
    daySign: "daySign",
    energyAward: "energyAward",
    CNTM: "CNTM",
    vip: "vip",
    share: "share",
    monsterTimeAdd: "monsterTimeAdd",
  },

  bundles: {
    audio: "audio",
    bullet: "bullet",
    common: "common",
    design: "design",
    hint: "hint",
    icon: "icon",
    layer: "layer",
    monster: "monster",
    prefab: "prefab",
    spine: "spine",
    ui: "ui",
    weapon: "weapon",
    wwqVec: "wwqVec",
  },

  layers: {
    LoadingLayer: "LoadingLayer",
    NoticeLayer: "NoticeLayer",

    HomeLayer: "HomeLayer",
    MapLayer: "MapLayer",
    MapFightLayer: "MapFightLayer",
    SkillSelectLayer: "SkillSelectLayer",
    PauseLayer: "PauseLayer",
    LuckyDrawLayer: "LuckyDrawLayer",
    LevelLayer: "LevelLayer",
    ChapterLayer: "ChapterLayer",
    SettlementLayer: "SettlementLayer",
    BackHomeLayer: "BackHomeLayer",
    BackLifeLayer: "BackLifeLayer",
    BackMapLayer: "BackMapLayer",
    HandLayer: "HandLayer",
    TransLayer: "TransLayer",
    BoxMonsterLayer: "BoxMonsterLayer",
    TowerLayer: "TowerLayer",
    TowerFloorLayer: "TowerFloorLayer",
    TowerRoleLayer: "TowerRoleLayer",
    DayTaskLayer: "DayTaskLayer",
    EnergyLayer: "EnergyLayer",
    DaySignLayer: "DaySignLayer",
    LetterLayer: "LetterLayer",
    SkinChangeLayer: "SkinChangeLayer",
    PropInfoLayer2: "PropInfoLayer2",
    AwardInfoLayer: "AwardInfoLayer",
    VipLayer: "VipLayer",
    ShareLayer: "ShareLayer",
    MsgBoxLayer: "MsgBoxLayer",
    BuyLifeLayer: "BuyLifeLayer",

    PropInfoLayer: "PropInfoLayer",
    BlessLayer: "BlessLayer",
    BlessResultLayer: "BlessResultLayer",
    MoreGameLayer: "MoreGameLayer",

    RewardItemLayer: "RewardItemLayer",
    ShopLayer: "ShopLayer",
    RewardLayer: "RewardLayer",
    SettingLayer: "SettingLayer",
    PatrolLayer: "PatrolLayer",
    PatrolFastLayer: "PatrolFastLayer",

    GuessGameLayer: "GuessGameLayer",
    GuessResultLayer: "GuessResultLayer",
    PyramidDrawLayer: "PyramidDrawLayer",
    RewardSkinLayer: "RewardSkinLayer",
    RewardRedBoxLayer: "RewardRedBoxLayer",
  },

  // 自动保存时间间隔
  saveTimeGap: 1000 * 60 * 5,

  colors: {
    yin: "#666666",
    white: "#ffffff",
    green: "#38ff38",
    blue: "#1096fd",
    purple: "#f153ff",
  },

  // 零散策划数据
  design: {
    // 满级
    maxLv: 5,
    // 武器数量限制
    weaponNum: 4,
    // 主动/被动技能数量限制
    skillNum: 6,

    // 单局最多复活次数
    backLifeMax: 1,
  },
};

export { constants };
