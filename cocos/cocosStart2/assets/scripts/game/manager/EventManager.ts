import { myLog } from "../../common/MyLog";
//import { msgac } from "../data/msgac";

class EventManager {
  private static _instance: EventManager;
  private constructor() {}
  public static get instance(): EventManager {
    if (!this._instance) {
      this._instance = new EventManager();
    }
    return this._instance;
  }

  acList: any = {};

  on(ac: string | number, cb: Function, sender: any) {
    let arr = this.acList[ac];
    if (!arr) {
      arr = [];
      this.acList[ac] = arr;
    }

    // 避免重复添加
    for (let i in arr) {
      let item = arr[i];
      if (item.sender == sender) {
        return;
      }
    }

    let item: any = {};
    item.cb = cb;
    item.sender = sender;
    arr.push(item);
  }

  off(ac: string | number, cb: Function, sender: any) {
    let arr = this.acList[ac];
    if (!arr) {
      return;
    }

    let tmpArr = [];
    for (let i in arr) {
      let item = arr[i];
      if (item.cb == cb && item.sender == sender) {
        continue;
      }
      tmpArr.push(item);
    }

    this.acList[ac] = tmpArr;
  }

  offWithSender(sender: any) {
    for (let ac in this.acList) {
      let arr = this.acList[ac];

      let tmpArr = [];
      for (let i in arr) {
        let item = arr[i];
        if (item.sender == sender) {
          continue;
        }
        tmpArr.push(item);
      }

      this.acList[ac] = tmpArr;
    }
  }

  send(ac: string | number, data?: any) {
    let arr = this.acList[ac];
    if (!arr) {
      return;
    }
    let isLog = true;
    if (data && data.notMyLog) {
      isLog = false;
    }
    // if (ac == msgac.joystick) {
    //   isLog = false;
    // }
    // if (isLog) {
    //   let key = msgac.ac2KeyObj[ac];
    //   myLog.i(key, data);
    // }
    try {
      for (let i in arr) {
        let item = arr[i];
        let cb = item.cb;
        let sender = item.sender;
        let info = {
          ac: ac,
          data: data,
        };
        cb.call(sender, info);
      }
    } catch (err) {
      myLog.e("eventManager send error:" + err.message, ac, data, err);
    }
  }
}

export const eventManager = EventManager.instance;
