---
title: Jsonp
lang: zh-CN
date: 2023-02-23 16:54:02
permalink: /FrontEnd/JavaScript/Jsonp/
icon: jsonp
category: 
  - JavaScript
tag: 
  - JavaScript
---

[^跨域]: [跨域可阅读这篇文章](/Network/CrossDomain/)

我们都知道， `Ajax` 请求是不能跨域[^跨域]的，无论是 `静态页面` 、 `动态网页` 、  `web服务`等，只要是跨域请求，一律都不允许通过浏览器跨域的`检测`和`阻拦`。

但是可以发现，web页面上调用 `js` 是不受跨域的影响，同时拥有 `src属性` 的标签也具有相同的能力，比如 <**script**>、<**img**>、<**iframe**>

于是如果想通过 `纯web端跨域` 访问数据就可以这样：在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理。

恰巧有一种叫做 `JSON` 的纯字符数据格式可以简洁的描述复杂数据，**更巧的是JSON还被js原生支持**，所以在客户端几乎可以随心所欲的处理这种格式的数据。

这样子解决方案就呼之欲出了，web客户端通过与调用脚本一样的方式，来调用跨域服务器上动态生成的js格式文件，显而易见，服务器之所以要动态生成JSON文件，目的就在于把客户端需要的数据装进去。

客户端在对js文件调用成功之后，也就获得了自己所需的数据，剩下的就是按照自己需求进行处理和展现了。

为了便于客户端使用数据，逐渐形成了一种 `非正式传输协议` ，人们把它称作 `JSONP`，该协议的一个要点就是允许用户传递一个`callback`参数给服务端，
然后服务端返回数据时会将这个callback参数作为`函数名`来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。

```js
(function (global) {
  global.jsonp = function jsonp(url, params, callback) {
    // 接收接口所需的所有参数及callback的函数名
    let paramList = []
    for (let key in params) {
        paramList.push(`${key}=${params[key]}`)
    }
    // 随机callback函数名称
    let random = Math.random().toString().replace('.', '')
    const callbackFunctionName = 'jsonp_' + random
    paramList.push(`callback=${callbackFunctionName}`)
    const urlStr = url + '?' + paramList.join('&')
    // 定义全局函数，为后续拿到js文件调用准备
    global[callbackFunctionName] = function (param) {
        callback(param)
    }
    // 生成element
    const script = document.createElement('script')
    script.src = urlStr
    // 放入body, 立即调用全局函数 callbackFunctionName
    document.body.appendChild(script)
    // js拿到后，移除文件
    document.body.removeChild(script)
  }
})(window)
```

