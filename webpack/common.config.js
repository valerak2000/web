const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const devMode = process.env.NODE_ENV === 'development';

const PATHS = {
    app: path.join(__dirname, '../src/static'),
    build: path.join(__dirname, '../src/static_dist'),
};

const VENDOR = [
    'babel-polyfill',
    'history',
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-mixin',
    'classnames',
    'redux',
    'react-router-redux',
    'jquery',
    'bootstrap-loader',
    //'font-awesome-webpack!./styles/font-awesome.config.prod.js',
    'material-ui'
];

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
        modules: ['node_modules']
    },
    context: path.resolve(__dirname, '../src/static/'),
    entry: {
        vendor: VENDOR,
        app: PATHS.app
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            /*{
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },*/
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                    //'postcss-loader'
                    /*{
                        loader: 'sass-loader',
                        options: {
                            data: `@import "/${__dirname}/../src/static/styles/config/_variables.scss";`
                        }
                    }*/
                ]
            },
            {
                rules: [
                    {
                        test: /\.less$/,
                        use: [
                            devMode ? 'style-loader' : ExtractCssChunks.loader,
                            'css-loader', // translates CSS into CommonJS
                            'postcss-loader',
                            'less-loader' // compiles Less to CSS
                        ]
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: ['file-loader?name=images/[name].[ext]?[hash]', 'img-loader']
            },
            {
                test: /\.(svg)$/i,
                use: ['url-loader?mimetype=images/svg+xml', 'img-loader']
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=/fonts/[name].[ext]'
            },
            {
                test: /\.otf(\?.*)?$/,
                loader: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
            },
            {
                test: /\.svg(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.json(\?.*)?$/,
                loader: 'file-loader?name=/files/[name].[ext]'
            },
            {
                test: /\.pdf(\?.*)?$/,
                loader: 'file-loader?name=/files/[name].[ext]'
            },
            //copy Web config file to dist folder
            {
                test: /web.config/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: PATHS.build,
        publicPath: '/static'
    },
    plugins: [
        new ExtractCssChunks({
            hot: devMode
        }),
        new HtmlWebpackPlugin({
            //template: path.join(__dirname, '../src/static/index.html.ejs'),
            template: 'index.html.ejs',
            //hash: true,
            //chunks: ['vendor', 'app'],
            //chunksSortMode: 'manual',
            favicon: 'favicon.ico'
            //inject: 'body'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
/*
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: TARGET === 'dev' ? '"development"' : '"production"' },
            '__DEVELOPMENT__': TARGET === 'dev'
        })
*/
/*
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CleanWebpackPlugin([PATHS.build], {
            root: process.cwd()
        })
*/
    ],
    externals: {
        React: 'react',
        ReactDOM: 'react-dom',
        jsdom: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react-dom/test-utils': true,
        'react-test-renderer/shallow': true
    },
    performance: {
        hints: 'warning'
    }
};
