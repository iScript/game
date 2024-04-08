cc.Class({
    extends: cc.Component,

    properties: {
        degree: 45,
        speed: 600,

        play_onload: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

        if (this.play_onload) {
            this.shoot(this.degree, this.speed);
        }
    },

    shoot(degree, speed) {
        this.degree = degree;
        this.speed = speed;

        var r = (this.degree / 180) * Math.PI;
        this.vx = this.speed * Math.cos(r);
        this.vy = this.speed * Math.sin(r);

        this.node.angle = this.degree - 90;
    }, 

    update (dt) {
        var sx = this.vx * dt;
        var sy = this.vy * dt;

        this.node.x += sx;
        this.node.y += sy;

        if (this.node.x < -cc.winSize.width * 0.5 || 
            this.node.x > cc.winSize.width * 0.5 ||
            this.node.y < -cc.winSize.height * 0.5 ||
            this.node.y > cc.winSize.height * 0.5) {
            console.log("delete");
            this.node.removeFromParent();
        }
    },
});
