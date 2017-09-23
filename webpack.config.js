const webpack = require('webpack');
const path    = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    
    entry: './src/index.js',
    
     plugins: [
    //   new HtmlWebpackPlugin({
    //       title: 'hi discovery',
    //   }),
//     //   new ExtractTextPlugin({
//     //       filename:'app.css',
//     //       disabled: false,
//     //       allChunk: true
//     //   })
     ],
    output: {
        path: path.resolve(__dirname + '/dist/js'),
        filename: 'app.bundle.js'
    },
    
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
//             // {
//             //     test:/\.scss$/, 
//             //     use: ExtractTextPlugin.extract({
//             //         fallback: 'style-loader',
//             //         use: ['css-loader','sass-loader']
//             //     })
//             // }
        ]
    }
 };

module.exports = config;