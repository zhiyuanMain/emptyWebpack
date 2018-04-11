const webpack = require('webpack')
const path = require('path')
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/assets/js/main.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/dist',
        contentBase: path.resolve(__dirname, ''),
        port: 8055,
        historyApiFallback: true,
        inline: true,
        open: true
    }
}