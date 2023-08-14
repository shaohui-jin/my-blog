---
title: 流光按钮
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /FrontEnd/CssComponent/StreamerButton/
category: 
  - CSS
tag: 
  - CSS
---

::: vue-demo
```html
<template>
  <div class="button-body">
    <a class="streamer-button">StreamerButton</a>
  </div>
</template>

<script>
  export default {
    name: "StreamerButton"
  }
</script>

<style>
  .button-body {
    /* 弹性布局 让页面元素垂直 + 水平居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 让页面占据屏幕总高 */
    height: 100px;
    /*background-color: #000;*/
  }

  .streamer-button {
    /*相对定位*/
    position: relative;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*去除下划线*/
    text-decoration: none;
    /*文字大写*/
    text-transform: uppercase;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    /*圆角*/
    border-radius: 25px;
    /*背景渐变色*/
    background-image: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
    /*背景渐变色大小*/
    background-size: 400%;
    z-index: 1;
  }

  .streamer-button::before {
    content: "1";
    position: absolute;
    top: -5px;
    buttom: -5px;
    left: -5px;
    right: -5px;
    /*圆角*/
    border-radius: 25px;
    /*背景渐变色*/
    background-image: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
    /*背景渐变色大小*/
    background-size: 400%;
    z-index: -1;
    /*模糊 产生发光效果*/
    filter: blur(10px);
  }

  .streamer-button:hover {
    /*动画 名称 时间  无线次播放*/
    animation: sun 3s infinite;
  }

  .streamer-button:hover::before {
    animation: sun 3s infinite;
  }

  @keyframes sun {
    100% {
      /*背景位置*/
      background-position: -400% 0;
    }
  }
</style>
```
:::
