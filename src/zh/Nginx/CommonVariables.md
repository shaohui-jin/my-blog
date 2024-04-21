---
title: nginx常用变量
lang: zh-CN
date: 2023-06-21 11:25:42
permalink: /Nginx/CommonVariables/
icon: nginx
category:
  - nginx
tag:
  - nginx
---

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
