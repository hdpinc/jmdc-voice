const PATH = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  mode: process.env.NODE_ENV,
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
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    new RemoveEmptyScriptsPlugin(),
  ],
};
