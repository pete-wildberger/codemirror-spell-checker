const webpack = require('webpack');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
    {   
        name: 'dev',
        mode: 'development',
        entry: {
            'spell-checker': [
                path.resolve(__dirname, './src/js/spell-checker.js'),
                path.resolve(__dirname, './src/css/spell-checker.css')
            ]
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        }
    },
    {   
        name: 'prod',
        mode: 'production',
        entry: {
            'spell-checker': [
                path.resolve(__dirname, './src/js/spell-checker.js'),
                path.resolve(__dirname, './src/css/spell-checker.css')
            ]
        },
        output: {
            filename: '[name].min.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].min.css',
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
              })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        },
        optimization: {
            minimizer: [
                new TerserJSPlugin({
                    parallel: true,
                    terserOptions: {
                        ecma: 6,
                        compress: {
                            drop_console: true
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorPluginOptions: {
                        preset: ['default', { discardComments: { removeAll: true } }]
                    },
                    canPrint: true
                })
            ],
            splitChunks: {
				chunks: 'all'
			},
			usedExports: true
        }
    }
];
