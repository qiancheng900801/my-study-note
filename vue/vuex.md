#### 1、state、getters

````javascript
state:{
    number:0,
    list:[
        {name:1,age:10},
        {name:2,age:15},
        {name:3,age:20},
        {name:4,age:25},
        {name:5,age:30},
        {name:6,age:35},
    ]
}，
getters:{
    //无参
    more_20(state){
        return state.list.filter(v=>v.age>20)
    },
    //有参
    more_age(state){
        return (age)=>{
            return state.list.filter(v=>v.age>age)
        }
    }
}
````

#### 2、mutations

````javascript
mutations:{
    //固定值
    add(state){
        state.number ++
    },
    //方式1、传值
    add_args(state,value){
        state.number += value
    }
    //方式1、app.vue调用
    add(){
        this.$store.commit('add_args',10)
    }
    //方式2、传值
    add_args(state,payload){
        state.number += payload.value
    }
    //方式2、app.vue调用
    add(){
        //this.$store.commit("add_arg", { value: 10 });
        this.$store.commit({
            type:'add_args',
            value:10
        })
    }
    
}


````

#### 3、actions

actions提交的是mutations，而不是直接变更状态；

````javascript
actions:{
    getA(){
        
    },
    async getList({commit,dispatch}){
        await dispatch('getA')	//等待A完成
        commit('uploadList',await getOther())
        
    }
}
//app.vue
this.$store.dispatch('getList');
````





#### 4、modules

````javascript
const moduleA={
    state:{},
    getters:{
        home_getter(state,getters,rootState){
            //
    	}
    },
    mutations:{},
    actions:{
        getList({state,commit,rootState }){
            //对于module内部，rootState获取全局state
        }
    }
}
````



