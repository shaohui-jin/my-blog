---
title: 宏任务
lang: zh-CN
date: 2024-03-12 17:09:14
permalink: /Interview/JavaScript/MacroTasks/
category:
  - JavaScript
tag:
  - JavaScript
---

## 简述

宏任务是一种**异步任务**，它的执行顺序在**微任务之后**，通常在每个事件循环迭代中**只执行一个**。

宏任务的执行顺序会**等待**当前的**微任务队列执行完毕**后，然后从宏任务队列中选择下一个宏任务执行。

## 常见宏任务

1. 事件回调函数：例如**click**、**load**、**ajax**等事件。
2. 定时器：包括**setTimeout**和**setInterval**。 
3. 动画操作：如**requestAnimationFrame**，用于执行与屏幕更新相关的操作，如文件读写、网络通信等。 
4. 用户交互的回调：如**DOM事件**，这些事件在用户与网页交互时触发。
5. UI渲染事件：包括**DOM解析**、**布局计算**、**绘制**等过程。 
6. Node 中的 **setImmediate**：在Node环境中，立即执行。 
7. i/o操作（输入输出，比如读取文件操作、网络请求） 
8. 等等

