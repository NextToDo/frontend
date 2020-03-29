import * as path from 'path';
import * as webpack from 'webpack';
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config: webpack.Configuration = {
  mode: "development", // "production" | "development" | "none"
  entry: {
    main: './src/index.tsx',
    playground: './src/playground.tsx'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html' },
      { from: 'src/playground.html' },
    ]),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      }
    ]
  },
  resolve: { 
    alias: { 
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      // Must be below test-utils
      "react-dom": "preact/compat",
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 4000
  }
}

export default config;
