const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
  },
  devServer: {
    port: 8081,
    open: true,
    hot: true,
  },
};
