学习笔记

环境安装
virtual box
ubuntu


在ubuntu系统中开启ssh服务：service ssh start
操作系统不会直接把22端口给虚拟机，这时候需要端口转发：
设置->网络->高级->端口转发->添加规则->主机端口8082，子系统端口22
使用命令scp -P 8022 -r ./* linqi@127.0.0.1:/home/linqi/server,讲本地的目录复制到虚拟机上的服务器

node里的流