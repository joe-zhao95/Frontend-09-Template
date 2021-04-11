#### Statement（语句）

- Grammer
  - 简单语句
  - 复合语句
  - 声明
- Runtime
  - Completion Record（语句执行结果的记录）
  - Lexical Environment（作用域）

#### Completion Record

- 我们需要一个数据结构来描述语句的执行结果：是否返回了？返回值是啥？等等。例如 if 语句。
- 组成
  - [[type]]：nromal, break, continue, return, throw
  - [[value]]（有些语句有返回值）：基本类型
  - [[target]]：label（语句前面加上一个标识符和一个冒号，语句就变成了一个带 label 的语句。break 和 continue 语句会和带 label 的语句发生交互）

#### 简单语句（里面不会再容纳其他语句的语句）

- ExpressionStatement 表达式语句：表达式 + ;
- EmptyStatement 空语句：；
- DebuggerStatement 调试：debugger 关键字 + ;
- ThrowStatement：抛出一个异常，throw + 表达式
- ContinueStatement：结束当次循环
- BreakStatement：结束整个循环
- ReturnStatement：在函数里面使用，返回一个函数的值

#### 复合语句

- BlockStatement：一对花括号中间一个语句的列表。能够把所有需要单条语句的地方都变成可以用多条语句。是完成语句树状结构的重要基础设施。
- IfStatement：分支结构，条件语句
- SwitchStatement：多分支结构
- IterationStatement：循环（while, do-while, for, for await）
- WithStatement：通过 with 打开一个对象，把对象的所有属性直接放进作用域里
- LabelledStatement：在简单/复合语句前面加上一个 label。一般可以和 IterationStatement 配合使用
- TryStatement：包含 try，catch，finally 三个结构

#### Block

- BlockStatement
  - [[type]]: normal
  - [[value]]: --
  - [[target]]: --

```javascript
{
  xxx;
  xxx;
  xxx;
}
```

---

#### 声明

- 作用范围只认 Function Body。永远会被当作出现在函数第一行去处理。
  - function
  - function \*
  - async function
  - async function \*
  - var
- 在声明前去调用会报错。
  - class
  - const
  - let

#### 预处理（pre-process）

- 在一段代码执行之前，javascript 引擎会对代码本身做一次预处理。
- 所有的声明都有预处理机制，都能把变量变成局部变量。const 声明在，如果在声明前使用，会抛错

```javascript
var a = 2;
void (function () {
  a = 1;
  return;
  var a;
})();
console.log(a); // 2

var a = 2;
void (function () {
  a = 1;
  return;
  const a; // 抛错
})();
console.log(a);
```

#### 作用域

- var 的作用域是它所在的函数体
- const 的作用域在它所在的花括号

#### JS 执行粒度（运行时）

- 宏任务
  - 传给 javascript 引擎的任务。
  - 最大粒度。
- 微任务（Promise）
  - 在 javascript 引擎内部的任务。
  - 由 promise 产出
- 函数调用（Execution Context）
- 语句/声明（Completion Record）
- 表达式（Reference）
- 直接量/变量/this

#### 函数调用

- 执行上下文栈
  - 执行上下文：执行一个语句时，所需要的所有信息都会保存在里面
  - 执行到当前语句时，栈有一个栈顶元素：当前能访问的所有变量（Running Execution Context）

#### 执行上下文

- code evalution state：用于 async 和 generator 函数，是一个代码执行到哪儿的保存信息
- Function：由 Function 初始化
- Script or Module：在 Script 或 Module 里的代码
- Generator：只有 Generator 函数创建的执行上下文
- Realm：保存着所有使用的内置对象
- LexicalEnvironment：保存变量
- VariableEnvironment：var 保存变量

#### LexicalEnvironment

- this
- new.target
- super
- 变量

#### VariableEnvironment

- 历史遗留包袱。仅仅用于处理 var 声明

#### Environment Record

- Declarative Environment Record
  - Function Environment Record
  - module Environment Record
- Global Environment Record
- Object Environment Record

#### 闭包

- javascript 中每一个函数都会生成一个闭包
- javascript 中每一个函数都会带一个它定义时所在的 Environment Records，保存在自己，变成一个属性

#### Realm

- 在 js 中，函数表达式和对象直接量均会创建对象
- 使用 . 做隐式转换也会创建对象
- 这些对象也是由原型的，如果没有 Realm，就不知道它们的原型是什么
