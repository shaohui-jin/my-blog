---
title: 浏览器渲染原理
lang: zh-CN
date: 2024-03-27 16:04:31
permalink: /Interview/JavaScript/BrowserRenderingPrinciples/
category: 
  - JavaScript
tag: 
  - JavaScript
---


当浏览器的 **网络线程** 收到 **HTML** 文档后，会产生一个 **渲染任务**，并将其传递 **渲染主线程** 的消息队列。

在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。

![](https://shaohui-jin.github.io/picx-images-hosting/blog/EventLoop/渲染时间点.1hrzbay7up.webp "渲染时间点" =800x)

## 渲染流水线

整个渲染流程分为多个阶段，分别是: 

- HTML 解析
- 样式计算
- 布局
- 分层
- 绘制
- 分块
- 光栅化
- 画

每个阶段都有明确的输入输出，**上一个阶段的输出** 会成为 **下一个阶段的输入**。

这样，整个渲染流程就形成了一套组织严密的生产流水线。

![](https://shaohui-jin.github.io/picx-images-hosting/blog/EventLoop/渲染流水线.41xtnyj74g.webp "渲染流水线" =800x)

### 「**解析 HTML**」

解析过程中遇到 CSS 解析 CSS，遇到 JS 执行 JS。

为了提高解析效率，浏览器在开始解析前，会启动一个 **预解析** 的线程，率先下载 HTML 中的 **外部CSS** 文件和 **外部的 JS 文件**。

如果主线程解析到 **link** 位置，此时外部的 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的HTML。

这是因为 **下载** 和 **解析 CSS** 的工作是在 **预解析线程** 中进行的。这就是CSS不会阻塞 HTML 解析的根本原因。

![](https://shaohui-jin.github.io/picx-images-hosting/blog/EventLoop/Document-Object-Model.7zq74q3yr3.webp "Document-Object-Model")

![](https://shaohui-jin.github.io/picx-images-hosting/blog/EventLoop/CSS-Object-Model.2a4ut48dpd.webp "CSS-Object-Model")

[//]: # (#### 123123)

[//]: # (::: important)

[//]: # ()
[//]: # (:::)



## 知识延伸

### 为何 Script、meta等元素都是不显示的

在浏览器的默认样式中，默认了样式 `display: none`


