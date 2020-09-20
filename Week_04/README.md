学习笔记
#### 一、文法的分类
乔姆斯基体系
0型文法：无限制文法或短语结构文法，包括所有文法
1型文法：上下文相关文法
2型文法：上下文无关文法
3型文法：正规文法

#### 二、对字符串用UTF8编码
1. 字符串的unicode码长度与字符串的length属性
   对于a = '𠮷'
   直观感受a的长度是1
   但是我们打印a.length，值确实2
   这是因为js内部字符以UTF-16格式存储，但'𠮷'去占了32位，需要两个'UTF16'表示
   因此如果要获取字符串的真实长度，需要先判断每个字符占用了几个'UTF16'

2. unicode码如何转换为UTF8
   ASCII码只需要8位就可以表示，所以直接使用
   超过127的就需要多位表示了
   规则如下
   左边uincode码范围         右边utf8编码
   0000 0000 - 0000 007f                                                0xxxxxxx
   0000 0080 - 0000 07ff                                       110xxxxx 10xxxxxx  
   0000 0800 - 0000 ffff                              1110xxxx 10xxxxxx 10xxxxxx
   0001 0000 - 001f ffff                     11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
   0020 0000 - 03ff ffff            111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
   0400 0000 - 7fff ffff   1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

   超过127的unicode码转UTF8时，前面一位前面1的个数表示需要几位表示，后面每位以10开头
   


