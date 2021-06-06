#### 对象

- Properties 属性
- Methods 方法
- Inherit 对象之间的继承关系

#### 组件

- Properties 属性
- Methods 方法
- Inherit 组件之间的从属关系
- Attribute 属性(主要用于描述组件，一般用标记语言来实现)
- Config & State 组件的状态
- Event 组件往外传递的事件
- Lifecycle 组件从创建到销毁之间经历的各个阶段构成组件的生命周期
- Children 子组件

#### 组件生命周期

- created => mount(组件挂载到 DOM 树上) => JS change/set 和 End user input(接受 JS 或终端用户的输入) => render/update(重新渲染或更新组件状态) => unmount(组件从 DOM 树上解除挂载) => destroyed

#### JSX

- JSX 是依赖于 babel 的一个插件来实现的
- JSX 的行为类似于语法糖，把 html 转化为 createElement 的 JS 函数
- JSX 的主要作用就是将 JS 中的 HTMl 转译为 JS，并其封装 DOM 操作(createElement)
