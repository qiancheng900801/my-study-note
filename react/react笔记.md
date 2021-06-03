### 1、实现组件按需打包

2.X及之前的版本需要按需引入，3.x之后不需要

### 2、修改主题

#### 一、方式一

````javascript
//1 安装插件
yarn add antd react-app-rewired customize-cra babel-plugin-import less less-loader   

//2 修改package.json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
}
//3 根目录创建config-overrides.js
    
````







![

](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210317140428122.png)

![image-20210317142613258](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210317142613258.png)

![image-20210317142637146](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210317142637146.png)

![image-20210317143229105](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210317143229105.png)