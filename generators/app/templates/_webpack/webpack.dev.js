const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [

  ]
};

module.exports = webpackMerge(
  baseConfig,
  devConfig
);