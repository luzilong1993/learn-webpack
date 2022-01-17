const path = require("path");

module.exports = function (env) {
  console.log('0-0-0-0-0-0',env);
  const isProduction = env.production;
  return {
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "../build"),
    },
  };
};
