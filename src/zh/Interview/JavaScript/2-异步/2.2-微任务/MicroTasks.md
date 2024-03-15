---
title: 微任务
lang: zh-CN
date: 2024-03-12 16:38:12
permalink: /Interview/JavaScript/MicroTasks/
category:
  - JavaScript
tag:
  - JavaScript
---

## 简述

微任务是一种**异步任务**，它的执行顺序在**宏任务之后**，在每个事件循环迭代中**立即执行**。

微任务通常比宏任务**更高优先级**，因此它们会在当前宏任务执行完毕后**立即执行**，而不会等待下一个宏任务。

## 常见微任务

1. promise 的回调：在promise对象被**resolve**或**reject**后，会执行的回调函数。
2. Node 中的 **process.nextTick**：在Node环境中，用于在下一个事件循环中执行代码的函数。
3. 对 Dom 变化监听的 **MutationObserver**：用于监听DOM元素的变动，并在变动发生时执行的异步监听器。
4. **Object.observe**：⽤来实时监测js中对象的变化

## 使用场景

微任务通常用于执行一些高优先级的任务，比如**更新UI**，**处理Promise的结果**等。



