/**
 * 拓展String.format方法
 * 需要在cc.d.ts中添加以下声明代码，使用过程中才会有提示，并且不会报错
declare interface String {
    format(...agrs: any[]): string;
    parseColor();
}
 */
String.prototype.format = function () {
  let str = this;
  for (let i in arguments) {
    str = str.replace(/\%\w/, arguments[i]);
  }
  return str;
};
// // 错误提示去不掉，暂时不用了
// Object.defineProperty(Array.prototype, "sortArr", {
//     value: function (compareFunc: Function) {
//         let arr = this;
//         if (arr.length <= 1) {
//             return;
//         }
//         for (let i = 0; i < arr.length - 1; i++) {
//             for (let j = i + 1; j < arr.length; j++) {
//                 let item1 = arr[i];
//                 let item2 = arr[j];
//                 if (compareFunc(item1, item2)) {
//                     arr[i] = item2;
//                     arr[j] = item1;
//                 }
//             }
//         }
//     }
// });

export const utilTools = {
  getRandomSign() {
    return Math.random() > 0.5 ? 1 : -1;
  },

  // 角度值与弧度制之间的转换
  radianToAngle(radian: number) {
    return (radian / Math.PI) * 180;
  },
  angleToRadian(angle: number) {
    return (angle / 180) * Math.PI;
  },

  // 性能最好的数组遍历方式
  forArr(arr: any, cb: Function) {
    let len = arr.length;
    if (len <= 0) {
      return;
    }
    for (let i = 0; i < len; i++) {
      let info = arr[i];
      if (info == undefined) {
        continue;
      }
      let ret = cb(info, i);
      if (ret) {
        break;
      }
    }
  },

  /**
   * 模仿async.waterfall写得，按顺序执行各个方法
   * @param taskArr 要顺序执行的方法数组
   * @param callback 执行结果回调
   */
  waterfall(taskArr: any, callback?: any) {
    if (!callback) {
      callback = function () {};
    }
    if (!Array.isArray(taskArr) || taskArr.length <= 0) {
      callback("taskArr is null");
      return;
    }
    let taskIndex = 0;
    let result = {};
    let loadNextTask = function () {
      let task = taskArr[taskIndex];
      if (task) {
        task(result, function (err) {
          if (err) {
            callback(err, null);
            return;
          }
          taskIndex++;
          loadNextTask();
        });
        return;
      }
      callback(null, result);
    };
    loadNextTask();
  },

  // 数字转化为百分比显示
  valToPercent(val: number, fixNum?: number) {
    // 保证舍去不显示的那部分
    val = Math.floor(val * 10000);
    val = val / 10000;

    if (fixNum == undefined) {
      fixNum = 2;
    }
    let ret = (val * 100).toFixed(fixNum) + "%";

    return ret;
  },

  /**
   * 获取如下格式的时间
   * 05:00:56
   * @param d 单位：豪秒
   * @param isM 是否强制只显示到分
   * @returns {string}
   */
  getTimeStr(d: number, isM?: boolean) {
    var ret = "";
    if (d < 0) {
      d = 0;
    }

    d = d / 1000;
    var hours = Math.floor(d / 3600);
    var mins = Math.floor((d - hours * 3600) / 60);
    var seconds = Math.floor(d - hours * 3600 - mins * 60);

    if (isM) {
      mins = mins + hours * 60;
    } else {
      if (hours >= 10) {
        ret = ret + hours + ":";
      } else {
        ret = ret + "0" + hours + ":";
      }
    }

    if (mins >= 10) {
      ret = ret + mins + ":";
    } else {
      ret = ret + "0" + mins + ":";
    }
    if (seconds >= 10) {
      ret = ret + seconds;
    } else {
      ret = ret + "0" + seconds;
    }

    return ret;
  },

  /**
   * 获取如下格式的时间
   * 05:00:56
   * @param d 单位：豪秒
   * @param isM 是否强制只显示到分
   * @returns {string}
   */
  getTimeStrChinese(d: number, isSce = true, isM = true, isHour = true) {
    var ret = "";
    if (d < 0) {
      d = 0;
    }

    d = d / 1000;
    var hours = Math.floor(d / 3600);
    var mins = Math.floor((d - hours * 3600) / 60);
    var seconds = Math.floor(d - hours * 3600 - mins * 60);

    if (hours > 0) {
      ret = ret + hours + "时";
    }

    if (mins >= 10) {
      ret = ret + mins + "分";
    } else {
      ret = ret + "0" + mins + "分";
    }
    if (isSce) {
      if (seconds >= 10) {
        ret = ret + seconds + "秒";
      } else {
        ret = ret + "0" + seconds + "秒";
      }
    }

    return ret;
  },

  /**
   * 将对象obj中以time(不区分大小写)为结尾的key字符串值，转换为js时间对象Date
   * @param obj
   */
  timeStrToDate(obj: any) {
    if (typeof obj != "object" || obj == null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      for (let i in obj) {
        let item = obj[i];
        if (item && typeof item == "object") {
          utilTools.timeStrToDate(item);
        }
      }
    } else {
      let keyArr = Object.keys(obj);
      for (let i in keyArr) {
        let key = keyArr[i] + "";
        let val = obj[key];
        if (val && typeof val == "object") {
          utilTools.timeStrToDate(val);
          continue;
        }

        try {
          let endStr = "";
          if (key.length >= 4) {
            endStr = key.substring(key.length - 4, key.length);
            if (
              endStr.toLocaleLowerCase() == "time" &&
              val &&
              typeof val == "string"
            ) {
              obj[key] = new Date(val);
            }
          }
        } catch (e) {
          console.log("utilTools.timeStrToDate error:" + e.message, e, obj);
        }
      }
    }

    return obj;
  },

  /**
   * 数组排序
   * @param arr
   * @param compareFunc
   */
  sortArr(arr: any, compareFunc: Function) {
    if (!arr || arr.length <= 1) {
      return arr;
    }
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let item1 = arr[i];
        let item2 = arr[j];
        if (compareFunc(item1, item2)) {
          arr[i] = item2;
          arr[j] = item1;
        }
      }
    }
  },

  /**
   * 概率是否满足
   * @param val 概率值 0到1
   */
  isProb(val: number) {
    if (!val) {
      val = 0;
    }
    if (Math.random() < val) {
      return true;
    }
    return false;
  },

  /**
   * 打乱数组元素，默认不改变原有的数组，返回新的打乱后的数组
   * @param arr
   * @param isOrign true:原数组会被修改
   */
  randomArr(arr: any, isOrign: boolean = false): any {
    if (!isOrign) {
      arr = JSON.parse(JSON.stringify(arr));
    }
    let tmpArr = [];
    while (arr.length > 0) {
      let index = Math.floor(Math.random() * arr.length);
      tmpArr.push(arr[index]);
      arr.splice(index, 1);
    }
    return tmpArr;
  },

  /**
   * 返回给定范围内的随机数值,整数包括左右边界
   * @param min 最小值
   * @param max 最大值
   * @param isInt 是否整数化
   * @returns {number}
   */
  getFloatValue(min: number, max: number, isInt?: boolean) {
    let dv = max - min;
    if (dv == 0) {
      return min;
    }
    if (dv < 0) {
      return 0;
    }
    if (isInt) {
      let val = min + Math.floor(Math.random() * (dv + 1));
      return val;
    }

    let val = min + Math.random() * dv;
    return val;
  },

  // 跨天判断
  overDay(date: any, now?: any) {
    if (!date) {
      return true;
    }

    if (!now) {
      now = new Date();
    }
    let overDay = false;
    if (date.getDate() == now.getDate()) {
      if (now.getTime() - date.getTime() >= 24 * 60 * 60 * 1000) {
        overDay = true;
      }
    } else {
      overDay = true;
    }

    return overDay;
  },

  /**
   * 根据权重从数组中返回指定的个数元素
   * @param arr 数组
   * @param num 返回个数
   * @param canRepeat 是否可以重复取，默认不可以
   * @returns {Array} 返回结果数组
   */
  getRowsByWeightAndNum(arr: any, num: number, canRepeat?: boolean) {
    if (!num) {
      num = 1;
    }
    var ret = [];
    arr = utilTools.copyObj(arr);
    for (var i = 0; i < num; i++) {
      if (arr.length <= 0) {
        break;
      }
      var row = this.getRowByWeight(arr);
      ret.push(row);
      if (!canRepeat) {
        var index = arr.indexOf(row);
        arr.splice(index, 1);
      }
    }
    return ret;
  },

  /**
   * 根据权重从数组中返回一个元素
   * @param arr
   * @param totalWeight
   */
  getRowByWeight(arr: any, totalWeight?: number) {
    if (!totalWeight) {
      totalWeight = 0;
      for (var i in arr) {
        var weight = arr[i].weight;
        if (!weight) {
          weight = 0;
        }
        totalWeight += weight;
      }
    }
    var random = Math.random() * totalWeight;
    var left = 0;
    var row = null;
    for (var i in arr) {
      var tmpRow = arr[i];
      var weight = tmpRow.weight;
      if (!weight) {
        weight = 0;
      }
      if (random >= left && random < left + weight) {
        row = tmpRow;
        break;
      }
      left += weight;
    }

    return row;
  },

  /**
   * 从给定的数组中，随机取出一个元素
   * @param arr 数组
   * @param isRemove 是否将该元素从数组中移除
   * @return {null|*} 返回随机到的元素
   */
  getRandomItemByArr(arr: any, isRemove: boolean = false) {
    if (!arr || arr.length <= 0) {
      return null;
    }
    let index = Math.floor(Math.random() * arr.length);
    let item = arr[index];
    if (isRemove) {
      arr.splice(index, 1);
    }

    return item;
  },

  /**
   * 深度拷贝对象
   * @param obj 要拷贝的对象内容
   */
  copyObj(obj: object) {
    return JSON.parse(JSON.stringify(obj));
  },
};
