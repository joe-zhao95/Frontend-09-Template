#### AST

- AST（抽象语法树）
- 代码在计算机分析过程中，第一步是把编程语言去分词。之后把词构成层层相嵌套的语法树的树形结构。再之后才是解析代码去执行。
- 构建 AST 抽象语法树的过程叫做语法分析。
- 语法分析核心思想
  - LL 算法：从左到右扫描，从左到右规约
  - LR 算法

#### 四则运算

##### 词法分析

- TokenNumber：1，2，3，4，5，6，7，8，9，0 的组合
- Operator：+，-，\*，/之一
- Whitespace：<SP>
- LineTerminator：<LF>，<CR>

##### LL 语法分析

- 基本结构：每一个产生式对应着一个函数
- <Expression>::=<AdditiveExpression>==<EOF>==
- <AdditiveExpression>::=<br><MultiplicativeExpression><br>|<AdditiveExpression>==<+>==<MultiplicativeExpression><br>|<AdditiveExpression>==<->==<MultiplicativeExpression>
- <MultiplicativeExpression>::=<br><Number><br>|<MultiplicativeExpression>==<\*>==<Number><br>|<MultiplicativeExpression>==</>==<Number>
- 黄色记号表示结束符
