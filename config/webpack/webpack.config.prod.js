const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, '../../src/index.ts')
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
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
        new CleanWebpackPlugin('dist', { root: path.resolve(__dirname, '../') }),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
};
