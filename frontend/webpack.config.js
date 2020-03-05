const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html' },
    ]),
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 4000
  }
}
