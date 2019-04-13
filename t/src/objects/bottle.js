import bottleConf from "../../confs/bottle-conf.js"
import blockConf from "../../confs/block-conf.js"
import gameConf from "../../confs/game-conf.js"
import { customAnimation, TweenAnimation } from "../../libs/animation.js"
import audioManager from '../modules/audioManager'
import ScoreText from '../view3d/scoreText'
//import { customAnimation, TweenAnimation } from '../../libs/animation'

class Bottle{

    constructor(){
        this.direction = 0  //跳跃的方向
        this.axis = null    //跳跃的轴
        this.status = "stop"//状态
        this.scale = 1      //按下时瓶子身体的压缩度
        this.flyingTime = 0;//当前整个跳跃运动的时间
        this.translateH = 0
        this.translateY = 0
        this.destination = {}
        this.velocity = {
            vx: 0,
            vy: 0
        }

        this.test = {}
    }

    init(){
        this.loader = new THREE.TextureLoader()
        this.obj = new THREE.Object3D();
        this.obj.name = "bottle";
        this.obj.position.set(bottleConf.initPosition.x,bottleConf.initPosition.y+blockConf.height/2 + 60,bottleConf.initPosition.z)

        this.bottle = new THREE.Object3D();
        this.human = new THREE.Object3D();

        const {specularMaterial,bottomMaterial,middleMaterial} = this.loadTexture()

        

        // 头部菱形
        var headRadius = bottleConf.headRadius
        this.head = new THREE.Mesh(
            new THREE.OctahedronGeometry(headRadius),
            bottomMaterial
        )
        this.head.castShadow = true;

        //底部圆台
        var bottom = new THREE.Mesh(
            new THREE.CylinderGeometry(0.62857*headRadius,0.907143*headRadius,1.91423*headRadius,20),
            bottomMaterial
        )
        console.log(bottom)
        bottom.castShadow = true;
        
        //中间
        var middle = new THREE.Mesh(
            new THREE.CylinderGeometry(headRadius/1.4,headRadius/1.4 * 0.88,headRadius*1.2,20),
            middleMaterial
        )
        middle.castShadow = true;
        middle.position.y = 1.3857*headRadius
        middle.position.x = 0;
        middle.position.z =0

        // body 的top
        var topGeometry = new THREE.SphereGeometry(headRadius/1.4,20,20)
        topGeometry.scale(1,0.54,1) //xyz  缩放 y
        var top = new THREE.Mesh(
            topGeometry,
            specularMaterial
        )
        top.castShadow = true
        top.position.y = 1.8143*headRadius
        top.position.x = 0;
        top.position.z = 0;

        this.body = new THREE.Object3D()
        this.body.add(bottom)
        this.body.add(middle)
        this.body.add(top)

        this.head.position.y = 3.57143*headRadius
        this.head.position.x = 0
        this.head.position.z = 0


        this.human.add(this.head)
        this.human.add(this.body)
        this.bottle.add(this.human)
        this.bottle.position.y = 2.2;   //里面再加一层human，方面动画
        this.bottle.position.x = 0;
        this.bottle.position.z = 0;
        this.obj.add(this.bottle)
        
        //粒子效果
        this.particles = []
        
        const whiteParticleMaterial = new THREE.MeshBasicMaterial({map: this.loader.load('/game/res/images/white.png'), alphaTest: 0.5})
        const greenParticleMaterial = new THREE.MeshBasicMaterial({map: this.loader.load('/game/res/images/green.png'), alphaTest: 0.5})
        const particleGeometry = new THREE.PlaneGeometry(2, 2);

        for (let i = 0; i < 15; i++) {  //15个白色
            const particle = new THREE.Mesh(particleGeometry, whiteParticleMaterial)
            //转到正面合适位置
            particle.rotation.x = -Math.PI / 4
            particle.rotation.y = -Math.PI / 5
            particle.rotation.z = -Math.PI / 5
            this.particles.push(particle)
            this.obj.add(particle)
        }

        for (let i = 0; i < 5; i++) {   //5个绿色
            const particle = new THREE.Mesh(particleGeometry, greenParticleMaterial)
            particle.rotation.x = -Math.PI / 4
            particle.rotation.y = -Math.PI / 5
            particle.rotation.z = -Math.PI / 5
            this.particles.push(particle)
            this.obj.add(particle)
        }

        this.scoreText = new ScoreText()
        this.scoreText.init({
        fillStyle: 0x252525
        })
        this.scoreText.instance.visible = false
        this.scoreText.instance.rotation.y = -Math.PI / 4
        this.scoreText.instance.scale.set(0.5, 0.5, 0.5)
        this.obj.add(this.scoreText.instance)
    }

    loadTexture(){
        var specularTexture = this.loader.load("/game/res/images/head.png")
        var bottomTexture = this.loader.load("/game/res/images/bottom.png")
        var middleTexture = this.loader.load("/game/res/images/middle.png")
        var specularMaterial = new THREE.MeshBasicMaterial({
            map:specularTexture
        })
        var bottomMaterial = new THREE.MeshBasicMaterial({
            map:bottomTexture
        })
        var middleMaterial = new THREE.MeshBasicMaterial({
            map:middleTexture
        })

          // var specularMaterial = new THREE.MeshPhongMaterial({
        //     color:0x999999
        // })

        return {specularMaterial,bottomMaterial,middleMaterial}
    }

    //更新和动画等
    update(){
        //console.log(this.status)

        //瓶子收缩
        if(this.status =="shrink"){
            this._shrink()
        }else if (this.status == 'jump') {
            
            const tickTime = Date.now() - this.lastFrameTime
            this._jump(tickTime)
        }

        this.head.rotation.y +=0.06     //瓶子头部旋转
        this.lastFrameTime = Date.now()

        
    }

    stop () {
        this.scale = 1
        this.flyingTime = 0
        this.status = 'stop'

        this.test.endTime = Date.now()
    }

    reset(){
        this.stop()
        
        this.obj.position.set(bottleConf.initPosition.x,bottleConf.initPosition.y+30,bottleConf.initPosition.z)
        console.log("reset",this.obj.position)
        this.obj.rotation.x = 0
        this.obj.rotation.z = 0
    }

    // 
    showUp(){
        //console.log("anni")
        audioManager.init.play()

        customAnimation.to(0.6, this.obj.position, {
            x: bottleConf.initPosition.x,
            y: bottleConf.initPosition.y + blockConf.height / 2,
            z: bottleConf.initPosition.z
          }, 'Bounce.easeOut')
    }

    setDirection (direction, axis) {
        this.direction = direction
        this.axis = axis    //是个vector3
    }

    

    jump(){
        this.status = 'jump'
        this.translateH = 0
        this.translateY = 0
        this.resetParticles()

        this.test.startTime = Date.now()
    }

    //跳跃，分解为2个过程，水平方向匀速运动和竖直上抛运动
    _jump (tickTime) {
        const t = tickTime / 1000
        const translateH = this.velocity.vx * t    //水平方向移动 = 速度*时间 
        const translateY = this.velocity.vy * t - 0.5 * gameConf.gravity * t * t - gameConf.gravity * this.flyingTime * t   //竖直上抛，flyingTime和flyingTime+t之间的位移，通过上抛位移公式，相减，最后得到这个
        this.translateH += translateH
        this.translateY += translateY
        this.obj.translateY(translateY)         
        this.obj.translateOnAxis(this.axis, translateH)
        
        this.flyingTime = this.flyingTime + t   
        
        // this.test.flyingTime = this.flyingTime
        // this.test.vy = this.velocity.vy
        //console.log(this.velocity.vx)
    }

    //按压时的瓶子收缩
    shrink(){
        this.status = 'shrink'  //改变状态后update会自动调用_shrink
        this.gatherParticles()
    }

    _shrink () {
        const MIN_SCALE = 0.55              //
        const HORIZON_DELTA_SCALE = 0.007   //
        const DELTA_SCALE = 0.005
        const HEAD_DELTA = 0.03
    
        this.scale -= DELTA_SCALE   

        // scale的最小值
        this.scale = Math.max(MIN_SCALE, this.scale)
        if (this.scale <= MIN_SCALE) {
          return
        }
        
        //console.log(this.scale)

        this.body.scale.y = this.scale  //垂直变小
        this.body.scale.x += HORIZON_DELTA_SCALE    //水平变大
        this.body.scale.z += HORIZON_DELTA_SCALE
        this.head.position.y -= HEAD_DELTA  //头部下移一点
        
        //重心往下点，
        const bottleDeltaY = HEAD_DELTA / 2
        const deltaY = blockConf.height * DELTA_SCALE / 2
        this.obj.position.y -= bottleDeltaY + deltaY *2
      }
    

    //瓶子跳跃时的旋转
    rotate () {
        const scale = 1.4
        this.human.rotation.x = this.human.rotation.z = 0
        if (this.direction == 0) { // 延x轴的瓶子旋转动画
          customAnimation.to(0.14, this.human.rotation, { z: this.human.rotation.z - Math.PI })                     //0.14秒，绕z轴旋转180度
          customAnimation.to(0.18, this.human.rotation, { z: this.human.rotation.z - 2 * Math.PI}, 'Linear', 0.14)  //014秒后第二个动画，再180度
          customAnimation.to(0.1, this.head.position, { y: this.head.position.y + 0.9 * scale, x: this.head.position.x + 0.45 * scale })    //head头部位置微调
          customAnimation.to(0.1, this.head.position, { y: this.head.position.y - 0.9 * scale, x: this.head.position.x - 0.45 * scale}, 'Linear', 0.1)
          customAnimation.to(0.15, this.head.position, { y: 7.56, x: 0}, 'Linear', 0.25)
          customAnimation.to(0.1, this.body.scale, { y: Math.max(scale, 1), x: Math.max(Math.min(1 / scale, 1), 0.7), z: Math.max(Math.min(1 / scale, 1), 0.7) })   //body伸缩
          customAnimation.to(0.1, this.body.scale, { y: Math.min(0.9 / scale, 0.7), x: Math.max(scale, 1.2), z: Math.max(scale, 1.2)}, 'Linear', 0.1)
          customAnimation.to(0.3, this.body.scale, { y: 1, x: 1, z: 1}, 'Linear', 0.2)
        } else if (this.direction == 1) { // 延z轴
          customAnimation.to(0.14, this.human.rotation, { x: this.human.rotation.x - Math.PI })
          customAnimation.to(0.18, this.human.rotation, { x: this.human.rotation.x - 2 * Math.PI }, 'Linear', 0.14 )
          customAnimation.to(0.1, this.head.position, { y: this.head.position.y + 0.9 * scale, z: this.head.position.z - 0.45 * scale })
          customAnimation.to(0.1, this.head.position, { z: this.head.position.z + 0.45 * scale, y: this.head.position.y - 0.9 * scale }, 'Linear', 0.1 )
          customAnimation.to(0.15, this.head.position, { y: 7.56, z: 0 }, 'Linear', 0.25 )
          customAnimation.to(0.05, this.body.scale, { y: Math.max(scale, 1), x: Math.max(Math.min(1 / scale, 1), 0.7), z: Math.max(Math.min(1 / scale, 1), 0.7) })
          customAnimation.to(0.05, this.body.scale, { y: Math.min(0.9 / scale, 0.7), x: Math.max(scale, 1.2), z: Math.max(scale, 1.2) }, 'Linear', 0.1 )
          customAnimation.to(0.2, this.body.scale, { y: 1, x: 1, z: 1 }, 'Linear', 0.2 )
        }
    }

    // 失败时前倾动画
    forerake () {
        this.status = 'forerake'
        setTimeout( () => {
            if (this.direction == 0) { // x
                customAnimation.to(1, this.obj.rotation, {
                    z: -Math.PI / 2     //x方向的话，绕z轴旋转90度
                })
            } else {
                customAnimation.to(1, this.obj.rotation, {
                    x: -Math.PI / 2
                })
            }
            //位置下移
            setTimeout ( () => {
                customAnimation.to(0.4, this.obj.position, {
                    y: -blockConf.height / 2 + 1.2
                })
            }, 350)
        }, 200)
    }

    // 失败时后倒动画
    hypsokinesis () {
        this.status = 'hypsokinesis'
        setTimeout ( () => {
            if (this.direction == 0) { //
                customAnimation.to(0.8, this.obj.rotation, {
                    z: Math.PI / 2
                })
            } else {
                customAnimation.to(0.8, this.obj.rotation, {
                    x: Math.PI / 2
                })
            }
            setTimeout ( () => {
                customAnimation.to(0.4, this.obj.position, {
                    y: -blockConf.height / 2 + 1.2
                })
                customAnimation.to(0.2, this.head.position, {
                    x: 1.125
                })
                customAnimation.to(0.2, this.head.position, {
                    x: 0
                }, 'Linear', 0.2)
            }, 350)
        }, 200)
    }

    //失败时直线下掉
    straight () {
        this.status = 'straight'
        setTimeout( () => {
            customAnimation.to(0.4, this.obj.position, {
                y: -blockConf.height / 2 + 1.2
            }, 'Linear')
        })
    }

    //
    showAddScore (score) {
        const value = '+' + score
        this.scoreText.updateScore(value)
        this.scoreText.instance.visible = true
        this.scoreText.instance.position.y = 3
        this.scoreText.instance.material.opacity = 1
    
        customAnimation.to(0.7, this.scoreText.instance.position, {
            y: blockConf.height + 6
        })

        //处理数值直接用TweentAnimation
        TweenAnimation(this.scoreText.instance.material.opacity, 0, 0.7, 'Linear', (value, complete) => {
            this.scoreText.instance.material.opacity = value
            if (complete) {
                this.scoreText.instance.visible = false
            }
        })
    }

    // 重置粒子
    resetParticles () {
        if (this.gatherTimer) {
            clearTimeout(this.gatherTimer)
        }
        this.gatherTimer = null
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].gathering = false
            this.particles[i].scattering = false
            this.particles[i].visible = false
        }
    }

    //按压时粒子聚集
    gatherParticles () {
        for (let i = 10; i < 20; i++) {
          this.particles[i].gathering = true    // 聚集
          this.particles[i].scattering = false  // 散开
          this._gatherParticle(this.particles[i])
        }
        this.gatherTimer = setTimeout(() => {
            console.log("gatherTimer")
            for (let i = 0; i < 10; i++) {
                this.particles[i].gathering = true
                this.particles[i].scattering = false
                this._gatherParticle(this.particles[i])
            }
        }, 500 + 1000 * Math.random())
    }

    _gatherParticle (particle) {
        const minDistance = 1
        const maxDistance = 8
        particle.scale.set(1, 1, 1)
        particle.visible = false
        const x = Math.random() > 0.5 ? 1 : -1
        const z = Math.random() > 0.5 ? 1 : -1
        particle.position.x = (minDistance + (maxDistance - minDistance) * Math.random()) * x
        particle.position.y = minDistance + (maxDistance - minDistance) * Math.random()
        particle.position.z = (minDistance + (maxDistance - minDistance) * Math.random()) * z
        //particle.visible = true;
        setTimeout(((particle) => {
            return () => {
                if (!particle.gathering) return
                particle.visible = true
                const duration = 0.5 + Math.random() * 0.4
                customAnimation.to(duration, particle.scale, {
                    x: 0.8 + Math.random(),
                    y: 0.8 + Math.random(),
                    z: 0.8 + Math.random()
                })
                customAnimation.to(duration, particle.position, {
                    x: Math.random() * x,
                    y: Math.random() * 2.5,
                    z: Math.random() * z,
                }, undefined, undefined, () => {
                    if (particle.gathering) {
                        this._gatherParticle(particle)  //动画结束后继续
                    }
                })
            }
      
        })(particle), Math.random() * 500)
    }

    //跳到下一个时粒子散开
    scatterParticles () {
        for (let i = 0; i < 10; i++) {
            this.particles[i].scattering = true
            this.particles[i].gathering = false
            this._scatterParticle(this.particles[i])
        }
    }
    
    _scatterParticle (particle) {
        const minDistance = bottleConf.bodyWidth / 2
        const maxDistance = 2
        const x = (minDistance + Math.random() * (maxDistance - minDistance)) * (1 - 2 * Math.random())
        const z = (minDistance + Math.random() * (maxDistance - minDistance)) * (1 - 2 * Math.random())
        particle.scale.set(1, 1, 1)
        particle.visible = false
        particle.position.x = x
        particle.position.y = -0.5
        particle.position.z = z
    
        setTimeout(((particle) => {
            return () => {
                if (!particle.scattering) return
                particle.visible = true
                const duration = 0.3 + Math.random() * 0.2
                customAnimation.to(duration, particle.scale, {
                    x: 0.2,
                    y: 0.2,
                    z: 0.2
                })
                customAnimation.to(duration, particle.position, {
                    x: 2 * x,
                    y: 2.5 * Math.random() + 2,
                    z: 2 * z,
                }, undefined, undefined, () => {
                    particle.scattering = false
                    particle.visible = false
                })
            }
    
        })(particle), Math.random() * 500)
    }
    
}



export default new Bottle()