import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as r,c,a as e,e as n,f as s,b as i}from"./app-BnVGlo90.js";const t={},o=i(`<div class="hint-container info"><p class="hint-container-title">Tips</p><p>具体文件是 <code>shared.cjs.prod.js</code> 和 <code>shared.cjs.js</code> 文件下针对源码中的工具函数和较冷门知识点的提取分析。</p><p>vue 版本为 3.2.31</p></div><h2 id="常量定义" tabindex="-1"><a class="header-anchor" href="#常量定义"><span>常量定义</span></a></h2><h3 id="empty-obj、empty-arr-对象" tabindex="-1"><a class="header-anchor" href="#empty-obj、empty-arr-对象"><span>EMPTY_OBJ、EMPTY_ARR 对象</span></a></h3><p>typescript是通过 <code>readonly</code> 的方式来定义一个冻结对象的类型的， <code>readonly</code> 是只读修饰符。 <code>Object.freeze</code> 冻结对象属性功能。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export declare const EMPTY_OBJ: {
    readonly [key: string]: any;
} = __DEV__ ? Object.freeze({}) : {}


export declare const EMPTY_ARR: {
    readonly [key: string]: any;
} = __DEV__ ? Object.freeze([]) : []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let emptyObj = Object.freeze({
  props: {
    name: &#39;jack&#39;,
    age: 12
  },
  total: 1000
})
// 无法修改第一层属性
emptyObj.total = 0
console.log(&#39;emptyObj.total&#39;, emptyObj.total)
// 可以修改第二层对象的属性
emptyObj.props.age = 13
console.log(&#39;emptyObj.props.age&#39;, emptyObj.props.age)
// 无法新建本不存在的属性
emptyObj.props2 = {}
console.log(&#39;emptyObj.props2&#39;, emptyObj.props2)


let arr = Object.freeze([])
let arr1 = Object.freeze([{ name: &#39;jack&#39; }])
// arr.push(1) // 无法添加元素, 会直接报错
arr.length = 3
console.log(&#39;arr&#39;, arr)
// 对象内的属性可以修改
arr1[0].name = &#39;rose&#39;
console.log(&#39;arr1[0].name&#39;, arr1[0].name) // rose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noop-空函数" tabindex="-1"><a class="header-anchor" href="#noop-空函数"><span>NOOP 空函数</span></a></h3><p>定义一个空函数，而不是 <code>function () {}</code> 这样定义，是为了方便压缩。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const NOOP = () =&gt; {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let obj = function getName (cb =&gt; NOOP) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="no-返回false常量函数" tabindex="-1"><a class="header-anchor" href="#no-返回false常量函数"><span>NO 返回false常量函数</span></a></h3><p>永远返回 <code>false</code> 的函数, 就是一个返回 <code>boolean</code> 值的函数的备选项</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const NO = () =&gt; false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义"><span>函数定义</span></a></h2><h3 id="totypestring-复杂数据类型区分" tabindex="-1"><a class="header-anchor" href="#totypestring-复杂数据类型区分"><span>toTypeString 复杂数据类型区分</span></a></h3><p><code>toTypeString</code> 主要是返回数据的类型，使用了 <code>Object.prototype.toString.call</code> 的方法，实现了对复杂数据类型的区分</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const objectToString = Object.prototype.toString;
const toTypeString = (value) =&gt; objectToString.call(value);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let arr = []
let obj = {}
let map = new Map()
let set = new Set()
console.log(toTypeString(obj)) // [object Object]
console.log(toTypeString(arr)) // [object Array]
console.log(toTypeString(map)) // [object Map]
console.log(toTypeString(set)) // [object Set]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="torawtype-取出数据类型" tabindex="-1"><a class="header-anchor" href="#torawtype-取出数据类型"><span>toRawType 取出数据类型</span></a></h3><p>这里需要注意的是前面的 <code>toTypeString</code> 返回了 <code>[object xxType]</code>，现在则是使用 <code>slice</code> 方法来将 <code>xxType</code> 取出</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const toRawType = (value: unknown): string =&gt; {
  // extract &quot;RawType&quot; from strings like &quot;[object RawType]&quot;
  return toTypeString(value).slice(8, -1)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const objectToString = Object.prototype.toString
const toTypeString = (value) =&gt; objectToString.call(value)

const toRawType = (value) =&gt; toTypeString(value).slice(8, -1)

const str = toRawType(&#39;&#39;)
console.log(&#39;str&#39;, str) // &#39;String&#39;
const num = toRawType(123)
console.log(&#39;num&#39;, num) // &#39;Number&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ison-事件名on判断" tabindex="-1"><a class="header-anchor" href="#ison-事件名on判断"><span>isOn 事件名on判断</span></a></h3><p>利用正则来判断当前的事件名是否是 <code>on + EventName</code> 的格式</p><p>注意: <code>^</code> 在正则开头表示首位占位符，其他地方都是非的含义，<code>[^a-z]</code> 表示不是 a 到 z 的字母</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const onRE = /^on[^a-z]/
export const isOn = (key: string) =&gt; onRE.test(key)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ismodellistener-事件名onupdate判断" tabindex="-1"><a class="header-anchor" href="#ismodellistener-事件名onupdate判断"><span>isModelListener 事件名onUpdate判断</span></a></h3><p>检验监听事件名是否是<code>onUpdate:</code>开头</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isModelListener = (key: string) =&gt; key.startsWith(&#39;onUpdate:&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>startsWith</code> 是 <code>es6</code> 当中的方法，可以获取一个字符串是否以指定的子字符串开头，返回Boolean类型</p></blockquote><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>console.log(isModeListener(&#39;onUpdate:change&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="extend-合并对象" tabindex="-1"><a class="header-anchor" href="#extend-合并对象"><span>extend 合并对象</span></a></h3><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const extend = Object.assign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let obj1 = {name: &#39;jack&#39;}
let obj2 = {name: &#39;rose&#39;, age: 18}

let obj = extend(obj1, obj2)
console.log(&#39;obj&#39;, obj) // { name: &#39;rose&#39;, age: 18 }
// 注意, 原本的obj1也会被改变
console.log(&#39;obj1&#39;, obj1) // { name: &#39;rose&#39;, age: 18 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove-删除数组元素" tabindex="-1"><a class="header-anchor" href="#remove-删除数组元素"><span>remove 删除数组元素</span></a></h3><p>删除数组中的某个元素，但是使用splice方法，其实是比较消耗性能的。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const remove = &lt;T&gt;(arr: T[], el: T) =&gt; {
  const i = arr.indexOf(el)
  if (i &gt; -1) {
    arr.splice(i, 1)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let arr = [1, 2, 3]
remove(arr, 2) // [ 1, 3 ] &#39;arr数据&#39;
console.log(arr, &#39;arr数据&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><p>axios源码中 <code>lib/core/interceptorManager.js</code> , 使用以下的方式删除数组中的元素:</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

// 第46行
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become \`null\` calling \`eject\`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="hasown-是否包含属性" tabindex="-1"><a class="header-anchor" href="#hasown-是否包含属性"><span>hasOwn 是否包含属性</span></a></h3><p>判断一个属性是否是一个对象本身的属性，利用了 <code>Object.prototype.hasOwnProperty.call</code> 的形式来实现功能</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Vue3 的写法
 */
export const hasOwn = (
  val: object,
  key: string | symbol
): key is keyof typeof val =&gt; hasOwnProperty.call(val, key)

/**
 * Vue3.2 的写法
 */
export const hasOwn = (
  val: object,
  key: string | symbol
): key is never =&gt; hasOwnProperty.call(val, key)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><ul><li><code>is</code> 关键字：它被称为类型谓词，用来判断一个变量属于某个接口或类型，比如：</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const isNumber = (val: unknown): val is number =&gt; typeof val === &#39;number&#39;
const isString = (val: unknown): val is string =&gt; typeof val === &#39;string&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>keyof</code> 关键字：用于获取某种类型的所有键，其返回类型是联合类型，比如：</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>interface Person {
    name: string;
    age: number;
}
type K = keyof Person; // &quot;name&quot; | &quot;age&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>typeof</code> 关键字：js 中的 typeof 只能获取几种类型，而在 ts 中 typeof 用来获取一个变量声明或对象的类型，比如：</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>interface Person {
  name: string;
  age: number;
}
 
const sem: Person = { name: &#39;semlinker&#39;, age: 30 };
type Sem = typeof sem; // -&gt; Person
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="isarray-是否数组" tabindex="-1"><a class="header-anchor" href="#isarray-是否数组"><span>isArray 是否数组</span></a></h3><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isArray = (arg: any) : arg is any[] =&gt; Array.isArray(arg);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const fakeArray = { __proto__: Array.prototype, length: 0 }

console.log(&#39;isArray(fakeArray)&#39;, isArray(fakeArray)) // false
console.log(&#39;fakeArray instanceof Array&#39;, fakeArray instanceof Array) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ismap-isset-是否map-set" tabindex="-1"><a class="header-anchor" href="#ismap-isset-是否map-set"><span>isMap/isSet 是否Map/Set</span></a></h3><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isMap = (val: unknown): val is Map&lt;any, any&gt; =&gt; toTypeString(val) === &#39;[object Map]&#39;
export const isSet = (val: unknown): val is Set&lt;any&gt; =&gt; toTypeString(val) === &#39;[object Set]&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>Map</span></a></h4><p>Map 是一种 <code>es6</code> 提供的新的一种键值对数据结构的数据类型，相比于对象，它的键不同于对象那种只能是字符串的键，可以是各种类型。</p><ul><li>基础方法</li></ul><blockquote><p><code>get</code> 获取元素， <code>set</code> 新增元素成员， <code>has</code> 是否包含某元素， <code>delete</code> 删除元素成员， <code>clear</code> 清空所有元素， <code>Array.from</code> 转为普通的二维数组</p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// 1. 定义一个函数作为键
let fn = function func() { console.log(&#39;this is function&#39;) }
let m = new Map([[&#39;jack&#39;, 100], [fn, &#39;我是函数的值&#39;]]) // 形式上, Map类型是二维数组

// 2. get方法获取元素
let result = m.get(fn)
console.log(&#39;func -&gt; result&#39;, result)
// func -&gt; result 我是函数的值

// 3. 通过Array.from可以转为普通的二维数组
let arr = Array.from(m)
console.log(&#39;func -&gt; arr&#39;, arr)
// func -&gt; arr [ [ &#39;jack&#39;, 100 ], [ [Function: func], &#39;我是函数的值&#39; ] ]

// 4. set方法新增元素成员
let obj = { name: &#39;jack&#39; }
m.set(obj, &#39;28岁了都&#39;)
console.log(&#39;set新元素之后&#39;, m)
// set新元素之后 Map {
// &#39;jack&#39; =&gt; 100,
//  [Function: func] =&gt; &#39;我是函数的值&#39;,
//  { name: &#39;jack&#39; } =&gt; &#39;28岁了都&#39; }

// 5. has 判断是否包含某元素
m.has(fn)
console.log(&#39;func -&gt; m.has(fn)&#39;, m.has(fn)) // true

// 6. delete删除元素成员
m.delete(obj)
console.log(&#39;删除后的结果&#39;, Array.from(m))
// 删除后的结果 [ [ &#39;jack&#39;, 100 ], [ [Function: func], &#39;我是函数的值&#39; ] ]

// 7. clear清空所有元素
m.clear()
console.log(&#39;清空后的结果&#39;, m)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>遍历相关的方法</li></ul><blockquote><p><code>keys</code> 返回包含映射中 <strong>键</strong> 的迭代器对象，<code>entries</code> 返回包含映射中的 <strong>键值</strong> 的迭代器对象，<code>values</code> 返回包含映射中的 <strong>值</strong> 的迭代器对象，<code>forEach</code></p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let fn = function func() { console.log(&#39;this is function&#39;) }
let m = new Map([[&#39;jack&#39;, 100], [fn, &#39;我是函数的值&#39;]])
m.forEach(item =&gt; {
  console.log(&#39;forEach -&gt; item&#39;, item)
})
/**
 * forEach -&gt; item 100
 * forEach -&gt; item 我是函数的值
 */


// 1. keys 方法, 返回包含映射中键的迭代器对象
let it = m.keys()
console.log(&#39;it&#39;, it) // it [Map Iterator] { &#39;jack&#39;, [Function: func] }
console.log(it.next().value) // jack
console.log(it.next().value) // [Function: func]
console.log(it.next().value) // undefined
// 或者
for (let key of it) {
  console.log(&#39;for...of... -&gt; key&#39;, key)
}
/**
 * 
  for...of... -&gt; key jack
  for...of... -&gt; key function func() {
    console.log(&#39;this is function&#39;);
  }
 */

// 2. entries 方法, 返回包含映射中的键值的迭代器对象
let it = m.entries()
console.log(it.next().value) // [ &#39;jack&#39;, 100 ]
console.log(it.next().value) // [ [Function: func], &#39;我是函数的值&#39; ]
console.log(it.next().value) // undefined
// 或者
for (let item of it) {
  console.log(&#39;for...of... -&gt; entries&#39;, item)
}
/**
 * for...of... -&gt; entries [ &#39;jack&#39;, 100 ]
 * for...of... -&gt; entries [ [Function: func], &#39;我是函数的值&#39; ]
 */

// 3. values 方法, 返回包含映射中的值的迭代器对象
let it = m.values()
console.log(it.next().value) // 100
console.log(it.next().value) // 我是函数的值
console.log(it.next().value) // undefined
// 或者
for (let value of it) {
	console.log(&#39;for...of... -&gt; value&#39;, value)
}
// /**
//  * for...of... -&gt; value 100
//  * for...of... -&gt; value 我是函数的值
//  */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: theorem Map和Object的区别:</p><ul><li>Map的键可以是<code>任意类型</code>, Object只能是 <code>String</code> 或者 <code>Symbol</code></li><li>Map的可以通过<code>size</code>属性获取元素数量, Object则必须<code>手动计算</code></li><li>Map在频繁<code>增减键值对</code>的场景下, <code>性能较好</code></li><li>Map中的数据是<code>有序</code>的, 而Object则是<code>无序</code>的 :::</li></ul><h4 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>Set</span></a></h4><p>Set类型是<code>es6</code>提供的一种新的数据类型，它允许你存入 <code>任意类型</code> 的 <code>唯一值</code> ，无论是 <code>基本数据类型</code> 还是 <code>引用类型</code> ，尽管NaN !== NaN，Set仍然认为这是同一个数据。</p><ul><li>基础方法</li></ul><blockquote><p><code>add</code> 新增元素成员， <code>has</code> 是否包含某元素， <code>delete</code> 删除元素成员， <code>clear</code> 清空所有元素， <code>Array.from</code> 转为数组</p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// 1. NaN
let set = new Set([NaN, NaN])
// 尽管NaN !== NaN, 但是, 在Set中仍然被认为是相同的数据
console.log(&#39;NaN === NaN&#39;, NaN === NaN) // false
console.log(&#39;set&#39;, set) // Set {NaN}

// 2.add 方法
let set = new Set()
let person1 = {
  name: &#39;大明&#39;
}
let person2 = {
  name: &#39;小明&#39;
}
set.add(person1)
set.add(person2)
console.log(&#39;add的结果&#39;, set)
// add的结果 Set { { name: &#39;大明&#39; }, { name: &#39;小明&#39; } }

console.log(&#39;Array.from&#39;, Array.from(set))
// Array.from [ { name: &#39;大明&#39; }, { name: &#39;小明&#39; } ]

// 3. delete方法
set.delete(person1)
console.log(&#39;delete之后&#39;, set) // delete之后 Set { { name: &#39;小明&#39; } }

// 4. has方法
console.log(&#39;has person1 --&gt;&#39;, set.has(person1))
// has person1 --&gt; false
console.log(&#39;has person2 --&gt;&#39;, set.has(person2))
// has person2 --&gt; true

// 5.清空
set.clear()
console.log(&#39;set clear --&gt;&#39;, set) // set clear --&gt; Set {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>遍历相关的方法</li></ul><blockquote><p>主要有<code>keys</code>，<code>entries</code>，<code>values</code>，<code>forEach</code></p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// 1. keys方法
let it = set.keys()
console.log(it.next().value) // { name: &#39;大明&#39; }
console.log(it.next().value) // { name: &#39;小明&#39; }
console.log(it.next().value) // undefined
// 或者
for (let key of it) {
  console.log(&#39;for...of... -&gt; keys&#39;, key)
}
/**
 * for...of... -&gt; keys { name: &#39;大明&#39; }
 * for...of... -&gt; keys { name: &#39;小明&#39; }
 */

// 2. entries 方法
let it = set.entries() // SetIterator {{…} =&gt; {…}, {…} =&gt; {…}}
for (let key of it) {
  console.log(&#39;for...of... -&gt; entries&#39;, key)
}
/**
 * for...of... -&gt; entries [ { name: &#39;大明&#39; }, { name: &#39;大明&#39; } ]
 * for...of... -&gt; entries [ { name: &#39;小明&#39; }, { name: &#39;小明&#39; } ]
 */

// 3. values
let it = set.values() // SetIterator {{…}, {…}}
console.log(it.next().value) // { name: &#39;大明&#39; }
console.log(it.next().value) // { name: &#39;小明&#39; }
console.log(it.next().value) // undefined
// 或者
for (let key of it) {
  console.log(&#39;for...of... -&gt; values&#39;, key)
}
/**
 * for...of... -&gt; values { name: &#39;大明&#39; }
 * for...of... -&gt; values { name: &#39;小明&#39; }
 */

// 4. forEach
set.forEach(item =&gt; {
  console.log(&#39;item&#39;, item)
})
/**
 * item { name: &#39;大明&#39; }
 * item { name: &#39;小明&#39; }
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isdate-是否时间" tabindex="-1"><a class="header-anchor" href="#isdate-是否时间"><span>isDate 是否时间</span></a></h3>`,87),v=i(`<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isDate = (val: unknown): val is Date =&gt; val instanceof Date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这么做有一定的漏洞，但一般还是可以判断</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const isDate = (val) =&gt; val instanceof Date
let date = new Date()
let result = isDate({ __proto__: Date.prototype, length: 0 })
console.log(&#39;result&#39;, result) // result true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isfunction-是否函数" tabindex="-1"><a class="header-anchor" href="#isfunction-是否函数"><span>isFunction 是否函数</span></a></h3><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isFunction = (val: unknown): val is Function =&gt; typeof val === &#39;function&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="isobject-是否对象" tabindex="-1"><a class="header-anchor" href="#isobject-是否对象"><span>isObject 是否对象</span></a></h3><ul><li>注意事项</li></ul><blockquote><p><code>typeof null === &#39;object&#39;</code>，所以必须确保val不为null。</p><p><code>Record</code>是 <code>typescript</code> 中的一种工具类型，它的作用是限制一个对象的键值类型，其两个泛型参数就是一个限制键类型，一个限制值类型。</p></blockquote><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isObject = (val: unknown): val is Record&lt;any, any&gt; =&gt; val !== null &amp;&amp; typeof val === &#39;object&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// 第1469行代码
type Record&lt;K extends keyof any, T&gt; = {
    [P in K]: T;
};
// 从这里我们可以看出, 键的类型只能从K(第一个泛型参数中得到), 而值的类型只能是T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Record使用案例:</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>type Animal = &#39;dog&#39; | &#39;cat&#39; | &#39;pig&#39;

interface Info {
  name: string;
  age: number
}

type AnimalInfo = Record&lt;Animal, Info&gt;

// animalInfo的键, 只能是dog, cat, pig中的一个
const animalInfo: AnimalInfo = {
  dog: {
    name: &#39;阿旺&#39;,
    age: 2
  },
  cat: {
    name: &#39;阿花&#39;,
    age: 1
  },
  pig: {
    name: &#39;二师兄&#39;,
    age: 3
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="isplainobject-是否纯粹对象" tabindex="-1"><a class="header-anchor" href="#isplainobject-是否纯粹对象"><span>isPlainObject 是否纯粹对象</span></a></h3><p>该方法作用是，判断一个对象<code>是否是纯粹的对象</code>，前面一个isObject方法，<code>isObject([])是true</code>，<code>isObject({})也是true</code>，而此处的isPlainObject则仅限于真正的Object。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isPlainObject = (val: unknown): val is object =&gt; toTypeString(val) === &#39;[object Object]&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ispromise-是否promise" tabindex="-1"><a class="header-anchor" href="#ispromise-是否promise"><span>isPromise 是否Promise</span></a></h3><p>判断是否是promise对象，这里要注意的是Promise的类型，typescript 中 <code>Promise&lt;T&gt;</code> 类型，接受一个<code>泛型参数T</code>，用以确定这个promise对象最终<code>resolve的值的类型</code>。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isPromise = &lt;T = any&gt;(val: unknown): val is Promise&lt;T&gt; =&gt; isObject(val) &amp;&amp; isFunction(val.then) &amp;&amp; isFunction(val.catch)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><p>我们如何控制声明Promise返回值的类型:</p><ul><li>使用这里的泛型方式声明</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let promiseString:Promise&lt;string&gt; = new Promise(resolve =&gt; resolve(&#39;123&#39;))
let promiseNumber:Promise&lt;number&gt; = new Promise(resolve =&gt; resolve(&#39;123&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单独声明resolve方法</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let promiseString = new Promise((resolve: (params: string) =&gt; void, reject) =&gt; resolve(&#39;123&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="isintegerkey-是否数字型的字符串" tabindex="-1"><a class="header-anchor" href="#isintegerkey-是否数字型的字符串"><span>isIntegerKey 是否数字型的字符串</span></a></h3><p>主要是用于判断是否是数字型的字符串，形如: &#39;123&#39;，&#39;888&#39; 则为true，&#39;123hello&#39;则为false。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const isString = (val: unknown): val is string =&gt; typeof val === &#39;string&#39;
export const isIntegerKey = (key: unknown) =&gt;
  isString(key) &amp;&amp;
  key !== &#39;NaN&#39; &amp;&amp;
  key[0] !== &#39;-&#39; &amp;&amp;
  &#39;&#39; + parseInt(key, 10) === key
isIntegerKey(&#39;888hello&#39;) // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),u={class:"hint-container info"},p=i(`<p class="hint-container-title">Tips</p><p>parseInt 的第一个参数大家都很熟悉，就是要被转换的字符串，但是第二个出现的概率可能相对偏低，第二个表示的就是<code>进制</code>，一般<code>默认是10</code>，也就是十进制！ 这里指明进制数是为了保证在不同的环境下运行结果能保证一致！</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// 以二进制的方式解析&#39;010&#39;
const result = parseInt(&#39;010&#39;, 2)
console.log(&#39;result&#39;, result) // 2
// 我们都知道，如果 &#39;010&#39;是二进制，那么，转为10进制，就是使用: 0*2^0 + 1*2^1 + 0*2^2 结果自然就是2，同理我们可以知道用三进制来解析：
const result = parseInt(&#39;010&#39;, 3) // 结果自然就是3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=e("p",null,"第二个参数的取值最大能达到多少？",-1),b=i(`<p>我们知道，十进制最大的数也就是9，那么如果我要解析十进制以上的数字呢？ 最常见的就是十六进制。不错，我们会用字母代替！也就是a-z，共26个字母，那么我们大胆猜测下，最大取值，是不是就是36？</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const result = parseInt(&#39;010&#39;, 36)
console.log(&#39;result&#39;, result) // 36
// 那再往上加一呢:
const result = parseInt(&#39;010&#39;, 37)
console.log(&#39;result&#39;, result) // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此我们得知, parseInt最多只能取到36!</p>`,3),g=i(`<h3 id="makemap-构造带逗号的字符串校验字符函数" tabindex="-1"><a class="header-anchor" href="#makemap-构造带逗号的字符串校验字符函数"><span>makeMap 构造带逗号的字符串校验字符函数</span></a></h3><p>该方法主要是接收一个<code>带逗号的字符串</code>，将该字符串以<code>逗号拆分</code>为一个个子字符串，再用这些子字符串作为一个对象的<code>键</code>，<code>值全部为true</code>；返回一个方法，这个方法可以检测出这个方法接收的参数是否是对象中的键。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export function makeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) =&gt; boolean {
  const map: Record&lt;string, boolean&gt; = Object.create(null)
  const list: Array&lt;string&gt; = str.split(&#39;,&#39;)
  for (let i = 0; i &lt; list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val =&gt; !!map[val.toLowerCase()] : val =&gt; !!map[val]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>难点解析</li></ul><p>类型上来看，其实就是一个这样的方法：<code>(params1:string, params2?:boolean) =&gt; (key: string) =&gt; boolean</code>，其返回了一个检测函数，该检测函数接受一个字符串，返回是该字符串是否存在！</p><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const fn = makeMap(&#39;dog,cat,bird&#39;)
const result1 = fn(&#39;fish&#39;)
console.log(result1) // false, 不存在fish
const result2 = fn(&#39;dog&#39;)
console.log(result2) // true, 存在dog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),y={class:"hint-container info"},h=e("p",{class:"hint-container-title"},"Tips",-1),T=e("p",null,[n("创建对象为何要用 "),e("code",null,"Object.create(null)"),n(" 而不是直接使用 "),e("code",null,"const map = {}")],-1),S=i("<p><code>Object.create(proto, [propertiesObject])</code>，返回一个新的对象。第一个参数<code>proto</code>，将会被挂在到<code>新对象的原型对象</code>上。 第二个参数<code>propertiesObject</code>，对应了<code>Object.defineProperties</code>的第二个参数，也就是所谓的属性描述符:</p><ul><li>value 属性的值</li><li>writable 是否可以写，默认为true</li><li>enumerable 属性是否可枚举, 所谓可枚举，就是能够被以下方法访问到</li><li>for...in 能将该属性遍历出来</li><li>Object.keys 能将该属性包含在返回的数组中</li><li>JSON.stringify 能够将其变为JSON字符串的一部分</li><li>configurable 默认true，如果为false，则属性无法被改变，无法被删除，无法修改属性描述符</li><li>set 存值函数</li><li>get 取值函数</li></ul><p>我们可以看到，<code>Object.create(null)</code>创建的对象更为纯粹，当方法执行到<code>map[val.toLowerCase()]</code>时，不会受到<code>__proto__</code>的影响。</p>",3),f=i(`<h3 id="cachestringfunction-缓存结果函数" tabindex="-1"><a class="header-anchor" href="#cachestringfunction-缓存结果函数"><span>cacheStringFunction 缓存结果函数</span></a></h3><p>函数<code>返回一个函数</code>，这个函数接收<code>一个字符串</code>参数，如果第一次传入了一个参数，计算结果就会被<code>闭包\`\`缓存</code>起来，下次再遇到相同参数的时候，就不会再走<code>fn方法重新计算</code>了。 本质上是一个<code>单例模式</code>，利用闭包，保存了之前的计算结果。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const cacheStringFunction = &lt;T extends (str: string) =&gt; string&gt;(fn: T): T =&gt; {
  const cache: Record&lt;string, string&gt; = Object.create(null)
  return ((str: string) =&gt; {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }) as any
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let fn1 = cacheStringFunction((key) =&gt; {
  console.log(&#39;通过了计算得到&#39;, key + &#39;world&#39;)
  return key + &#39;world&#39;
})
console.log(fn1(&#39;hello&#39;))
console.log(fn1(&#39;hello&#39;))
console.log(fn1(&#39;goodbye&#39;))
/**
 * 
 * 通过了计算得到 helloworld
 * helloworld
 * helloworld
 * 通过了计算得到 goodbyeworld
 * goodbyeworld
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),x={class:"hint-container info"},k=e("p",{class:"hint-container-title"},"Tips",-1),j=e("p",null,[n("为何返回的函数要被"),e("code",null,"as any"),n("？去掉会如何？")],-1),N=i(`<p><code>(str:string) =&gt; string</code> 是符合 <code>T</code> 的类型要求，但是，<code>T</code>也可以是另一种形式的<code>子类</code>，也就无法保证和参数的类型完全一致。举个例子，假如以下函数不报错：</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let testGenerics = &lt;T extends { length: number }&gt;(params: T, minNum: number): T =&gt;{
  if (params.length &gt;= minNum) {
    return params
  } else {
    return { length: minNum } as T
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们直接运行下</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let data = testGenerics([1,2,3], 8)
// 此时的data,讲道理应该是Array类型
data.slice(0,1) // 直接报错, 因为根本就不是数组!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),O=i(`<h3 id="camelize-驼峰转化" tabindex="-1"><a class="header-anchor" href="#camelize-驼峰转化"><span>camelize 驼峰转化</span></a></h3><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>const camelizeRE = /-(\\w)/g
export const camelize = cacheStringFunction((str: string): string =&gt; {
  return str.replace(camelizeRE, (_, c) =&gt; (c ? c.toUpperCase() : &#39;&#39;))
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let str = &#39;on-handle-click&#39;
const result = camelize(str)
console.log(&#39;result&#39;, result) // result onHandleClick
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><p>关于replace的使用: <code>replace(regexp|substr, newSubStr|function)</code></p><blockquote><p>第一个参数既可以是<code>字符串</code>，也可以是<code>正则</code>，总之就是需要<code>被替换的字符串的文本模式</code>。</p><p>第二个参数，它既可以是用于<code>替换掉</code>第一个参数在原字符串中的匹配部分的<code>字符串</code>（该字符串中可以内插一些<code>特殊的变量名</code>），也可以是一个用来创建新子字符串的<code>函数</code>，该函数的返回值将替换掉第一个参数匹配到的结果。</p></blockquote><ul><li>正则替换表达式</li></ul><blockquote><p>$&amp; 用于无分组的情况</p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let str = &#39;史记真是史家之绝唱,无韵之离骚&#39;
let result = str.replace(&#39;史记&#39;, &#39;《$&amp;》&#39;) // 这里的$&amp;就是\`史记\`二字, 也就是用《史记》代替史记
console.log(result) // 《史记》真是史家之绝唱,无韵之离骚
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>$\` 匹配到的数据的左边字符串</p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let str = &#39;研究一下replace该怎么用&#39;
let result = str.replace(&#39;replace&#39;, &#39;,$\`前端技术&#39;) // 这里的 $\` === 研究一下，也就是用 &#39;,研究一下前端技术&#39; 代替 &#39;replace&#39; 
console.log(result) // 研究一下,研究一下前端技术该怎么用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>$&#39; 和 $\` 相反，代表匹配到的数据的右边字符串</p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let str = &#39;研究一下replace该怎么用&#39;
let result = str.replace(&#39;replace&#39;, &quot;,vue3$&#39;,&quot;) // 此处的 $&#39; === 该怎么用，也就是用 &#39;,vue3该怎么用,&#39; 代替 &#39;replace&#39;
console.log(result) // 研究一下,vue3该怎么用,该怎么用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>$1,$2,$3,.....$n，表示第几个分组</p></blockquote><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let str = &#39;西瓜,番薯,大番薯,咸鱼,萝卜,苹果&#39;
let result = str.replace(/(西瓜)(.*)(苹果)/, &quot;$1(水果)$2$3(水果)&quot;)
/**
 * $1 === 西瓜
 * $2 === ,番薯,大番薯,咸鱼,萝卜,
 * $3 === 苹果
 */
console.log(&#39;result&#39;, result) // 西瓜(水果),番薯,大番薯,咸鱼,萝卜,苹果(水果)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let str = &#39;今年是2022年,时间好快&#39;
let result = str.replace(/(今年).+?(时间).*/g, function () {
  console.log(arguments)
  /**
   * 0: &quot;今年是2022年,时间好快&quot;
   * 1: &quot;今年&quot;
   * 2: &quot;时间&quot;
   * 3: 0
   * 4: &quot;今年是2022年,时间好快&quot;
   */
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以得出结论，那就是<code>有分组</code>的情况下，第二个参数开始就是<code>依次展示</code>每次分组<code>匹配到的内容</code>。 所以，我们回到源码中，此处的<code>c</code>，实际上就是前面说的每次匹配到的<code>第一个分组</code>，本案例中依次为：h, c两个，然后将其改为大写，直接return，就能将<code>-x</code>替换为<code>X</code>，从而实现我们的目标。</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let str = &#39;on-handle-click&#39;
let result = str.replace(/-(\\w)/g, function () {
  console.log(arguments)
  // { &#39;0&#39;: &#39;-h&#39;, &#39;1&#39;: &#39;h&#39;, &#39;2&#39;: 2, &#39;3&#39;: &#39;on-handle-click&#39; }
  // { &#39;0&#39;: &#39;-c&#39;, &#39;1&#39;: &#39;c&#39;, &#39;2&#39;: 9, &#39;3&#39;: &#39;on-handle-click&#39; }
  return str.replace(camelizeRE, (_, c) =&gt; (c ? c.toUpperCase() : &#39;&#39;))
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="haschanged-比较变量相同" tabindex="-1"><a class="header-anchor" href="#haschanged-比较变量相同"><span>hasChanged 比较变量相同</span></a></h3><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// compare whether a value has changed, accounting for NaN.
export const hasChanged = (value: any, oldValue: any): boolean =&gt; !Object.is(value, oldValue)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><p>可能有人感到疑问，两个值是否不同还需要封装？多此一举，我直接 <code>a !== b</code> 不就行了？我们来看几个例子：</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// +0 和 -0问题
console.log(+0 === -0) // true
Object.is(+0, -0) // false

// NaN 问题
console.log(NaN === NaN) // false
Object.is(NaN, NaN) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可以看出，<code>Object.is</code>可以弥补 <code>正负0</code> 和 <code>NaN</code> 比较上存在的问题。MDN网站上还提供了一个<code>polyfill</code>：</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>Object.is = function () {
	 // 如果两个值不同(有可能是正负0)
  if (x === y) {
    return x !== 0 || 1/x === 1/y
    /**
     * 如果x,y分别为+0 和 -0, 那么, 一个将会是Infinity 另一个是-Infinity
     */
    // 如果不同, 也可能是NaN
  } else {
    // 自己都不等于自己, 那肯定是NaN了
    return x !== x &amp;&amp; y !==y
  }
}
console.log(&#39;NaN === NaN --&gt;&#39;, Object.is(NaN, NaN))
console.log(&#39;+0 === -0 --&gt;&#39;, Object.is(+0, -0))
// NaN === NaN --&gt; true ⠼ : timing npm:load:cleanupLog Completed in 2ms
// +0 === -0 --&gt; false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="def-添加不可枚举属性" tabindex="-1"><a class="header-anchor" href="#def-添加不可枚举属性"><span>def 添加不可枚举属性</span></a></h3><p>就是给对象<code>obj</code>，加上一个<code>可以删除</code>，其属性描述符<code>可以改变</code>，且<code>不可枚举的属性key</code>，其值为<code>value</code>。</p><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const def = (obj: object, key: string | symbol, value: any) =&gt; {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用案例</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>let person = {
  name: &#39;human&#39;,
  age: 100
}
def(person, &#39;gender&#39;, &#39;male&#39;)
console.log(&#39;person --&gt; &#39;, person) 
/**
 * nodejs 环境下 { name: &#39;human&#39;, age: 100 }
 * chrome 浏览器下 { name: &#39;human&#39;, age: 100, gender: &#39;male&#39; }
 *  */ 
console.log(&#39;gender --&gt; &#39;, person.gender) // male
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试可枚举性，按照我们之前说的<code>for...in</code>，<code>Object.keys</code>，<code>JSON.stringify</code>三种方法</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>// for...in
for (let key in person) {
  console.log(&#39;key&#39;, key)
  /**
   * key name
   * key age
   */
}

// JSON.stringify
console.log(&#39;JSON.stringify(person)&#39;, JSON.stringify(person))
// {&quot;name&quot;:&quot;human&quot;,&quot;age&quot;:100}

// Object.keys(person)
console.log(&#39;Object.keys(person)&#39;, Object.keys(person))
// [ &#39;name&#39;, &#39;age&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><p>属性描述符可以细分为<code>数据描述符</code>和<code>存取描述符</code>。注意，configurable 和 enumerable既是数据描述符又是存取描述符。除了这两个属性之外，其他不同的描述符不得共用！</p><p>数据描述符：<code>writable</code> 只有writable为true的时候，该属性才能被改变值。 <code>value</code> 属性的值</p><p>存取描述符： <code>get</code>，<code>set</code></p></div><h3 id="tonumber-尝试转换数字" tabindex="-1"><a class="header-anchor" href="#tonumber-尝试转换数字"><span>toNumber 尝试转换数字</span></a></h3><ul><li>源码实现</li></ul><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>export const toNumber = (val: any): any =&gt; {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Tips</p><p>isNaN一看字面意思就知道: 判断一个值是否为NaN. 但他有一些怪异行为, 例如:</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>isNaN(undefined) // true
isNaN(&#39;undefined&#39;) // true
isNaN(&#39;haha&#39;) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显, 这个方法关心的根本不是一个值是否是NaN, 它似乎更关心一个值是否无法被转为数字! 所以, 我们有了Number.isNaN</p><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript" data-title="TypeScript"><pre class="language-TypeScript"><code>Number.isNaN(undefined) // false
Number.isNaN(&#39;undefined&#39;) // false
Number.isNaN(&#39;haha&#39;) // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以, 一定要注意了, <code>isNaN</code>和<code>Number.isNaN</code>不是一回事!</p></div>`,23);function _(w,q){const l=d("Badge");return r(),c("div",null,[o,e("ul",null,[e("li",null,[n("源码实现 "),s(l,{text:"有风险",type:"error"})])]),v,e("div",u,[p,s(l,{text:"思考"}),m,s(l,{text:"猜测",type:"warning"}),n(),b]),g,e("div",y,[h,s(l,{text:"思考"}),n(),T,s(l,{text:"解答",type:"warning"}),S]),f,e("div",x,[k,s(l,{text:"思考"}),j,s(l,{text:"猜测",type:"warning"}),n(),N]),O])}const E=a(t,[["render",_],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/FrontEnd/Vue3/ToolFunction/","title":"VUE3工具函数源码解析","lang":"zh-CN","frontmatter":{"title":"VUE3工具函数源码解析","date":"2022-07-11T13:41:55.000Z","permalink":"/FrontEnd/Vue3/ToolFunction/","category":["VUE","VUE3"],"tag":["VUE"],"description":"Tips 具体文件是 shared.cjs.prod.js 和 shared.cjs.js 文件下针对源码中的工具函数和较冷门知识点的提取分析。 vue 版本为 3.2.31 常量定义 EMPTY_OBJ、EMPTY_ARR 对象 typescript是通过 readonly 的方式来定义一个冻结对象的类型的， readonly 是只读修饰符。 Obj...","head":[["meta",{"property":"og:url","content":"https://shaohui-jin.github.io/FrontEnd/Vue3/ToolFunction/"}],["meta",{"property":"og:title","content":"VUE3工具函数源码解析"}],["meta",{"property":"og:description","content":"Tips 具体文件是 shared.cjs.prod.js 和 shared.cjs.js 文件下针对源码中的工具函数和较冷门知识点的提取分析。 vue 版本为 3.2.31 常量定义 EMPTY_OBJ、EMPTY_ARR 对象 typescript是通过 readonly 的方式来定义一个冻结对象的类型的， readonly 是只读修饰符。 Obj..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T10:00:43.000Z"}],["meta",{"property":"article:author","content":"石怜安"}],["meta",{"property":"article:tag","content":"VUE"}],["meta",{"property":"article:published_time","content":"2022-07-11T13:41:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T10:00:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VUE3工具函数源码解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-11T13:41:55.000Z\\",\\"dateModified\\":\\"2024-03-11T10:00:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"石怜安\\",\\"url\\":\\"https://shaohui-jin.github.io\\"}]}"]]},"headers":[{"level":2,"title":"常量定义","slug":"常量定义","link":"#常量定义","children":[{"level":3,"title":"EMPTY_OBJ、EMPTY_ARR 对象","slug":"empty-obj、empty-arr-对象","link":"#empty-obj、empty-arr-对象","children":[]},{"level":3,"title":"NOOP 空函数","slug":"noop-空函数","link":"#noop-空函数","children":[]},{"level":3,"title":"NO 返回false常量函数","slug":"no-返回false常量函数","link":"#no-返回false常量函数","children":[]}]},{"level":2,"title":"函数定义","slug":"函数定义","link":"#函数定义","children":[{"level":3,"title":"toTypeString  复杂数据类型区分","slug":"totypestring-复杂数据类型区分","link":"#totypestring-复杂数据类型区分","children":[]},{"level":3,"title":"toRawType 取出数据类型","slug":"torawtype-取出数据类型","link":"#torawtype-取出数据类型","children":[]},{"level":3,"title":"isOn 事件名on判断","slug":"ison-事件名on判断","link":"#ison-事件名on判断","children":[]},{"level":3,"title":"isModelListener 事件名onUpdate判断","slug":"ismodellistener-事件名onupdate判断","link":"#ismodellistener-事件名onupdate判断","children":[]},{"level":3,"title":"extend 合并对象","slug":"extend-合并对象","link":"#extend-合并对象","children":[]},{"level":3,"title":"remove 删除数组元素","slug":"remove-删除数组元素","link":"#remove-删除数组元素","children":[]},{"level":3,"title":"hasOwn 是否包含属性","slug":"hasown-是否包含属性","link":"#hasown-是否包含属性","children":[]},{"level":3,"title":"isArray 是否数组","slug":"isarray-是否数组","link":"#isarray-是否数组","children":[]},{"level":3,"title":"isMap/isSet 是否Map/Set","slug":"ismap-isset-是否map-set","link":"#ismap-isset-是否map-set","children":[{"level":4,"title":"Map","slug":"map","link":"#map","children":[]},{"level":4,"title":"Set","slug":"set","link":"#set","children":[]}]},{"level":3,"title":"isDate 是否时间","slug":"isdate-是否时间","link":"#isdate-是否时间","children":[]},{"level":3,"title":"isFunction 是否函数","slug":"isfunction-是否函数","link":"#isfunction-是否函数","children":[]},{"level":3,"title":"isObject 是否对象","slug":"isobject-是否对象","link":"#isobject-是否对象","children":[]},{"level":3,"title":"isPlainObject 是否纯粹对象","slug":"isplainobject-是否纯粹对象","link":"#isplainobject-是否纯粹对象","children":[]},{"level":3,"title":"isPromise 是否Promise","slug":"ispromise-是否promise","link":"#ispromise-是否promise","children":[]},{"level":3,"title":"isIntegerKey 是否数字型的字符串","slug":"isintegerkey-是否数字型的字符串","link":"#isintegerkey-是否数字型的字符串","children":[]},{"level":3,"title":"makeMap 构造带逗号的字符串校验字符函数","slug":"makemap-构造带逗号的字符串校验字符函数","link":"#makemap-构造带逗号的字符串校验字符函数","children":[]},{"level":3,"title":"cacheStringFunction 缓存结果函数","slug":"cachestringfunction-缓存结果函数","link":"#cachestringfunction-缓存结果函数","children":[]},{"level":3,"title":"camelize 驼峰转化","slug":"camelize-驼峰转化","link":"#camelize-驼峰转化","children":[]},{"level":3,"title":"hasChanged 比较变量相同","slug":"haschanged-比较变量相同","link":"#haschanged-比较变量相同","children":[]},{"level":3,"title":"def 添加不可枚举属性","slug":"def-添加不可枚举属性","link":"#def-添加不可枚举属性","children":[]},{"level":3,"title":"toNumber 尝试转换数字","slug":"tonumber-尝试转换数字","link":"#tonumber-尝试转换数字","children":[]}]}],"git":{"createdTime":1710151243000,"updatedTime":1710151243000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":18.47,"words":5542},"filePathRelative":"zh/Knowledge/FrontEnd/Vue/Vue3/ToolFunction.md","localizedDate":"2022年7月11日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Tips</p>\\n<p>具体文件是 <code>shared.cjs.prod.js</code> 和 <code>shared.cjs.js</code> 文件下针对源码中的工具函数和较冷门知识点的提取分析。</p>\\n<p>vue 版本为 3.2.31</p>\\n</div>\\n<h2>常量定义</h2>\\n<h3>EMPTY_OBJ、EMPTY_ARR 对象</h3>\\n<p>typescript是通过 <code>readonly</code> 的方式来定义一个冻结对象的类型的， <code>readonly</code> 是只读修饰符。 <code>Object.freeze</code> 冻结对象属性功能。</p>","autoDesc":true}');export{E as comp,A as data};
