var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            'webpack-hot-middleware/client?reload=true',
            './src/main.ts'
        ]
    },
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
};
