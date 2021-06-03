#### 一、指令

数据驱动视图、组件化开发

1. ````javascript
   v-pre : 保持原样输出
   <div v-pre>{{message}}</div>
   v-cloak : 等编译结束，渲染页面
   v-once:只渲染一次
   ````

2. 自定义指令

   ````javascript
   <h3 v-color="color">{{num}}</h3>
   
   Vue.directive("color", {
           bind: () => {
             console.log("1-bind");
           },
           inserted: () => {
             console.log("2-inserted");
           },
           update: () => {
             console.log("3-update");
           },
           componentUpdated: () => {
             console.log("4-componentUpdated");
           },
           unbind: () => {
             console.log("5-unbind");
           },
         });
             color: "red",
   ````

3. 解除指令

   ````javascript
   <p><button onclick='unband()'>解除</button></p>
       function unband() {
           app.$destroy();
         }
   
     
   ````



#### 二、options

1. ````javascript
   @click=add(1,$event)
   <btn @click.native='add(1,$event)'></btn>
   
   mixins:[fn]    全局混入 > 局部混入 > 原生混入
   ````


#### 三、router

1. ````javascript
   多路由
   	{
         path: "/",
         name: "home",
         components: {
           default: Home,
           left,
           right
         }
       }
   
   <div id="app">
       <router-view></router-view>
       <router-view name="left" class="left"></router-view>
       <router-view name="right" class="right"></router-view>
   </div>
   ````

2. ````javascript
   
   1.params:
   <router-link :to="{name:'params',params:{id:11,title:'aaa'}}">params页</router-link>
   
   2.params:
   { path: "/params/:newsId(\\d+)/:newsTitle",  
           name: "params",
           component: Params 
           }
       <router-link to="/params/111/good">params页</router-link>
       params:{{ $route.params }}
   
   3. alias:
   {
         path:'/right',
         component:right,
         alias:'/left'
       }
   	<router-link to="/right">Right</router-link>|
       <router-link to="/left">Left</router-link>|
   
   4. 动画:transition
   <transition name="fade" mode="out-in">
         <router-view></router-view>
       </transition>
   .fade-enter {opacity: 0;}
   .fade-enter-active {transition: all 0.5s;}
   .fade-leave {opacity: 1;}
   .fade-enter-active {opacity: 0;transition: all 0.5s;}
   5. 404
   	{
         path: "*",
         component: errorPage
       }
   6.模板路由
     beforeRouteEnter (to, from, next) {
       // ...
     },
     beforeRouteLeave (to, from, next) {
       // ...
     }
   7、路由配置 
   	{
         path: "/params/:id/:title",
         name: "params",
         component: Params,
         beforeEnter:(to,from,next)=>{
           
         }
       },
   8. 路由跳转
   // 字符串
   router.push('home')
   // 对象
   router.push({ path: 'home' })
   // 命名的路由
   router.push({ name: 'user', params: { userId: '123' }})
   // 带查询参数，变成 /register?plan=private
   router.push({ path: 'register', query: { plan: 'private' }})
   ````

#### 四、vuex

1. ````javascript
   mapState :
   	computed: {
       // ...mapState(["count"])
       ...mapState({
         thisCount:'count'
       })
     },
    
   mapMutations:       
   	// ...mapMutations(['add','reduce']),
       ...mapMutations({
         thisAdd:'add',
         thisReduce:'reduce'
       })
   mapGetters:
	const getters = {
         count(state) {
           return (state.count += 10);
         }
       };
   	...mapGetters(["count"])
   actions:
   	const actions = {
         addAction(context) {
           context.commit("add");
         },
         reduceAction({ commit }) {
           commit("reduce");
         }
       };
   	...mapActions(["addAction", "reduceAction"])
   
   modules:
       export default new Vuex.Store({
         state: {},
         mutations: {},
         actions: {},
         modules: {
           user,
           app,
           action,
           code,
           list
         }
       })
   ````
   
2. 

