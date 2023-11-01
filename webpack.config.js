const path = require('path');

let mode = 'development';

if(process.env.NODE_ENV){
    mode = 'production';
}

module.exports = {
    mode: mode,

    module: {
        rules: [
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
    }
}