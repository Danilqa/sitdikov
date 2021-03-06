const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        path: path.resolve(__dirname, '../../docs')
    },
    plugins: [
        new CleanWebpackPlugin(
            'docs',
            {
                root: path.resolve(__dirname, '../../')
            }
        ),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ])
    ]
};
