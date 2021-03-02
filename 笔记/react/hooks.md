

PS：使用Hooks需要react版本在16.8以后

#### 一、useState

useState不能存在条件判断中

````javascript
import React, { useState } from 'react';
function Example() {
  const [buttonText, setButtonText] = useState('init')
  function handleClk(params) {
    return setButtonText('clicked')
  }
  return (
    <button onClick={handleClk}>{buttonText}</button>
  )
}
export default Example;
````

````javascript
import React, { Component, useState } from 'react';
function UseState002(params) {
  const [name, setName] = useState('yqc')
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  return (
    <div>
      {name}--{age}--{sex}
    </div>
  )
}

export default UseState002
````

#### 二、useEffect

````javascript
  function Index() {
    useEffect(() => {
      console.log('进入页面！');
      return (() => {
        console.log('离开页面！');
      })
    }, [])
    return <h2>Index page</h2>
  }
````



#### 三、useContext、createContext

主要用于解决父子组件传值问题。

````javascript
import React, { Component, useContext } from 'react';
const appContext = React.createContext()

const Navbar = () => {
  const { username } = useContext(appContext)
  return (
    <h1>navbar--{username}</h1>
  )
}

const Message = () => {
  const { username } = useContext(appContext)
  return (
    <h1>message--{username}</h1>
  )
}
function UseContext() {
  return (
    <appContext.Provider value={{ username: 'something' }}>
      <div>
        <Navbar></Navbar>
        <Message></Message>
      </div>
    </appContext.Provider>
  )
}
export default UseContext
````

````javascript
//bus.js
import { createContext } from 'react';
const MyContext = createContext()
export default MyContext

//father.js
import React, { useState } from 'react';
import MyContext from './contextBus'
import Son from './useContext1-son'
function Father() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(1)
  const [number, setNumber] = useState(2)
  function add() {
    return setCount(count + 1)
  }
  return (
    <div>
      <h2>{step}--{count}--{number}</h2>
      <button onClick={add}>{count}</button>
      <MyContext.Provider value={{ setStep, setCount, setNumber }}>
        <Son step={step} count={count} number={number}></Son>
      </MyContext.Provider>
    </div>
  )
}
export default Father

//son.js
import React, { useContext } from 'react';
import MyContext from './contextBus'
function Son(props) {
  const value = useContext(MyContext)
  console.log(props);
  console.log(value);
  function clk(params) {
    value.setStep(props.step + 1)
  }
  return (
    <div>
      step:{props.step}---count:{props.count}---number:{props.number}
      <button onClick={clk}>click</button>
    </div>
  )
}
export default Son
````

#### 四、useReducer

````javascript
//button.js
import React, { useContext } from 'react';
import ColorContext from './context'
function Buttons(params) {
  const { dispatch } = useContext(ColorContext)
  function changeColor(color) {
    let action = {
      type: 'UP',
      color
    }
    dispatch(action)
  }
  return (
    <div>
      <button onClick={() => changeColor('blue')}>蓝色</button>
      <button onClick={() => changeColor('red')}>红色</button>
    </div>
  )
}
export default Buttons

//context.js
import React, { useContext } from 'react';
import ColorContext from './context'
function Buttons(params) {
  const { dispatch } = useContext(ColorContext)
  function changeColor(color) {
    let action = {
      type: 'UP',
      color
    }
    dispatch(action)
  }
  return (
    <div>
      <button onClick={() => changeColor('blue')}>蓝色</button>
      <button onClick={() => changeColor('red')}>红色</button>
    </div>
  )
}
export default Buttons

//index.js
import React, { useReducer } from 'react';
import Buttons from './button'
import Text from './text'
import ColorContext from './context'
function Index(params) {
  const [color, dispatch] = useReducer(reducer, 'yellow')
  function reducer(state, action) {
    switch (action.type) {
      case 'UP':
        return action.color
      default:
        return state
    }
  }
  return (
    <div>
      <ColorContext.Provider value={{ color, dispatch }}>
        <Text />
        <Buttons />
      </ColorContext.Provider>
    </div>
  )
}
export default Index

//text.js
import React, { useContext } from 'react';
import ColorContext from './context'
function Text(params) {
  const { color } = useContext(ColorContext)
  return (
    <p style={{ color }}>今天天气不错！</p>
  )
}
export default Text
````

#### 五、useMemo

````javascript
import React, { useMemo, useState } from 'react';
function App(params) {
  const [name, setName] = useState('名称')
  const [content, setContent] = useState('内容')
  return (
    <>
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <Button name={name}>{content}</Button>
    </>
  )
}

function Button({ name, children }) {
  function changeName(name) {
    console.log('11');
    return name + '改变name方法'
  }

  // let otherName = changeName(name)
  let otherName = useMemo(() => changeName(name), [name])
  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>
  )
}
export default App
````

#### 六、useRef

````javascript
//createRef
/* import React, { Component, createRef } from 'react';
class refCom extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  inputRef = createRef()
  render() {
    return (
      <input ref={this.inputRef}></input>
    );
  }
  componentDidMount() {
    this.inputRef.current.value = '11111'
    console.log(this.inputRef);
    this.inputRef.current.focus()
  }
}
export default refCom; */

//useRef
import React, { useEffect, useRef } from 'react';
function App(params) {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.value = '1111'
    inputRef.current.focus()
  }, [])
  return <input ref={inputRef}></input>
}
export default App
````

````javascript
//createRef -- 使用类组件
import React, { Component, createRef } from 'react';
class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  changeText = (text) => {
    this.setState({
      text
    })
  }
  render() {
    return (<p>text:{this.state.text}</p>);
  }
}

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  sonRef = createRef()
  clk = () => {
    this.sonRef.current.changeText('qqqqqqqqqq')
    console.log(this.sonRef.current);
  }
  render() {
    return (
      <>
        <Son ref={this.sonRef}></Son>
        <button onClick={this.clk}>改变子组件text</button>
      </>
    );
  }
}
export default Father;
````

````javascript
//useRef --- 使用函数组件,useImperativeHandle暴露出方法给父组件
import React, { useImperativeHandle, forwardRef, useRef } from 'react';
const { useState } = require("react")
function Son(props, ref) {
  const [text, setText] = useState('1111111')
  useImperativeHandle(ref, () => ({
    setTextByFather(text = '') {
      setText(text)
    }
  }))
  return (
    <p>text:{text}</p>
  )
}
const ForWardSon = forwardRef(Son)
function Father(params) {
  const ref = useRef()
  return (
    <>
      <ForWardSon ref={ref} />
      <button onClick={() => { ref.current.setTextByFather('qqwweerr') }}>改变子组件text</button>
    </>
  )
}
export default Father
````

#### 七、useCallback

````javascript
import React, { useCallback, useEffect, useState } from 'react';
const useWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }, [])
  })
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return (() => {
      window.removeEventListener('resize', onResize)
    })
  }, [])
  return size
}

const Index = () => {
  const size = useWinSize()
  return (
    <>
      窗口大小：width:{size.width} * height:{size.height}
    </>
  )
}

export default Index
````

