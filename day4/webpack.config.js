const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',//设置打包模式
  entry: "./webpack_config/src/main.js",//设置打包入口
  output: {//设置出口
    clean: true,//设置每次打包清空历史代码
    path: path.join(__dirname, 'dist'), //设置出口路径
    filename: 'bundle.js'//设置出口文件
  },
  plugins: [new HtmlWebpackPlugin({ //设置html插件
    template: './webpack_config/public/index.html',//设置html文件模版
    filename: "index.html"
  })],
  devServer: { //设置webpack的服务器端口
    port: 2333,//设置端口号
  },
  module: {//配置依赖包模块
    rules: [
      {
        test: /\.css$/i,//css正则
        use: ['style-loader', 'css-loader'],//程序从右往左执行,先解析css再写入css样式
      },
      {
        test: /\.less$/i,//less正则
        use: ["style-loader", "css-loader", "less-loader"],//程序从右往左执行,解析less变css在写入css
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,//图片正则
        type: "asset",//将小于8kb的图片转为base64类型文件,大与8kb的文件体积会超过超过30%不适用于这个
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,//字体正则
        type: "asset/resource",//不知道
        generator: {
          filename: "font/[name].[hash:6][ext]"//需要创建font文件夹,重点是font后面需要加一个/表示新建文件夹.hash:6是创建一个6位数的哈希值,ext是文件扩展名
        },
      }

    ]
  }

};
