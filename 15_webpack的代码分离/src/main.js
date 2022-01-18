import _ from 'lodash';

import dayjs from 'dayjs';

import './bar_01';
import './bar_02';


console.log('hello main');

console.log(_.join(['main','index']));

console.log(dayjs(),'main');

// 只要是异步导入的代码，webpack都会代码分离

// 魔法注释
import(/* webpackChunkName:'foo' */'./foo').then(res => {
    console.log(res);
})

import(/* webpackChunkName:'foo_2' */'./foo_02').then(res => {
    console.log(res);
}) 


