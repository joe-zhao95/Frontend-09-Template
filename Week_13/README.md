- 所有 dom 树上能挂着的东西都统一继承 Node 类

### DOM API

#### 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
- parentElement
- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling

#### 修改操作

- appendChild
- insertBefore
- removeChild
- replaceChild

#### 高级操作

- compareDocumentPosition：是一个用于比较两个节点中关系的函数（前后）
- contains：检查一个节点是否包含另一个节点的函数
- isEqualNode：检查两个节点是否完全相同。只要在 dom 树的结构相同。
- isSameNode：检查两个节点是否是同一个节点，可以用“===”代替
- cloneNode：复制一个节点，如果传入参数 true，则会连同子元素做深拷贝

---

#### 事件 API

- `target.addEventListener(type, listener [, options)`
- `target.addEventListener(type, listener [, useCapture)`

#### Event：冒泡与捕获

- 先捕获再冒泡
- 捕获：从外到内一层一层地计算这个事件发生在哪个元素上
- 冒泡：已经计算出在哪个元素上，层层向外去触发，让元素去响应这个事件

---

#### Range API

- `var range = new Range()`
- `range.setStart(element, 9)`
- `range.setEnd(element, 9)`
- `var range = document.getSelection().getRangeAt(0)`
- range.setStartBefore
- range.setStartAfter
- range.setEndBefore
- range.setEndAfter
- range.selectNode
- range.selectNodeContents
- `var fragment = range.extractContents()`：把 range 里的内容取出来
- `range.insertNode(document.createTextNode("aaa"))`：在 range 的位置插入一个节点

---

#### CSSOM（对 CSS 文档的抽象）

- doucment.styleSheets：数组里对应一个 styles 标签或者一个 link 标签
- Rules
  - doucment.styleSheets[0].cssRules
  - doucment.styleSheets[0].insertRule("p { color: red; }", 0)：第二个参数是位置
  - doucment.styleSheets[0].removeRule(0)
  - CSSStyleRule
    - selectorText String
    - style K-V 结构
  - document.styleSheets[0].cssRules[0].style.color = "red";
- getComputedStyle：获取元素最终真实渲染时所有计算好的样式
  - window.getComputedStyle(elt, pseudoElt);
    - elt：想要获取的元素
    - pseudoElt：可选，伪元素
    - window.getComputedStyle(document.querySelector("a"), "::before");

---

### CSSOM View

#### Window

- window.innerHeight, window.innerWidth：实际所使用的 viewport。浏览器的 html 内容实际上渲染所用的区域
- window.outerHeight, window.outerWidth：包含浏览器自带的工具栏，浏览器总共占的尺寸
- window.devicePixelRatio：屏幕上的物理像素和代码里的逻辑像素 px 之间的比值
- window.screen：屏幕信息（实际尺寸、可使用用尺寸）
  - window.screen.width
  - window.screen.height
  - window.screen.availWidth
  - window.screen.availHeight

#### Window API

- `window.open("about:blank", "_blank", "width=100, height=100, left: 100, right: 100")`
- moveTo(x, y)
- moveBy(x, y)
- resizeTo(x, y)
- resizeBy(x, y)

#### Scroll

- scroll 的元素
  - scrollTop, scrollLeft：当前滚动到的位置
  - scrollWidth, scrollHeight：可滚动内容最大的宽高
  - scroll(x, y)：滚动到特定的位置
  - scrollBy(x, y)：在当前的基础上滚动一个差值
  - scrollIntoView()：强制滚动到屏幕的可见区域
- 顶层 window 的 scroll
  - scrollX
  - scrollY
  - scroll(x, y)
  - scrollBy(x, y)

#### layout

- getClientRects()：获取元素生成的所有的盒
- getBoundingClientRect()：获取元素包含的区域信息

---

####
