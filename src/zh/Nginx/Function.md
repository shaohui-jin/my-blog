---
title: nginx的功能
lang: zh-CN
date: 2023-06-20 10:04:14
permalink: /Nginx/Function/
icon: nginx
category:
  - nginx
tag:
  - nginx
---

### nginx的特性

- 模块化设计、较好扩展性

但不支持动态模块加载，编译时启用的模块在nginx启动时会全部加载；1.9.11部分模块支持DSO

- 高可靠性

master进程负责管理 worker进程的崩溃不会相互影响

- 低内存消耗

10000个keep-alive连接在nginx仅消耗2.5MB

- 支持热部署

不停机而更新配置文件、更换日志文件、更新服务器程序版本

### 基本HTTP功能

- 提供静态文件和index文件，生成自动索引，缓存打开文件的描述符；
- 使用缓存加快反向代理和FastCGI访问；
- 模块化结构，过滤器包括gzip，字节range，chunk响应，XSLT，SSI(Server Side Include)，图像大小调；整，被传到后台服务器的多个SSI指令在单个页面并行处理；
- 支持SSL和TLS SNI；

### 其他HTTP功能

- 基于名称和IP的虚拟服务器；
- 基于客户端IP和HTTP基本认证的访问控制；
- 支持keepalive和管道连接；
- 平滑的重新配置和在线升级；
- 定制访问日志格式，缓存日志写入和快速日志轮询；
- 3xx-5xx错误重定向，定制错误页面；
- 支持url rewrite；
- FLV流文件；
- 速度限制；
- 限制同时连接数或者来自同一个IP地址的请求；

### 邮件代理服务器

### 架构和可扩展性

- 一个主进程和多个工作进程，工作进程以非特权用户运行；
  主进程必须以管理员身份启动（启动<1023端口必须使用管理员身份），主进程用来监控和管理工作进程；主进程加载配置文件后，若有错误，不会影响工作进程；重新再加载正确后，新的连接建立时使用新配置。

- 支持的事件机制的IO框架
  kqueue（FreeBSD 4.1+）、epoll（Linux 2.6+）、rt signals（Linux 2.2.19+）、/dev/poll（Solaris 7 11/99+）、event ports（Solaris 10）、select以及poll（次之）；
  众多支持的kqueue特性包括EV_CLEAR、EV_DISABLE（临时禁止事件）、NOTE_LOWAT、EV_EOF，可用数据的数量，错误代码；
- 支持sendfile（FreeBSD 3.1+, Linux 2.2+, Mac OS X 10.5+）、sendfile64（Linux 2.4.21+）和sendfilev（Solaris 8 7/01+）；
  用户请求响应不经过用户空间，报文在内核完成http封装直接从内核响应给客户端，避免了响应报文从内核复制到用户空间，再从用户空间复制到内核空间在响应给客户，尽可能避免数据拷贝操作。
- 文件AIO（FreeBSD 4.3+, Linux 2.6.22+）；
- DIRECTIO (FreeBSD 4.4+, Linux 2.4+, Solaris 2.6+, Mac OS X);
- 支持Accept-filters（FreeBSD 4.1+, NetBSD 5.0+）和 TCP_DEFER_ACCEPT（Linux 2.4+）；
- 支持连接过滤器，限制连接数
- 10000个非活跃的HTTP keep-alive连接仅占用约2.5M内存；

### 模块类型
- 核心模块
- Standard HTTP modules 标准http模块
- Optional HTTP modules 可选http模块
- Mail modules 邮件模块
- 3rd party modules 第三方模块
