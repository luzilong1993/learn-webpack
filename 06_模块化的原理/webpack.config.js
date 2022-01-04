const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'js/bundle.js',
        path: destPath,
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