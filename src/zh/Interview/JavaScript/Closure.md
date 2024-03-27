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

## 简述

**闭包（Closure）** 是指一个函数包含了 **对其外部作用域中变量的引用**，
即使在**该函数外部作用域**执行完毕后，仍然可以访问这些变量。
闭包允许你在一个函数内部访问另一个函数的变量，这在许多编程语言中是一种强大的特性。

## 闭包定义应用场景

闭包是一种强大的编程工具，它可以用于许多不同的应用场景，包括数据封装、模块化编程、回调函数等。

### 保护私有变量

闭包允许你创建一个包含**私有数据**的函数，这些数据对外部是不可见的。这在模块化编程中非常有用，可以防止外部代码**直接访问**和
**修改内部状态**。

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn = counter();
fn(); // 输出 1
fn(); // 输出 2
```

### 实现数据封装

闭包可以用于创建类似于面向对象编程中的对象实例。你可以定义一个包含**内部状态**和**方法**
的函数，然后通过闭包来访问和操作这些数据。这种方式被称为"**模块模式**"：

```js
function createPerson(name) {
  let age = 0;

  return {
    getName: function () {
      return name;
    },
    getAge: function () {
      return age;
    },
    setBirthYear: function (year) {
      const nowYear = new Date().getFullYear()
      if (year <= nowYear) {
        age = nowYear - year;
      }
    }
  };
}

const person = createPerson("石怜安");
console.log(person.getName()); // 输出 "石怜安"
console.log(person.getAge()); // 输出 0
person.setBirthYear(1997);
console.log(person.getAge()); // 输出 27
```

### 实现回调函数

闭包经常用于创建回调函数，将函数作为参数传递给其他函数。这些回调函数可以**访问外部函数的局部变量**，以便在异步操作完成后执行特定的逻辑。

```js
function fetchData(url, callback) {
  // 模拟异步请求
  setTimeout(function () {
    callback(url);
  }, 1000);
}

fetchData("url:xxxx", function (resp) {
  console.log("接收报文为 " + resp);
});
```

### 实现函数工厂

闭包可以用于创建**定制的函数**，这些函数可以生成特定的行为或配置。这在某些库和框架中很常见。

```js
function createPowerFunction(number) {
  return function (x) {
    return x ** number;
  };
}

const square = createPowerFunction(2);
const cubic = createPowerFunction(3);

console.log(square(5)); // 输出 25
console.log(cubic(5)); // 输出 125
```




