module.exports = function (content) {
  console.log(content, "哈哈哈，这是我的loader03");
  return content + 456;
};

// PitchLoader
module.exports.pitch = function() {
  console.log("loader pitch03");
}