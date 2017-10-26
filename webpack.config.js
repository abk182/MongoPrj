const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    devtool: "inline-source-map",
    entry: {
        js: [path.join(__dirname,'./client/main.js')]
    },
    output: {
        path: path.join(__dirname,'./public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            { test: [/\.js$/,/\.jsx$/], use: 'babel-loader', exclude: /node_modules/}
        ]
    }
    ,
    plugins: [
        new MinifyPlugin()
    ]
};