const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { SERVER_1_PORT } = require("../constants");

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "./build"),
    publicPath: `http://localhost:${SERVER_1_PORT}/`,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./build"),
    },
    port: SERVER_1_PORT,
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
      name: "usersApp",
      filename: "remote-users.js",
      exposes: {
        "./Users": "./src/pages/users.js",
      },
    }),
  ],
};
