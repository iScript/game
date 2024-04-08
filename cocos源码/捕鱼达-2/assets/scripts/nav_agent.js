// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var fish_map = require("fish_map");
// 组件类,
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        map: {
            type: fish_map,
            default: null,
        },

        speed: 100,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    // start函数 组件开始运行之前，调用, 初始入口的好地方;
    start () {
        this.run_road();
    },

    run_road() {
        var road_set = this.map.get_road_set();
        var index = Math.random() * road_set.length;
        index = Math.floor(index);
        this.road_data = road_set[index]; // 假设从第0条;

        if (this.road_data.length < 2) {
            return;
        }
        this.is_walking = false;
        this.node.setPosition(this.road_data[0]);
        this.next_step = 1; // 下一个要走的路径点;
        if (this.road_data[0].x < this.road_data[this.road_data.length - 1].x) {
            this.node.scaleX = 1;
        }
        else {
            this.node.scaleX = -1;
        }
        this.walk_to_next();
    }, 

    get_next_point() {
        if (this.next_step + 3 >= this.road_data.length) {
            return this.road_data[this.road_data.length - 1];
        }

        return this.road_data[this.next_step + 3];
    },

    walk_to_next() {
        if (this.next_step >= this.road_data.length) {
            this.is_walking = false;
            this.run_road();
            return;
        }

        this.is_walking = true;
        var src = this.node.getPosition();
        var dst = this.road_data[this.next_step];
        var dir = dst.sub(src);
        var len = dir.mag();

        this.total_time = len / this.speed;
        this.now_time = 0;
        this.vx = this.speed * dir.x / len;
        this.vy = this.speed * dir.y / len;

        // 旋转鱼头
        var r = Math.atan2(dir.y, dir.x); // 弧度
        var degree = r * 180 / Math.PI;
        degree = degree - 90; // 逆时针--> 顺时针
        this.node.angle = degree;
        // this.node.runAction(cc.rotateTo(0.5, degree));
        // end
    },

    // update 组件再游戏画面每次刷新的时候调用, update
    // dt: 是距离上一次过去刷新的时间;
    update (dt) {
        if(this.is_walking === false) {
            return;
        }

        this.now_time += dt;
        if (this.now_time > this.total_time) {
            dt -= (this.now_time - this.total_time);
        }

        var sx = this.vx * dt;
        var sy = this.vy * dt;

        this.node.x += sx;
        this.node.y += sy;

        if (this.now_time >= this.total_time) {
            this.next_step ++;
            this.walk_to_next(); // 继续走下一个点;
        }
    },
});
