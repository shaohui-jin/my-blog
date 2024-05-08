---
title: AJAX
lang: zh-CN
date: 2024-05-07 16:31:31
permalink: /JavaScript/AJAX/
headerDepth: 3
---

## 简述

- 「**AJAX 全称 Asynchronous Javascript And XML**」：异步JavaScript和xml，是一种技术的统称
  - 「**XHR 全称 XmlHttpRequest**」：HTML源生实现Ajax的一种技术
  - 「**Fetch**」：基于 Promise 的一种api，在es6时提出，用于代替 XHR 实现 AJAX 的一种技术
- 「**axios**」 是一种 使用 Promise + xhr 封装的第三方库
- 「**umi-request**」： 基于 fetch 封装的第三方库

其中最常见的 XHR 实现如下：

```javascript
export function xhrRequest(option) {
  const { url, method = 'GET', data = null } = option
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
      return xhr.responseText
    }
  }
  xhr.open(method, url)
  xhr.send()
}
```

## progress 进度条展示

### xhr 实现 上传、下载 

```javascript {7-14}
export function xhrRequest(option) {
  const { url, method = 'GET', data = null } = option
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {}
  }
  xhr.addEventListener('progress', (e) => {
    const { loaded, total } = e
    console.log(loaded, total) // 下载的当前数据以及下载的总数据量
  })
  xhr.upload.addEventListener('progress', e => {
    const { loaded, total } = e
    console.log(loaded, total) // 上传的当前数据以及下载的总数据量
  })
  xhr.open(method, url)
  xhr.send()
}
```

### * fetch 实现 下载

::: warning Fetch 不支持上传进度
:::

```javascript {5,6,11,15}
export function fetchRequest(option){
  const { url, method = 'GET', data = null } = option
  return new Promise(async resolve => {
    const resp = await fetch(url, { method, body: data })
    let loaded = 0
    const total = +resp.headers.get('content-length')
    const decoder = new TextDecoder()
    let body = ''
    const reader = resp.body.getReader()
    while (1) {
      const { done, value } = await  reader.read()
      if (done) {
        break;
      }
      loaded += value.length
      body += decoder.decode(value)
    }
    resolve(body)
  })
}
```

## abort 取消接口

### xhr 实现 abort

> 如果该请求已被发出，**XMLHttpRequest.abort()** 方法将终止该请求。 
> 
> 当一个请求被终止，它的 **readyState** 将被置为 **XMLHttpRequest.UNSENT(0)**，并且请求的 **status** 置为 **0**。

```javascript {6-9,18}
function xhrWithCancel(url, token) { // the token is for cancellation
   let xhr = new XMLHttpRequest
   xhr.open('GET', url)
   return new Promise((resolve, reject) => {
      xhr.onload = () => resolve(xhr.responseText)
      token.cancel = () => {  // SPECIFY CANCELLATION
        xhr.abort() // abort request
        reject(new Error("Cancelled")) // reject the promise
      }
      xhr.onerror = reject
   });
};

let token = {};
let promise = xhrWithCancel("/someUrl", token);

// later we want to abort the promise:
token.cancel();
```

### * fetch 增加 abort

:::warning fetch 本身不支持 abort 处理
:::

```javascript
const abortController = new AbortController() // 信号控制器
fetch(url, {
  signal: abortController.signal
}).then(resolve, reject)

setTimeout(() => {
  abortController.abort()
}, 100)
```

### axios 取消接口方法

:::warning 
2021 年 10 月推出的 **Axios V0.22.0** 版本中把 **CancelToken** 打上 **deprecated** 的标记，意味废弃。与此同时，推荐 **AbortController** 来取而代之
:::

## timeout 超时处理

### xhr 实现 timeout

```javascript {2,6-9}
let xhr = new XMLHttpRequest();
xhr.timeout = 2000; // 超时时间，单位是毫秒
xhr.onload = function () {
  // 请求完成。在此进行处理。
};
xhr.ontimeout = function (e) {
  // XMLHttpRequest 超时。在此做某事。
};
xhr.open("GET", "/server", true);
xhr.send(null);
```

### * fetch 增加 timeout

:::warning fetch 本身不支持超时 timeout 处理
:::

```javascript {4,7,9-12}
export function createFetchWithTimeoutByPromiseStatus(timeout = 5000) {
  return function (url, options) {
    return new Promise((resolve, reject) => {
      const abortController = new AbortController() // 信号控制器
      fetch(url, {
        ...options,
        signal: abortController.signal
      }).then(resolve, reject)
      setTimeout(() => {
        reject(new Error('fetch timeout'))
        abortController.abort()
      }, timeout)
    })
  }
}
```

```javascript {3-10}
export function createFetchWithTimeoutByPromiseRace(timeout = 5000) {
  return function (url, options) {
    return Promise.race([
      fetch(url, options),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('fetch timeout'))
        }, timeout)
      })
    ])
  }
}
```
