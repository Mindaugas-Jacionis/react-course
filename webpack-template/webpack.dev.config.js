const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD = path.resolve(__dirname, 'build');
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].bundle.js',
    path: BUILD,
  },
  devServer: {
    contentBase: BUILD,
    port: '3001',
  },
  devtool: 'inline-source-map',
  mode: 'development',
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
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].bundle.css',
    }),
    new CopyWebpackPlugin([
      {
        from: './public',
        to: BUILD,
        ignore: ['index.html'],
      },
    ]),
  ],
};
