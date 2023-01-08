const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    // 代理跨域的配置
    proxy: {
      // 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求
      '/api': {
        target: 'http://www-wms-java.itheima.net/', // 跨域请求的地址
        changeOrigin: true, // 只有这个值为true的情况下 才表示开启跨域
        // ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
