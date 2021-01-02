const VueLoaderPlugin = require('vue-loader/lib/plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
        { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};