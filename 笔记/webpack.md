# webpack4.0学习（https://www.bilibili.com/video/BV1m4411i7zd?p=4）

#### 1、webpack4.0新特性

mode属性：

安装：npm i webpack-cli -g

打包：1. webpack --mode development index.js -o output.js

​			2. webpack --mode development

webpack.config.js配置

````javascript
1、const path = require('path');
module.exports = {
  entry:'./input.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'output.bundle.js'
  }
}
2、module.exports = {
  entry:{
    home:'./home.js',
    about:'./about.js',
    other:'./other.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].bundle.js'
  },
  mode:'development'
}
3、const path = require("path");
module.exports = {
  entry: "./input.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins:['@babel/plugin-transform-react-jsx']
          },
        },
      },
    ],
  },
};

````

1、安装

2、配置入口文件

3、加载器：url-loader 、 babel-loader  、 sass-loader 、 MinCssExtract 、 DefinePlugin  、 插件html 、 热替换 