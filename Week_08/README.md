学习笔记
#### 一、排版和渲染
第一步：根据浏览器属性进行排版（只处理flex布局）
  + 做预处理，处理了flexDirection和wrap相关的属性，抽象出10个属性mainSize, mainStart, mainEnd, mainSign, mainBase, crossSize, crossStart, crossEnd, crossSign, crossBase，方便后续排版


第二步：收集元素进行（hang）
  + 根据主轴尺寸，把元素分行
  + 若设置了no-wrap，则强行分配进第一行

第三步：计算主轴
  + 找出所有flex元素
  + 把主轴方向的剩余尺寸按比例分配给这些元素
  + 若剩余空间为负，所有flex元素为0，等比压缩剩余空间

第四步：计算交叉轴
  +  根据每一行最大元素尺寸计算行高
  +  根据flex-align和item-align，确定元素具体位置

#### 二、渲染
第一步：绘制单个元素
  + 绘制需要依赖图形环境，选择安装npm的images包
  + 在viewport上进行

第二步：绘制DOM树
  +  在第一步的基础上添加递归调用即可
