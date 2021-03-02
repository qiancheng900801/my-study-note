#### setup -- (ref、reactive、toRefs)

1. ref：    

   ````javascript
   const list = ref([1,2,3,4,5])
   const item = ref('')
   item.value = list.value[0]
   ````

   

2. reactive

   ````javascript
   1.
   const data = reactive({
       list:['aaa','bbb','ccc'],
       selected:'',
       handleSelect:()=>{}
   })
   return {data}
   2.
   const refData = toRefs(data)
   return {...refData}
   ````

3. toRefs   把响应对象变成普通对象

#### 生命周期

1. ````javascript
   onBeforeMount--组件挂载到页面之前执行
   onMounted--组件挂载到页面之后执行
   onBeforeUpdate -- 组件更新之前执行
   onUpdated -- 组件更新之后执行
   ````

#### watch

````javascript
1.单个值
watch(overText,(newValue,oldValue)=>{
      console.log('new---'+newValue);
      console.log('old---'+oldValue);
    })
2.多个值
 watch([overText,()=>data.selected],(newValue,oldValue)=>{
      console.log(newValue);
    })
````

