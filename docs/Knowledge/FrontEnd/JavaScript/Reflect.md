---
title: Reflect
lang: zh-CN
date: 2023-02-28 16:46:13
permalink: /FrontEnd/JavaScript/Reflect/
icon: reflect
category: 
  - JavaScript
tag: 
  - JavaScript
---

### Object.keys() 和 Reflect.ownKeys() 差别

```js
var obj = {
	a: 1,
	b: 2
}
Object.defineProperty(obj, 'method', {
	value: function () {
	    alert("Non enumerable property")
	},
	enumerable: false
})

console.log(Object.keys(obj))
// ["a", "b"]
console.log(Reflect.ownKeys(obj))
// ["a", "b", "method"]
```

从结果上看出:

- Object.keys()返回属性key，但不包括不可枚举的属性
- Reflect.ownKeys()返回所有属性key

::: info 从网上搜索资料所得

Object.keys() :

相当于返回属性数组

Reflect.ownKeys() :

相当于
Object.getOwnPropertyNames(target) concat(Object.getOwnPropertySymbols(target)

注意:
getOwnPropertyNames()

方法: 返回所有属性的数组

Object.getOwnPropertySymbols()

方法: 返回所有符号属性直接发现在给定的对象

:::