---
title: 百叶窗
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /FrontEnd/CssComponent/Shutters/
category: 
  - CSS
tag: 
  - CSS
---

::: vue-demo
```html
<template>
  <div id="accordion" class="accordion">
    <div class="accordion-box" v-for="(item, index) in list">
      <input type="checkbox" name="select" class="accordion-select" />
      <div class="accordion-title"><span>{{ item.title }}</span></div>
      <div class="accordion-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Shutters",
    data() {
      return {
        list: [
          { title: 'Title1', content: 'Content1' },
          { title: 'Title2', content: 'Content2' },
          { title: 'Title3', content: 'Content3' }
        ]
      }
    }
  }
</script>

<style>
  /* 整体布局 */
  .accordion {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    /*border-color: #dedede;*/
    /*border-style: solid;*/
    /*border-width: 1px;*/
    border: 1px solid #dedede;
    border-radius: 8px;
    /*height: auto;*/
  }

  .accordion-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* select 和 title 是放在同一行，先设置公用，在单独设置 */
  .accordion-title,
  .accordion-select  {
    background-color: #ffffff;
    color: #7f8787;
    width: 100%;
    height: 65px;
    font-size: 15px;
  }

  .accordion-select {
    cursor: pointer;
    /*margin: 0;*/
    opacity: 0;
    z-index: 1;
    /* 推上去，select不需要高度 */
    margin-bottom: -65px;
    margin-right: 0;
    margin-top: 0;
  }

  accordion-select:hover + .accordion-title,
  .accordion-select:checked + .accordion-title {
    background-color: #ffffff;
  }

  .accordion-title {
    position: relative;
    border: 1px solid transparent;
    border-bottom-color: rgb(234, 234, 234);
  }

  .accordion-title span {
    bottom: 0;
    line-height: 65px;
    box-sizing: border-box;
    display: block;
    position: absolute;
    white-space: nowrap;
    width: 100%;
    padding: 0 33px;
    transform: rotate(0deg);
    -ms-writing-mode: lr-tb;
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);
  }

  .accordion-content {
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    transition: margin 0.3s ease 0.1s;
    background-color: #f7f7f7;
    color: #7f8787;
    height: 280px;
    margin-bottom: -280px;
    margin-right: 0;
    padding: 30px;
    width: 100%;
  }

  .accordion-select:checked + .accordion-title + .accordion-content  {
    margin-bottom: 0;
    margin-right: 0;
  }
</style>
```
:::
