
// 定义了一个对象
// 模块的路径:
// key(模块路径):value(函数)
  var __webpack_modules__ = {

    "./src/js/format.js":

      (function (module) {

        const dateFormat = (date) => {
          return '2021-10-12'
        }

        const priceFormat = (price) => {
          return '100.00'
        }

        // 将我们要导出的变量，放入到module对象中的exports对象
        module.exports = {
          dateFormat,
          priceFormat
        }


      })

  }

  // 定义一个对象作为加载模块的缓存
  var __webpack_module_cache__ = {};

  // 是一个函数，当我们准备加载一个模块时，都通过这个函数加载
  function __webpack_require__(moduleId) {
    // 1.判断缓存中是否加载过
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // 2.给module变量和__webpack_module_cache__[moduleId]赋值了同一个对象
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    };

    // 3.加载执行模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // 4.导出module.exports
    return module.exports;
  }

  /************************************************************************/
  var __webpack_exports__ = {};



  // 立即执行函数
  // 具体开始执行代码逻辑
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {

    // 1.

    const { dateFormat, priceFormat } = __webpack_require__(/*! ./js/format */ "./src/js/format.js");

    console.log(dateFormat('abc'));
    console.log(priceFormat('abc'));

  }();

  ;
//# sourceMappingURL=bundle.js.map