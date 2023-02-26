// 创建一个事件中心对象
var eventCenter = {
    // 存储订阅者回调函数的列表
    list: {},
    // 添加订阅者
    on: function (event, fn) {
      // 如果没有该事件，则创建一个空数组
      if (!this.list[event]) {
        this.list[event] = [];
      }
      // 将回调函数推入数组
      this.list[event].push(fn);
    },
    // 删除订阅者
    off: function (event, fn) {
      // 如果没有该事件，则直接返回
      if (!this.list[event]) {
        return;
      }
      // 如果没有指定回调函数，则清空该事件的所有订阅者
      if (!fn) {
        this.list[event] = [];
        return;
      }
      // 遍历数组，找到并删除指定的回调函数
      var index = this.list[event].indexOf(fn);
      if (index > -1) {
        this.list[event].splice(index, 1);
      }
    },
    // 触发订阅者
    emit: function (event, ...args) {
      // 如果没有该事件，则直接返回
      if (!this.list[event]) {
        return;
      }
      // 遍历数组，依次执行每个回调函数，并传入参数
      for (var fn of this.list[event]) {
        fn.apply(this, args);
      }
    },
  };
  
  // 定义一个发布者对象（可以是任意对象）
  var publisher = {};
  
  // 定义一个订阅者对象（可以是任意对象）
  var subscriber = {};
  
  // 订阅者定义一个回调函数，用于接收发布者的消息并打印出来
  subscriber.printMessage = function (message) {
    console.log("收到消息：" + message);
  };
  
  // 订阅者通过事件中心对象注册自己的回调函数，订阅名为"message"的事件（可以是任意字符串）
  eventCenter.on("message", subscriber.printMessage);
  
  // 发布者通过事件中心对象触发名为"message"的事件，并传入一条消息作为参数（可以是任意值）
  eventCenter.emit("message", "Hello world!");
  
  // 输出：收到消息：Hello world!
  
  // 订阅者通过事件中心对象取消自己的回调函数，取消订阅名为"message"的事件（也可以不指定具体的回调函数，这样会取消所有订阅该事件的回调函数）
  eventCenter.off("message", subscriber.printMessage);
  
  // 发布者再次触发名为"message"的事件，并传入另一条消息作为参数（此时已经没有任何订阅者了）
  eventCenter.emit("message", "Goodbye world!");
  
  // 输出：无