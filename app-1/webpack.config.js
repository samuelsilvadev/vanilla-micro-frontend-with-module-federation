const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SERVER_1_PORT } = require("../constants");

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "./build"),
    publicPath: "",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./build"),
    },
    port: SERVER_1_PORT,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
