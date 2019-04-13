//地面
class Ground {
    constructor () {

    }

    init () {
        const groundGeometry = new THREE.PlaneGeometry(20000, 20000)
        const material = new THREE.ShadowMaterial({
            transparent: true,
            color: 0x000000,
            opacity: 0.3
        })
        
        this.instance = new THREE.Mesh(groundGeometry, material)
        this.instance.receiveShadow = true
        this.instance.rotation.x = -Math.PI / 2 //默认是垂直的，放平
        this.instance.position.y = -16 / 3.2    //放到块下面
    }

    updatePosition (targetPosition) {
        this.instance.position.x = targetPosition.x
        this.instance.position.z = targetPosition.z
    }

    reset () {
        this.instance.position.x = 0
        this.instance.position.z = 0
    }
}

export default new Ground()