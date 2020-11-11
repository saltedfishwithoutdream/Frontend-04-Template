学习笔记
#### 一、盒

HTML代码中可以书写开始标签，结束标签 ，和自封闭标签 。

一对起止标签 ，表示一个元素 。

DOM树中存储的是元素和其它类型的节点（Node）。

CSS选择器选中的是元素 。

CSS选择器选中的元素 ，在排版时可能产生多个盒 。

排版和渲染的基本单位是盒 。

盒模型：
从内到外 margin border padding content

box-sizing: 默认content-box

content-box: width = content-width

border-box: width = content-width + padding-width + border-width

#### 二、正常流
排版：
收集盒进行
计算盒在行中的排布
计算行的排布

#### 三、正常流的行级排布
行模型的五条重要的线，从上到下依次为
line-top、text-top、baseline、text-bottom、line-bottom
baseline一般以英文字母为标准，如a的下边缘
text-top和text-bottom的间隔由字体大小决定，当不同大小字体混排时，以大号字体为标准
当只有文字时line-top和line-bottom的间隔由line-height决定，当文字与盒混排时，line-top和line-bottom有一定的偏移

盒的基线位置，如果盒中没有文字，则基线为盒的底边，如果盒中有文字，基线为最后一行文字的基线

vertical-align：
bottom: 把元素的顶端与行中最低的元素的顶端对齐。
top:把元素的顶端与行中最高元素的顶端对齐
text-bottom: 把元素的底端与父元素字体的底端对齐。
text-top: 把元素的顶端与父元素字体的顶端对齐
middle: 把此元素放置在父元素的中部。

#### 四、正常流的块级排布
float:

margin折叠：
相邻元素的margin重叠
父子元素的margin重叠


#### 五、BFC合并
Block Container: 里面是BFC，能容纳正常流的盒
Block-level Box：外面有BFC
Block Box = Block Container + Block-level Box

Block Container：
block/inline-block/table-cell/flex-item/grid-cell/table-caption

Block-level Box：
display: block/flex/table/grid

创建BFC：
float
绝对定位元素
Block Container
block box且overflow不是visible


#### 六、flex排版
详情见第九周笔记

#### 七、动画
@keyframe定义
animation使用

@keyframe name {
    from {}
    to {}
}
@keyframe name {
    0% {}
    30% {}
    70% {}
    100% {}
}

div {
    animation: name 5s infinite;
}

贝塞尔曲线


#### 八、颜色
RGB

CMYK

HSL

HSV


#### 九、绘制


