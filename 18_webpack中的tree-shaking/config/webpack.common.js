const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const { merge } = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const commonConfig = (isProduction) => {
  return {
    // 多入口
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: resolveApp("./build"),
      filename: "js/[name].bundle.js",
      chunkFilename: "js/[name].chunk.js",
    },

    resolve: {
      extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
      alias: {
        "@": resolveApp("./src"),
        pages: resolveApp("./src/pages"),
      },
    },
    optimization: {
      // minimizer: [
      //   new TerserPlugin({
      //     extractComments: false,
      //   }),
      // ],
      
      splitChunks: {
        // async处理异步导入
        // initial 处理同步导入
        // all 同步/异步均处理
        chunks: "all",
        // 最小值 20000为默认值，即20kb
        minSize: 20000,
        // 将大于maxSize的包，拆分成不小于minSize的包
        maxSize: 20000,
        // minChunks表示引入的包，至少被导入了几次
        minChunks: 1,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            filename: "js/[id]_vendors.js",
            // 优先级
            priority: -10,
            // reuseExistingChunk: true,
          },
          // bar: {
          //   test: /bar_/,
          //   filename: "[id]_bar.js",
          // },
          default: {
            minChunks: 2,
            filename: "common_[id].js",
            // 优先级
            priority: -20,
          },
        },
      },
      // true/multiple
      // single
      // runtimeChunk: {
      //   name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
      // },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          use: "babel-loader",
        },
        {
          test: /\.vue$/i,
          use: "vue-loader",
        },
        {
          test: /\.css/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
          sideEffects: true
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new VueLoaderPlugin(),
    ],
  };
};

module.exports = function (env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig(isProduction), config);

  return mergeConfig;
};
