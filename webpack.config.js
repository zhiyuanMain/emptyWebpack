var webpack = require('webpack'),
    path = require('path');
module.exports = {
    devTool: 'eval-source-map',
    entry: __dirname + '/assets/js/main.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    }
}