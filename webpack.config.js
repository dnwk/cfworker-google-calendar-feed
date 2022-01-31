module.exports = {
  entry: "./src/all.js",
  mode: "production",
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "dist",
    filename: "worker.js"
  }
};
