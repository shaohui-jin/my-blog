---
title: (dev)Dependencies
lang: zh-CN
date: 2022-05-27 15:54:30
permalink: /FrontEnd/Configuration/Dependencies/
category: 
  - PackageJson
tag: 
  - PackageJson
---

## 浑水摸鱼的说法？

以前说到 `dependencies` 和 `devDependencies` 的时候，大家会想到啥？

- `dependencies`：生产环境需要的依赖
- `devDependencies`：开发环境需要的依赖

但是我们装依赖的时候真的会去考虑 `npm install -D` 还是 `npm install -S` 吗？

其实`并不会`去关心哪些是`生产环境`所需依赖，哪些是`开发环境`所需依赖，但是这也正常，因为其实在`SPA`项目中，这两个东西并`不需要区分`！所以平时没有过多了解也正常！！！

## SPA项目

所谓SPA项目，其实指的就是`单页面应用`，比如说`Vue`、`React`项目这些

### 开发环境

开发项目时，肯定是两种包都需要安装的

### 生产环境

生产环境中，是将开发环境的代码，使用某些打包工具，例如`Webpack`，将整个项目代码`打包`成一些`静态的文件`，然后将这些`静态文件`部署到`服务器`上，也就是到达生产环境。

所以大家也看到了，只有`开发环境`时需要`装包`，`生产环境`是`不需要装包`的，所以把包放在`dependencies`和`devDependencies`中是`没有区别`的。

为什么这么说呢？因为其实无论把包放在哪里都好，只要你代码中`引用`到了这个包，那么`Webpack`打包时就会把这个包`打包`进静态文件中。

所以，在开发SPA项目时，`dependencies和devDependencies并没啥区分意义`。

## Nodejs项目

`Nodejs`项目`上线`的话，是`不用打包`的，是将整个`完整项目代码`扔到`服务器`上，然后运行，所以它是`需要`区分`dependencies`和`devDependencies`的。

因为当它部署到服务器上之后，也就是生产环境之后，它是需要再 `npm install` 一次的。

:::danger

<Badge text="举个例子" type="warning"/> 

在开发环境的时候，需要做`单元测试`，装了单元测试所需要的`依赖包`，那么这个包是放在 `dependencies` 还是放在 `devDependencies` 呢？

如果放在`devDependencies`，那么`开发环境`下进行`npm install`时是会安装的，而`生产环境`下`npm install`是不会安装的，这很合理，因为肯定是生产环境测试无误后再上生产环境，所以单元测试所需依赖包`只需要`在开发环境安装即可，到了生产环境我并不需要这个包

如果放在`dependencies`，那么`开发环境`、`生产环境`下进行`npm install`时`都`是会安装的，这并不合理啊，我生产环境时并不需要用到这些单元测试的包啊！

所以在`Nodejs`项目中，`dependencies` 和 `devDependencies`是有区分意义的。
:::

## NPM包

开发了一个NPM包，叫做`npm-lsx`，在开发的过程中，需要对所开发的这个包进行`单元测试`，所以安装了所需的依赖包`npm-test`，也就是依赖关系是`npm-lsx -> npm-test`

小明在做一个`项目A`，他项目中装了`npm-lsx`这个包，而大家都知道，装一个包时，会连同这个包所依赖的包都一起装，所以按理说`npm-lsx`、`npm-test`都会装，但是大家想想，`项目A`需要`npm-test`这个包吗？

并不需要，这个包对于项目A来说`没意义`。

你可以理解为，项目A的 `开发环境`，其实就是 `npm-lsx` 的 `生产环境`。

所以在开发`npm-lsx`的时候会把`npm-test`装在`devDependencies`中，这样，项目A就可以少装一些`没意义的包`，加快整体装包速度！

所以在`NPM`项目中，`dependencies` 和 `devDependencies`是有区分意义的。
