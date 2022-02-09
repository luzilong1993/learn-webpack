const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      //   {
      //     test: /\.js$/i,
      //     use: {
      //       loader: "test-loader01",
      //       options: {
      //         name: "six",
      //         age: 18,
      //         height: 1.88,
      //       },
      //     },
      //   },
      //   {
      //     test: /\.js$/i,
      //     use: "test-loader02",
      //     enforce: "pre",
      //   },
      //   {
      //     test: /\.js$/i,
      //     use: "test-loader03",
      //     enforce: "post",
      //   },

      {
        test: /\.js$/i,
        use: {
          loader: "test-babel",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.md$/i,
        use: ["html-loader", "md-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./loaders"],
  },
  plugins: [new HtmlWebpackPlugin()],
};
