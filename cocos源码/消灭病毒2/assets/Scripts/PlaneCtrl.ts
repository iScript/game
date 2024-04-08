import BulletMgr from "./BulletMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlaneCtrl extends cc.Component {

    private isPaused: boolean = false;
    private shootTime: number = 0;
    private nowTime: number = 0;
    private ulevel: number = 0;
    


    start(): void {
        this.initPlayConfig(0);
    }

    public setPaused(isPaused: boolean) {
        this.isPaused = isPaused;
    }

    public onPlaneMove(offset: cc.Vec2): void {
        this.node.x += offset.x;
        this.node.y += offset.y;
    }  

    

    public initPlayConfig(ulevel): void {
        
        this.ulevel = ulevel;    
        // 玩家配置表，读取时间间隔
        this.shootTime = 0.2;
    }

    private doShoot(): void {
        var b = BulletMgr.Instance.allocBullet(this.ulevel);
        // 设置子弹的位置;
        var pos = this.node.getPosition();
        pos.y += 72;
        b.setPosition(pos);
    }

    update(dt): void {
        this.nowTime += dt;

        if (this.isPaused === true) {
            return;
        }

        if(this.nowTime >= this.shootTime) {
            this.doShoot();
            this.nowTime = 0;
        }
    }
}
