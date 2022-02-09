const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "lib.js",
    // 打包出来的格式即支持amd和cmd规范
    libraryTarget: "umd",
    library: "lib",
    globalObject: "this"
  },
};
