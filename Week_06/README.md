学习笔记
#### 一、浏览器工作原理
从url到最终浏览器上展现的页面（Bitmap）
具体步骤：
1. 通过http请求，解析http回应，把url包含的html解析出来
2. 对html进行parse，生成DOM树
3. 进行css computing，得到带css属性的DOM树
4. layout布局，得到DOM with position
5. render渲染，得到Bitmap

#### 二、有限状态机
+ 每个状态都是一个机器
  + 在每个机器里，可以做计算、存储、输出
  + 所有机器接受的输入是一致的
  + 状态机的每一个机器本身没有状态
+ 每个机器知道下一个状态
  + 每个机器都有确定的下一个状态（Moore）
  + 每个机器根据输入决定下一个状态（Mealy）

#### 三、http协议解析
七层网络模型
从上到下依次为：应用、表示、会话、传输、网络、数据链路、物理

tcp传输数据的概念是流，软件需要从端口中获取数据，对应node的库是net包

ip协议传输数据的概念是包，ip地址唯一标识了连入Internet的每一个设备，对应ip协议的底层库在node里没有，但是c++有libnet和libpcap，node可以调用这两个库

