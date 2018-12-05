const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');
console.log('1000000000000000000000000', process.cwd());
console.log('2000000000000000000000000', path.resolve(__dirname, '../build/static/app'));
module.exports = {
  entry: {
    home: './src/static/js/main.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../build/static/app'),
    // publicPath: path.resolve(__dirname, '../build/static/app'),
    chunkFilename: 'js/[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json', '*'],
  },
  // devServer: {
  //   port: 5000,
  //   hot: true,
  //   open: true,
  //   publicPath: '/',
  //   // index: '../../index.html',
  //   contentBase: '../build',
  // },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', "es2015", "stage-0"],
          plugins: [
            ['transform-runtime', {
              helpers: false,
              polyfill: false,
              regenerator: true, }]
          ]
        }
      }],
    }, {
      test: /\.css/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
        fallback: 'style-loader'
      })
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: { url: false }
        }, {
          loader: 'less-loader',
          options: {
            compress: true,
          }
        }],
        fallback: 'style-loader'
      })
    }, {
      test: /\.(png|jpg|gif|jpeg)(\?\S+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '/asset/images/[hash:8].[ext]',
        }
      }],
    }, {
      test: /\.(otf|eot|svg|ttf|woff|woff2)(\?\S+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '/asset/font/[hash:8].[ext]',
        }
      }],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React-demo',
      template: './src/template/home.html',
      filename: '../../index.html',
      favicon: './src/global/favicon.ico',
      minify: {
        removeComments:false,
        collapseWhitespace:false
      }
    }),
    new ExtractTextPlugin({
      filename:'styles/[name].[hash:8].css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['static', 'index.html'], {
      root: path.resolve(__dirname, '../build'),
      verbose: true,
      watch: false
    }),
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../build/static'),
    //   to: path.resolve(__dirname, '../nginx-1.12.2/html')
    // }, {
    //   from: path.resolve(__dirname, '../build/index.html'),
    //   to: path.resolve(__dirname, '../nginx-1.12.2/html')
    // }])
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          minChunks: 2,
          priority: -20,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'common'
        },
        module: {
          chunks: 'all',
          minChunks: 2,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'module'
        },
        react: {
          chunks: 'all',
          minChunks: 2,
          test: /react/,
          priority: -5,
          name: 'react'
        },
        underscore: {
          chunks: 'all',
          minChunks: 2,
          test: /underscore/,
          priority: -5,
          name: 'underscore'
        }
      }
    }
  },
  stats: {
    version: false,
    source: false,
    reasons: false,
    modules: false,
    hash: false,
    timings: false,
    chunkOrigins: false,
    cachedAssets: false,
    moduleTrace: false,
    children: false,
    chunks: false
  }
};

// module.exports = baseConfig;
