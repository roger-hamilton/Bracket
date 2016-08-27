/* eslint-disable no-console */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true, chunks: false },
});

server.listen(3000, 'localhost', err => { // eslint-disable-line consistent-return
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
