const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook,
} = require("tapable");

const { AsyncSeriesHook, AsyncParallelHook } = require("tapable");

let counter = 0;
class LearnTapable {
  constructor() {
    this.hooks = {
      //   syncHook: new SyncHook(["name", "age"]),
      // bail:在某一个事件监听的函数中，如果有返回值，那么后续的监听事件就不会执行了
      //   syncHook: new SyncBailHook(["name", "age"]),
      //   loop: 在某一个事件监听的函数中，如果返回为true，那么这个回调函数就会循环执行，(返回为undefined或者不返回，就停止执行）
      //   syncHook: new SyncLoopHook(["name", "age"]),
      // Waterfall: 在某一个事件监听的函数中，如果有返回值，返回值作为下一次事件监听函数的第一个参数
      syncHook: new SyncWaterfallHook(["name", "age"]),

      //   series:在一个hooks中，监听了两次事件（两个回调函数），这两个回调函数是串行执行
      asyncSerieshook: new AsyncSeriesHook(["name", "age"]),

      //   parallel: 并行执行
      asyncParallelHook: new AsyncParallelHook(["name", "age"]),
    };

    // 注册事件
    // this.hooks.syncHook.tap("event1", (name, age) => {
    //   if (counter++ < 3) {
    //     console.log("event1", name, age, counter);
    //     return true;
    //   }
    // });

    // this.hooks.syncHook.tap("event1", (name, age) => {
    //   console.log("event1", name, age);
    //   return "event1";
    // });

    // this.hooks.syncHook.tap("event2", (name, age) => {
    //   console.log("event2", name, age);
    // });

    this.hooks.asyncSerieshook.tapAsync("event1", (name, age, callback) => {
      setTimeout(() => {
        console.log("event1", name, age);
        callback();
      }, 2000);
    });

    this.hooks.asyncSerieshook.tapAsync("event2", (name, age, callback) => {
      setTimeout(() => {
        console.log("event2", name, age);
        callback();
      }, 2000);
    });

    this.hooks.asyncParallelHook.tapAsync("event1", (name, age, callback) => {
      setTimeout(() => {
        console.log("event1", name, age);
        callback();
      }, 2000);
    });

    this.hooks.asyncParallelHook.tapAsync("event2", (name, age, callback) => {
      setTimeout(() => {
        console.log("event2", name, age);
        callback();
      }, 2000);
    });

    this.hooks.asyncParallelHook.tapPromise("event1", (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("event1", name, age);
          resolve();
        }, 2000);
      });
    });
  }

  emit() {
    // this.hooks.syncHook.call("why", 18);
    // this.hooks.syncHook.call("kobe", 30);

    // this.hooks.asyncSerieshook.callAsync("kobe", 30, () => {
    //   console.log("第一次回调事件监听完成");
    // });

    // this.hooks.asyncParallelHook.callAsync("kobe", 30, () => {
    //   console.log("第一次回调事件监听完成");
    // });

    this.hooks.asyncParallelHook.promise("james", 33).then(() => {
        console.log("事件监听完成");
    });
  }
}

const lt = new LearnTapable();
lt.emit();
