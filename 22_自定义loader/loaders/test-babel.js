const babel = require("@babel/core");

module.exports = function (content) {
  const callback = this.async();

  //  1.获取传入的参数
  const options = this.getOptions();

  // 2.对结果进行转化
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
};
