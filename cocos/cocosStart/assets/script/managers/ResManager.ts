import { _decorator, Component, Node, assetManager } from "cc";

export default class ResManager extends Component {
  public static Instance: ResManager = null;

  private total: number = 0;
  private now: number = 0;

  private totalAb: number = 0;
  private nowAb: number = 0;

  private progressFunc: Function = null;
  private endFunc: Function = null;
  private abBunds = {};

  onLoad(): void {
    if (ResManager.Instance === null) {
      ResManager.Instance = this;
    } else {
      this.destroy();
      return;
    }
  }

  private loadAssetsBundle(abName: string, endFunc: Function): void {
    assetManager.loadBundle(abName, (err, bundle) => {
      if (err !== null) {
        console.log("[ResMgr]:Load AssetsBundle Error: " + abName);
        this.abBunds[abName] = null;
      } else {
        console.log("[ResMgr]:Load AssetsBundle Success: " + abName);
        this.abBunds[abName] = bundle;
      }
      if (endFunc) {
        endFunc();
      }
    });
  }

  private loadRes(abBundle, url, typeClasss): void {
    abBundle.load(url, typeClasss, (error, asset) => {
      this.now++;
      if (error) {
        console.log("load Res " + url + " error: " + error);
      } else {
        console.log("load Res " + url + " success!");
      }

      if (this.progressFunc) {
        this.progressFunc(this.now, this.total);
      }

      console.log(this.now, this.total);
      if (this.now >= this.total) {
        if (this.endFunc !== null) {
          this.endFunc();
        }
      }
    });
  }

  private loadAssetsInAssetsBundle(resPkg): void {
    for (var key in resPkg) {
      var urlSet = resPkg[key].urls;
      var typeClass = resPkg[key].assetType;

      for (var i = 0; i < urlSet.length; i++) {
        this.loadRes(this.abBunds[key], urlSet[i], typeClass);
      }
    }
  }

  // resPkg = { ab包名字: {assetType: cc.Prefab, urls: ["路径1"]}};
  preloadResPkg(resPkg, progressFunc, endFunc): void {
    // step1: 加载我们的ab包进来;
    this.total = 0;
    this.now = 0;

    this.totalAb = 0;
    this.nowAb = 0;

    this.progressFunc = progressFunc;
    this.endFunc = endFunc;

    for (var key in resPkg) {
      this.totalAb++; // 总ab包要加载的数目
      this.total += resPkg[key].urls.length; // 总资源要加载的数目
    }

    for (var key in resPkg) {
      this.loadAssetsBundle(key, () => {
        this.nowAb++;
        if (this.nowAb === this.totalAb) {
          this.loadAssetsInAssetsBundle(resPkg);
        }
      });
    }
    // end

    // step2: 根据我们单个ab包的，每个url,我们一个一个的资源加载进来;
    // end
  }

  getAsset(abName, resUrl): any {
    var bondule = assetManager.getBundle(abName);
    if (bondule === null) {
      console.log("[error]: " + abName + " AssetsBundle not loaded !!!");
      return null;
    }

    return bondule.get(resUrl);
  }
}
