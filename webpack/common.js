const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const src = path.resolve(__dirname, '../src');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        index: './src/main.js'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        alias: {
            '@src': src,
            '@assets': '@src/assets',
            '@components': '@src/components'
        },
        extensions: ['.js', '.json', '.vue', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    src
                ]
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}