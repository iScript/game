
import { _decorator, Component, Node, director, Director, PhysicsSystem, geometry, Vec3, physics } from 'cc';
const { ccclass, property } = _decorator;
const tmpRay = geometry.Ray.create(0, 0, 0, 0, -1, 0);
@ccclass('VerticalRaycast')
export class VerticalRaycast extends Component {

    @property({ type: physics.PhysicsGroup })
    group: physics.PhysicsGroup = 0;

    start() {
        director.on(Director.EVENT_AFTER_PHYSICS, this.raycast, this);
    }

    raycast() {
        const pos = this.node.worldPosition;
        const offsetY = 1;//默认为1;
        let y = pos.y;
        Vec3.copy(tmpRay.o, pos);
        tmpRay.o.y += offsetY;
        if (PhysicsSystem.instance.raycastClosest(tmpRay, this.group, 1.2)) {
            y = PhysicsSystem.instance.raycastClosestResult.hitPoint.y;
        }
        tmpRay.o.y = y;
        this.node.worldPosition = tmpRay.o;
    }
}
