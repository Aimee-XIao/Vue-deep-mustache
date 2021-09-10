配置过程
```markdown
1、初始化 npm init
```
```markdown
2、安装依赖  npm i -D webpack@4 webpack-dev-server@3 webpack-cli@3
webpack 版本建议使用：
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
```
```markdown
3、编写 webpack.config.js
```
```javascript
// webpack.config.js
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
```
```markdown
4、文件夹 www
 新建 index.html,引入 js <script src="/xuni/bundle.js"></script>
```
```markdown
5、修改 package.json
```
```javascript
// package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
// 修改为
"scripts": {
    "dev": "webpack-dev-server"
}
```
```markdown
6、启动 npm run dev
```

额外补充

```markdown
栈 先进后出
```














