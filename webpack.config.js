const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    
    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                      publicPath: '../'
                    }
                  },
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        // compress: true,
        port: 9000,
        open: true,
        devMiddleware: {
            writeToDisk: true,
            stats: 'errors-only'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        // new CleanWebpackPlugin()
    ],
};