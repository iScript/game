import { customAnimation } from '../../libs/animation'

class Light {
    constructor () {
        this.instances = {}
    }

    init () {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)      //环境光
        const directionalLight = this.directionalLight = new THREE.DirectionalLight(0xffffff,0.3) //平行光
        
        directionalLight.position.set(10, 30, 20)
        directionalLight.castShadow = true

        //光照目标位置 ？？
        var basicMaterial = new THREE.MeshBasicMaterial({ color: 0xF5f5f5 })
        this.shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), basicMaterial)
        this.shadowTarget.visible = true
        this.shadowTarget.name = 'shadowTarget'
        directionalLight.target = this.shadowTarget
       
        directionalLight.shadow.camera.near = 0.5   //平行光需要设置一下6个区域才显示阴影
        directionalLight.shadow.camera.far = 500
        directionalLight.shadow.camera.left = -100
        directionalLight.shadow.camera.right = 100
        directionalLight.shadow.camera.bottom = -100
        directionalLight.shadow.camera.top = 100
        directionalLight.shadow.mapSize.width = 1024
        directionalLight.shadow.mapSize.height = 1024

        this.instances.ambientLight = ambientLight
        this.instances.directionalLight = directionalLight
        
       this.instances.shadowTarget = this.shadowTarget
    }

    updatePosition (targetPosition) {
        //console.log(this.directionalLight.position,"ppp")
        customAnimation.to(0.5, this.shadowTarget.position, {x: targetPosition.x, y: targetPosition.y, z: targetPosition.z})
        customAnimation.to(0.5, this.directionalLight.position, {x: 10 + targetPosition.x, y: 30 + targetPosition.y, z: 20 + targetPosition.z})
    }

    reset () {
        this.directionalLight.position.set(10, 30, 20)
        this.shadowTarget.position.set(0, 0, 0)
    }
}

export default new Light()