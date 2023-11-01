const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if(process.env.NODE_ENV){
    mode = 'production';
}

module.exports = {
    mode: mode,

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        compress: true,
        port: 8080,
    },

    devtool: 'source-map'
}