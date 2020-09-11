const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            '@components': '@src/components',
            '@common': '@components/common',
            '@style': '@src/style',
            '@utils': '@src/utils',
            '@lib': '@src/lib',
        },
        extensions: ['.js', '.json', '.vue', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
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
            },
            {
                test: /\.(svg|eot|ttf|woff)/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                loader: 'url-loader'
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
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                'manifest.json',
                'logo.png'
            ]
        })
    ]
}