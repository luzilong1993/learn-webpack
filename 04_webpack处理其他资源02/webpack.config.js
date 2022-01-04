const path = require('path');

const destPath = path.resolve(__dirname, './build');

module.exports = {
    entry: './src/main.js',
    output: {
        publicPath: './build/',
        filename: 'bundle.js',
        path: destPath,
        // assetModuleFilename: 'images/[name].[hash:6][ext]'  //第一种方式
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
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
            {

                test: /\.(png|jpe?g|gif|svg)$/,

                // type: 'asset/resource', // file-loader效果
                // type: 'asset/inline', // url-loader效果

                type: 'asset',
                // 第二种配置  推荐
                // inline 不生成
                generator: {
                    filename: 'img/[name].[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }
            },
            // 字体配置
            {
                test: /\.(ttf|eot|woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:6][ext]'
                }
            }

        ]
    },
    
}