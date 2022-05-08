// webpack-dev-server
// dev环境的source-map
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
    hot: 'only'
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'VueApp': JSON.stringify('devApp')
    }),
    // 以前在webpack或webpack-dev-server中配置--hot，就不需要配置下面的插件
    // 现在的高版本webpack都不需要了
    // new webpack.HotModuleReplacementPlugin()
    new ESLintPlugin({
      fix: true
    })
  ]
})