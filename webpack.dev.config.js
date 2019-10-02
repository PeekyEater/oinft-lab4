const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        side: './src/js/side-pages.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: ''
    },
    devServer: {
        contentBase: './public'
    },
    mode: 'development',
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
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
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
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
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
