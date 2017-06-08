var browserSync = require('browser-sync');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.middleware');

var server = browserSync.create();
var compiler = webpack(webpackConfig);

server.init({
    server: {
        baseDir: __dirname,
        middleware: [
            webpackDevMiddleware(compiler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {
                    colors: true
                }
            }),
            webpackHotMiddleware(compiler)
        ]
    },
    open: false
});