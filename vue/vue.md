#### 一、权限管理
1、vue中使用动态添加路由(router.addRoutes)加载权限侧边栏的两种方式

https://blog.csdn.net/qq_31906983/article/details/89054798?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.vipsorttest&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.vipsorttest

2、Vue3动态添加路由：在main.js中或者在登录回调中进行动态渲染路由

````javascript
const about = {    //接口返回路由信息
  path: '/about',
  name: 'About',
  component: () => import('./views/About.vue')
};
router.addRoute(about); //添加到路由
````





