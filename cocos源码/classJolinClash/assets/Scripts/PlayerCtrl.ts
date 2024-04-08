import { _decorator, Component, Node, SkeletalAnimationComponent } from 'cc';
const { ccclass, property } = _decorator;

// 为什么我这里不是2, 3,   而是3, 5;   001 | 010 ---> 011;
// 001 | 100 = 101; --->5;
var State = {
    Idle: 0,
    WalkForward: 1,
    WalkLeftAndForward: 3,  
    WalkRightAndForward: 5,
}


@ccclass('PlayerCtrl')
export class PlayerCtrl extends Component {


    @property(Node)
    private camera: Node = null;
    private cameraOffsetZ: number = 0;

    private state: number = -1;
    private anim: SkeletalAnimationComponent = null;
    
    onLoad(): void {
        this.anim = this.getComponentInChildren(SkeletalAnimationComponent);
        this.setState(State.Idle);

        if (this.camera !== null) {
            this.cameraOffsetZ = this.camera.worldPosition.z - this.node.worldPosition.z;
        }
    }

    public setState(state: number): void {
        if(this.state === state) { // 很重要, 假设你连续的改变同一个状态;
            return;
        }

        this.state = state;
        this.anim.stop();
        switch(this.state) {
            case State.Idle:
                this.anim.crossFade("Machete_Idle");
            break;
            case State.WalkForward:
                this.anim.crossFade("Machete_RunForward");
            break;
            case State.WalkLeftAndForward:
                this.anim.crossFade("Machete_RunLeft");
            break;
            case State.WalkRightAndForward:
                this.anim.crossFade("Machete_RunRight");
            break;
        }
    }

    public forwardWalkUpdate(speed: number, dt: number): void {
        var pos = this.node.getWorldPosition();
        pos.z += (speed * dt);
        this.node.setWorldPosition(pos);
    }

    public horWalkUpdate(speed: number, dt: number): void {
        var pos = this.node.getWorldPosition();
        pos.x += (speed * dt);
        this.node.setWorldPosition(pos);
    }

    public lateUpdate(): void {
        if (this.camera !== null) {
            var pos = this.camera.getWorldPosition();
            pos.z = this.node.worldPosition.z + this.cameraOffsetZ;
            this.camera.setWorldPosition(pos);
        }
    }
}
