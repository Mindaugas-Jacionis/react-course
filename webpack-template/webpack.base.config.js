const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { paths } = require('./webpack.constants.config');

const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    filename: '[hash].bundle.js',
    path: paths.BUILD,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelrc,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].bundle.css',
    }),
    new CopyWebpackPlugin([
      {
        from: paths.PUBLIC,
        to: paths.BUILD,
        ignore: ['index.html'],
      },
    ]),
  ],
};
