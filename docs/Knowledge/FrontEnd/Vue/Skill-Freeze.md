---
title: 数据冻结
date: 2023-02-23 09:59:01
permalink: /FrontEnd/Vue/Skill/Freeze/
category:
  - VUE
tag:
  - SKILL
---

:::danger
vue 2.0版本会通过 `Object.defineProperty` 对数据进行劫持，遇到数组和对象必须循环遍历所有的域值才能劫持每一个属性。

vue 3.0版本会通过 `Proxy` 构造函数来进行数据劫持，来实现视图响应数据的变化
:::

然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 vue 来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间。

所以，我们可以通过 `Object.freeze` 方法来冻结一个对象，这个对象一旦被冻结，vue就不会对数据进行劫持了。

`Object.freeze()` 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。

```vue
<p v-for="item in list">{{ item.value }}</p>

export default {
  data: {
    // vue不会对list里的object做getter、setter绑定
    list: Object.freeze([
        { value: 1 },
        { value: 2 }
    ])
  },
  created () {
    // 界面不会有响应
    this.list[0].value = 100;

    // 下面两种做法，界面都会响应
    this.list = [
        { value: 100 },
        { value: 200 }
    ];
    this.list = Object.freeze([
        { value: 100 },
        { value: 200 }
    ]);
  }
}
```
