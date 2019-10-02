const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        side: './src/js/side-pages.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './public')
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader',
                    {
                        loader: 'html-minifier-loader',
                        options: {
                            removeComments: false,
                            collapseWhitespace: true,
                            conservativeCollapse: true,
                            preserveLineBreaks: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/view/index.hbs',
            inject: true,
            chunks: ['main'],
            filename: 'index.html',
            title: 'Index',
            description: 'Kiwi'
        }),
        new HtmlWebpackPlugin({
            template: './src/view/levelsandtypes.hbs',
            inject: true,
            chunks: ['main'],
            filename: 'levelsandtypes.html',
            title: 'Levels And Types',
            description: 'Kiwi'
        }),
        new HtmlWebpackPlugin({
            template: './src/view/organizations.hbs',
            inject: true,
            chunks: ['main'],
            filename: 'organizations.html',
            title: 'Organizations',
            description: 'Kiwi'
        }),
        new HtmlWebpackPlugin({
            template: './src/view/standarts.hbs',
            inject: true,
            chunks: ['main'],
            filename: 'standarts.html',
            title: 'Standarts',
            description: 'Kiwi'
        })
    ]
};
