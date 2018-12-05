// cnpm i -D eslint-plugin-html
// cnpm i -D babel-eslint
// cnpm i -D eslint-config-standard (依赖 eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard)
module.exports = {
  root: true,
  parser: 'babel-eslint', // 默认的解析器为espree,这里指定为 babel-eslint，参考 https://github.com/babel/babel-eslint
  parserOptions: { // 解析器的选项，默认支持  ECMAScript 5
    sourceType: 'module'
  },
  env: {
    browser: true, // 环境定义为浏览器
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  plugins: [ //第3方插件 eslint-plugin-html，
    'html'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
 }