import { _decorator, Component, Node, Button, instantiate } from "cc";
import ResManager from "./ResManager";

export class UICtrl extends Component {
  protected view = {};

  load_all_object(root, path) {
    for (let i = 0; i < root.childrenCount; i++) {
      this.view[path + root.children[i].name] = root.children[i];
      this.load_all_object(
        root.children[i],
        path + root.children[i].name + "/"
      );
    }
  }
  onLoad() {
    this.view = {};
    this.load_all_object(this.node, "");
  }

  add_button_listen(view_name, caller, func) {
    var view_node = this.view[view_name];
    if (!view_node) {
      return;
    }

    var button = view_node.getComponent(Button);
    if (!button) {
      return;
    }

    view_node.on("click", func, caller);
  }
}

export class UIManager extends Component {
  private Canvas: Node = null;
  public static Instance: UIManager = null;
  private uiMap = {};

  onLoad(): void {
    if (UIManager.Instance === null) {
      UIManager.Instance = this;
    } else {
      this.destroy();
      return;
    }
    this.Canvas = this.node;

    //console.log("----", this.node, this.Canvas);
  }

  public show_ui(ui_name, parent?: Node): Node {
    if (!parent) {
      parent = this.Canvas;
    }
    console.log("ppppp", parent);
    var prefab = ResManager.Instance.getAsset("ui", "uiPrefabs/" + ui_name);
    var item = null;
    if (prefab) {
      console.log("prefab存在");
      item = instantiate(prefab);
      parent.addChild(item);
      item.addComponent(ui_name + "Controller");
      console.log(parent, item);
    }
    this.uiMap[ui_name] = item;
    console.log(this.uiMap);
    return item;
  }

  public remove_ui(ui_name) {
    if (this.uiMap[ui_name]) {
      this.uiMap[ui_name].removeFromParent();
      this.uiMap[ui_name] = null;
    }
  }

  public clearAll() {
    for (var key in this.uiMap) {
      if (this.uiMap[key]) {
        this.uiMap[key].removeFromParent();
        this.uiMap[key] = null;
      }
    }
  }
}
