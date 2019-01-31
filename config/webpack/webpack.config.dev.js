const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        path.join(__dirname, '../../src/index.ts')
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../../dist'),
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
};
