const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { SERVER_1_PORT, SERVER_2_PORT, SERVER_3_PORT } = require("../constants");

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
    historyApiFallback: true,
    port: SERVER_3_PORT,
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
      name: "root",
      remotes: {
        users: `usersApp@http://localhost:${SERVER_1_PORT}/remote-users.js`,
        home: `homeApp@http://localhost:${SERVER_2_PORT}/remote-home.js`,
      },
    }),
  ],
};
