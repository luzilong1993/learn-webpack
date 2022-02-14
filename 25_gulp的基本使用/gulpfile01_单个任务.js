// 定义任务
const foo = (cb) => {
  console.log("foo");
  cb();
};

module.exports = {
  foo,
};

// 默认任务
module.exports.default = (cb) => {
  console.log("default task");
  cb();
};
