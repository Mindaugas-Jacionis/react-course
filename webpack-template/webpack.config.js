const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const BUILD = path.resolve(__dirname, 'build');
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].bundle.js',
    path: BUILD,
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new UglifyJsPlugin({ parallel: true, sourceMap: true }),
    ],
  },
  devtool: 'source-map',
  mode: 'production',
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
    new CleanWebpackPlugin(BUILD),
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
