/**
 * @Author: Arsan Gamal <arsangamal>
 * @Date:   2018-09-05T15:40:05+02:00
 * @Email:  arsan.gamal@gmail.com
 * @Filename: webpack.config.js
 * @Last modified by:   arsangamal
 * @Last modified time: 2018-09-05T16:18:29+02:00
 */
// load modules
const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//webpack export
//
module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "fortext.js"
    },
    module: {
        rules: [{
            test: /\.js?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}
