
import { _decorator, Component, Node, Vec3, ParticleSystemComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    @property
    public speed: number = 10;

    @property
    public range: number = 30;
    
    @property([Node])
    public arrNdTarget: Node[] = [];

    private _arrOriPos: any[] = [];
    private _arrArriveEnd: number[] = [];

    start () {
        // [3]
        this._arrOriPos = [];
        this._arrArriveEnd = [];
        
        this.arrNdTarget.forEach((ndItem: Node)=>{
            this._arrOriPos.push(ndItem.worldPosition.clone());
        })
    }

    private _resetAllPos () {
        this.arrNdTarget.forEach((ndItem: Node, idx: number)=>{
            ndItem.setWorldPosition(this._arrOriPos[idx]);

            //清除拖尾特效残留
            let arrParticle:  ParticleSystemComponent[]= ndItem.getComponentsInChildren(ParticleSystemComponent);
            arrParticle.forEach((item: ParticleSystemComponent)=>{
                item.simulationSpeed = 1;
                item?.clear();
                item?.stop();
                item?.play();
            })
        })

        this._arrArriveEnd = [];
    }

    update (deltaTime: number) {
        // [4]

        if (this.arrNdTarget.length) {
            for (let idx = 0; idx < this.arrNdTarget.length; idx++) {
                const ndItem = this.arrNdTarget[idx];
                let pos = ndItem.worldPosition.clone()
                if (pos.length() >= this.range) {
                    if (this._arrArriveEnd.indexOf(idx) === -1) {
                        this._arrArriveEnd.push(idx);
                    }

                    if (this._arrArriveEnd.length >= this.arrNdTarget.length) {
                        this._resetAllPos();
                        break;
                    }
                } else {
                    ndItem.translate(new Vec3(0,0,-deltaTime * this.speed), Node.NodeSpace.LOCAL);
                }
            }
        }
    }
}
