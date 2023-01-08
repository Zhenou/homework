module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置按需加载vant
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: (name) => `${name}/style/less`
    }, 'vant']
  ]
}
