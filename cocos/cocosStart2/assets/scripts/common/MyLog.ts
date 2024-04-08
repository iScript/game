class MyLog {
  private static _instance: MyLog;
  private constructor() {}
  public static get instance(): MyLog {
    if (!this._instance) {
      this._instance = new MyLog();
    }
    return this._instance;
  }

  isOpen: boolean = true;

  public i(...params: any[]) {
    if (!this.isOpen) {
      return;
    }
    params.unshift(new Date().toLocaleTimeString());
    console.info.apply(console, params);
  }

  public w(...params: any[]) {
    if (!this.isOpen) {
      return;
    }
    params.unshift(new Date().toLocaleTimeString());
    console.warn.apply(console, params);
  }

  public e(...params: any[]) {
    params.unshift(new Date().toLocaleTimeString());
    console.error.apply(console, params);
  }
}

export const myLog = MyLog.instance;
