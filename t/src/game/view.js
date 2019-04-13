import StartPage from '../pages/startPage'
import GamePage from '../pages/gamePage'
import GameOverPage from '../pages/gameOverPage'
//import StartPage from '../pages/startPage'

class GameView {
    constructor () {

    }

    showGameOverPage () {
        this.gamePage.hide()
        this.gameOverPage.show()
    }

    showGamePage () {

        console.log(this.gamePage)
        this.gameOverPage.hide()
        this.startPage.hide()
        this.gamePage.restart()
        this.gamePage.show()

        
    }

    restartGame () {
        this.gamePage.restart()
    }

    initStartPage (callbacks) {
        console.log("initstart")
        this.startPage = new StartPage(callbacks)
        this.startPage.init({
            camera: this.gamePage.scene.camera.instance
        })
    }

    initGameOverPage (callbacks) {
        this.gameOverPage = new GameOverPage(callbacks)
        this.gameOverPage.init({
            camera: this.gamePage.scene.camera.instance
        })
    }

    initGamePage (callbacks) {
        this.gamePage = new GamePage(callbacks)
        //console.log(callbacks)
        this.gamePage.init()
    }
}

export default new GameView()