Mocha 测试工具
安装 npm install -g mocha

mkdir test

mocha 默认不支持 ES6,不支持 export, import 语法

增加 babel 支持 npm install --save-dev @babel/core @babel/register

mocha --require @babel/register

✖ ERROR: Error: Cannot find module '@babel/register' Require stack: 因为调用的是 global 的,需要调用本地的 () npm install mocha ./node_modules/.bin/mocha --require @babel/register

增加.babelrc 来编译 npm install --save-dev @babel/preset-env

运行

npm run test

Code coverage
安装 nyc 工具
npm install --save-dev nyc

运训 nyc

npm run code-coverage

安装 nyc babel 插件

npm install --save-dev @istanbuljs/nyc-config-babel npm install --save-dev babel-plugin-istanbul

1. 增加.nycrc 和 .babelrc,plugins

2. 运行 npm run code-coverage
   单元测试工具 | 所有工具与 generator 的集成
   代码在 tools 文件夹,项目名称叫 ‘generators-toytool’
   在 tools 目录下运行 npm link
   在其他的地方新建文件夹,运行 yo toytool webpack npm run test npm run coverage
