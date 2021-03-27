- 使对象被监听
- 原生的操作或内置函数对对象的操作，proxy 都提供了拦截它并改变它行为的能力

```javascript
let object = {
  a: 1,
  b: 2,
};

let po = new Proxy(object, {
  set(obj, props, val) {
    console.log(obj, props, val);
  },
});

po.a = 1; // // {a: 1, b: 2}, "a", 1
```

- po 是一个特殊的对象，它上面所有的行为都是可以被重新再去指定的
- obejct 在使用了 proxy 之后，对象行为的可预测性会降低
