import {
  Asset,
  assetManager,
  AssetManager,
  sp,
  SpriteFrame,
  Texture2D,
} from "cc";
import { myLog } from "../../common/MyLog";

class ResManager {
  private static _instance: ResManager;
  private constructor() {}
  public static get instance(): ResManager {
    if (!this._instance) {
      this._instance = new ResManager();
    }
    return this._instance;
  }

  /**
   * 从bundle中加载某个资源，优先使用缓存中的
   * @param bundleName bundle名称
   * @param path 资源路径
   * @param assetType 资源类型
   * @param onProgress 加载进度回调
   * @param onComplete 加载完成回调
   */
  loadAsset(
    bundleName: string,
    path: string,
    assetType: any,
    onProgress?: Function,
    onComplete?: Function
  ) {
    if (assetType == SpriteFrame) {
      path += "/spriteFrame";
    } else if (assetType == Texture2D) {
      path += "/texture";
    }
    let bundle = assetManager.getBundle(bundleName);
    if (bundle && bundle.get(path, assetType)) {
      if (onComplete) {
        onComplete(null, bundle.get(path, assetType));
      }
      return;
    }

    let loadAssetFunc = () => {
      bundle.load(
        path,
        assetType,
        (finish: number, total: number) => {
          if (onProgress) {
            onProgress(finish / total);
          }
        },
        (err, asset) => {
          if (err) {
            myLog.e(
              "ResManager.loadAsset error:" + err.message,
              "bundleName:" + bundleName,
              "path:" + path,
              err
            );
            if (onComplete) {
              onComplete(err);
            }
            return;
          }
          if (onComplete) {
            onComplete(null, asset);
          }
        }
      );
    };

    if (!bundle) {
      assetManager.loadBundle(bundleName, (err, retBundle) => {
        if (err) {
          if (onComplete) {
            onComplete(err);
          }
          return;
        }
        bundle = retBundle;
        loadAssetFunc();
      });
      return;
    }

    loadAssetFunc();
  }

  /**
   * 加载某个bundle中的批量同类型资源
   * @param bundleName bundle名称
   * @param pathArr 资源路径数组
   * @param assetType 资源类型
   * @param onProgress 进度回调
   * @param onComplete 完成回调
   */
  loadAssetByPathArr(
    bundleName: string,
    pathArr: string[],
    assetType: any,
    onProgress?: Function,
    onComplete?: Function
  ) {
    let total = pathArr.length;
    if (total <= 0) {
      if (onComplete) {
        onComplete([]);
      }
      return;
    }
    let lastPercent = 0;
    let onePercent = 1 / total;
    let assetPercents: Map<string, number> = new Map();
    let count = 0;
    let arr = [];
    for (let i = 0; i < total; i++) {
      let path = pathArr[i];
      this.loadAsset(
        bundleName,
        path,
        assetType,
        (p: number) => {
          assetPercents.set(path, p);
          if (onProgress) {
            let percent = 0;
            assetPercents.forEach((p: number) => {
              percent = percent + onePercent * p;
            });
            if (percent >= lastPercent) {
              lastPercent = percent;
              onProgress(percent);
            }
          }
        },
        (err, asset) => {
          count++;
          if (!err && asset) {
            asset.path = path;
            arr.push(asset);
          }
          if (count >= total) {
            if (onComplete) {
              onComplete(arr);
            }
          }
        }
      );
    }
  }

  /**
   * 加载bundle某个目录下的所有同类型资源
   * @param bundleName bundle名称
   * @param dir 目录
   * @param assetType 资源类型
   * @param onProgress 进度回调
   * @param onComplete 完成回调
   */
  loadAssetByBundleDir(
    bundleName: string,
    dir: string,
    assetType: any,
    onProgress?: Function,
    onComplete?: Function
  ) {
    let bundle = assetManager.getBundle(bundleName);

    let loadAssetFunc = () => {
      bundle.loadDir(
        dir,
        assetType,
        (finish: number, total: number, item: AssetManager.RequestItem) => {
          if (onProgress) {
            onProgress(finish / total, item);
          }
        },
        (err, assetArr) => {
          if (err) {
            myLog.e(
              "ResManager.loadAssetByBundleDir loadDir error:" + err.message,
              err
            );
          }
          if (onComplete) {
            onComplete(assetArr);
          }
        }
      );
    };

    if (!bundle) {
      assetManager.loadBundle(bundleName, (err, retBundle) => {
        if (err) {
          myLog.e(
            "ResManager.loadAssetByBundleDir loadBundle error:" + err.message,
            err
          );
          return;
        }
        bundle = retBundle;
        loadAssetFunc();
      });
      return;
    }

    loadAssetFunc();
  }

  /**
   * 单纯加载一批bundle
   * @param nameArr bundle名称数组
   * @param onProgress 进度回调
   * @param onComplete 完成回调
   */
  loadBundleArr(
    nameArr: string[],
    onProgress?: Function,
    onComplete?: Function
  ) {
    let total = nameArr.length;
    if (total <= 0) {
      if (onComplete) {
        onComplete();
      }
      return;
    }
    let count = 0;
    let arr = [];
    for (let i = 0; i < total; i++) {
      let bundleName = nameArr[i];
      assetManager.loadBundle(bundleName, (err, retBundle) => {
        count++;
        if (!err) {
          arr.push(retBundle);
        }
        if (count >= total) {
          if (onComplete) {
            onComplete(arr);
          }
        }
        if (onProgress) {
          onProgress(count / total);
        }
      });
    }
  }

  // 强制释放某资源
  releaseAsset(asset: Asset) {
    assetManager.releaseAsset(asset);
  }

  /**
     * 加载资源清单数组
     * @param assetConfigArr 资源清单数组
        [
            {
                bundle : "common",
                path : "",
                type : Prefab
            }
        ]
     * @param isAddRef 是否增加引用计数
     * @param onProgress 进度回调
     * @param onComplete 完成回调
     */
  loadAssetConfigArr(
    assetConfigArr: [AssetConfig],
    isAddRef: boolean = false,
    onProgress?: Function,
    onComplete?: Function
  ) {
    let total = 0;
    if (assetConfigArr && assetConfigArr.length > 0) {
      total = assetConfigArr.length;
    }
    if (total <= 0) {
      if (onComplete) {
        onComplete();
      }
      return;
    }

    let index = 0;
    let loadedAssetArr = [];
    let tmpFunc = () => {
      let asset = assetConfigArr[index];
      if (!asset) {
        // 全部加载完成
        if (onComplete) {
          onComplete(loadedAssetArr);
        }
        return;
      }
      this.loadAsset(
        asset.bundle,
        asset.path,
        asset.type,
        null,
        (error, loadedAsset) => {
          if (!error && loadedAsset) {
            loadedAssetArr.push(loadedAsset);
            if (isAddRef) {
              loadedAsset.addRef();
            }
            asset.asset = loadedAsset;
          }
          index++;
          tmpFunc();
          if (onProgress) {
            onProgress(index / total);
          }
        }
      );
    };
    tmpFunc();
  }

  loadSpriteFrame(bundleName: string, path: string, cb?: Function) {
    this.loadAsset(
      bundleName,
      path,
      SpriteFrame,
      null,
      (err, sp: SpriteFrame) => {
        if (cb) {
          cb(err, sp);
        }
      }
    );
  }

  loadSpineData(bundleName: string, path: string, cb?: Function) {
    this.loadAsset(
      bundleName,
      path,
      sp.SkeletonData,
      null,
      (err, sp: sp.SkeletonData) => {
        if (cb) {
          cb(err, sp);
        }
      }
    );
  }
}

const resManager = ResManager.instance;

class ResLoader {
  public loadedAssetArr: Asset[] = [];

  public addAsset(asset: Asset) {
    if (!asset) {
      return;
    }
    if (this.loadedAssetArr.indexOf(asset) == -1) {
      asset.addRef();
      this.loadedAssetArr.push(asset);
    }
  }

  public releaseAllAsset() {
    this.loadedAssetArr.forEach((asset: Asset) => {
      asset.decRef();
    });
    this.loadedAssetArr = [];
  }
}

class AssetConfig {
  bundle: string;
  path: string;
  type: any;
  // 加载成功后，得到的资源对象
  asset?: any;
}

export { resManager, ResLoader, AssetConfig };
