import { _decorator, Component, instantiate, Node, Prefab } from "cc";
import ResMgr from "../managers/ResManager";
import ResManager from "../managers/ResManager";
import { UIManager } from "../managers/UIManager";
const { ccclass, property } = _decorator;

//@ccclass("Game")
export class Game extends Component {
  public static instance: Game = null;

  onLoad(): void {
    if (Game.instance === null) {
      Game.instance = this;
    } else {
      this.destroy();
      return;
    }
  }

  public gameStart(): void {
    console.log("game start");
    var resPkg = {
      ui: {
        assetType: Prefab,
        urls: ["uiPrefabs/Game"],
      },
    };
    ResManager.Instance.preloadResPkg(resPkg, null, () => {
      this.enterGameScene();
    });
  }

  public enterGameScene() {
    console.log("enter scene");

    // var uiGamePrefab = ResManager.Instance.getAsset("ui", "uiPrefabs/Game");
    // var uiGame = instantiate(uiGamePrefab);
    // this.node.addChild(uiGame);
    // console.log(this.node, uiGame);

    UIManager.Instance.show_ui("Game");
  }
}
