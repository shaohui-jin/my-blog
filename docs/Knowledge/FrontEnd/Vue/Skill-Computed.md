---
title: Computed中使用this
date: 2023-02-23 09:58:16
permalink: /FrontEnd/Vue/Skill/Computed/
category:
  - VUE
tag:
  - SKILL
---

我们平时在 `computed` 属性中可以通过 `this.xxx` 去拿 `data` 里面的数据和 `methods` 里面的方法，

或许还会通过 `this.$store` 去拿 `vuex` 的 `state` 和 `commit` 等，

甚至，还会通过 this.`$route` 去获取路由里面的数据。 

其实，我们可以避免这些丑陋的this，它甚至会给我们带来看不见的性能问题。

实现上，我们通过this能访问到的数据，在 `computed` 的 `第一个参数` 上都能 `解构` 出来。

```vue
<script>
export default {
  computed: {
    a({$attrs,$route,$store,$listeners,$ref}){
      // 还能结构很多属性，可自行打印看看
      return
    }
  }
}
</script>
```
