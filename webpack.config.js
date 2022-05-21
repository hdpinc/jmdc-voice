const PATH = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
  },
  devServer: {
    static: {
      directory: PATH.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")({ grid: true })],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackPlugin({
      filename: "./archive.html",
      template: "./src/archive.html",
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackPlugin({
      filename: "./entry.html",
      template: "./src/entry.html",
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    new RemoveEmptyScriptsPlugin(),
  ],
};
