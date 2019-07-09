module.exports = {
  env: {
    browser: true,  
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": [0 ,"error", "windows"],
    "indent": ['error', 4],
    "no-plusplus": 0,//禁止使用++，--
    "no-unused-vars": 0,  //不能有声明后没用的变量
    "no-console": 2,
    "no-debugger" : 2,
    // "no-console": process.env.NODE_ENV === 'prod' ? 2 : 0,//禁止使用console
    // 'no-debugger': process.env.NODE_ENV === 'prod' ? 2 : 0,
    "no-alert": 0,//禁止使用alert confirm prompt
  },
};
