
const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletMgr extends cc.Component {

    public static Instance: BulletMgr = null;
    
    private nodePool: any = {};

    onLoad(): void {
        if(BulletMgr.Instance === null) {
            BulletMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        for(var i = 0; i < 50; i ++) {
            var b = cc.instantiate(this.bulletPrefabs[0]);
            b.name = "bullet" + i;
            this.nodePool[b.name] = b;
        }
    }

    @property([cc.Prefab])
    public bulletPrefabs: Array<cc.Prefab> = [];


    private getBulletConfigFromLevel(uLevel): any {
        // 来自Excel
        return {speed: 800, attack: 100, costChip: 100}
    }

    private getFreeNode(): cc.Node {
        for(var key in this.nodePool) {
            if (this.nodePool[key] !== null) {
                var b = this.nodePool[key];
                this.nodePool[key] = null; 
                return b;
            }
        }

        return null;
    }

    private pushFreeNode(node): void {
        this.nodePool[node.name] = node;
    }

    public allocBullet(ulevel): cc.Node {
        // var b = cc.instantiate(this.bulletPrefabs[ulevel]);
        var b = this.getFreeNode();
        b.getComponent("BulletCtrl").initBulletConfig(this.getBulletConfigFromLevel(ulevel));
        this.node.addChild(b);
        return b; 
    }

    public freeBullet(bullet: cc.Node): void {
        // bullet.destroy();
        bullet.removeFromParent();
        this.pushFreeNode(bullet);
    }
}
