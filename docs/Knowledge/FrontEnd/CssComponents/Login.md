---
title: 登录页
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /FrontEnd/CssComponent/Login/
category: 
  - CSS
tag: 
  - CSS
---

::: vue-demo
```html
<template>
  <div class="login-body">
    <div class="login-container">
      <div class="left-container">
        <div class="title"><span>登录</span></div>
        <div class="input-container">
          <input type="text" name="username" placeholder="用户名"/>
          <input type="password" name="password" placeholder="密码"/>
        </div>
        <div class="message-container">
          <span>忘记密码</span>
        </div>
      </div>
      <div class="right-container">
        <div class="registry-container">
          <span>注册</span>
        </div>
        <div class="action-container">
          <span>提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style>
  /** {*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*}*/

  /*.html {*/
  /*  height: 350px;*/
  /*  width: 100%;*/
  /*}*/

  .login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    /*padding: 5% 0;*/
    /*position: relative;*/
    background-image: linear-gradient(to bottom right, rgb(114, 135, 254), rgb(130, 88, 186));
  }

  .login-body .login-container {
    /*position: absolute;*/
    width: 600px;
    height: 315px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 10px 50px 0 rgb(59, 76, 194);
    background-color: rgb(95, 76, 194);
  }

  .login-body .login-container .left-container {
    display: inline-block;
    width: 330px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 60px;
    background-image: linear-gradient(to bottom right, rgb(118, 76, 163), rgb(97, 103, 211));
  }

  .login-body .login-container .left-container .title {
    color: #fff;
    font-size: 18px;
  }

  .login-body .login-container .left-container .title span {
    border-bottom: 3px solid rgb(237, 221, 22);
  }

  .login-body .login-container .left-container .input-container {
    padding: 20px 0;
  }

  .login-body .login-container .left-container .input-container input {
    border: 0;
    background: none;
    background-color: transparent !important;
    outline: 0;
    margin: 20px 0;
    color: #fff !important;
    width: 100%;
    display: block;
    padding: 5px 0;
    transition: .2s;
    border-bottom: 1px solid rgb(199, 191, 219);
  }

  /*input：-webkit-autofill*/
  /*input:-webkit-autofill:hover*/
  input:-webkit-autofill:focus
  /*input:-webkit-autofill:active*/
  {
    /*解决自动填充文字背景色*/
    transition: background-color 500s ease-in-out 0s !important;
    /*  background-color: transparent ;*/
  }

  -internal-autofill-selected {
    transition: background-color 500s ease-in-out 0s;
  }

  .login-body .login-container .left-container .input-container input:hover {
    border-bottom-color: #fff;
  }

  ::-webkit-input-placeholder {
    color: rgb(199, 191, 219);
  }

  .login-body .login-container .left-container .message-container {
    font-size: 14px;
    transition: .2s;
    color: rgb(199, 191, 219);
    cursor: pointer;
  }

  .login-body .login-container .left-container .message-container:hover {
    color: #fff
  }

  .login-body .login-container .right-container {
    display: inline-block;
    width: 145px;
    height: calc(100% - 120px);
    vertical-align: top;
    padding: 60px 0;
  }

  .login-body .login-container .right-container .registry-container {
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 200;
  }

  .login-body .login-container .right-container .registry-container span {
    border-bottom: 3px solid rgb(237, 221, 22);
  }

  .login-body .login-container .right-container .action-container {
    font-size: 10px;
    color: #fff;
    height: 100%;
    text-align: center;
    position: relative;
  }

  .login-body .login-container .right-container .action-container span {
    border: 1px solid rgb(237, 221, 22);
    padding: 10px;
    display: inline;
    line-height: 25px;
    border-radius: 25px;
    position: absolute;
    bottom: 10px;
    left: calc(72px - 25px);
    transition: .2s;
    cursor: pointer;
  }

  .login-body .login-container .right-container .action-container span:hover {
    background-color: rgb(237, 221, 22);
    color: rgb(95, 76, 194);

  }
</style>
```
:::
