const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // eval-source-map source-map的值在bundle中生成
    devtool: 'source-map',//false 不生成sourcemap   eval在dev模式下不生成
    output: {
        filename: 'js/bundle.js',
        path: destPath,
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                // 排除
                exclude: /node_modules/,
                use: [
                    'babel-loader',

                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
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
        new VueLoaderPlugin()
    ]

}