const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

function pathResolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  cache: {
    type: 'filesystem'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: pathResolve('src'),
        use: [
          {
            loader: 'babel-loader', // 开启多进程打包
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: ['style-loader', 'cache-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg|svg)$/,
        use: 'url-loader?esModule=false&limit=500&name=imgs/[hash:8]-[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          esModule: false
        }
      }
    ],
    noParse: /jquery|loadsh/
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }) //JS或者CSS文件可以自动引入到html中
  ],
  resolve: {
    extensions: ['.js', '.css', '.vue'], //配置后缀名
    alias: {
      '@': pathResolve('src'),
      page: pathResolve('src/page')
    },
    modules: ['node_modules', pathResolve('src')]
  },
  externals: {
    jquery: 'jQuery'
  },
  optimization: {
    minimize: true, // 开启后会在开发环境生效
    minimizer: [
      // 添加 css 压缩配置
      new CssMinimizerPlugin(),
      new TerserPlugin({})
    ]
  },
  devServer: {
    port: 8100,
    hot: true,
    open: false,
    static: {
      directory: path.join(__dirname, './'),
      watch: true
    }
  }
}
