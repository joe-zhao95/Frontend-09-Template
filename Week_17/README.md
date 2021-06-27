工具链
初始化工具 Yeoman
工具的开端：脚手架 -> generator

Yeomen 安装
npm init
npm install yeoman-generator

npm install yeoman-generator@4.11.0
npm install -g yo
文档：https://yeoman.io/authoring/index.html

# 在 pakage.json 设置 "name": "generator-toolchain"

# 文件夹名字需要和 toolchain 保持一致

npm link
yo toolchain
Webpack 基本知识
webpack 最初是为了让 node 程序在浏览器运行而设计的打包工具。

因为并不是基于 web 开发的场景设计的，设计上对于 web 开发有不便之处。

webpack 核心功能： 多文件合并

webpack-cli 提供 webpack 的命令

Webpack 安装
npm install webpack-cli -g
npm install webpack -g

# 非全局安装

npm webpack-cli --save-dev
npx webpack
配置
Entry
输出文件
loader
webpack 的灵魂，核心机制
把一个 source 变成目标代码
Test 规定文件
可以使用多个 Loader 处理同一个文件
Babel 基本知识
Babel 用于把新版本 JS 转换成老版本 JS

npm install -g @babel/cli @babel/core

babel ./sample.js > 1.js
配置
.babelrc

Babel 由于配置繁琐，有预设配置 preset

npm install --save @babel/preset-env
{
"presets": ["@babel/preset-env"]
}
