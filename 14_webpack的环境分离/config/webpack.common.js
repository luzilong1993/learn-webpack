const path = require("path");

module.exports = function (env) {
  console.log('0-0-0-0-0-0',env);
  const isProduction = env.production;
  return {
    //   绝对路径
    context: '',
    // entry写上相对路径时，并不是相对于文件所在的路径，而是相对于context配置的路径
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "../build"),
    },
  };
};
