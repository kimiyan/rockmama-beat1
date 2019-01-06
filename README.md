# rockmama jewelry

#我的第一个全栈项目

##beat1

## 1 设计ui
## 2 创建gitignore,LICENSE开源项目协议等文件

## 3 github仓储
#### git init 创建git仓库
#### git status 查看本地仓库状态
#### git add . 把未提交文件添加到仓库
#### git commit 提交  git commit -m "提交信息"
#### git remote add origin http://github.com/xxxx
#### git push -u origin master  提交到主分支

## 4配置webpack
#### 1 npm i webpack webpack-cli  安装webpack
#### 2 创建webpack.config.js 文件  设置entry和output
#### 3 使用webpack-dev-server  实时打包 
####    3.1 在package.json中配置script脚本项 "dev" : "webpack-dev-server"  
####    3.2  bundle.js 文件路径改变  / 根路径的bundle
####    3.3 在webpack.config.js 中设置 devServer{open,port,hot contentBase}
####    3.4 在webpack.config.js中导入webpack模块安装plugins
####    3.4.2 new webpack.HotModuleReplacementPlugin()
####    3.5 安装-html-webpack-plugin  在内存中生成一份网页
####    3.6 安装第三方loader  处理非js文件
####    3.6.2 在webpack.config.js中新增module节点 rules[] 存放所有第三方匹配规则
####    3.6.3 sass-loader 需要先安装node-sass
####    3.6.4  url-loader file-loader ,处理图片和字体文件
####    3.7 babel
####    3.7.1 npm i babel-core babel-loader@7.1.2 babel-plugin-transform-runtime
####    npm i babel-preset-env babel-preset-stage-0 -D
####    .babel {"presets": ["env","stage-0"],"plugins": ["transform-runtime"]}
####    3.8 安装vue  vue-loader
####    3.8.1 解决vue路径问题 resolve alias "vue$" : "vue/dist/vue.js"
####    3.9 安装vue-loader 的坑  1 集成vue-loader@15.2.4报错 解决:在webpack.config.js中加入const VueLoaderPlugin = require('vue-loader/lib/plugin');plugins: [new VueLoaderPlugin()],
####   3.92  安装vue-template-compiler


