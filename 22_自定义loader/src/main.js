import code from "./document.md";

import "./style.css";

console.log("hello webpack");

const message = "hello world";

console.log(message);

const foo = () => {
  console.log("foo");
};

foo();

document.body.innerHTML = code;
