import { JsonAsset } from "cc";
import { constants } from "../data/constants";
import { resManager } from "./ResManager";

class DesignManager {
  private static _instance: DesignManager;
  private constructor() {}
  public static get instance(): DesignManager {
    if (!this._instance) {
      this._instance = new DesignManager();
    }
    return this._instance;
  }

  // 原始对象 {表名:[记录1]]}
  private tb2Arr: object = {};
  // id索引(唯一)对象 {表名:{id:记录}}
  private tb2Obj: object = {};
  // type索引(一对多) {表名:{type:[记录]}
  private tbType2Arr: object = {};

  // 零散数据表
  public config: any = {};

  loadAllDesignTable(onProgress?: Function, onComplete?: Function) {
    resManager.loadAsset(
      constants.bundles.design,
      "design",
      JsonAsset,
      (percent: number) => {
        if (onProgress) {
          onProgress(percent);
        }
      },
      (err, asset) => {
        if (err) {
          return;
        }
        this.tb2Arr = asset.json;

        // 数据格式化
        for (let tbName in this.tb2Arr) {
          let tbData = this.tb2Arr[tbName];
          this.initTable(tbName, tbData);
        }

        // 释放资源
        resManager.releaseAsset(asset);

        if (onComplete) {
          onComplete();
        }
      }
    );
  }

  initTable(tbName: string, tbData: object) {
    this.tb2Obj[tbName] = {};
    for (let i in tbData) {
      let row = tbData[i];
      // id索引
      this.tb2Obj[tbName][row.id] = row;
      if (row.hasOwnProperty("type") && row.type != "" && row.type != null) {
        // type索引
        if (!this.tbType2Arr[tbName]) {
          this.tbType2Arr[tbName] = {};
        }
        if (!this.tbType2Arr[tbName][row.type]) {
          this.tbType2Arr[tbName][row.type] = [];
        }
        let tmpArr = this.tbType2Arr[tbName][row.type];
        tmpArr.push(row);
      }
      if (tbName == "config") {
        this.config[row.name] = row.val || row.val2;
      }
    }
  }

  getTable(tableName: string) {
    return this.tb2Arr[tableName];
  }

  getRowById(tableName: string, id: number) {
    return this.tb2Obj[tableName][id];
  }

  getRowsByType(tableName: string, type: number | string) {
    if (this.tbType2Arr[tableName] && this.tbType2Arr[tableName][type]) {
      return this.tbType2Arr[tableName][type];
    }
    return [];
  }

  getLastRow(tableName: string) {
    let tb = this.getTable(tableName);
    return tb[tb.length - 1];
  }

  getFirstIdByType(type: number) {
    return type * 10 + 1;
  }
}

export const designManager = DesignManager.instance;
