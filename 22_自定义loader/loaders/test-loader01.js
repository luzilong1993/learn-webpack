const { validate } = require("schema-utils");
const schema = require("../schema/loader01-schema.json");

// normalLoader
// 异步loader:this.async()
module.exports = function (content) {
  console.log(content, "哈哈哈，这是我的loader01");
  //   获取传入的参数
  const options = this.getOptions();
  console.log("传入的参数是", options);

  validate(schema, options);

  const callback = this.async();

  setTimeout(() => {
    callback(null, content);
  }, 2000);
  //   return content + 456;
};

// 同步loader
// module.exports = function (content) {
//     console.log(content, "哈哈哈，这是我的loader01");

//     setTimeout(() => {
//       this.callback(null, content);
//     }, 2000);
//     //   return content + 456;
//   };

// PitchLoader
module.exports.pitch = function () {
  console.log("loader pitch01");
};
