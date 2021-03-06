var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'awesome-typescript-loader'
        }],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        publicPath: '/dist'
    },
    devServer: {
        contentBase: __dirname
    },
    devtool: 'source-map'
};
