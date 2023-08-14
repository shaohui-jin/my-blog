---
title: 插槽
date: 2023-02-23 09:59:47
permalink: /FrontEnd/Vue/Skill/Slot/
category:
  - VUE
tag:
  - SKILL
---

### 默认内容和扩展点

Vue中的`槽`可以有默认的内容，这使我们可以制作出更容易使用的组件。

```vue
<template>
  <button class="button" @click="$emit('click')">
    <slot>
      <!-- Used if no slot is provided -->
      Click me
    </slot>
  </button>
</template>
```

我们可以取组件的**任何部分**，将其封装在一个插槽中，在外面可以用想要的任何内容覆盖组件的该部分。

默认情况下，它仍然会按照原来的方式工作，但这样做会有了更多的选项。

```vue
<template>
  <button class="button" @click="$emit('click')">
    <slot>
      <div class="formatting">
        {{ text }}
      </div>
    </slot>
  </button>
</template>
```

现在可以用许多不同的方式使用这个组件。简单的、默认的方式，或者自定义的方式。

```vue
<!-- Uses default functionality of the component -->
<SlotButton text="Formatted text" />

<SlotButton>
  <div class="different-formatting">
    Do something a little different here
  </div>
</SlotButton>
```

### 单个作用域插槽的简写(不需要 template 标签)

限定范围的插槽非常有趣，但为了使用它们，您还必须使用许多模板标记。

> 幸运的是，有一个简写可以让我们摆脱它，但只有在我们使用`单个作用域槽`的情况下。

```vue
<template>
  // 普通写法：
  <DataTable>
    <template #header="tableAttributes">
      <TableHeader v-bind="tableAttributes" />
    </template>
  </DataTable>
  
  // 不使用 template:
  <DataTable #header="tableAttributes">
    <TableHeader v-bind="tableAttributes" />
  </DataTable>
</template>
```

### 有条件地渲染插槽

先来看如何做，然后在讨论为什么想隐藏插槽。

每个Vue组件都有一个特殊的`$slots`对象，里面有你所有的插槽。默认槽的键是`default`，任何被命名的槽都使用其称名作为键。

```vue
const $slots = {
  default: <default slot>,
  icon: <icon slot>,
  button: <button slot>
}
```

但这个 `$slots` 对象只有适用于该组件的插槽，而不是每一个定义的插槽。

拿这个定义了几个插槽的组件来说，包括几个命名的插槽。

```vue
<!-- Slots.vue -->
<template>
  <div>
    <h2>Here are some slots</h2>
    <slot />
    <slot name="second" />
    <slot name="third" />
  </div>
</template>
```

如果只对组件应用一个插槽，那么只有那个插槽会显示在我们的 `$slots` 对象中。

```vue
<template>
  <Slots>
    <template #second>
      This will be applied to the second slot.
    </template>
  </Slots>
</template>

$slots = { second: <vnode> };
```

这样就可以在组件中使用这一点来检测 `哪些插槽已经被应用` 到组件中，例如，通过隐藏插槽的包装元素。

```vue
<template>
  <div>
    <h2>A wrapped slot</h2>
    <div v-if="$slots.default" class="styles">
      <slot />
    </div>
  </div>
</template>
```

现在，应用样式的包装器 `div` 只有在我们用某些东西填充这个插槽时才会被渲染。

如果不使用 `v-if` ，那么，当没有插槽时，就会得到一个空的不必要的div。

根据div的样式，这可能会打乱我们的布局，让界面看起来很奇怪。

那么，为什么我们希望能够有条件地渲染插槽呢？

使用条件插槽的主要原因有三个:

- 当使用封装的div来添加默认样式时
- 插槽是空的
- 如果将默认内容与嵌套槽相结合

例如，在添加默认样式时，在插槽周围添加一个div

```vue
<template>
  <div>
    <h2>This is a pretty great component, amirite?</h2>
    <div class="default-styling">
      <slot />
    </div>
    <button @click="$emit('click')">Click me!</button>
  </div>
</template>
```

然而，如果父组件没有将内容应用到该插槽中，最终会在页面上渲染出一个空的div。

```vue
<div>
  <h2>This is a pretty great component, amirite?</h2>
  <div class="default-styling">
    <!-- 槽中没有内容，但这个div 仍然被渲染。糟糕 -->
  </div>
  <button @click="$emit('click')">Click me!</button>
</div>
```

解决方法就是像上面讲的一样，多个条件判断，就行啦。

### 如何监听一个插槽的变化

有时需要知道插槽内的内容**何时**发生了变化。

```vue
<template>
  <!-- 可惜这个事件不存在 -->
  <slot @change="update" />
</template>
```

不幸的是，**Vue没有内置的方法让我们检测这一点**。

然而有一次想出了一个非常干净的方法，使用`MutationObserver`来做这件事。

`MutationObserver`接口提供了监视对`DOM树`所做更改的能力。它被设计为旧的`Mutation Events`功能的替代品，该功能是`DOM3 Events`规范的一部分。

```js
export default {
  mounted() {
    // 当有变化时调用`update`
    const observer = new MutationObserver(this.update);

    // 监听此组件的变化
    observer.observe(this.$el, {
      childList: true,
      subtree: true
    });
  }
};
```
