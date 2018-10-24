const merge = require('webpack-merge');

const { paths } = require('./webpack.constants.config');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  devServer: {
    contentBase: paths.BUILD,
    port: '3001',
  },
  devtool: 'inline-source-map',
  mode: 'development',
});
