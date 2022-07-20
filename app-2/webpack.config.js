const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { SERVER_2_PORT } = require("../constants");

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "./build"),
    publicPath: `http://localhost:${SERVER_2_PORT}/`,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./build"),
    },
    port: SERVER_2_PORT,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "homeApp",
      filename: "remote-home.js",
      exposes: {
        "./Home": "./src/pages/home.js",
      },
    }),
  ],
};
