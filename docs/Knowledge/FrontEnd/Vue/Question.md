---
title: Vue相关面试问题
comment: false
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /FrontEnd/Vue/Question/
category: 
  - Question
tag:
  - VUE
---

## 常问问题

### vue-router实现原理的histroy相关的api
### vue项目想要改变element-ui的组件内部的样式，默认情况下style加了scope无法修改，需怎么做
### v-if 和 v-for优先级

::: details

**v-if和v-for是开发中经常会遇到的2个指令，那么在使用的过程中，二者如果同时存在同一个标签上，谁的优先级会更高一点呢？**

那么我们从源码的角度去看他，源码位置： compiler/codegen/index.js

在genElement方法中，我们可以看到一些if else的判断

```javascript
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    let code
    if (el.component) {
      code = genComponent(el.component, el, state)
    } else {
      let data
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state)
      }

      const children = el.inlineTemplate ? null : genChildren(el, state, true)
      code = `_c('${el.tag}'${
        data ? `,${data}` : '' // data
      }${
        children ? `,${children}` : '' // children
      })`
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code)
    }
    return code
  }
```

> 处理for循环是处于if的上面的，所以我们由此可以判定v-for的优先级是高于v-if的。

我们经常会遇见这种情况，在v-for的时候，在数组中会有一些需要进行v-if的判断，这种情况下，我们如果先使用computed将不需要渲染的项过滤出来，那么在进行v-for的时候，循环的就只是需要渲染的项，这也是提升vue性能的一种方式。

:::

### vue渐进式

:::details

**什么是渐进式**

先使用Vue的核心库，再根据你的需要的功能再去逐渐增加加相应的插件。

- 渐进式代表的含义是：主张最少，
- 渐进式的含义，我的理解是：没有多做职责之外的事。

Vue的核心的功能，是一个视图模板引擎，但这不是说Vue就不能成为一个框架。

在声明式渲染（视图模板引擎）的基础上，我们可以通过添加组件系统、客户端路由、大规模状态管理来构建一个完整的框架。

更重要的是，这些功能相互独立，你可以在核心功能的基础上任意选用其他的部件，不一定要全部整合在一起。

可以看到，所说的“渐进式”，其实就是Vue的使用方式，同时也体现了Vue的设计的理念。

:::

### 优雅降级和渐进增强

:::details

**优雅降级**：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会针对旧版本的IE进行降级处理了,使之在旧式浏览器上以某种形式降级体验却不至于完全不能用。

如：border-shadow

**渐进增强**：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新版本浏览器才支持的功能,向页面增加不影响基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。

如：默认使用flash上传，但如果浏览器支持 HTML5 的文件上传功能，则使用HTML5实现更好的体验；

:::

## 实例选项

### extend(s)与mixins差异

:::details

- **Mixins 的使用方法：**

  首先，我们先定义一个Mixins混入类对象。

  ```javascript
  export const myMixin = {
  	data(){
  		return {
  			num:1
  		}
  	},
  	created(){
  		this.hello();
  	},
  	methods:{
  		hello(){
  			console.log('hello from mixin');
  		}
  	}
  }
  ```

  然后，将对象混合到当前组件中：

  ```vue
  <template>
  	<div>
  		组件1
  	</div>
  </template>
  <script>
  	import { myMixin  } from '@/assets/mixin.js'
  	export default{
  		mixins:[ myMixin ]
  	}
  </script>
  ```

  ​		Mixins选项接收一个混入对象的数组（即可以多个）。这些混入对象可以像正常实例对象一样包含实例选项，这些选项将会被合并到组件的选项中。

  ​		其中，有以下几点可以便于理解Mixins

  1. 应用场景：在项目中，如果我们需要提取公用的数据或者通用的方法，并且这些数据与方法不需要组件间进行维护，就可以使用Mixins
  
  2. 特点：方法和参数在各组件中不共享
  
     当值为对象的选项，如 **methods,components** 等，选项会被合并，键冲突的时候组件会覆盖混入对象
     
     当值为函数的选项，如 **created,mounted** 等，就会被合并调用，混入对象钩子函数会比组件里的钩子函数先调用
     
  3. 与vuex的区别
     vuex：用来做状态管理的（即全局），里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。
     Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。
  
  4. 与公共组件的区别
     组件：父组件中引入子组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。
     Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。
  
  5. Mixins中的异步请求
     当混合里面包含异步请求函数，而我们又需要在组件中使用异步请求函数的返回值时，我们应直接返回异步函数（即 new Promise）
  
- **extends 的使用方法：**

首先，我们先定义一个extend对象。

```javascript
//只能使用一个extends对象，多个无效，extends会先于mixins执行
export const myExtends = {
    methods: {
        hello() {
            console.log("hello extends");
        }
    },
    beforeCreate(){
        console.log("extends的beforeCreated");
    },
    created() {
        this.hello();
    }
}
```

然后，将对象混合到当前组件中：

```vue
<template>
<div>
    home
</div>
</template>
<script>
import { myExtends } from '../util/test.js'
export default {
name: "Home",
 data () {
   return {
   };
 },
 beforeCreate(){
      console.log("组件的beforeCreated");
 },
 created(){
     console.log("1212");
 },
 extends: myExtends  // 使用extends
}
</script>
<style lang="css" scoped>
</style>
```

其中，有以下几点可以便于理解extends

1. extends和Mixins类似，通过暴露一个extends对象到组件中使用。
2. extends会比Mixins先执行。执行顺序：extends > Mixins> 组件
3. extends只能暴露一个extends对象，暴露多个extends不会执行

- **extend 的使用方法：**

vue.extend()方法其实是vue的一个构造器，继承自vue，可以通过extent拓展全局组件，首先我们新建一个 hello.vue
    
```vue
<!--hello.vue-->
<template>
  <div>{{text}}</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      text: ''
    }
  }
}
</script>
```

然后，我们在同级新建一个 hello.js

```javascript
// hello.js
import Vue from 'docs/question/vue'
import HelloTemplate from './hello.vue'

// 使用extend方法创建vue的子类
const HelloConstructor = Vue.extend(HelloTemplate);

// 使用这个方法调用hello组件
function Hello(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      text: options
    }
  }

  // 实例化子组件，然后获取到DOM结构并挂载到body上
  const helloInstence = new HelloConstructor({data: options});
  helloInstence.vm = helloInstence.$mount();
  console.log(helloInstence.vm)
  document.body.appendChild(helloInstence.vm.$el);
}
export default Hello;
```

最后在main.js引入

```js
import Hello from './src/components/hello/hello'
Hello({
	text:'hello world'
})
```
    
- **extend,extends, Mixins 区别**

Vue.extend创建组件的构造函数，为了复用

Mixins 可以混入多个Mixin ，extends只能继承一个

Mixins 类似于面向切面的编程（AOP），extends类似于面向对象的编程

优先级Vue.extend>extends>Mixins 

:::

### created与activated差异

:::details

- keep-alive 有什么作用？

使用 <**keep-alive**> 会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子中获取数据的任务。
被包含在 <**keep-alive**> 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated

- keep-alive 在vue的生命周期中赋予了什么新的钩子？

activated：在组件第一次渲染时也会被调用，之后每次keep-alive激活时被调用。

deactivated：在组件被停用时调用。

注意：只有组件被 keep-alive 包裹时，这两个生命周期才会被调用，如果作为正常组件使用，是不会被调用，以及在 2.1.0 版本之后，使用 exclude 排除之后，就算被包裹在 <**keep-alive**> 中，这两个钩子依然不会被调用！另外在服务端渲染时此钩子也不会被调用的。

- 什么时候获取数据？

当引入 keep-alive 的时候，页面第一次进入，钩子的触发顺序created -> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。

我们知道 keep-alive 之后页面模板第一次初始化解析变成HTML片段后，再次进入就不在重新解析而是读取内存中的数据，即只有当数据变化时，才使用VirtualDOM进行diff更新。有需要的话，页面进入的数据获取应该在activated中也放一份。数据下载完毕手动操作DOM的部分也应该在activated中执行才会生效。

所以，有需要的话，应该activated中留一份数据获取的代码，或者不要created部分，直接将created中的代码转移到activated中。


**注意**
> created()：在创建vue对象时，当html渲染之前就触发；但是注意，全局vue.js不强制刷新或者重启时只创建一次，也就是说，created()只会触发一次；
>
> activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等

:::

### vue的computed跟普通的函数有什么区别吗，computed怎么实现缓存的，有看过源码吗


## webpack模块
### webpack中 bundle chunk module 有什么区别
### webpack中 plugin loader 有什么区别
