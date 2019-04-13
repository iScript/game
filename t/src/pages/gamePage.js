import {scene} from "../scene/index"
import CuboidBlock from "../block/cuboid"
import CylinderBlock from "../block/cylinder"
import ground from "../objects/ground"
import bottle from "../objects/bottle"
import blockConf from "../../confs/block-conf"
import bottleConf from "../../confs/bottle-conf"
import gameConf from "../../confs/game-conf"
import utils from "../utils/index"
import ScoreText from '../view3d/scoreText'
import audioManager from '../modules/audioManager'
import tailSystem from '../objects/tail'
import { stopAllAnimation } from '../../libs/animation'

const HIT_NEXT_BLOCK_CENTER = 1     //
const HIT_CURRENT_BLOCK = 2
const GAME_OVER_NEXT_BLOCK_BACK = 3
const GAME_OVER_CURRENT_BLOCK_BACK = 4
const GAME_OVER_NEXT_BLOCK_FRONT = 5
const GAME_OVER_BOTH = 6
const HIT_NEXT_BLOCK_NORMAL = 7

class GamePage {

    constructor(callbacks){
        this.callbacks = callbacks;
        this.targetPosition = {}
        this.checkingHit = false //是否开始碰撞检测
        this.score = 0  //分数
        this.combo = 0  //连击次数
        this.now = Date.now()
        this.lastFrameTime = Date.now()

        this.test = {}
    }

    init(){

        console.log("game page init")
        this.scene = scene
        this.ground = ground
        this.bottle = bottle
        this.tailSystem = tailSystem
       
        this.scoreText = new ScoreText()
        this.scoreText.init({
            fillStyle: 0x666699
        })
        this.scene.init()
        this.ground.init()
        this.bottle.init()
        this.tailSystem.init(this.scene.instance, this.bottle)
        this.addInitBlock()
        this.addGround()
        this.addBottle()
        this.addScore()
        //this.bindTouchEvent()
        this.render()
    }

    addInitBlock(){
        const cuboidBlock = this.currentBlock = new CuboidBlock(-15,0,0,'color')
        const cylinderBlock = this.nextBlock = new CylinderBlock(23, 0, 0,'color')
        this.scene.instance.add(cuboidBlock.instance)
        this.scene.instance.add(cylinderBlock.instance)

        //console.log(cylinderBlock)

        // var helper = new THREE.VertexNormalsHelper( cuboidBlock.instance, 10, 0x00ff00, 1 );
        // this.scene.instance.add(helper)
        this.targetPosition = {
            x: 23,
            y: 0,
            z: 0
        }
        const initPosition = 0
        this.setDirection(initPosition)
    }

    addGround(){
        this.scene.instance.add(this.ground.instance)
    }

    addBottle(){
        this.scene.instance.add(this.bottle.obj)
        this.bottle.showUp();
    }


    render(){
        this.now = Date.now()
        const tickTime = this.now - this.lastFrameTime

        if(this.currentBlock){
            this.currentBlock.update()
        }
        this.scene.render()
        if(this.bottle){
            this.bottle.update()
        }

        if (this.checkingHit) {
            this.checkBottleHit()
        }

        if (this.tailSystem) {
           // console.log("tail")
            this.tailSystem.update(tickTime)
        }

        requestAnimationFrame(this.render.bind(this))
    }

    checkBottleHit(){
        
        if (this.bottle.obj.position.y <= blockConf.height / 2 && this.bottle.status === 'jump' && this.bottle.flyingTime > 0.3) {
            this.checkingHit = true
            if (this.hit == HIT_NEXT_BLOCK_CENTER || this.hit == HIT_NEXT_BLOCK_NORMAL || this.hit == HIT_CURRENT_BLOCK) {  //游戏继续
                this.bottle.stop()
                 this.bottle.obj.position.y = blockConf.height / 2
                 this.bottle.obj.position.x = this.bottle.destination[0]
                 this.bottle.obj.position.z = this.bottle.destination[1]

                if (this.hit == HIT_NEXT_BLOCK_CENTER || this.hit == HIT_NEXT_BLOCK_NORMAL) {
                    if (this.hit == HIT_NEXT_BLOCK_CENTER) {
                        
                        this.combo ++
                        audioManager['combo' + (this.combo <= 8 ? this.combo : '8')].play()
                        this.score += 2 * this.combo
                        this.bottle.showAddScore(2 * this.combo)
                        this.updateScore(this.score)
                    } else if (this.hit == HIT_NEXT_BLOCK_NORMAL) {
                        this.combo = 0
                        audioManager.success.play()
                        this.bottle.showAddScore(1)
                        this.updateScore(++this.score)
                    }
                    this.updateNextBlock()

                }
                
            }else{  //gameover
               
                this.combo = 0
                this.removeTouchEvent()
                
                //边缘跳超过了点，执行前倾动画
                if (this.hit == GAME_OVER_NEXT_BLOCK_BACK || this.hit == GAME_OVER_CURRENT_BLOCK_BACK) {
                    console.log("over 1")
                    stopAllAnimation()
                    this.bottle.stop()
                    this.bottle.forerake()
                    audioManager.fall_from_block.play()
                    this.bottle.obj.position.y = blockConf.height / 2
                    setTimeout (() => {
                        this.uploadScore()
                        this.callbacks.showGameOverPage()
                    }, 2000)
                
                // 边缘没跳到，知道后倒动画
                } else if (this.hit == GAME_OVER_NEXT_BLOCK_FRONT) {
                    console.log("over 2")
                    stopAllAnimation()
                    this.bottle.stop()
                    this.bottle.hypsokinesis()
                    audioManager.fall_from_block.play()
                    this.bottle.obj.position.y = blockConf.height / 2
                    setTimeout (() => {
                        this.uploadScore()
                        this.callbacks.showGameOverPage()
                    }, 2000)
                
                // 中间掉下
                }else{
                    console.log("over 3")
                    stopAllAnimation()
                    this.bottle.stop()
                    this.bottle.straight()
                    audioManager.fall.play()
                    this.bottle.obj.position.y = blockConf.height / 2
                    setTimeout (() => {
                        this.uploadScore()
                        this.callbacks.showGameOverPage()
                    }, 2000)
                }
                
                //this.callbacks.showGameOverPage()
                
                this.checkingHit = false
            }
            this.bottle.scatterParticles()
        }
    }

    // 向开放域传递分数
    uploadScore () {
        return;
        const openDataContext = wx.getOpenDataContext()
        openDataContext.postMessage({
          type: 'updateMaxScore',
          score: this.score
        })
        this.score = 0
    }

    //生成下一个
    updateNextBlock(){

        
        const seed = Math.round(Math.random())
        const type = seed ? 'cuboid' : 'cylinder'
        const direction = Math.round(Math.random())     // 0 -> x 1 -> y
        const width = Math.round(Math.random() * 12) + 8//
        const distance = Math.round(Math.random() * 20) + 20
        this.currentBlock = this.nextBlock
        const targetPosition = this.targetPosition = {}

        if (direction == 0) { // x
            targetPosition.x = this.currentBlock.instance.position.x + distance
            targetPosition.y = this.currentBlock.instance.position.y
            targetPosition.z = this.currentBlock.instance.position.z
        } else if (direction == 1) { // z
            targetPosition.x = this.currentBlock.instance.position.x
            targetPosition.y = this.currentBlock.instance.position.y
            targetPosition.z = this.currentBlock.instance.position.z - distance
        }

        this.setDirection(direction)

        if (type == 'cuboid') {
            const cuboidSeed = Math.floor(Math.random() * 2)
            this.nextBlock = new CuboidBlock(targetPosition.x, targetPosition.y, targetPosition.z, cuboidSeed ? 'well' : 'color', width)
        } else {
            this.nextBlock = new CylinderBlock(targetPosition.x, targetPosition.y, targetPosition.z, 'color', width)
        }

        this.scene.instance.add(this.nextBlock.instance)
        this.nextBlock.popup()

        //camera 看向current和next的中心位置
        const cameraTargetPosition = {
            x: (this.currentBlock.instance.position.x + this.nextBlock.instance.position.x) / 2,
            y: (this.currentBlock.instance.position.y + this.nextBlock.instance.position.y) / 2,
            z: (this.currentBlock.instance.position.z + this.nextBlock.instance.position.z) / 2
        }

        //console.log("poooo",this.scene.camera.instance.position,cameraTargetPosition)



          
        this.scene.updateCameraPosition(cameraTargetPosition)
        this.ground.updatePosition(cameraTargetPosition)
    }

    bindTouchEvent () {
        this.touchStartCallback = this.touchStartCallback.bind(this)
        this.touchEndCallback = this.touchEndCallback.bind(this)
        canvas.addEventListener('touchstart', this.touchStartCallback)
        canvas.addEventListener('touchend', this.touchEndCallback)
    }

    removeTouchEvent () {
        canvas.removeEventListener('touchstart', this.touchStartCallback)
        canvas.removeEventListener('touchend', this.touchEndCallback)
    }

    touchStartCallback () {
        //console.log("touch start")
        this.touchStartTime = Date.now()
        this.bottle.shrink()
        this.currentBlock.shrink()

        audioManager.shrink.play()
    }
    
    touchEndCallback () {
        console.log("touch end")
        this.touchEndTime = Date.now()
        const duration = this.touchEndTime - this.touchStartTime
        this.bottle.velocity.vx = Math.min(duration / 6, 400)       //水平方向的初始速度，最大400
        this.bottle.velocity.vx = +this.bottle.velocity.vx.toFixed(2)
        this.bottle.velocity.vy = Math.min(150 + duration / 20, 400)    //竖直方向速度
        this.bottle.velocity.vy = +this.bottle.velocity.vy.toFixed(2)
        this.bottle.stop()
       
        
        const initY = (1 - this.currentBlock.instance.scale.y) * blockConf.height    //原始高度到下压高度之间的距离
        this.hit = this.getHitStatus(this.bottle,this.currentBlock, this.nextBlock, initY)  //通过计算，还没落地前就知道了是否碰撞
        this.checkingHit = true 

        this.currentBlock.rebound();
        this.bottle.rotate()
        this.bottle.jump()

        if(typeof(wx != "undefined")){
            audioManager.shrink.stop()
            audioManager.shrink_end.stop()
        }else{
            audioManager.shrink.pause()
            audioManager.shrink_end.pause()
        }
        

    }

    // 设置跳跃的方向
    setDirection (direction) {
        const currentPosision = {
            x: this.bottle.obj.position.x,
            z: this.bottle.obj.position.z
        }
        this.axis = new THREE.Vector3(this.targetPosition.x - currentPosision.x, 0, this.targetPosition.z - currentPosision.z)
        //console.log(this.axis)
        this.axis.normalize()   //转为单位向量
        this.bottle.setDirection(direction, this.axis)

    }

    restart(){
        console.log("restart")
        this.deleteObjectsfromScene()
        this.scene.reset()
        this.bottle.reset()
        console.log(this.bottle)

        this.ground.reset()
        this.updateScore('0')
        this.addInitBlock()
        this.addGround()
        this.addBottle()
        this.bindTouchEvent()
    }

    addScore () {
        this.scene.addScore(this.scoreText.instance)
    }
    
    updateScore (score) {
        this.scoreText.updateScore(score)
    }

    deleteObjectsfromScene () {
        let obj = this.scene.instance.getObjectByName('block')
        while (obj) {
            this.scene.instance.remove(obj)
            if (obj.geometry) {
                obj.geometry.dispose()
            }
            if (obj.material) {
                obj.material.dispose()
            }
            obj = this.scene.instance.getObjectByName('block')
        }
        this.scene.instance.remove(this.bottle.obj)
        this.scene.instance.remove(this.ground.instance)
    }

    

    show(){
        // ??
        this.visible = true
    }

    hide(){
        this.visible = false
    }

    //碰撞检测
    getHitStatus (bottle, currentBlock, nextBlock, initY) {

        //debugger

        let flyingTime = parseFloat(bottle.velocity.vy) / parseFloat(gameConf.gravity )* 2.0    //v=gt   总时间分为上升到0，下降从0到原始速度及原始高度，竖直上抛运动的上升阶段和下降各阶段具有严格的对称性。*2
        //console.log(initY,"initY")
        initY = initY || bottle.obj.position.y.toFixed(2)       
        
         //上面的flyingtime是到被压缩后方块的高度，下一块实际高度是未压缩的
        // initY = (原始高度到下压高度之间的距离) =  平均速度/t = (vy+(vy-g*t))/2*t   求解t 
        var time = +((bottle.velocity.vy - Math.sqrt(Math.pow(bottle.velocity.vy, 2) - 2 * initY * gameConf.gravity)) / gameConf.gravity).toFixed(2)    
        
        flyingTime -= time   //从下压高度飞到正常高度方块的时间
        this.flyingTime = flyingTime = +flyingTime.toFixed(2) 

        // console.log(flyingTime,time,"tttt")
        // this.test.flyingTime = flyingTime
        // this.test.vy = bottle.velocity.vy

        const destination = []
        const bottlePosition = new THREE.Vector2(bottle.obj.position.x, bottle.obj.position.z)
        const translate = new THREE.Vector2(this.axis.x, this.axis.z).setLength(bottle.velocity.vx * flyingTime)    //将单位向量设置长度
        //console.log(translate)
        //console.log(flyingTime,"11")    //
        
        
        bottlePosition.add(translate)   //add 向量相加，即目的地
        bottle.destination = [+bottlePosition.x.toFixed(2), +bottlePosition.y.toFixed(2)]   //vector2 xy，y就代表z轴，
        destination.push(+bottlePosition.x.toFixed(2), +bottlePosition.y.toFixed(2))
        
        let result1, result2
        if (nextBlock) {
            //欧式距离，不开根号，只是数量级的差别
            const nextDiff = Math.pow(destination[0] - nextBlock.instance.position.x, 2) + Math.pow(destination[1] - nextBlock.instance.position.z, 2)
            const nextPolygon = nextBlock.getVertices()
            
            //跳跃的目标点是否在nextPolygon内
            if (utils.pointInPolygon(destination, nextPolygon)) {
                if (Math.abs(nextDiff) < 5) {
                    result1 = HIT_NEXT_BLOCK_CENTER
                } else {
                    result1 = HIT_NEXT_BLOCK_NORMAL
                }
            //跳超过了一点，后边缘
            } else if (utils.pointInPolygon([destination[0] - bottleConf.bodyWidth / 2, destination[1]], nextPolygon) || utils.pointInPolygon([destination[0], destination[1] + bottleConf.bodyWidth / 2], nextPolygon)) {
                    result1 = GAME_OVER_NEXT_BLOCK_BACK
            //前边缘
            } else if (utils.pointInPolygon([destination[0] + bottleConf.bodyWidth / 2, destination[1]], nextPolygon) || utils.pointInPolygon([destination[0], destination[1] - bottleConf.bodyWidth / 2], nextPolygon)) {
                    result1 = GAME_OVER_NEXT_BLOCK_FRONT
            }
        }
    
        if (currentBlock) {
            const currentPolygon = currentBlock.getVertices()
            if (utils.pointInPolygon(destination, currentPolygon)) {
                result2 = HIT_CURRENT_BLOCK
            
            //
            } else if (utils.pointInPolygon([destination[0] - bottleConf.bodyWidth / 2, destination[1]], currentPolygon) || utils.pointInPolygon([destination[0], destination[1] + bottleConf.bodyWidth / 2], currentPolygon)) {
                if (result1) {
                    result2 = GAME_OVER_BOTH
                }
                result2 = GAME_OVER_CURRENT_BLOCK_BACK
            }
        }
        return result1 || result2 || 0
      }
}

export default GamePage