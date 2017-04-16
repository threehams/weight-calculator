import path = require('path');
import express = require('express');
import webpack = require('webpack');
import compression = require('compression');
import fs = require('mz/fs');

import indexTemplate from './indexTemplate';
import config from './serverConfig';
import webpackConfig from './webpack.config';

let script: string;

const app = express();

if (config.development) {
  // tslint:disable
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  // tslint:enable

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { chunks: false },
  }));
  app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(compression());
  app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
  app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
  script = fs.readFileSync(path.join('dist', 'bundle.js'), 'utf8');
}

app.get('*', (request, response) => {
  response.send(indexTemplate(script));
});

app.listen(config.port || 8080, (err: Error) => {
  if (err) {
    // tslint:disable
    console.log(err);
    // tslint:enable
    return;
  }

  // tslint:disable
  console.log('Listening at http://localhost, port', config.port);
  // tslint:eisable
});
