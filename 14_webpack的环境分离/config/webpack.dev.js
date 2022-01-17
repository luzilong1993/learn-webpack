module.exports = {
    mode: "development",
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
}