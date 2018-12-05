const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.conf.base.js');
module.exports = merge(baseConfig, {
    devtool: 'source-map',
    mode: 'production',
    plugins: [
      new UglifyJSPlugin({
      sourceMap: true
      })
    ],
});