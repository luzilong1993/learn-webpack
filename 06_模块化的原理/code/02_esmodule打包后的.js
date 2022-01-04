
// 1.定义了一个对象，对象里面放的是模块映射

var __webpack_modules__ = ({

  "./src/js/math.js":

    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

      __webpack_require__.r(__webpack_exports__);
      // 调用了d函数：给exports设置了一个代理definition
      // exports本身没有对应的函数的
      __webpack_require__.d(__webpack_exports__, {
        "add": function () { return add; },
        "mul": function () { return mul; }
      });
      const add = (num1, num2) => {
        return num1 + num2;
      }


      const mul = (num1, num2) => {
        return num1 * num2;
      }

    })

});

// 2.模块的缓存

var __webpack_module_cache__ = {};

// 3.require函数的实现（加载模块）
function __webpack_require__(moduleId) {

  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }

  var module = __webpack_module_cache__[moduleId] = {

    exports: {}
  };


  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);


  return module.exports;
}



!function () {

  // 给__webpack_require__这个函数对象添加了一个属性d -> function
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
}();


!function () {
  // 给__webpack_require__这个函数对象添加了一个属性o -> function
  __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();


!function () {

  // 给__webpack_require__这个函数对象添加了一个属性r -> function
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
}();


var __webpack_exports__ = {};

!function () {

  // 调用r的目的是记录一个__esModule:true
  __webpack_require__.r(__webpack_exports__);

  // _js_math__WEBPACK_IMPORTED_MODULE_0__ == exports
  var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");


  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.add)(10, 20));
  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30));
}();

;
//# sourceMappingURL=bundle.js.map