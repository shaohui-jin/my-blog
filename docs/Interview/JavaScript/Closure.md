---
title: 闭包
lang: zh-CN
date: 2024-03-11 14:58:43
permalink: /Interview/JavaScript/Closure/
category:
  - JavaScript
tag:
  - JavaScript
---

**闭包（Closure）** 是指一个函数包含了 **对其外部作用域中变量的引用** ，
即使在该函数外部作用域执行完毕后，仍然可以访问这些变量。
闭包允许你在一个函数内部访问另一个函数的变量，这在许多编程语言中是一种强大的特性。

## 闭包定义应用场景

1. 保护私有变量：闭包允许你创建一个包含私有数据的函数，这些数据对外部是不可见的。这在模块化编程中非常有用，可以防止外部代码直接访问和修改内部状态。例如：

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // 输出 1
increment(); // 输出 2
```














