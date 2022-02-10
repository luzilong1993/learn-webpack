class AutoUploadPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "AutoUploadPlugin",
      (compilation, callback) => {
        console.log("内容已经上传服务器");
        callback();
      }
    );
  }
}

module.exports = AutoUploadPlugin;
