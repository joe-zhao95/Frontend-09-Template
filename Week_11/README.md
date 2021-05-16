#### CSS 总体结构（css2.1）

- @charset
- @import
- rules (可重复)
  - @media
  - @page
  - rule

#### CSS @规则

- [@charset](https://www.w3.org/TR/css-syntax-3/)：声明 css 的字符集
- [@import](https://www.w3.org/TR/css-cascade-4/)：级联
- [@media](https://www.w3.org/TR/css3-conditional/)：媒体查询
- [@page](https://www.w3.org/TR/css-page-3/)：分页媒体，打印相关
- [@counter-style](https://www.w3.org/TR/css-counter-styles-3)：列表 icon
- [@keyframes](https://www.w3.org/TR/css-animations-1)：定义动画
- [@fontface](https://www.w3.org/TR/css-fonts-3/)：定义字体
- [@supports](https://www.w3.org/TR/css3-conditional/)：检查某些 css 功能存不存在
- [@namespace](https://www.w3.org/TR/css-namespaces-3/)：命名空间

#### CSS 规则

- 选择器
- 声明
  - key
  - value

---

- Selector
  - https://www.w3.org/TR/selectors-3/
  - https://www.w3.org/TR/selectors-4/
  - selector_group
  - selector
    - `>`
    - <sp>
    - -
    - ~
  - simple_selector
    - type
    - `*`
    - `.`
    - `#`
    - []
    - :
    - ::
    - :not()
- Key
  - Properties
  - Variables: https://www.w3.org/TR/css-variables/
- Value

  - https://www.w3.org/TR/css-values-4/

  #### 选择器语法

- 简单选择器

  - 通用选择器：`*`
  - 类型选择器：div，span
  - class 选择器：.cls
  - id 选择器：#id
  - 属性选择器：[attr=value]
  - 伪类选择器：`:hover`
  - 伪元素选择器：`::before`

- 复合选择器（选中的元素必须同时 match 几个简单选择器）

  - <简单选择器> <简单选择器> <简单选择器>
  - `*`或者 div 必须写在最前面

- 复杂选择器（针对一个元素的结构进行选择）
  - <复合选择器> <sp> <复合选择器>：子孙选择器
  - <复合选择器> > <复合选择器>：父子选择器
  - <复合选择器> ~ <复合选择器>：邻接选择器
  - <复合选择器> + <复合选择器>：邻接选择器
  - <复合选择器> || <复合选择器>：table 时，表示选中某一列

#### 选择器的优先级

- 简单选择器计数

```
[0,      0,  0,     0]
 inline  id  class  tag

 div div #id
 [0, 1, 0, 2]
```

#### 伪类

- 链接/行为

  - :any-link 匹配任何超链接
  - :link 未被访问的链接
  - :visited 已访问的链接
  - :hover 鼠标指针浮动在其上
  - :active 激活状态
  - :focus 焦点在的状态
  - :target 表示链接到当前的目标（锚点）

- 数结构

  - :empty 匹配没有子元素（包括文本节点）的每个元素
  - :nth-child() 父元素的第几个 child
  - :nth-last-child()
  - :first-child，:last-child，:only-child

- 逻辑型
  - :not

#### 伪元素

- ::before 在元素的前面插入一个伪元素
- ::after 在元素的后面插入一个伪元素
- ::first-line 第一行
- ::first-letter 第一个字母
