const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    // eval-source-map source-map的值在bundle中生成
    devtool: 'source-map',//false 不生成sourcemap   eval在dev模式下不生成
    output: {
        filename: 'js/bundle.js',
        path: destPath,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // 排除
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'learn webpack',
        }),
        new DefinePlugin({
            BASE_URL: '"./"'
        }),
    ]

}