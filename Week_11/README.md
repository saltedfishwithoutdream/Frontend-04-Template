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

target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
target.addEventListener(type, listener, useCapture, wantsUntrusted  );  // Gecko/Mozilla only

type
表示监听事件类型的字符串。
listener
当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。有关回调本身的详细信息，请参阅The event listener callback 
options 可选
一个指定有关 listener 属性的可选参数对象。可用的选项如下：
capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看 使用 passive 改善的滚屏性能 了解更多.
 mozSystemGroup: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 Boolean，表示 listener 被添加到 system group。
useCapture  可选
Boolean，在DOM树中，注册了listener的元素， 是否要先于它下面的EventTarget，调用该listener。 当useCapture(设为true) 时，沿着DOM树向上冒泡的事件，不会触发listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 如果没有指定， useCapture 默认为 false 。 

#### 六、Range API

Q:把一个元素的所有子元素逆排。

创建Range
var range = new Range()
range.setStart(ele, 4) // 第二个参数是ele的偏移量，如果ele是文本，则偏移表示文字个数，否则是元素个数
range.setEnd(ele, 9)

var range = document.getSelection().getRangeAt(0) // 通过selection(鼠标选中的部分)获取range

Range API
range.setStartBefore
range.setEndBefore
range.setStartAfter
range.setEndAfter
range.selectNode
range.selectNodeContents

var fragment = range.extractContents() // 移除选中的内容，可以移除半个标签，剩下的半个自动补齐
range.insertNode(document.createTextNode('aa'))

#### 七、CSSOM

document.styleSheets

Rules
document.styleSheets[0].cssRules
document.styleSheets[0].insertRule("p {color: pink}", 0)
document.styleSheets[0].removeRule(0)

Rule
CSSStyleRule
CSSCharseRule
CSSImportRule
CSSMediaRule
CSSFontFaceRule
CSSPageRule
CSSNamespaceRule
CSSKeyframeRule
CSSKeyframesRule
CSSSupportsRule
...


window.getComputedStyle(ele) // 获取计算样式


#### 八、CSSOM view
innerHeight,innerWidth
outerHeight,outerWidth
devicePixelRatio
screen: {width,height,availWidth,availHeight}

scroll
元素上的方法和属性
scrollTop
scrollLeft
scrollWidth
scrollHeight
scroll(x, y)
scrollBy(x, y)
scrollIntoView()

window上的方法和属性
scrollX
scrollY
scroll(x, y)
scrollBy(x, y)


layout
getClientRects() // 获取元素上所有盒
getBoundingClientRect() // 获取元素本身的盒

#### 九、其他API
+ 标准化组织
khronos: WebGL
ECMA: ECMAScript
WHATWG: HTML
W3C: webaudio,CG/WG



