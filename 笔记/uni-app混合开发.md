#### 一、NativeApp（原生App）

分类：Android、IOS

语言：java、OC或Swift

更新维护：版本更新、打补丁包，都需要去应用商店进行下载

使用：必须去应用商店下载

优点：运行稳定、性能高、流畅度高、可以操作手机硬件接口

缺点：不能跨平台，需要开发两套代码（Android+IOS）；需要发版、兼容多版本加大开发难度，造成代码冗余

#### 二、WebApp（基于H5）

特点：凡是可以在移动端浏览器里打开的网站都称之为WebApp

跨平台、支持热更新、不需应用商店下载、不需多版开发和维护

开发：前端开发工程师

语言：h5+c3+js、其他前端框架

更新维护：无痕更新（需要注意缓存问题）

使用：无需下载，直接手机浏览器打开

有点：跨平台、开发成本低、使用便捷、更新维护快速

缺点：流畅度低、用户体验差、不能调用原生设备

#### 三、HybridApp（混合App）

特点：将WebApp嵌入到NativeApp中，通过WebView去实现，内部可以通过JSBridge来调用原生接口，从而实现调用原生设备的功能

--在native壳子中，通过webview中内嵌H5页面

模式：

​		原生主导的开发模式：

​				整个App的大部分界面都是由原生开发的，但是某一些的经常变动的页面由内嵌的H5页面实现。

​		web端开发：

​				整个App借助强大的web开发框架、扩展插件实现和原生App一样的体验。

#### 四、HBuilderX ---- 一款很好用的IDE

对于使用uni-app开发更加方便、更快速地运行和发布、集成多端

#### 五、uni-app ---- 比较统一的多端框架

1. 优点：一套代码多端使用（真实的情况是：还是有很多地方要做单独的配置，如果在设计上）
2. 缺点：多端的兼容性、设计难度增加（统一性、求同除异）、多端配置
3. 生命周期
   1. 应用生命周期：onLaunch、onShow、onHide...
   2. 页面生命周期：onLoad、onShow、onReady、onHide、onUnload、onResize...
4. 全局变量：
   1. getApp()的方式
   2. vuex-store

 



#### 六、示例

1. 底部导航、页面跳转和页面传参

````javascript
//tabBar配置
"tabBar": {
		"color": "#7A7E83",
		"selectedColor": "#3cc51f",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"list": [{
				"pagePath": "pages/tabbar/index/index",
				"iconPath": "static/tabbar/index.png",
				"selectedIconPath": "static/tabbar/index_select.png",
				"text": "首页"
			},
			{
				"pagePath": "pages/tabbar/group/group",
				"iconPath": "static/tabbar/group.png",
				"selectedIconPath": "static/tabbar/group_select.png",
				"text": "分类"
			},
			{
				"pagePath": "pages/tabbar/me/me",
				"iconPath": "static/tabbar/me.png",
				"selectedIconPath": "static/tabbar/me_select.png",
				"text": "我的"
			}
		]
	},
//跳转+传参
        //index.vue
uni.navigateTo({
		url:"../../index/index2/index2?id=1"
	})
		//index2.vue
    onLoad(options){
            console.log(options)
        //{id:1}
        }
````



2. 组件的使用

    1. 内置组件
    
       ````javascript
       在页面中直接引用
       ````
    
       
    
    2. components：扩展组件（uni-ui）、自定义组件。 打包时会剔除未使用组件
    
       ````javascript
       放到components下，在页面中引用
       ````
    
       
    
    3. npm 引入
    
       ````javascript
       import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
       ````
    
       


#### 七、分类打包

1. H5  √

2. 微信小程序

3. apk

   在线；

   离线：

   安装Android studio 

