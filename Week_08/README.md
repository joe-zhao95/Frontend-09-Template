### HTTP 协议的解析

#### ISO-OSI 七层网络模型

- 应用层（HTTP）
- 表示层（HTTP）
- 会话层（HTTP）
- 传输层（TCP/UDP） `require('net')`
- 网络层（Internet）
- 数据链路层 （4G/5G/wifi）对数据准确的传输。点对点传输。
- 物理层 （4G/5G/wifi）对数据准确的传输。点对点传输。

#### TCP

- 传输数据的概念是 流。保证前后顺序正确。
- 端口。网卡是根据端口把接到的数据包分给各个应用的。
- `require('net')`

#### IP

- 包
- IP 地址
- libnet：负责构造 IP 包并且发送 / libpcap：负责从网卡抓所有的流经你网卡的 IP 包

#### HTTP

- Request
- Response

```javascript
// Request
POST /(path) HTTP/1.1  // Request line：method/path/HTTP版本
Host: 127.0.10.1                                   // Request Headers
Content-Type: application/json;charset=UTF-8

fild1=aaa&code=xxx                // body（由Content-Type来决定。Content-Type规定了什么格式，body就用什么格式写）
```

- `content-type`是一个必要字段。不同的`content-type`影响 body 的格式

```javascript
// Response
HTTP/1.1 200 OK     // status line：HTTP版本 / HTTP状态码 / HTTP状态文本
Content-Type: text/html               // headers
date: Wed, 14 Apr 2021 13:09:33 GMT
connection: keep-alive
Transfer-Encoding: chunked

26                                      // body
<html><body>Hello World</body></html>
0

```

---

#### 第一步 HTTP 请求

- 设计一个 HTTP 请求的类
- content type 是一个必要字段，有默认值
- body 是 key-value 格式
- 不同的 content-type 影响 body 的格式

#### 第二步 send 函数

- 在 Request 的构造器中收集必要信息
- 设计一个 send 函数，把请求真实发送到服务器
- send 函数是异步，返回 promise

#### 第三步发送请求

- 设计支持已有的 connection 或者自己新建的 connection
- 收到数据传给 parser
- 根据 parser 的状态 resolve promise

#### 第四步 ResponseParser

- Response 必须分段构造，所以用 ResponseParser 来“装配”
- ResponseParser 分段处理 ResponseText，用状态机来分析文本结构

#### 第五步 BodyParser

- Response 的 body 可能根据 Content-Type 有不同结构，因此采用子 parser 的结构
- 以 TrunkedBodyParser 为例，采用状态机来处理 body 格式
