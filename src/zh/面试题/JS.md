---
headerDepth: 3
---

### 数据类型

> 基本数据类型： number，bigInt， boolean， null，undefined，string，symbol，
> 基本数据类型保存在栈内存中，保存的就是一个具体的值
>
> 引用数据类型：object (后面不算)     date，RegExp，function，array，
> 保存在堆内存当中，声明一个引用类型的变量，他保存的就是引用数据类型的地址
> 
> 假如声明两个引用类型同时指向一个地址的时候，修改其中一个那么另一个也发生改变

### 类型转换优先级

> **[Symbol.toPrimitive] -> valueOf -> toString**

```js
let a = {}
console.log(a + 2) // [object Object]2

a.toString = () => {
  return 'toString'
}
console.log(a + 2) // toString2

a.valueOf = () => {
  return 'valueOf'
}
console.log(a + 2) // valueOf2

a[Symbol.toPrimitive] = () => {
  return '[Symbol.toPrimitive]'
}
console.log(a + 2) // [Symbol.toPrimitive]2
```

### 闭包

<!-- @include: @src/zh/精选文章/JavaScript/闭包以及内存泄漏原因.md#info -->

### 作用域

`描述`：作用域是指在运行时，代码中的某些特定部分中变量、函数和对象的可访问性

作用域是分层的，内层作用域可以访问外层作用域的变量，反之则不行。

ES6 之前 JavaScript 没有块级作用域，只有全局作用域和函数作用域。

ES6 提出了 **块级作用域** 所声明的变量在指定块的作用域外无法被访问。

> **高级描述：** 执行上下文中的词法环境

### 作用域链

由词法环境中的 **outerEnv指针** 形成的链条

当前作用域没有定义的变量，这成为 自由变量 。自由变量的值如何得到 —— 向父级作用域寻找。

如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。

这种一层一层的关系，就是 作用域链 。

> **高级描述：** 词法环境形成的链条

### Typeof、instanceof、constructor、Object.prototype.toString.call

```js 
// Typeof
typeof 1;
// 'number' 只能检测基本数据类型

// Instanceof
[] instanceof Array;
// true 只能检测引用数据类型

// Constructor
('123').constructor === String; 
// true 基本能够检测基本类型和引用类型，但是如果声明构造函数，并把它的原型换指向Array，就不对了

// Object.prototype.toString.call  
Object.prototype.toString.call(2)
// '[object Number]' 能够完全检测基本类型和引用类型
```

### 事件委托

> 事件委托又叫事件代理，原理是利用事件冒泡的机制来实现，也就是说把子元素的事件绑定到了父元素的身上，
> 
> 如果子元素阻止了事件冒泡(Event.stopPropagation)，那么委托也就不成立
> 
``` js 
addEventListener('click', () => {}, true || false )  // True 事件捕获， false 事件冒泡
```

### this 指向

> 全局对象中的 this 指向 window

```js
console.dir(this) // Window
```

> 全局作用域 或 普通函数的 this 指向 window

```js
function fn() {
  console.dir(this) // Window
}
fn()
```

> this 指向为最后调用方法的对象

```js
String.prototype.fn = function() {
  console.log(this)
}
'123'.fn() // String {'123'}
```

> New 关键字改变了 this 指向 (二义性导致的)

```js
function aa() {
  console.dir(this)
}
aa(); // Window
const a = new aa(); // aa
```

> apply，call，bind 改变 this 的指向（非箭头函数）

```js
function a() {
  console.log(this)
}
a(); // Window
a.apply("123") // String {'123'}
a.call(123) // Number {123}
a.bind(1234)() // Number {1234}
```

> 箭头函数中的this，它在定义的时候就已经确定好了，如果外层有函数，则是外层函数的this，没有的话就是window

```js
const fn = function () {
  console.log(this)
  const fn = function () {
    console.log('内部非箭头函数', this)
  }
  fn()
  const fn1 = () => {
    console.log('内部箭头函数', this)
  }
  fn1()
}
fn()
// Window
// 内部非箭头函数 Window
// 内部箭头函数 Window

fn.bind(123)()
// 123
// 内部非箭头函数 Window
// 内部箭头函数 123
```

> 匿名函数中的this永远指向window，匿名函数的执行环境具有全局性，因此指向window

### call、apply、bind 的区别

> 都会改变this的指向，call、apply功能类似，只是传参方式不同
> - call 方法是传的一个`参数列表`
> - apply 方法传递的是`一个数组`
> - bind 传参后不会立刻执行，会`返回一个改变了this指向的函数`，这个函数是可以传参的

### new 操作符做了什么

```js
function newFun(fn, ...args) {
  // 1.先创建一个空对象
  let newObj = {}
  // 2.把空对象和构造函数通过原型链进行链接
  newObj.__proto__ = fn.prototype
  // 3.把构造函数的this绑定到新的空对象上
  const result = fn.apply(newObj, args)
  // 4.根据构造函数返回的类型进行判断，如果是引用数据类型，则返回这个引用类型，如果是值类型，则返回对象
  return result instanceof Object ? result : newObj
}
```

### 深克隆

1. 解构 `{...xxx}` 只能实现第一层，当有多层的时候还是浅拷贝
2. `JSON.parse(JSON.stringify(xxx))`,该方法不会拷贝`内部函数`，同时如果xunhuan
3. 利用`递归`实现函数
4. `structuredClone`
5. `MessageChannel` 广播实现`异步`克隆

### 文档碎片

> **Document.createDocumentFragment()** 创建一个新的空白的文档片段，利用不是主Dom节点特性，将元素附加到文档片段，然后将文档片段附加到 DOM 树，从而减少回流次数。

```javascript
const list = document.getElementById('list')

// 文档碎片
const fragment = document.createDocumentFragment()

for (let i = 0; i < 5; i++) {
    const item = document.createElement('li')
    item.innerHTML = `项目${i}`
    // list.appendChild(item) // 操作5次dom
    fragment.appendChild(item)
}

list.appendChild(fragment) // 操作1次dom
```

### [浏览器渲染原理](/Promotion/JavaScript/BrowserRenderingPrinciples/)

<!-- @include: @src/zh/精选文章/JavaScript/浏览器/浏览器渲染原理.md#info -->

### Object.definedProperty 属性

> - **obj**：要定义属性的对象。
> - **prop**：要定义的属性名。
> - **descriptor**：指定属性的特性。
>   - **value**：属性的值。默认是 undefined。
>   - **writable**：布尔值，表示属性`是否可以被修改`。默认是 false。
>   - **enumerable**：布尔值，表示属性是否会出现在 `for...in` 循环中以及 `Object.keys` 方法中。默认是 false。
>   - **configurable**：布尔值，表示属性`是否可以被删除或修改其特性`。默认是 false。
>   - **get**：一个函数，表示当`访问属性值`时要执行的函数。默认是 undefined。
>   - **set**：一个函数，表示当`设置属性值`时要执行的函数。默认是 undefined。

### Object 静态方法 freeze()，seal(), preventExtension()的区别

> **Object.freeze()**: **`冻结`** 一个对象。对象不能被修改，**不能进行`增删改`**，**不能修改该对象已有属性的`可枚举性`、`可配置性`、`可写性`**。
> 
> **Object.seal()**: **`封闭`**一个对象。**阻止`添加新属性`** 并将**所有现有属性标记为`不可配置`**。当前属性的值只要原来是可写的就可以改变。
> 
> **Object.preventExtensions()**: **阻止`添加新属性`** 同时**防止对象的`原型被重新指定`**。

### [事件循环](/Promotion/JavaScript/BrowserProcessModel/)

<!-- @include: @src/zh/精选文章/JavaScript/浏览器/浏览器进程模型.md#info -->

### setTimeout最小执行时间

> HTML规定最小时间为4ms

### setInterval最小执行时间

> HTML规定最小时间为10ms
