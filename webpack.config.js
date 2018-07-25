const webpack = require('webpack');
const path = require('path');

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/index.js'),
    cache: true,
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'src/html/built'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['react']
                        ]
                    }
                }]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
}

module.exports = config
