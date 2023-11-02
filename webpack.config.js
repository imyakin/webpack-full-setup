const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV) {
  mode = "production";
}

module.exports = {
  mode: mode,

  output: {
    assetModuleFilename: "images/[hash][ext][query]"
  },

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.(png|svg|jpeg|gif)/,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    hot: true,
  },

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
