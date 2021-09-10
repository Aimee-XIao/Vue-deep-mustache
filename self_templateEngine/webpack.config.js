const path = require('path');

module.exports = {
  // 模式： 开发模式
  mode: 'development',
  // 入口
  entry: './src/index.js',
  // 打包到什么文件
  output: {
    filename: 'bundle.js'
  },
  // webpack 配置
  devServer: {
    // 静态文件目录
    contentBase: path.join(__dirname, 'www'),
    // 压缩： 不压缩
    compress: false,
    // 端口号
    port: 8080,
    // 虚拟打包路径， bundle.js文件没有真正的生成
    publicPath: '/xuni/'
  }
}
