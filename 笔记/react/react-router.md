#### 一、基本路由

````javascript
import { Route, BrowserRouter, Link } from 'react-router-dom'
<BrowserRouter>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list" exact component={List}></Route>
    </BrowserRouter>
//exact:精确匹配
````

#### 二、动态路由

````javascript
<BrowserRouter>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/123">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list/:id" exact component={List}></Route>
    </BrowserRouter>
//获取参数
  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    })
  }


````

####  三、重定向

````javascript
//声明式
<Redirect to='/home'></Redirect>
//编程式
this.props.history.push('/home')
````

