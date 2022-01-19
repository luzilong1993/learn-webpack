const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "lib.js",
    libraryTarget: "umd",
    library: "lib",
    globalObject: "this"
  },
};
