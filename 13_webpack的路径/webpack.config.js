const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    // publicPath: "/abc",
  },
  devServer: {
    hot: true,
    port: 9000,
    open: true,
    compress: true,
    historyApiFallback: true,
    // static: {
    //   publicPath: "/abc",
    // },
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
