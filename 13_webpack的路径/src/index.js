import {} from './math'

// 通过watch监听变化

console.log('hello webpack');
console.log('hello wabpack --watch');

// 通过devserver
console.log('hello dev-server');

// 指定哪个模块启用hmr
if(module.hot) {
    module.hot.accept('./math.js',() => {
        console.log('启用了热更新');
    })
}
