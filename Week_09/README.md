学习笔记
#### 一、css语法
css2.1语法  https://www.w3.org/TR/CSS21/grammar.html#grammar
总体结构：
    @chartset
    @import
    @rules
        @media
        @page
        rule

#### 二、@规则

@charset ： https://www.w3.org/TR/css-syntax-3/

@import ：https://www.w3.org/TR/css-cascade-4/

@media ：https://www.w3.org/TR/css3-conditional/

@page ： https://www.w3.org/TR/css-page-3/

@counter-style ：https://www.w3.org/TR/css-counter-styles-3

@keyframes ：https://www.w3.org/TR/css-animations-1/

@fontface ：https://www.w3.org/TR/css-fonts-3/

@supports ：https://www.w3.org/TR/css3-conditional/

@namespace ：https://www.w3.org/TR/css-namespaces-3/

#### 三、css规则
选择器: 
https://www.w3.org/TR/selectors-3/
https://www.w3.org/TR/selectors-4/
声明:
    key:
    https://www.w3.org/TR/css-variables/
    value:
    https://www.w3.org/TR/css-values-4/
    key还可以是变量，以--开头
    .foo {
        --side: margin-top;
        var(--side): 20px;
    }
    value也可以是变量
    :root {
        --main-color: red; // 声明
    }
    .a {
        color: var(--main-color); // 使用
    }

#### 四、收集标准
Array.from(document.querySelector('#container').children).filter(e => e.getAttribute('data-tag').match(/css/)).map(e => ({name: e.children[1].innerText, url: e.children[1].children[0].href}))

#### 五、选择器语法
   + 简单选择器
        *
        div svg|a   // svg|a 表示svg命名空间下的a标签
        .cls
        #id
        [attr=value]
        :hover
        ::before

   + 复合选择器
        <简单选择器><简单选择器><简单选择器>
        *或div必须写在前面

    + 复杂选择器  
          <复合选择器><sp><复合选择器> 子孙选择器
          <复合选择器>'>'<复合选择器>  父子选择器
          <复合选择器>'~'<复合选择器>  
          <复合选择器>'+'<复合选择器>   
          <复合选择器>'||'<复合选择器> 

#### 六、伪类
   + 链接/行为
     :any-link
     :link :visited
     :hover
     :active
     :focus
     :target

   + 树结构
     :empty
     :nth-child()
     :nth-last-child()
     :first-child :last-child :only-child

   + 逻辑型
     :not伪类
     :where :has

#### 七、伪元素
  ::before
  ::after
  ::first-line  已经完成排版之后的结果
  ::first-letter

  为什么first-letter可以设置float之类的，而first-line不行？
  个人认为是因为first-line是已经完成排版之后的结果，而float反过来会影响排版，此时first-line又要重新计算，
  这样就会出现死循环。


PS:CSS结构目录
CSS:
    at-rules:
        @charset
        @import
        @media
        @page
        @counter-style
        @keyframes
        @fontface
        @supports
        @namespace
    rule:
        selector:
            selector_group:
            selector:
                >
                <sp>
                +
                ~
            simple_selector:
                type
                *
                .
                #
                []
                :
                ::
                :not()
        declaration:
            key:
                variables
                properties
            value:
                calc
                number
                length
                ...

