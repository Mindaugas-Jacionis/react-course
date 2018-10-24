const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { paths } = require('./webpack.constants.config');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new UglifyJsPlugin({ parallel: true, sourceMap: true }),
    ],
  },
  devtool: 'source-map',
  mode: 'production',
  plugins: [new CleanWebpackPlugin(paths.BUILD)],
});
