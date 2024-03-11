---
title: 父组件里监听子组件的生命周期
date: 2023-02-23 09:57:46
permalink: /FrontEnd/Vue/Skill/@Hook/
category:
  - VUE
tag:
  - SKILL
---

### 前言

比如有父组件 `Parent` 和子组件 `Child`，如果父组件监听到子组件挂载 `mounted` 就做一些逻辑处理，常规的写法可能如下：

```vue
// Parent.vue
<template>
  <Child @mounted="() => {}"/>
</template>

<script>
export default {
  // Child.vue
  mounted() {
    this.$emit("mounted");
  }
}
</script>
```

### 技巧

此外，还有一种特别简单的方式，子组件不需要任何处理，只需要在父组件引用的时候通过`@hook`来监听即可，`@hook`也可以监听`其它的生命周期`事件,代码如下：

```vue
<template>
  <Child @hook:mounted="() => {}" />
  <Child @hook:updated="() => {}" />
</template>
```

### 源码

实现原理在`vue`源码的 `/src/core/instance/lifecycle.js`

```js
// 每个生命周期后都会调用 callHook('xxx') 如下
if (vm._isMounted && !vm._isDestroyed) {
  callHook(vm, 'beforeUpdate')
}

export function callHook (vm: Component, hook: string) {
  //...
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  //...
}
```
