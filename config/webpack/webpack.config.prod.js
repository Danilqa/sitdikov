const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        path.join(__dirname, '../../src/index.tsx')
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../../dist')
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist')),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
};
