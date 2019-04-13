/**
 * 游戏主函数
 */
import * as THREE from '../libs/three.js'
window.THREE = THREE


window.innerWidth

import game from './game/game.js'

class Main {
    constructor () {

    }

    init () {

        if(typeof(wx) == "undefined" ){
            window.innerWidth = 375;
            window.innerHeight = 750
        }

        console.log("main init")
        game.init()
    }
}

export default Main
