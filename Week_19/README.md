学习笔记

#### 一、Git Hooks
.git/hooks目录下是git的不同阶段的回调，将文件名的.sample去掉就会生效。
如pre-commit会在git commit之前执行

这个文件默认是shell脚本写的，也可以用node来写，但需要声明

创建pre-commit文件，用ls -l查看文件，如果只有rw权限，我们可以手动修改改权限chmod +x，为其增加执行权限

文件第一行会用#!标注这个脚本是用什么引擎执行的。
如#!/bin/sh表示用shell脚本执行，我们这里选择node来执行

用which node命令得到node的path，/usr/local/bin/node
在文件的开头标注 #!/usr/local/bin/node 或者#!/usr/bin/env node
下面就能使用node了

阻止提交
process.exit(1)
或者process.exitCode = 1

#### 二、eslint
安装ESLint npm install --save-dev eslint
初始化eslint: npx eslint --init
使用eslint检验文件：eslint ./index.js 

#### 三、git与eslint结合
eslint的api：https://eslint.org/docs/developer-guide/nodejs-api

const { ESLint } = require("eslint");

处理还有为添加到本地仓库的提交，当我们修改了一个文件，然后将其add，然后又修改了这个文件，这时候我们commit，
这时候eslint检测的是这个文件的最新版本，但我们的目的是检测add的版本，这时我们需要将未add的文件，先stash push，然后提交，
最后将该文件stash pop出来。

#### 四、用无头浏览器做发布前检查
chrom的headless模式




