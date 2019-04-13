import sceneConf from '../../confs/scene-conf'


class GameOverPage {

    constructor(callbacks){
       this.callbacks = callbacks;
    }

    init(options){

        console.log("game over page init")
        this.initGameoverCanvas(options)
    }
    
    initGameoverCanvas (options) {
        
        if(typeof(wx) != "undefined"){
            const openDataContext = wx.getOpenDataContext()
            const aspect = window.innerHeight / window.innerWidth
            this.region = [
            (window.innerWidth - 200) / 2,
            (window.innerWidth - 200) / 2 + 200,
            (window.innerHeight - 100) / 2 + 230,
            (window.innerHeight - 100) / 2 + 308
            ]
            this.camera = options.camera
            this.texture = new THREE.Texture(openDataContext.canvas)
            this.material = new THREE.MeshBasicMaterial({ map: this.texture, transparent: true });
            this.geometry = new THREE.PlaneGeometry(sceneConf.frustumSize * 2, aspect * sceneConf.frustumSize * 2)
            this.obj = new THREE.Mesh(this.geometry, this.material)
            this.obj.visible = false
            this.obj.position.z = 60
            this.obj.visible = false
            this.camera.add(this.obj)
        }else{
            // const openDataContext = wx.getOpenDataContext()
            const aspect = window.innerHeight / window.innerWidth
            this.region = [
              (window.innerWidth - 200) / 2,
              (window.innerWidth - 200) / 2 + 200,
              (window.innerHeight - 100) / 2,
              (window.innerHeight - 100) / 2 + 100
            ]
            this.camera = options.camera
            this.canvas = document.createElement('canvas')
            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight
            this.texture = new THREE.Texture(this.canvas)
            this.material = new THREE.MeshBasicMaterial({ map: this.texture, transparent: true });
            this.geometry = new THREE.PlaneGeometry(sceneConf.frustumSize * 2, aspect * sceneConf.frustumSize * 2)
            this.obj = new THREE.Mesh(this.geometry, this.material)
            this.obj.visible = false
            this.obj.position.z = 20
            this.context = this.canvas.getContext('2d')
            this.context.fillStyle = '#333'
            this.context.fillRect((window.innerWidth - 200) / 2, (window.innerHeight - 100) / 2, 200, 100)
            this.context.fillStyle = '#eee'
            this.context.font = '20px Georgia'
            this.context.fillText('Game Over', (window.innerWidth - 200) / 2 + 50, (window.innerHeight - 100) / 2 + 55)
            this.texture.needsUpdate = true
            this.obj.visible = false
            this.camera.add(this.obj)
        }
        
        
       

        
        
    }
    

    show () {
        // console.log(this.obj,"game over show")
        // this.bindTouchEvent()
        // this.obj.visible = true

        // const openDataContext = wx.getOpenDataContext()
        this.obj.visible = true
        // let count = 0
        // const t = setInterval(() => {
        //     count ++
        //     if (count <= 30) {
        //         this.texture.needsUpdate = true
        //     } else {
        //         clearInterval(t)
        //     }
        // }, 1000)
        this.bindTouchEvent()
        
    }
    
    hide () {
        this.obj.visible = false
        this.removeTouchEvent()
    }

    onTouchEnd = (e) => {
        
        const pageX = e.changedTouches[0].pageX
        const pageY = e.changedTouches[0].pageY
        if (pageX > this.region[0] && pageX < this.region[1] && pageY > this.region[2] && pageY < this.region[3]) {
            console.log("touch gover",this.callbacks)
            this.callbacks.gameRestart()

        }
    }
    

    bindTouchEvent () {
        canvas.addEventListener('touchend', this.onTouchEnd)
    }

    removeTouchEvent () {
        canvas.removeEventListener('touchend', this.onTouchEnd)
    }


}

export default GameOverPage