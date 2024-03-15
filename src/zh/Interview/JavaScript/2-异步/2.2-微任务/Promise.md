---
title: Promise, Async Await
lang: zh-CN
date: 2024-03-12 16:38:12
permalink: /Interview/JavaScript/Promise/
category:
  - JavaScript
tag:
  - JavaScript
---

## 简述

**Promise** 和 **async/await** 是JavaScript中用于处理异步操作的两种不同的机制，它们都旨在让异步代码 **更加可读** 和 **易于管理**。

## Promise

**Promise** 是一种 **异步编程模式**，它提供了一种更 **结构化** 的方式来处理异步操作。一个 Promise 表示一个异步操作的最终 **完成** 或 **失败**，以及它的结果值或失败原因。

### Promise 状态
- pending（**进行中**）
- fulfilled（**已成功**）
- rejected（**已失败**）

一旦 Promise 进入 **fulfilled** 或 **rejected**状态，它就不会再改变状态。

Promise 使用 **.then()** 方法来注册回调函数，当异步操作成功时执行 **then()** 方法的第一个回调函数，当异步操作失败时执行第二个回调函数。

Promise 链允许你按顺序执行一系列的异步操作，**每个操作都返回一个 Promise**，这样可以更好地控制异步代码的流程。

```js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

## async/await

**async/await** 是基于 Promise 的**语法糖**，它提供了一种更像 **同步代码** 的方式来 **处理异步操作**。

1. async 函数返回一个 Promise，
2. await 关键字用于暂停函数的执行，等待一个 Promise 的解决(这样可以在代码中像编写同步代码一样使用异步操作)。

> async 函数的执行会在遇到第一个 await 表达式时暂停，然后等待该表达式的 Promise 解决。之后，async 函数会继续执行，直到遇到下一个 await 表达式或函数结束。

```js
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });
}

async function getDataAndLogger() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getDataAndLogger();
```

## 总结

Promise 是一种 **更底层的异步处理机制**，适用于处理 **单个异步操作**，而 async/await 是基于 Promise 的更高级、更易读的语法糖，适用于编写更具可读性的异步代码。
选择使用哪种方式取决于你的项目需求和个人偏好，但在现代 JavaScript 中，**async/await** 成为了处理异步操作的首选方式，因为它更容易理解和维护。

