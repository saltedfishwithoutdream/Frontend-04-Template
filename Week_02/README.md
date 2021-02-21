学习笔记
#### 一、地图编辑器

1. 绘制地图

   绘制地图用到的知识都是一些常见的API，但如果让我直接画出这个地图还是有些困难，对于知识的串联，全局掌控需要加强。在绘制地图的过程中发现一个问题，如下图

   ![avatar][map]

   这是由于自动换行时，换行符引起的，对于这种情况，只需将字体大小设置为0即可。

   代码如下：
   ```
   #container {
        width: 701px;
        font-size: 0; // 解决换行时上下间距过大问题
    }
   ```

2. 寻址方案
   
   首先要确立寻址的基本方向，这让我联想到蝙蝠的声波定位，蝙蝠所在的位置是起点，障碍物是终点，蝙蝠通过声波定位到障碍物就是一个寻址过程，这个过程类似于广度优先算法，是通过一圈圈的声波逐步扩散，碰到障碍物后返回。

    ![avatar][simple-path]

   计算机毕竟不是蝙蝠，从四面八方扩散，是需要消耗性能的，如何提高性能是一个需要思考的问题。如果在寻址的过程中我们能保证某些方向是一定比另外的方向近的，那我们就直接抄近道，基于这个想法，在选择下一步时总是选择离终点最近的点，这样速度明显快了不少。

   ![avatar][priority-path]

3. 路径可视化
   
   为了方便展示寻址的过程，就需要引进动画。在上周的红绿灯课程中
有专门讲解异步编程的知识，这里正好能派上用场。由于我们更习惯协同部代码，而async正好能用同步的方式表示异步，所以推荐使用async。

4. 我需要掌握什么
   
   对于这个小项目本身，我在以后的工作中是完全用不上的，但是其中展现的问题分析思路、api的灵活运用、将算法落地到项目、项目的优化等等都是需要我消化吸收的。

#### 二、使用LL构建AST

1. 编译原理从入门到暂时放弃。

   为什么学：我一直认为要想掌握语言（不单指js）的本质，编译原理是一道不能忽视的坎。就入门讲解来说，东南大学廖力老师讲解的很好，之前跟着学些一段时间，对于非班科的学生来讲，还是比较吃力的，课程只看了一半。

   暂时放弃：我曾问过同事或者leader，是否有学习编译原理的必要，得到的答案都是付出与收获不成正比。确实，我花费了大量时间去学习，在工作中也用不上，就停止了学习。但放弃的理由并不是觉得它不重要了，而是因为自身的水平不够，无法消化，每次都是似懂非懂，看完就忘，没有实际的项目巩固知识，至今还停留在几个专业术语上。以后随着知识结构的完善，会重新拾起编译原理。

2. 这个小项目的意义
   
   这个项目对我们的帮助大不大，取决于我们今后的工作和学习的内容，如果只是写业务代码，其实帮助不大，但是对于我们阅读一些开源代码，是由一定帮助的，只要有编译相关的功能，就一定会用到词法分析，语法分析，生成AST树，如我们常用的react、vue等。
   对于我个人来说，算是实际操练了一把，以前一直停留在概念上，没有实际项目的巩固。总之对技术有更高追求的同学，是一定要系统的学习编译原理的，而这个项目正好带着我们入门。

3. 四则运算
   <Expression>::=
      <AdditiveExpression><EOF>
   
   <AdditiveExpression>::=
      <MultiplicativeExpression>
      |<AdditiveExpression><+><MultiplicativeExpression>
      |<AdditiveExpression><-><MultiplicativeExpression>

   <MultiplicativeExpression>::=
      <Number>
      |<MultiplicativeExpression><+><Number>
      |<MultiplicativeExpression><-><Number>











[map]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkwAAAFiAQMAAAA+5BVbAAAABlBMVEX///+AgIBizNOVAAAAaklEQVR42u3XsQ0AIRADwe/sW6cDiiFFOlpAEGHNJM4298fralSvf95Pk5KSOkkBAODjSEklpQAA8HGkpJJSAAD4OFJSSSkAAHwcKamkFAAAPo6UVFIKAAAfR0oqKQUAgI8jJZWUAgDYsAAujs06DjMhzwAAAABJRU5ErkJggg==

[simple-path]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAAFIAgMAAABRs78TAAAACVBMVEWAgICQ74////88fUCVAAABJklEQVR42u3UMU4DQRBE0Ym53ySczgkJpyRwi5VAGHvXiJre10lnT6rkj/dn3+WPyDnn25yvx99ljJcxkEhkGHmmEo0xrsORSGQYeZYS1eLrQyKRYeQpSlSLPx8SiQwj25doW7w9JBIZRvYuUU39+pBIZBjZt0Tb1G8PiUSGkU1LVBt/eEgkMoxsWKIad+MhkcgwsluJatzth0Qiw8hOJapVvz8kEhlGKhESifx/sk2JatVdD4lEhpEtSlRz7n5IJDKMXL9ENeeRh0Qiw8i1S1Q7Hn1IJDKMXLhEtWPHQyKRYeSiJaoBOx8SiQwjVyxRDdj/kEhkGLlaiY4trodEIsPIpUp0eHE9JBIZRi5TouOLt4dEIsPINUr0rMX1kEhkGKlEZyI/AHLprXrQDCn1AAAAAElFTkSuQmCC

[priority-path]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC0AgMAAABeat4SAAAADFBMVEWAgID///+Q74+AAIA3rVz1AAAAn0lEQVRo3u3UKw6AMBCE4THcD4PBcDrM3g+9UFJBwqPFsED+mk2aL+mKmaq7dVo8/nfe3Xuz0cxaqZF0PvD47Xgkn2Y2uE/LSGtd7oPHR+QzLVJTGzz+8XxKyosUa4PHR+QzPVZTGzw+Kp81tcHj4/JZrg0eH5fPcm3w+OwD8lmuDR6ffWw+97VZL/H45F+Rz1ybbV/w+Nf8nwcD/y0/AzO8MzjIjYDlAAAAAElFTkSuQmCC