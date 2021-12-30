const path = require('path');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    entry: './src/main.js',//入口
    output: { //出口
        filename: 'bundle.js',
        path: destPath //path必须为绝对路径
    },
    module: {
        rules: [ // 放置rule 对象
            {
                // 规则使用正则表达式匹配
                test: /\.css$/,//匹配资源
                use: [

                    //按照从下往上，从右往左开始处理loader

                    // { loader: 'css-loader' },
                    // { loader: 'style-loader' }
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}