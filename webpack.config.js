const path = require("path");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  plugins: [
    new CleanWebpackPlugin(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: "localhost",
        port: 8090,
        proxy: "http://localhost:8080",
      },
      {
        reload: true,
      },
    ),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    publicPath: "/dist",
    watchContentBase: true,
    compress: true,
  },
};
