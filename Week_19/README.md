发布系统
实现一个线上 Web 服务
初始化 Server
sudo apt install nodejs
sudo apt install npm
sudo npm install -g n
PATH="$PATH"
利用 Express, 编写服务器
npx express-generator
启动 ssh 服务

service ssh start

# 传文件

scp -P 22 -r ./\* liuwenjie@192.168.57.3:/home/liuwenjie/server
用 Node.js 启动一个简单的 Server
编写简单的发送请求功能
简单了解 Node.js 的流
https://nodejs.org/docs/latest-v13.x/api/stream.html#stream_class_stream_readable
改造 Server
实现多文件发布
压缩相关的包

Archiver
unzipper

# publish-tool

npm install --save archiver

# publish-server

npm install --save unzipper
