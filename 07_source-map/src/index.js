// es module导出内容，commonjs导入内容

const { add, mul } = require('./js/math');

console.log(add(20,30));
console.log(mul(20,30));

// commonjs导出，es module导入内容
import {dateFormat,priceFormat} from './js/format';

console.log(dateFormat('aaa'));
console.log(priceFormat('bbbb'));
