// import 'css-loader!../css/index.css'; // 内联方式--不推荐
import '../css/index.css';
import '../css/component.less';

function component() {
    const element = document.createElement('div');

    element.innerHTML = ['hello', 'webpack'].join(' ');
    element.className = 'content';

    // 创建一个img元素，设置src属性
    const imgEl = new Image();
    imgEl.src = require('../img/1.jpeg').default;

    element.appendChild(imgEl);

    // 创建一个div设置背景图片
    const bgElement = document.createElement('div');
    bgElement.style.width = 200 + 'px';
    bgElement.style.height = 200 + 'px';
    bgElement.className = 'bg-image';
    bgElement.style.backgroundColor = 'red';

    element.appendChild(bgElement);

    return element;
}


document.body.appendChild(component());