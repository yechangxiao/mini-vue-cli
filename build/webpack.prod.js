// prod环境下的source-map
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'VueApp': JSON.stringify('prodApp') // 注入变量，在不同环境进行不同操作时很有用
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 去除console
          }
        }
      })
    ]
  }
})