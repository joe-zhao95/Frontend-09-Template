### 动画

#### Animation

- @keyframes 定义
- animation：使用

```css
@keyframes mykf {
  from {
    background: red;
  }
  to {
    background: blue;
  }
}

div {
  animation: mykf 5s infinite;
}
```

#### Animation

- animation-name 定义的 keyframes
- animation-duration 动画时长
- animation-timing-function 动画的时间曲线
- animation-delay 动画开始前的延迟
- animation-iteration-count 动画的播放次数
- animation-direction 动画的方向

```css
@keyframes mykf {
  0% {
    top: 0;
    transition: top ease;
  }
  50% {
    top: 30px;
    transition: top ease-in;
  }
  75% {
    top: 10px;
    transition: top ease-out;
  }
  100% {
    top: 0;
    transition: top linear;
  }
}
```

#### transition

- transition-property 要变换的属性
- transition-duration 变换的时长
- transition-timing-function 时间曲线
- transition-delay 延迟

#### timing-function （y: progress, x: time）

- ease 标准缓动曲线（最自然的曲线形态）
- linear 直线
- ease-in 缓动启动，用于退出动画（元素离开屏幕）
- ease-out 缓动启动 （元素出现在屏幕）
- ease-in-out

#### 三次贝塞尔曲线

---

#### 颜色

- CMYK 与 RGB
- HSL 与 HSV

---

#### 绘制

- 几何图形
  - border
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - background-image

#### 盒（Box）

- HTML 代码中可以书写开始标签，结束标签，和自封闭标签。
- 一对起止标签，表示一个元素。
- DOM 树中存储的是元素和其它类型的节点（Node）。
- CSS 选择器选中的是元素。
- CSS 选择器选中的元素，在排版时可能产生多个盒。
- 排版和渲染的基本单位是盒。

#### 盒模型

- margin + border + padding + content
- box-sizing
  - content-box：content = width
  - border-box：border + padding + content = width

#### 正常流排版

- 收集盒和文字进行
- 计算盒和文字在行中的排布
- 计算行与行之间的排布
- IFC（inline-level-formatting-context 行内级级格式化上下文）： inline-level-box 从左到右
- BFC（block-level-formatting-context 块级格式化上下文）：block-level-box 从上到下

---

### 正常流的行级排布

#### baseline

- 基线对齐

#### Text

- 字符就是一个码点
- 具体形状由字体库决定

#### 行模型

- line-top：行高大于文字高度
- text-top：文字顶缘
- base-line
- text-bottom：文字底缘
- line-bottom：行高大于文字高度

#### vertical-align

- baseline 的确定规则
  - 父元素【line box】的 baseline 是最后一个 inline box 的 baseline。
  - inline-block 元素的 baseline 确定规则
    - 规则 1：inline-block 元素，如果内部有 line box，则 inline-block 元素的 baseline 就是最后一个作为内容存在的元素[inline box]的 baseline，而这个元素的 baseline 的确定就要根据它自身来定了。
    - 规则 2：inline-block 元素，如果其内部没有 line box 或它的 overflow 属性不是 visible，那么 baseline 将是这个 inline-block 元素的底 margin 边界。

---

### 正常流的块级排布

#### float 与 clear

#### Margin Collapse

- 只会在正常流的 BFC 发生 （flex，grid 都不会发生）

---

#### Block

- Block Container: 里面有 BFC 的
  - 能容纳正常流的盒，里面就有 BFC
- Block-level Box: 外面有 BFC 的
- Block Box = Block Container + Block-level Box: 里外都有 BFC

#### Block Container （里面能够容纳不是特殊 display 模式的，里面默认都是正常流）

- block
- inline-block
- table-cell
- flex item
- grid cell
- table-caption

#### Block-level Box

- block-level
  - display: block
  - display: flex
  - display: table
  - display: grid
  - ...
- inline-level
  - display: inline-block
  - display: inline-flex
  - display: inline-table
  - display: inline-grid
  - ...

#### 设立 BFC

- floats
- absolutely positioned elements
- Block Container
- block boxes with 'overflow' other than 'visible'

#### BFC 合并

- block box && overflow: visible
  - BFC 合并与 float
  - BFC 合并与边距折叠

---

#### Flex 排版

- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布

#### 分行

- 根据主轴尺寸，把元素分进行
- 若设置了 no-wrap，则强行分配进第一行

#### 计算主轴方向

- 找出所有 flex 元素（flex: 1）
- 把主轴方向的剩余尺寸按比例分配给这些元素
- 若剩余空间为负数，所有 flex 元素为 0，等比压缩剩余空间

#### 计算交叉轴方向

- 根据每一行中最大元素尺寸计算行高
- 根据行高 flex-align（每个元素上的属性）和 item-align（外边容器上的属性），确定元素具体位置

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
