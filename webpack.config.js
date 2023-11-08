const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development";
const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new MiniCssExtractPlugin(),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  plugins: plugins,

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
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
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
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
    hot: true,
  },

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
