const path = require('path');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    entry: './src/main.js',//入口
    output: { //出口
        publicPath: './build/',
        filename: 'bundle.js',
        path: destPath, //path必须为绝对路径
        // assetModuleFilename: 'images/[hash][ext][query]'
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
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            // 推荐使用
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/,
            //     type: 'asset/resource'
            // }

            // 以前方式 file-loader和url-loader
            
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/,
            //     use:[
            //         {
            //             loader: 'file-loader',
            //             options:{
            //                 esModule: false
            //             }
            //         }
            //     ],
            //     type: 'javascript/auto'
            // }
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'img',
                            esModule: false
                        }
                    }
                ],
                type: 'javascript/auto'
            }
        ]
    }
}