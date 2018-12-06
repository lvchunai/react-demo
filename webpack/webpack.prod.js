const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.js');
module.exports = merge(baseConfig, {
    devtool: 'source-map',
    mode: 'production',
    output: {
      filename: 'js/[name]-[hash:8].bundle.js',
      path: path.resolve(__dirname, '../nginx-1.12.2/html/build/static/app'),
      // publicPath: path.resolve(__dirname, '../build/static/app'),
      chunkFilename: 'js/[name]-[chunkhash:8].chunk.js'
    },
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new CleanWebpackPlugin(['build'], {
        root: path.resolve(__dirname, '../'),
        verbose: true,
        watch: false
      })
    ],
});