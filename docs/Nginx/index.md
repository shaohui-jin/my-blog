---
title: nginx
lang: zh-CN
date: 2023-06-20 10:04:14
permalink: /nginx/
icon: nginx
headerDepth: 4
category: 
  - nginx
tag: 
  - nginx
---

## nginx的功能
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

## nginx常用变量

```shell
$args                  ## URL中的查询字符串，如 http://example1.com/?foo=123&bar=blahblah中的foo=123&bar=blahblah
$binary_remote_addr    ## 二进制形式的IP，节省空间.
$body_bytes_sent       ## 发送的body字节数.
$content_length        ## HTTP请求信息里的 Content-Length;
$content_type          ## HTTP请求信息里的 Content-type

$document_root         ## 当前请求的目录
$document_uri          ## 同 $uri.
$uri                   ## 请求的 URI，可能和最初的值有不同，比如经过重定向之类的
$host                  ## 请求的主机
$http_HEADER           ## 请求头
$request_uri           ## 请求的原始URI
$server_addr           ## 服务器地址
$server_name           ## 服务器名称
$server_port           ## 服务器的端口
$server_protocol       ## 通常是 HTTP/1.0 或者 HTTP/1.1.
$upstream_cache_status ## 缓存是否命中
```

## nginx内核模块

内核模块用于控制 **nginx服务器** 的基本功能，内核参数的修改需要重新启动nginx才能生效？？？

### 用于调试进程，定位问题的配置项

#### 是否以 **守护进程** 方式启动 nginx

```text
语法： daemon on|off;
默认： daemon on;
```

::: info
**守护进程（daemon）** 是 **脱离终端** 并且在 **后台运行** 的进程。
它脱离终端是为了避免进程执行过程中的信息在任何终端上显示，这样一来，进程也不会被任何终端所产生的信息所打断。
`nginx毫无疑问是一个需要以守护进程方式运行的服务`，因此，**默认** 都是以这种方式运行的。
不过 nginx 还是提供了 **关闭** 守护进程的模式，之所以提供这种模式，是为了 **方便跟踪调试nginx**，毕竟用 **gdb**^Linux常用的程序调试器^ 调试进程时最烦琐的就是`如何继续跟进fork出的子进程`了。
:::

#### 是否以 **master/worker** 方式工作

- on时（默认），以 **master/worker** 进程运行
- off时，以 **master** 进程运行

```text
语法：master_process on|off;
默认：master_process on;
```

::: info
默认 nginx 是以 **一个master进程** 管理 **多个 worker进程** 的方式运行的，几乎所有的产品环境下，nginx都以这种方式工作。

与daemon配置相同，提供 **master_process** 配置也是为了 **方便跟踪调试nginx**。如果用 off **关闭** 了 master_process 方式，就不会 fork 出 worker子进程 来处理请求，而是用 **master进程** 自身来处理请求。
:::

#### error日志文件配置

```text
语法： error_log pathFile level;
默认： error_log logs/error.log error;
关闭： error_log /dev/null;
```

::: info
**pathFile** 参数可以是一个具体的文件

- 默认情况下是 **logs/error.log** 文件，最好将它放到一个磁盘空间足够大的位置
- 可以是 **/dev/null**，这样就不会输出任何日志了，这也是关闭 **error日志** 的 **唯一手段**
- 可以是 **stderr**，这样日志会输出到 **标准错误文件**

**level** 是日志的输出级别

- 取值范围是 `debug`、`info`、`notice`、`warn`、`error`、`crit`、`alert`、`emerg`，从左至右级别依次增大
- 如果日志级别设定到 **debug**，必须在 configure 时加入 **-–with-debug** 配置项

:::

#### 是否处理几个特殊的调试点

```text
语法： debug_points [stop|abort]
```

::: info
该指令用于 nginx 调试，可用来帮助用户调试nginx。**debug_points** 接收2个参数，分别为：**stop** 和 **abort**。

nginx 在一些关键的错误逻辑中（nginx 1.0.14版本中有8处）设置了调试点。如果设置为 **stop**，那么 nginx 的代码执行到这些调试点时，会发出 **SIGSTOP** 信号。如果设置为 **abort**，则会产生一个 **coredump** 文件，可以使用gdb来查看nginx当时的各种信息。
:::

#### 仅对指定的客户端输出debug级别的日志

```text
语法： debug_connection [IP|CIDR]
```

::: info
这个配置项实际上属于 **事件类** 配置，因此，它必须放在 **events{...}** 中才有效。它的值可以是 **IP地址** 或 **CIDR地址** ，例如：

```text
events {
  debug_connection 10.224.66.14;
  debug_connection 10.224.57.0/24;
}
```

这样，仅仅来自以上 **IP地址** 的请求才会输出 **debug级别** 的日志，其他请求仍然沿用 **error_log** 中配置的日志级别。`上面这个配置对修复Bug很有用，特别是定位高并发请求下才会发生的问题。`

使用 **debug_connection** 前，需确保在执行 **configure** 时已经加入了 **--with-debug** 参数，否则不会生效。

:::

#### 限制 coredump 核心转储文件的大小

```text
语法： worker_rlimit_core size
```

::: info
在Linux系统中，当进程 **发生错误** 或 **收到信号** 而终止时，系统会将进程执行时的内存内容（**核心映像**）写入一个文件（**core文件**），以作为调试之用，这就是所谓的 **核心转储（core dumps）**。

当Nginx进程出现一些 **非法操作（如内存越界）** 导致进程直接被操作系统强制结束时，会 **生成核心转储core文件**，可以从 core 文件获取当时的堆栈、寄存器等信息，从而帮助我们定位问题。

但这种core文件中的许多信息 **不一定是用户需要的**，如果不加以限制，那么可能一个core文件会达到几GB，这样随便 **coredumps** 几次就会把磁盘占满，引发严重问题。

通过 **worker_rlimit_core** 配置可以限制 **core文件** 的大小，从而有效帮助用户定位问题。
:::

#### 指定 coredump 文件生成目录

```text
语法： working_directory path
```

worker进程的工作目录，即 coredump 的生成目录。故需要确保worker进程有权限向 working_directory 写入的权限

worker进程的工作目录。这个配置项的唯一用途就是设置 coredump 文件所放置的目录，协助定位问题。因此，需确保worker进程有权限向 working_directory 指定的目录中写入文件。

#### 重新定义环境变量

```shell
env VAR=VALUE
```

### 其他

include

用于载入配置文件，可以使用通配符

working_directory

依赖于编译时的--prefix

### 正常运行的必备配置

### 指定运行worker进程的用户 和组，

user USERNAME [GROUPNAME];

### 指定nginx的pid文件；

pid /path/to/pid_file；



worker_rlimit_nofile #;

指定一个worker进程所能够打开的最大文件句柄数；

worker_rlimit_sigpending #;

指定每个用户能够发往worker的信号的数量；

优化性能相关的配置
worker_processes #:

worker线程的个数；通常应该为物理CPU核心个数减1；

worker_cpu_affinity cpumask ...;

绑定worker进程至指定的CPU上；

将一个进程绑定到1颗CPU上
worker_processes 4
worker_cpu_affinity 0001 0010 0100;
将第1个进程绑定到CPU0/CPU2上,将第2个进程绑定到CPU1/CPU3上,这个对于超线程CPU合适
worker_processes 1
worker_cpu_affinity 0101 1010;
timer_resolution t;

指定worker进程计时器的时间解析度，即gettimeofday()函数的调用次数，时间解析度越大，利于优化性能

timer_resolution 100ms;
worker_priority nice;

worker进程优先级-20, 19

变量
$pid当前nginx服务器的进程ID
























