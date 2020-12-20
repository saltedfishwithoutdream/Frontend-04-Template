学习笔记

#### 一、组件的基本概念和基本组成
对象
properties、
methods、
inherit


组件
properties、
methods、
inherit、
attribute、
config&State、
Event、
LifeCycle、
Children

#### 二、为组件添加JSX语法
安装webpack 
npm install webpack webpack-cli

安装babel系列
npm install --save-dev babel-loader 
npm install --save-dev @babel/core @babel/preset-env
写webpack配置文件

引入对jsx的支持
npm install --save-dev @babel/plugin-transform-react-jsx
在webpack中引入
打包发现这个插件把
<div/> 解析成了
React.createElement(\"div\", null)


#### 三、JSX的基本使用
给jsx插件添加配置参数
plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]，
这样<div/> 会被解析成
createElement(\"div\", null)

如何实现自定义标签？
jsx不会将首字母为大写的标签当做标签去处理，需要自己实现。


#### 四、轮播组件
准备四张图片
https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg
https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg
https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg
https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg

