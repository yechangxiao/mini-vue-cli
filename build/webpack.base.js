// 开发/生产环境公用配置
// 入口、输出配置
// 各种资源处理
// 进度条展示
// 路径别名
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const loader = require('css-loader')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressPlugin = require('progress-webpack-plugin')

module.exports = {
  target: 'web',
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/chunk-[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset/resource',
        parser: {
          // 转base64的条件
          dataUrlCondition: {
             maxSize: 5 * 1024, // 25kb
          }
        },
        generator: {
          // 打包到 dist/image 文件下
          filename: 'images/[contenthash][ext][query]',
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      // 将css代码输出到dist/styles文件夹下
      filename: '/styles/chunk-[contenthash].css',
      ignoreOrder: true,
    }),
    new VueLoaderPlugin(),
    // new ProgressPlugin(true) // 第三方的进度插件
    new webpack.ProgressPlugin( // 官方内置的进度插件
    //   {
    //   activeModules: false,
    //   entries: true,
    //   handler(percentage, message, ...args) {
    //     // custom logic
    //   },
    //   modules: true,
    //   modulesCount: 5000,
    //   profile: false,
    //   dependencies: true,
    //   dependenciesCount: 10000,
    //   percentBy: null,
    // }
    )
  ]
}