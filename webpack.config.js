require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('./style/style.css');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/source/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const processHTMLPages = require('./processHTMLHelper.js');
const pages = processHTMLPages();
pages.shift();
const plugins = [
  HTMLWebpackPluginConfig,
  extractCSS,
  new ExtractTextPlugin('styles.scss'),
].concat(pages);

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './source/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css', 'sass']),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
  },
  devServer: {
    contentBase: './build',
  },
  plugins,
};
