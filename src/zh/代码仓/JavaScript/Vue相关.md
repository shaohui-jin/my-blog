---
title: Vue相关
lang: zh-CN
date: 2024-05-18 18:54:31
permalink: /Tips/JavaScript/Vue/
category:
  - JavaScript
tag:
  - Tips
---

### 路由生成器

> `import.meta.glob`: 属性返回一个字符串，表示当前模块所在的文件夹中的文件名的模式。这个字符串使用 glob 语法表示，可以使用通配符来匹配文件名。

```js {2,4,6,7}
// 寻找views文件夹中的所有的page.js
const pages = import.meta.glob('../views/**/page.js', { eager: true, import: 'default' })
// 寻找所有组件，为后期component做准备
const pageComps = import.meta.glob('../views/**/index.vue', { eager: true })
const routes = Object.entries(pages).map(([path, meta]) => {
  path = path.replace('../views', '').replace('/page.js', '')
  path = path || '/'
  const name = path.split('/').filter(Boolean).join('-') || 'index'
  return {
    path,
    name,
    // component: () => import(''), 
    meta
  }
})

export const router = createRouter({
  history: createWebHistory(),
  routes
})
```

