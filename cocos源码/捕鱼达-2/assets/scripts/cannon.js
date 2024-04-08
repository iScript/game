
cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            type: cc.Node,
            default: null,
        },

        bullet_prefab: {
            type: cc.Prefab,
            default: null,
        },

        bullet_root: {
            type: cc.Node,
            default: null,
        },

        shoot_time: 0.2, // 每隔0.2秒发射一颗;
    },

    start () {
        // this this.node ---> 
        this.now_time = this.shoot_time;
    },

    // 发射一颗子弹, 
    do_shoot() {
        if (this.target === null) {
            return;
        }

        var dst = this.target.getComponent("nav_agent").get_next_point();
        // var dst = this.target.getPosition();
        var src = this.node.getPosition();

        var dir = dst.sub(src); // dir 炮台的方向;
        var r = Math.atan2(dir.y, dir.x); 
        var degree = r * 180 / Math.PI; 

        var bullet = cc.instantiate(this.bullet_prefab);
        this.bullet_root.addChild(bullet);
        bullet.setPosition(src);

        bullet.getComponent("bullet").shoot(degree, 800);
    },

    update (dt) {
        if (this.target === null) {
            return;
        }

        // 数学不好能否学会;  初中数学, 
        var src = this.node.getPosition(); // 炮的位置;
        var dst = this.target.getPosition(); 
        var dir = dst.sub(src); // dir 炮台的方向;
        var r = Math.atan2(dir.y, dir.x); 
        var degree = r * 180 / Math.PI; 

        this.node.angle = degree - 90;

        this.now_time += dt;
        if (this.now_time >= this.shoot_time) {
            this.now_time = 0;
            this.do_shoot();
        }
    },
});
