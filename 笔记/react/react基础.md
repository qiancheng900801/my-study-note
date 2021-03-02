#### 一、自定义组件，可传参

````javascript
import React, { Component } from 'react';
class App extends Component {
  render() {
    function Message({ info }) {
      return (
        <h2>{info}</h2>
      )
    }
    return (
      <Message info='今天很冷'></Message>
    );
  }
}
export default App;
````

#### 二、组件包组件--类插槽

````javascript
import React from 'react';

function Color(props) {
  return (
    <p style={{ color: 'red' }}>{props.children}</p>
  )
}
function Message() {
  return '今天天气很冷！'
}

function Index() {
  return (
    <Color>
      <Message></Message>
    </Color>
  )
}
export default Index
````

