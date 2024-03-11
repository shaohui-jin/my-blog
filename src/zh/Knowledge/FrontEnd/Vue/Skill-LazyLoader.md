---
title: 懒加载
date: 2023-02-23 09:59:37
permalink: /FrontEnd/Vue/Skill/LazyLoader/
category:
  - VUE
tag:
  - SKILL
---

### 路由懒加载（能让你首次加载更快）

`路由懒加载`可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行。

举个栗子🌰，如果这样写，加载的时候会全部都加载进来。

```js
const router = new VueRouter({
  routes:[
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About }
  ]
})
```

所以，应该避免上面的写法，尽量使用懒加载。

路由的懒加载可以分为以下`三种`写法。

- Vue异步组件
- es6的import
- webpack提供的require.ensure()

```js
// 1、Vue异步组件
VueRouter({
  routes:[
    {
      path: '/about',
      name: 'About',
      component: resolve => reqire(['path路径'], resolve)
    }
  ]
})

// 2、es6的import
VueRouter({
  routes:[
    {
      path: '/about',
      name: 'About',
      component: () => import('path路径')
    }
  ]
})

// 3、webpack提供的require.ensure()
VueRouter({
  routes:[
    {
      path: '/about',
      name: 'About',
      component: r => require.ensure([],() =>  r(require('path路径')), 'demo')
    }
  ]
})
```

### 组件懒加载（按需加载）

举个栗子🌰，如果这样写，加载的时候会全部都加载进来。

```vue
<script>
import ChildFirst from './components/ChildFirst'
import ChildSecond from './components/ChildSecond'
export default {
  //在vue的components中
  components: {
    ChildFirst,
    ChildSecond
  }
}
</script>
```

所以，应该避免上面的写法，尽量使用组件懒加载。

```vue
<script>
export default {
  //在vue的components中
  components: {
    BureauDetail: () => import('./components/ChildFirst'),
    addBureau: () => import('./components/ChildSecond')
  },
}
</script>
```

::: tip
异步组件还有一种比较完善的写法
```vue
<script>
export default {
  components:{
    ChildFirst:()=>({
      component: import(/* webpackChunkName: "Async" */ './Async'),
      delay:200, // 延迟几毫秒，默认200
      timeout:3000, // 加载几毫米之后就超时，触发error组件
      loading: import(/* webpackChunkName: "LoadingComponent" */ './LoadingComponent'), // 组件未加载回来前显示
      error: import(/* webpackChunkName: "ErrorComponent" */ './ErrorComponent') // 组件超时时显示
    })
  }
}
</script>
```
:::



