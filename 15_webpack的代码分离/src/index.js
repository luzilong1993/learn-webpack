import _ from "lodash";

import dayjs from "dayjs";

// import element from "./element"; //同步导入

import "./bar_01";
console.log("hello index");

console.log(_.join(["index", "main"]));

console.log(dayjs(), "index");

const button = document.createElement("button");
button.innerHTML = "加载元素";
button.addEventListener("click", () => {
  // 异步导入
  // 可以prefetch魔法注释，空闲下载
  import(
    /* webpackChunkName:'element' */
    /* webpackPrefetch: true */
    "./element"
  ).then(({ default: element }) => {
    document.body.appendChild(element);
  });
});

document.body.appendChild(button);
