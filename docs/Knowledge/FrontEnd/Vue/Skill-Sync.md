---
title: 父组件通信
date: 2023-02-23 10:00:19
permalink: /FrontEnd/Vue/Skill/Sync/
category:
  - VUE
tag:
  - SKILL
---

### 前言

vue中我们经常会用 `v-bind(缩写为:)` 给子组件传入参数，然后子组件 `emit` 事件去改变父组件的状态。

或者我们会给子组件传入一个函数，子组件通过调用传入的函数来改变父组件的状态。

举个例子🌰

```vue
<template>
  //父组件 给子组件传入一个函数
  <MyFooter :age="age" @setAge="(res) => age = res" />
</template>
<script>
export default {
  data() {
    return {
      age: 1, // 父组件的变量
    }
  },
  //子组件 通过调用这个函数来实现修改父组件的状态。
  mounted () {
    console.log(this.$emit('setAge', 1234567));
  }
}
</script>
```

### 技巧

::: tip

`.sync`提供了一种与父组件沟通的思路！ 你如果只是单纯的在`子组件`当中修改`父组件`的某个数据时，建议使用 `sync` ，简单，快捷，不需要在传一个自定义方法来接收了
:::
现在只需要使用.sync就可以轻松更新赋组件的值

```vue
<template>
  //父组件 将age传给子组件并使用.sync修饰符。
  <MyFooter :age.sync="age"></MyFooter>
</template>
<script>
export default {
  //子组件 触发事件
  mounted () {
    console.log(this.$emit('update:age', 1234567));
  }
}
</script>
```
