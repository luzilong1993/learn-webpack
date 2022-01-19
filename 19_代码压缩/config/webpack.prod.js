const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const glob = require("glob");
const resolveApp = require("./paths");

const isProduction = true;

module.exports = {
  mode: "development",
  // 忽略打包的库
  externals: {
    lodash: "_",
    dayjs: "dayjs",
  },
  optimization: {
    // 标注哪些未使用，要结合terser
    usedExports: true,
    minimize: true,
    minimizer: [
      // 由Terser将未使用的函数, 从我们的代码中删除
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: true,
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
    }),
    new PurgeCssPlugin({
      paths: glob.sync(`${resolveApp("./src")}/**/*`, { nodir: true }),
      safelist: function () {
        return {
          standard: ["body", "html"],
        };
      },
    }),
    new CompressionPlugin({
      threshold: 0,
      test: /\.(css|js)$/i,
      minRatio: 0.8,
      algorithm: "gzip",
    }),
  ],
};
