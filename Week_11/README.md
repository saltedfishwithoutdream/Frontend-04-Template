学习笔记

#### 一、HTML的定义：XML与SGML
ML即 Markup language(置标语言)。根据维基百科对其的解释，Markup language是用标准的标记来解释纯文本文档的内容，从而提供关于文档结构或文档该如何渲染的信息。

+ DTD与XMLnamespace

DTD 是一套关于标记符的语法规则。它是XML1.0版规格得一部分,是html文件的验证机制专,属于html文件组成的一部分属。
DTD 是一种保证html文档格式正确的有效方法，可以通过比较html文档和DTD文件来看文档是否符合规范，元素和标签使用是否正确。一个DTD文档包含：元素的定义规则，元素间关系的定义规则，元素可使用的属性，可使用的实体或符号规则。
XML文件提供应用程序一个数据交换的格式,DTD正是让html文件能够成为数据交换的标准,因为不同的公司只需定义好标准的DTD,各公司都能够依照DTD建立html文件,并且进行验证,如此就可以轻易的建立标准和交换数据，这样满足了网络共享和数据交互。

http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd

http://www.w3.org/1999/xhtml


#### 二、HTML标签语义

#### 三、HTML语法

Element: <tagname>...</tagname>

Text: text

Comment: <!-- comments -->

DocumentType: <!Doctype html>

ProcessingInstruction: <?a 1?>

CDATA: <![DATA[]]>

字符引用：
&#161;
&amp;
&lt;
&quot;

#### 四、DOM API

查找操作
parentNode         parentElement
childNodes         children
firstChild         firstElementChild
lastChild          lastElementChild
nextSibling        nextElementSibling
previousSibling    previousElementSibling

修改操作
appendChild
insertBefore
removeChild
replaceChild

高级操作
compareDocumentPosition:是一个用于比较两个节点中关系的函数
contains:检查一个节点是否包含另一个节点
isEqualNode:检查两个节点是否完全相同
isSameNode:检查两个节点是否是同一个节点，对应js里的===
cloneNode:复制一个节点，如果传入true，则连子元素一起复制

#### 五、事件API

#### 六、Range API






