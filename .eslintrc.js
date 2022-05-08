module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  // 扩展规则
  extends: 'airbnb-base',
  // 自定义规则，会覆盖一部分扩展规则
  rules: {
    'no-console': 'warn',
    semi: 'off',
    'eol-last': 'off',
    'no-new': 'off',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-danger': 'off',
    'no-useless-escape': 'off',
    'prettier/prettier': 'error',
  },
  // 语言风格
  parserOptions: {
    // 支持import
    sourceType: 'module',
  },
  // 拓展插件
  plugins: ['prettier'],
};
