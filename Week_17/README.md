学习笔记

安装mocha
全局安装 npm install -g mocha
local安装 npm install mocha --save-dev

mocha默认只支持node的模块导出（module.exports和require）语法，不支持es6的模块导出语法（export和import）

为了能支持es6需要引入babel-register
npm install --save-dev @babel/core @babel/register

.babelrc配置文件
{
    "presets": [
        "@babel/preset-env"
    ]
}

用到@babel/preset-env，安装
npm install --save-dev @babel/preset-env

执行./node_modules/.bin/mocha --require @babel/register即可
为了方便可以把这条命令写到package.json中
"scripts": {
    "test": "mocha --require @babel/register"
  },

  然后执行npm run test


  测试覆盖率，nyc
  安装npm install -g nyc
  执行nyc npm run test 或者 nyc ./node_modules/.bin/mocha --require @babel/register

  之前的版本不支持babel需要安装两个插件
  babel的插件babel-plugin-istanbul
  .babelrc配置文件
  {
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": ["istanbul"]
  }

  nyc的插件@istanbul/nyc-config-babel
  .nycrc配置文件
  {
    "extends": "@istanbuljs/nyc-config-babel"
  }

  在package.json中加入
  "coverage": "nyc mocha"

  执行命令npm run coverage





