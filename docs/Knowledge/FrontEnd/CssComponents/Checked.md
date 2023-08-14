---
title: 打钩动画
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /FrontEnd/CssComponent/Checked/
category: 
  - CSS
tag: 
  - 很烂的CSS
---

::: vue-demo
```vue
<template>
  <div class="checked-body">
    <input type="checkbox" checked/>
    <svg width="400" height="400">
      <circle class="circle" fill="none" r="190" stroke="#68e534" stroke-width="10" cx="200" cy="200" stroke-linecap="round" transform="rotate(-90 200 200)" />
      <polyline class="tick" fill="none" stroke="#68e534" stroke-width="24" points="88,214 173,284 304,138" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <h2>Success</h2>
  </div>
</template>
<script>
  export default {
    name: "Checked"
  }
</script>

<style>
  .checked-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-family: Helvetica;
    margin-top: 40px;
    font-size: 36px;
    color: #333;
    opacity: 0;
  }

  input[type='checkbox']:checked + svg .circle {
    animation: circle .8s ease-in-out;
    /* 停留在最后一帧 */
    animation-fill-mode: forwards;
  }

  input[type='checkbox']:checked + svg .tick {
    animation: tick .8s ease-in-out;
    /* 停留在最后一帧 */
    animation-fill-mode: forwards;
    animation-delay: .8s;
  }

  input[type='checkbox']:checked ~ h2 {
    animation: h2 .6s ease-in-out;
    /* 停留在最后一帧 */
    animation-fill-mode: forwards;
    animation-delay: 1.2s;
  }

  .circle {
    /* stroke-dasharray 设置为圆周长，即显示的一整个圆后偏移的部分为空白，产生绘图效果*/
    stroke-dasharray: 1194;
    /* 想要设置顺时针，dashoffset值 1194 -> 0 逆时针则 1194 -> 2388 */
    stroke-dashoffset: 1194;
  }

  /* polyline 同理 */
  .tick {
    stroke-dasharray: 350;
    stroke-dashoffset: 350;
  }

  @keyframes circle {
    from {
      stroke-dashoffset: 1194;
    }
    to {
      stroke-dashoffset: 2388;
    }
  }

  @keyframes tick {
    from {
      stroke-dashoffset: 350;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes h2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
```

:::
