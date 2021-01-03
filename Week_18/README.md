学习笔记

#### 一、环境安装
virtual box
ubuntu
在ubuntu安装node，使用apt ，sudo apt install nodejs
同理安装npm
安装的node，npm都不是最新的，要想安装最新版本的node，可以使用n包，
使用npm安装n，sudo npm install -g n
使用n安装node和npm，sudo n latest，安装完成后提示要重新设置PATH， 输入命令PATH="$PATH"

#### 二、编写服务器
1.使用express-generator创建express项目
创建并切换到目录server，执行npx express-generator，一个express项目就初始化了，默认监听3000端口
npm start启动项目，在浏览器中输入http://localhost:3000/

2.将server部署到虚拟机服务器
在ubuntu系统中开启ssh服务：service ssh start
操作系统不会直接把22端口给虚拟机，这时候需要端口转发：
设置->网络->高级->端口转发->添加规则->主机端口8082，子系统端口22
在服务器上创建好server目录，使用命令scp -P 8022 -r ./* linqi@127.0.0.1:/home/linqi/server,将本地的目录复制到虚拟机上的服务器

在服务器上切换到serve目录，启动项目，监听3000端口，同理需要将本机的某个端口映射到虚拟机上的3000端口，这里选择8080端口，
浏览器中输入http://localhost:8080/即可访问到项目


#### 三、发布服务
发布服务由一个发布的服务器端和一个发布的工具组成
创建两个项目publish-server(发布服务器)和publish-tool(发布工具)，分别执行npm init初始化项目
使用http模块来实现

node里的流
https://nodejs.org/dist/latest-v14.x/docs/api/stream.html
分为读（Readable）和写(Writable)

#### 四、github oAuth
首先创建一个github app，setting->Developer settings->new github app->填写相关信息->创建成功
github oAuth的文档地址
https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps

1.从这里获取code：https://github.com/login/oauth/authorize

2.通过code从这里获取token：https://github.com/login/oauth/access_token