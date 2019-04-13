import sceneConf from '../../confs/scene-conf'
import { customAnimation } from '../../libs/animation'

class Camera {
    constructor () {
        this.instance = null
    }

    init () {
        const aspect = window.innerHeight / window.innerWidth
        //正交投影相机，参数为左右上下近远，物体在六个面的区域中显示
        this.instance = new THREE.OrthographicCamera(-sceneConf.frustumSize, sceneConf.frustumSize, sceneConf.frustumSize * aspect, -sceneConf.frustumSize * aspect, -100, 85)
        this.instance.position.set(-10, 10, 10)
        this.target = new THREE.Vector3(0, 0, 0)
        this.instance.lookAt(this.target)
    }

    updatePosition (newTargetPosition) {
        customAnimation.to(0.5, this.instance.position, { x: newTargetPosition.x - 10, y: newTargetPosition.y + 10, z: newTargetPosition.z + 10 })
        customAnimation.to(0.5, this.target, { x: newTargetPosition.x, y: newTargetPosition.y, z: newTargetPosition.z })
    }
    
    reset () {
        this.instance.position.set(-10, 10, 10)
        this.target = new THREE.Vector3(0, 0, 0)
    }

}

export default new Camera()