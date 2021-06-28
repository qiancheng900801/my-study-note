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





#### vuex

1. state、getters

````javascript
//store.js
state:{
    list:[
        {name:1,age:10},
        {name:2,age:15},
        {name:3,age:20},
        {name:4,age:25},
    ]
},
    getters:{
        //无参数
        more20(state){
            return state.list.filter(v=>v.age>20)
        },
        //有参数
        more_age(state){
            return age=>state.list.filter(v=>v.age>age)
        }
    }


//app.vue
<div>{{$store.state.getters.more20}}</div>
<div>{{$store.state.getters.more_age(20)}}</div>
````

2. mutations

````javascript
mutations:{
    add(state){
        state.number++
    }
}
````

