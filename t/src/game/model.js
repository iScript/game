import Event from '../utils/event'

class GameModel {
  constructor () {
    this.stage = ''
    this.stageChanged = new Event(this)
  }

  getStage () {
    return this.stage
  }

  setStage (stage) {
    this.stage = stage
    this.stageChanged.notify({
      stage: stage
    })
  }
}

export default new GameModel()