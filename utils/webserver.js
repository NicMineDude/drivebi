// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.ASSET_PATH = '/';

const fs = require('fs');

var WebpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack'),
  config = require('../webpack.config'),
  env = require('./env'),
  path = require('path');

var options = config.chromeExtensionBoilerplate || {};
var excludeEntriesToHotReload = options.notHotReload || [];

for (var entryName in config.entry) {
  console.log(entryName);
  if (
    excludeEntriesToHotReload.indexOf(entryName) === -1 &&
    entryName !== 'popup'
  ) {
    config.entry[entryName] = [
      'webpack/hot/dev-server',
      `webpack-dev-server/client?hot=true&hostname=localhost&port=${env.PORT}`,
    ].concat(config.entry[entryName]);
  }
}

delete config.chromeExtensionBoilerplate;

var compiler = webpack(config);

var server = new WebpackDevServer(
  {
    https: {
      key: fs.readFileSync(
        path.join(__dirname, '../certs/localhost+2-key.pem')
      ),
      cert: fs.readFileSync(path.join(__dirname, '../certs/localhost+2.pem')),
    },
    hot: true,
    liveReload: false,
    client: {
      webSocketTransport: 'sockjs',
    },
    webSocketServer: 'sockjs',
    host: 'localhost',
    port: env.PORT,
    static: {
      directory: path.join(__dirname, '../build'),
    },
    devMiddleware: {
      publicPath: `https://localhost:${env.PORT}/`,
      writeToDisk: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'all',
  },
  compiler
);

(async () => {
  await server.start();
})();
