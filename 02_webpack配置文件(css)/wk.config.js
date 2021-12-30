const path = require('path');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    entry: './src/main.js',//入口
    output: { //出口
        filename: 'dest.js',
        path: destPath //path必须为绝对路径
    }
}