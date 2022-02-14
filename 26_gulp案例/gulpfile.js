const { src, dest } = require("gulp");
const htmlMin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const inject = require("gulp-inject");

const htmlTask = () => {
  return src("./src/*.html", { base: "./src" })
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("./dist"));
};

const jsTask = () => {
  return src("./src/js/**.js", { base: "./src" })
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(
      terser({
        mangle: {
          toplevel: true,
        },
      })
    )
    .pipe(dest("./dist"));
};

const lessTask = () => {
  return src("./src/css/**.less", { base: "./src" })
    .pipe(less())
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(dest("./dist"));
};

const injectHtml = () => {
  return src("./dist/*.html")
    .pipe(
      inject(src(["./dist/js/*.js", "./dist/css/*.css"]), { relative: true })
    )
    .pipe(dest("./dist"));
};

module.exports = {
  htmlTask,
  jsTask,
  lessTask,
  injectHtml,
};
