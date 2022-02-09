const marked = require("marked");

module.exports = function (content) {
  const htmlContent = marked.parse(content);
  console.log(htmlContent, "marked");
  return htmlContent;
};
