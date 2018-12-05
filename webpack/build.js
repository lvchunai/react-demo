const webpack = require('webpack');
const webpackConfig = require('./webpack.conf.base.js');
const {Server} = require('http'); 
const compiler = webpack(webpackConfig);
const watching = compiler.watch({
  /* watchOptions */
}, (err, stats) => {
  // Print watch/build result here...
  console.log(Server);
  console.log('我一直在监视着呢');
  Server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
  });
});


// const webpack = require('webpack');

// const config = require('./webpack/webpack.conf.dev.js');

// webpackDevServer.addDevServerEntrypoints(config, options);
// const compiler = webpack(config);
