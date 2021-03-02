#### 一、store

保存数据的地方

````javascript
//创建store
import {createStore} from 'redux'
const store = createStore(fn)
````

#### 二、state

当前时刻的state

````javascript
//获取store中的数据 store.getState()
import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();
````

#### 三、action

State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。

Action 是一个对象。其中的`type`属性是必须的，表示 Action 的名称

````javascript
const action = {
    type:"ADD_TODO",
    payload:"learn Redux"
}
````

上面代码中，Action 的名称是`ADD_TODO`，它携带的信息是字符串`Learn Redux`。

可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。

#### 四、Action Creator

View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。

````javascript
const ADD_TODO = "添加TODO"
function addTodo(text){
    return {
        type:ADD_TODO,
        text
    }
}
const action = addTodo('Learn Redux')
````

#### 五、store.dispatch()

`store.dispatch()`是 View 发出 Action 的唯一方法。
`store.dispatch`接受一个 Action 对象作为参数，将它发送出去。

````javascript
import {createStore} from 'redux'
const store = createStore(fn);
store.dispatch({
    type:"ADD_TODO",
    payload:"Learn Redux"
})
````

#### 六、Reducer

注意：reducer只能是纯函数，不能调用接口；不能改变state，只能深拷贝之后使用新值

Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

````javascript
const reducer = function(state.action){
    return new_state
}
````

整个应用的初始状态，可以作为 State 的默认值。下面是一个实际的例子。

````javascript
const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});
````

#### 七、store.subscribe()

````javascript
import { createStore } from 'redux';
const store = createStore(reducer);
store.subscribe(listener);
````

#### 八、Store 的实现

store提供三个方法

- store.getState()
- store.dispatch()
- store.subscribe()

#### 九、redux-thunk

````javascript
//index.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const store = createStore(reducer, applyMiddleware(thunk))
export default store

//const getListAction = (value) => ({
  type: types.GET_LIST,
  value
})
//actionCreators.js
const getListThunk = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/234ce629a977953de88c22bba7f6e523/api/list').then(res => {
      console.log(res.data);
      dispatch(getListAction(res.data))
    })
  }
}
// App.js
store.dispatch(actions.getListThunk())

//render()使用this.props   function(props) 使用props
````

#### 十、react-redux

````javascript
//Provider
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//使用connect、stateToProps、dispatchToProps
import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppUI from './AppUI'
class App extends Component {
  render() {
    let { inputValue, inputChange, add, list } = this.props
    return (
      <AppUI inputValue={inputValue}
        inputChange={inputChange}
        add={add}
        list={list}
      />
    );
  }
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const dispatchToProps = (dispatch) => {
  return {
    inputChange: (e) => {
      let action = {
        type: 'input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    add: () => {
      let action = {
        type: 'add_value'
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(App);
//UI
function AppUI(props) {
  return (
    <div>
      <input value={props.inputValue} onChange={props.inputChange}></input>
      <button onClick={props.add}>添加</button>
      <ul>
        {
          props.list.map((item, index) => (
            <li key={index}>{index}---{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default AppUI

//reducer
const defaultValue = {
  inputValue: 'aaa',
  list: ['11111', '22222']
}
const reducer = (state = defaultValue, action) => {
  let newState = { ...state }
  if (action.type === 'input_value') {
    newState.inputValue = action.value
  } else if (action.type === 'add_value') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
  }
  return newState
}
export default reducer
````







