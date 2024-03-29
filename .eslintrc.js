module.exports = {
  //定义支持的环境
  env: {
    //浏览器环境中的全局变量。
    browser: true,
    //启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
    es6: true
  },
  extends: "airbnb-base",

  //定义全局变量
  globals: {
    document: "writable",
    navigator: "writable",
    window: "writable"
  },

  parser : 'babel-eslint',

  // 解析器选项
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },

  //配置规则
  rules: {
    // 换行符使用规则
    // @off 不关心
    "linebreak-style": 0,

    //禁止使用++，--
    //@off
    "no-plusplus": 0,

    //不能有声明后没用的变量
    // off
    "no-unused-vars": 0,

    //禁止使用console
    "no-console": process.env.NODE_ENV === "prod" ? 2 : 0,

    // 禁止使用debugger
    "no-debugger": process.env.NODE_ENV === "prod" ? 2 : 0,

    //禁止使用alert confirm prompt
    "no-alert": 2,

    //if 后必须加{}
    curly: 2,

    //禁止使用arguments.caller和arguments.callee，ES6中废弃了
    "no-caller": 2,

    // 必须使用解构 ...args 来代替 arguments
    'prefer-rest-params': 0,

    indent: 0,

    // class定义的类名不得与其它变量重名
    "no-class-assign": 2,

    // 变量名必须使用驼峰式
    // @off 暂不限制
    camelcase: 0,

    // 必须使用 === 和 !== ，和 null 对比时除外
    eqeqeq: [2, "always", { null: "ignore" }],

    // 执行函数的圆括号前后的空格规则
    // @off 不关心
    "func-call-spacing": 0,

    // 禁止空的 function
    // 包含注释的情况下允许
    "no-empty-function": 2,

    // 不允许匿名函数
    // @off 不限制
    "func-names": 0,

    // imports 必须排好序
    // @off 没必要限制
    "sort-imports": 0,

    // 强制在parseInt()使用基数参数
    "radix":0,
  }
};
