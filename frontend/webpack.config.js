const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map"
}
