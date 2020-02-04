const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, '_dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Age Scan Showcase',
            template: path.resolve(__dirname, './src/index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]',
                                context: path.resolve(__dirname, 'src'),
                            },
                            localsConvention: 'camelCase',
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'file?name=[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                    },
                }],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    }
                },
            },
        },
    },
};
