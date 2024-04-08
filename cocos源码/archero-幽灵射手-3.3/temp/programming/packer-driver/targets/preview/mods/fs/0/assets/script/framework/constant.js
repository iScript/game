System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, constant;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b08f08kiOlEA7e6qUWa7AnA", "constant", undefined);

      _export("constant", constant = function constant() {});

      _defineProperty(constant, "GAME_NAME", 'template');

      _defineProperty(constant, "GAME_VERSION", '1.0.1');

      _defineProperty(constant, "GAME_FRAME", 60);

      _defineProperty(constant, "GAME_INIT_FRAME", 60);

      _defineProperty(constant, "LOCAL_CACHE", {
        PLAYER: 'player',
        //玩家基础数据缓存，如金币砖石等信息，暂时由客户端存储，后续改由服务端管理
        SETTINGS: 'settings',
        //设置相关，所有杂项都丢里面进去
        DATA_VERSION: 'dataVersion',
        //数据版本
        ACCOUNT: 'account',
        //玩家账号
        // TMP_DATA: 'tmpData',             //临时数据，不会存储到云盘
        HISTORY: "history",
        //关卡通关数据
        BAG: "bag" //玩家背包，即道具列表，字典类型

      });

      _defineProperty(constant, "SETTINGS_KEY", {
        FIGHT_TIMES: "fightTimes" //过关次数

      });

      _defineProperty(constant, "PLAYER_ANI_TYPE", {
        IDLE: "idle",
        //待机
        RUN: "run",
        //向前跑
        ATTACK: "attack",
        //攻击
        DIE: "die",
        //死亡动作，后仰倒地
        REVIVE: "revive" //复活s

      });

      _defineProperty(constant, "MONSTER_ANI_TYPE", {
        IDLE: "idle",
        //待机
        RUN: "run",
        //向前跑
        ATTACK: "attack",
        //攻击
        DIE: "die",
        //死亡动作，后仰倒地
        HIT: "hit",
        //受到打击(无)
        ATTACK_1: "attack1",
        //hellFire独有的攻击1
        ATTACK_2: "attack2" //hellFire独有的攻击2

      });

      _defineProperty(constant, "PLAYER_ACTION", {
        MOVE: 1,
        STOP_MOVE: 2,
        ROTATE: 3
      });

      _defineProperty(constant, "MONSTER_ACTION", {
        MOVE: 1,
        STOP_MOVE: 2,
        ROTATE: 3
      });

      _defineProperty(constant, "PHY_GROUP", {
        DEFAULT: 1 << 0,
        //
        PLAYER: 1 << 1,
        //玩家
        COLLIDER_ITEM: 1 << 2,
        //碰撞器
        MONSTER: 1 << 3,
        //小怪
        REWARD: 1 << 4,
        //奖品
        MONSTER_SKILL_COLLIDER: 1 << 5,
        //怪物技能
        OBSTACLE: 1 << 6 //障碍

      });

      _defineProperty(constant, "BLOOD_BAR", {
        PLAYER: 1,
        MONSTER: 2,
        BOSS: 3
      });

      _defineProperty(constant, "EVENT_TYPE", {
        ATTACK_PLAYER: "attackPlayer",
        //攻击玩家
        CHANGE_SKIN: "changeSkin",
        //改变皮肤
        ON_GAME_INIT: "onInitGame",
        //监听游戏初始化
        ON_GAME_OVER: "onGameOver",
        //监听游戏结束
        ON_GAME_PAUSE: "onGamePause",
        //监听游戏暂停
        ON_REVIVE: "onRevive",
        //监听玩家复活
        REFRESH_DIAMOND: "refreshDiamond",
        //更新钻石
        REFRESH_GOLD: "refreshGold",
        //更新金币
        REFRESH_LEVEL: "refreshLevel",
        //刷新关卡
        REFRESH_BOSS_BLOOD: 'refreshBossBlood',
        //刷新boss血量
        RECYCLE_ALL: "recycleAll",
        //回收所有模型、特效
        HIDE_LOADING_PANEL: "hideLoadingPanel",
        //隐藏加载界面
        HIDE_BOSS_BLOOD_BAR: "hideBossBloodBar",
        //隐藏boss血条
        HIDE_SKILL_ICON_SELECTED: "hideSkillIconSelected",
        //隐藏其他技能图标选择
        HIDE_DEBUG_LEVEL_SELECTED: "hideDebugLevelSelected",
        //调试界面隐藏其他关卡选中状态
        HIDE_WARP_GATE: "hideWarpGate",
        //隐藏传送门
        SHOW_LOADING_PANEL: "showLoadingPanel",
        //展示加载界面
        SHOW_BOSS_BLOOD_BAR: "showBossBloodBar",
        //展示boss血条
        SHOW_WARP_GATE: "showWarpGate",
        //展示传送门
        INHALE_REWARD: "inhaleReward",
        //吸入奖品(金币、爱心)
        PARSE_PLAYER_SKILL: "parsePlayerSkill",
        //解析玩家技能
        MONSTER_MOVE: "monsterMove" //怪物开始移动

      });

      _defineProperty(constant, "FIGHT_TIP", {
        ADD_BLOOD: 0,
        //加血
        REDUCE_BLOOD: 1,
        //扣血
        CRITICAL_HIT: 2 //暴击

      });

      _defineProperty(constant, "PRIORITY", {
        BLOOD: 5,
        //血条
        BLOOD_TIP: 6,
        //血量提示
        BLOOD_CRITICAL_TIP: 7,
        //暴击血量提示
        NORMAL: 10,
        //普通界面
        DIALOG: 100,
        //弹窗的Z序
        REWARD: 200,
        //奖励的弹窗
        WAITING: 300,
        //等待界面弹窗
        TIPS: 400 //提示

      });

      _defineProperty(constant, "BLOOD_TIP_DIRECTION", {
        MID_UP: 0,
        //中间向上
        LEFT_UP: 1,
        //左边向上
        RIGHT_UP: 2 //右边向上

      });

      _defineProperty(constant, "OPEN_REWARD_TYPE", {
        AD: 0,
        SHARE: 1,
        NULL: 2
      });

      _defineProperty(constant, "SHARE_ID", {
        SKILL_REFRESH: 1,
        //技能界面技能刷新
        SHOP_REFRESH: 2,
        //商店界面技能刷新
        REVIVE: 3 //复活

      });

      _defineProperty(constant, "PLAYER_SKILL", {
        //箭形态变化技能
        ARROW_DOUBLE: "10101",
        //双重射击
        ARROW_CONTINUOUS: "10201",
        //连续射击
        ARROW_UMBRELLA: "10301",
        //伞型射击
        ARROW_REVERSE: "10401",
        //反向射击
        ARROW_SIDE: "10501",
        //侧面射击
        ARROW_PENETRATE: "10601",
        //穿透
        // ARROW_REBOUND: "10701",//反弹
        //数值变化技能
        RAISE_ATTACK_01: "20101",
        //攻击1
        RAISE_ATTACK_02: "20102",
        //攻击2
        RAISE_DODGE: "20201",
        //闪避
        RAISE_CRITICAL_HIT_DAMAGE_01: "20301",
        //暴击+爆伤1
        RAISE_CRITICAL_HIT_DAMAGE_02: "20302",
        //暴击+爆伤2
        RAISE_ATTACK_SPEED_01: "20401",
        //攻速提升1
        RAISE_ATTACK_SPEED_02: "20402",
        //攻速提升2
        RAISE_HP_LIMIT: "20501",
        //提升生命上限
        RECOVERY: "20601",
        //回复生命值
        MOVE_SPEED: "20701",
        //移动速度
        //buff变化技能
        ARROW_ICE: "30101",
        //冰冻
        ARROW_FIRE: "30201",
        //灼烧
        //触发技能
        ARROW_LIGHTNING: "40101",
        //闪电
        BLOODTHIRSTY: "40201",
        //嗜血
        ARROW_LAUNCH: "40301" //弹射

      });

      _defineProperty(constant, "GAME_LEVEL_TYPE", {
        DARK_CASTLE: 1,
        //幽暗城堡
        HOT_HELL: 2 //炙热地狱

      });

      _defineProperty(constant, "BASE", {
        PLAYER_01: "1001",
        AULA: "2001",
        BOOM_DRAGON: "2002",
        MAGICIAN: "2003",
        HELL_FIRE: "2004",
        BOSS_01: "3001",
        BLOOD_BAG: "4001",
        SHOP_NPC: "5001",
        SKILL_NPC: "6001"
      });

      _defineProperty(constant, "BASE_TYPE", {
        PLAYER: "player",
        MONSTER: "monster",
        BOSS: "boss",
        HEART: "heart",
        NPC: "npc",
        OBSTACLE: "obstacle"
      });

      _defineProperty(constant, "MAX_SKILL_ICON_NUM", 12);

      _defineProperty(constant, "PLAYER_SKILL_USE", {
        FORM_CHANGE: "1",
        //形态
        VALUE: "2",
        //数值
        BUFF: "3",
        //buf
        TRIGGER: "4" //触发

      });

      _defineProperty(constant, "MONSTER_SKILL", {
        ENERGY_BALL: "101",
        //能量球
        FIRE_BALL: "102",
        //小火球
        JET_FIRES: "103",
        //直线火焰
        DISPERSION: "104",
        //180度散射子弹
        TORNADO: "105",
        //s形龙卷风
        FIRE_BALL_BIG: "106",
        //大火团
        DISPERSION_SURROUND: "107",
        //360度六角散射
        LASER: "108" //直线激光

      });

      _defineProperty(constant, "MONSTER_MOVE_PATTERN", {
        RANDOM: 1,
        //随机移动
        FORWARD_PLAYER: 2,
        //朝向玩家
        NO_MOVE: 3 //在原地，不移动

      });

      _defineProperty(constant, "MONSTER_MOVE_MODE", {
        WALK: 1,
        //行走
        FLY: 2 //飞行

      });

      _defineProperty(constant, "SOUND", {
        CLICK: "click",
        //按钮点击
        HOME_PANEL_CLICK: "homePanelClick",
        //主界面点击按钮
        AULA_DIE: "aulaDie",
        //死亡-蜘蛛
        BOOM_DRAGON_DIE: "boomDragonDie",
        //死亡-爆炸龙
        DRAGON_DIE: "dragonDie",
        //死亡-巨龙
        HELL_FIRE_DIE: "hellFireDie",
        //死亡-地狱火.
        MAGICIAN_DIE: "magicianDie",
        //死亡-法师
        PLAYER_01_DIE: "player01Die",
        //死亡-主角
        FOOT_STEP: ["footStep1", //脚步声1
        "footStep2" //脚步声2
        ],
        GOLD_DROP: "goldDrop",
        //金币掉落
        HIT_PLAYER: "hitPlayer",
        //主角受击
        HIT_MONSTER: 'hitMonster',
        //怪物受击
        SELL: "sell",
        //购买出售成功
        SHOW_WRAP_GATE: "showWarpGate",
        //展示传送门
        ENERGY_BALL: "energyBall",
        //技能-能量球
        TORNADO: "tornado",
        // 技能-龙卷风
        JET_FIRE: 'jetFire',
        //技能-直线范围火焰
        LASER: "laser",
        //技能-激光
        FIRE_BALL: 'fireBall',
        //小火球
        FIRE_BALL_BIG: "fireBallBig",
        //大火球
        REVIVE: "revive",
        //主角复活
        LOOSE: "loose",
        //主角射箭
        GET_SKILL: "getSkill",
        //主角技能获得
        ICE: "ice",
        //技能-冰冻
        RECOVERY: "recovery",
        //技能-生命恢复
        LIGHTNING: 'lightning',
        //技能-闪电
        FIRE: 'fire',
        //技能-火焰
        GOLD_COLLECT: "goldCollect" //金币收集
        // 技能-丢石头.mp3			

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=constant.js.map