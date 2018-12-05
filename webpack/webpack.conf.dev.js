const webpack = require('webpack');
const merge = require('webpack-merge');
const basicConfig = require('./webpack.conf.base');

module.exports = merge(basicConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
});

// module.exports = devConfig;