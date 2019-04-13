import camera from './camera'
import light from './light'
import background from '../objects/background'

class Scene {
    constructor () {
        this.instance = null
        this.currentScore = null
    }

    reset () {
        this.camera.reset()
        this.light.reset()
    }

    init () {

        this.instance = new THREE.Scene()
        console.log(canvas)
        const renderer = this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,            //抗锯齿
            preserveDrawingBuffer: true
        })

        renderer.shadowMap.enabled = true           //开启阴影
        renderer.shadowMap.type = THREE.PCFShadowMap

        this.camera = camera
        this.light = light
        this.camera.init()
        this.light.init()
        this.axesHelper = new THREE.AxesHelper(100)

        this.instance.add(this.axesHelper)
        this.instance.add(this.camera.instance)
        
        for (let lightType in this.light.instances) {
            this.instance.add(this.light.instances[lightType])
        }

        // 添加背景，背景按相机的正面放
        this.background = background
        this.background.init()
        this.background.instance.position.z = -84   
        this.camera.instance.add(this.background.instance)
    }

    render () {
        //console.log(this.instance, this.camera.instance)
        this.renderer.render(this.instance, this.camera.instance)
    }

    updateCameraPosition (targetPosition) {
        this.camera.updatePosition(targetPosition)
        this.light.updatePosition(targetPosition)
    }

    addScore (scoreInstance) {
        this.currentScore = scoreInstance
        this.camera.instance.add(scoreInstance)
        scoreInstance.position.x = -20
        scoreInstance.position.y = 40
        
    }
}

export default new Scene()