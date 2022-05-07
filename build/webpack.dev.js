// webpack-dev-server
// dev环境的source-map
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 9000,
    open: true
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'VueApp': JSON.stringify('devApp')
    })
  ]
})