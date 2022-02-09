module.exports = function (content) {
  console.log(content, "哈哈哈，这是我的loader02");
  return content + 456;
};

// PitchLoader
module.exports.pitch = function() {
  console.log("loader pitch02");
}