module.exports = {
    presets: [
        ['@babel/preset-env', {
            // false 不使用
            // usage 按需
            // entry 全部使用
            useBuiltIns: 'usage',
            corejs: 3
        }],
        ['@babel/preset-react']
    ]
}