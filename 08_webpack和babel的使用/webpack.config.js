const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    mode: 'development',
    entry: './src/react_index.js',
    // eval-source-map source-map的值在bundle中生成
    devtool: 'source-map',//false 不生成sourcemap   eval在dev模式下不生成
    output: {
        filename: 'js/bundle.js',
        path: destPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // 排除
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        //     // 使用预设
                        //     presets: [
                        //         // 根据browserslistrc配置读取时  推荐
                        //         '@babel/preset-env'

                        //         // 自己适配
                        //         // [
                        //         //     '@babel/preset-env',
                        //         //     {
                        //         //         targets: ['chrome 88']
                        //         //     }
                        //         // ]
                        //     ]

                        //     // 单个自己下载安装
                        //     // plugins: [
                        //     //     '@babel/plugin-transform-arrow-functions',
                        //     //     '@babel/plugin-transform-block-scoping'
                        //     // ]
                        // }
                    }

                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'learn webpack',
            template: './src/index.html'
        }),
        new DefinePlugin({
            BASE_URL: '"./"'
        }),
    ]

}