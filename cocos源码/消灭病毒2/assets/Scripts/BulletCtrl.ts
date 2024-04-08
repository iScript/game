import BulletMgr from "./BulletMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletCtrl extends cc.Component {
    private config: any = null; // {speed: 100, attack: 100}

    private speed: number = 0; // 子弹运行时的速度;

    start(): void {
        // test
        // this.initBulletConfig({speed: 500, attack: 100 });
    }
    // 游戏玩家---》等级---》config; --->表里面
    public initBulletConfig(config): void {
        this.config = config;
        this.speed = this.config.speed;
    }

    update(dt: number): void {
        var s = this.speed * dt;
        this.node.y += s;

        if (this.node.y >= (cc.winSize.height * 0.5 + this.node.height * 0.5)) {
            BulletMgr.Instance.freeBullet(this.node);
        }
    }
}
