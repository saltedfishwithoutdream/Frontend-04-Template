学习笔记
#### 一、运算符和表达式
1. Member运算，优先级最高
a.b
a[b]
foo`string`  这个语法参考阮一峰es6，第4章字符串的扩展--标签模板
super.b
super['b']
new.target
new Foo()

2. New表达式
new Foo

举例：
new a()()
因为Member优先级高于New表达式，所以new a()()等同于(new a())()
new new a()等同于new (new a())


3. eference 引用类型存在于js运行时的类型
分为两部分：对象和key
js语言就是用引用类型在运行时来处理删除、赋值等操作

4. Call表达式
   foo()
   super()
   foo()['b'] // 在括号之后加上取属性，就会降级到Call，而不是Member
   foo().b
   foo()`abc`

   举例
   new a()['b']

5. 左手(left handside)和右手(right handside)运算
   a.b = c  // 行，a.b是左手表达式
   a + b = c  // 不行，a+b是右手表达式

   Update表达式，是right handside
   a++
   a--
   --a
   ++a

   举例：
   ++a++  // 会报错Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
   ++(a++) // Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
   (++a)++ // Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
   ++a++等同于++(a++)
   上面的表达式都会报错，++a,a++都是right handside，而++前后只能是left handside，

6. Unary单目运算符
   delete a.b
   void foo()
   typeof a
   +a
   -a
   ~a
   !a
   await a

7. Exponental指数运算符，右结合运算符
   **
   3 ** 2 ** 3 等同于 3 ** (2 ** 3)

8. Multiplicative
   * / %
  
   Additive
   + - 
  
   shift移位运算符
   << >> >>>
   >>和>>>的区别：>>会保留符号位，>>>不会
   -8 >> 3 = -1
   -8 >> 3 = 536870911

   relationship关系比较运算符
   < > >= <= instance in

   equality
   ==   // 类型不同时会先进行类型转换
   !=
   ===
   !==

   Bitwise  位运算
   & | ^

   Logical 逻辑运算
   &&
   ||

   Conditional 条件运算符
   ? :  唯一三目运算符

#### 二、类型转换
          Number    String     Boolean     Undefined     Null      Object     Symbol
Number       -                 0->false       ×           ×        Boxing       ×
String                -        ''->false      ×           ×        Boxing       ×
Boolean   true1     'true'        -           ×           ×        Boxing       ×
          false0    'false'                               
Undefined  NaN      'undefined'  false        -           ×           ×         ×
Null        0       'null'       false        ×           -           ×         ×
Object    valueOf   valueOf      true         ×           ×           -         ×
                    toString 
Symbol      ×          ×           ×          ×           ×        Boxing       -

拆箱转换，指将Object转换为其他基本类型
toPrimitive相关方法
valueOf
toString
Symbol.toPrimitive

如果定义了Symbol.toPrimitive，会忽略valueOf和toString，否则
加法会先调用valueOf，如果没有valueOf会调用toString
当作为属性名时，会调用toString，如果没有toString，也不会调用valueOf，而是对象本身

装箱 Boxing
1            new Number(1)
'a'          new String('a')
true         new Boolean(true)
Symbol('a')  new Object(Symbol('a'))

#### 三、运行时相关
1. Completion Record 完成记录
[[type]]:normal,break,continue,return,throw
[[value]]:基本类型
[[target]]: label

2. Lexical Environment

#### 四、简单语句和符合语句
1. 简单语句
   ExpressionStatement
   EmptyStatement
   DebuggerStatement
   ThrowStatement
   ContinueStatement
   BreakStatement
   ReturnStatement
2. 复合语句
   BlockStatement
   IfStatement
   SwitchStatement
   IterationStatement
   WithStatement
   LabelledStatement
   TryStatement

#### 五、声明
FunctionDeclaration                  function
GeneratorDeclaration                 function *
AsyncFunctionDeclaration             async function
AsyncGeneratorDeclaration            async function *
VariableStatement                    var
ClassDeclaration                     class
LexicalDeclaration(let、const)       let、const

#### 六、宏任务和微任务










   


