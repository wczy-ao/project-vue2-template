/*
  规范commit日志
  https://commitlint.js.org
*/

const types = [
  'build', // 主要目的是修改项目构建系统（例如glup，webpack，rollup的配置等）的提交
  'ci', // 修改项目的持续集成流程（Kenkins、Travis等）的提交
  'chore', // 构建过程或辅助工具的变化
  'docs', // 文档提交（documents）
  'feat', // 新增功能（feature）
  'fix', // 修复 bug
  'pref', // 性能、体验相关的提交
  'refactor', // 代码重构
  'revert', // 回滚某个更早的提交
  'style', // 不影响程序逻辑的代码修改、主要是样式方面的优化、修改
  'test' // 测试相关的开发,
]
const typeEnum = {
  rules: {
    'type-enum': [2, 'always', types]
  },
  value: () => {
    return types
  }
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  /*
Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error.
https://commitlint.js.org/#/reference-rules
*/
  rules: {
    'type-enum': typeEnum.rules['type-enum'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
