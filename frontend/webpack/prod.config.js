const merge = require('webpack-merge');
//const { resolve } = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CompressionWebpackPlugin = require('compression-webpack-plugin');
const commonConfig = require('./common.config');
const SizePlugin = require('size-plugin');

const mode = 'production';

module.exports = merge(commonConfig(mode), {
    mode,
    entry: {
      'app': './index.jsx' // the entry point of our app
    },
    devtool: 'cheap-source-map',
    optimization: {
        minimize: false,
    /*
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            name: true,
            // minSize: 307200, //300 kb
            // maxSize: 512000, //500 kb
            hidePathInfo: false,
            automaticNameDelimiter: '-',
            cacheGroups: {
                css: {
                    test: /\.(css|scss|less)$/i,
                    name: 'style',
                    reuseExistingChunk: true,
                    enforce: true,
                    priority: 101
                },
            moment: {
                test: /[\\/]moment[\\/]/,
                name: 'moment',
                reuseExistingChunk: true,
                //enforce: true,
                priority: 100
            }
        }
    }*/
        /*
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            name: true,
            // minSize: 307200, //300 kb
            // maxSize: 512000, //500 kb
            hidePathInfo: false,
            automaticNameDelimiter: '-',
            cacheGroups: {
              css: {
                test: /\.(css|scss|less)$/i,
                name: 'style',
                reuseExistingChunk: true,
                enforce: true,
                priority: 101
              },
              moment: {
                test: /[\\/]moment[\\/]/,
                name: 'moment',
                reuseExistingChunk: true,
                //enforce: true,
                priority: 100
              }
            }
        }
    */
    },
    plugins: [
      /*new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8,
    }),*/
        new SizePlugin()
    ]
});