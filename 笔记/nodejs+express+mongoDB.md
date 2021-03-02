### 一、nodejs
#### 一、fs

````javascript
fs.writeFile('./a.txt', 'qqqwwweee', (error, data) => {
  console.log(error);
  console.log(data);
})

fs.readFile('./a.txt', (error, data) => {
  console.log(error);
  console.log(data.toString());
})
````




#### 二、http

1. http 1.0 RFC-1945
	http 1.1 RFC-2616，持久连接
	https  RFC-2818 安全行，采用RSA非对称加密
	http 2.0 RFC-7540 加密、头部压缩、服务器推送、管线操作、多路复用

2. 状态码
	1xx	信息
	2xx	成功
	3xx	重定向
	4xx	请求错误
	5xx	服务器错误
	
3. get请求

  使用"queryString",

````javascript
const querystring = require('querystring')
let [url, query] = 'http://localhost:8080/?username=yqc33288&password=1234'.split('?')
let queryObj = querystring.parse(query)
````

  使用“url”

````javascript
const url = require('url')
let query = url.parse(req.url, true)
````

4. post请求

````javascript
1.
let arr = []
  req.on('data', (buffer) => {
    arr.push(buffer)
  })
  req.on('end', () => {
    let buffer = Buffer.concat(arr)
    console.log(buffer.toString());
     let query = querystring.parse(buffer.toString())
  })
2.

````

提示：如果是get请求，使用url.parse()更加方便，如果是post，使用querystring更方便



5. get、post处理

````javascript
const http = require('http');
const url = require('url');
const querystring = require('querystring')
const fs = require('fs')
http.createServer((req, res) => {
  let method = req.method
  let path = '', get = {}, post = {}
  if (method == 'GET') {
    let { pathname, query } = url.parse(req.url, true)
    path = pathname
    get = query
    complete()
  } else if (method == 'POST') {
    path = req.url
    let arr = []
    req.on('data', buffer => {
      arr.push(buffer)
    })
    req.on('end', () => {
      let buffer = Buffer.concat(arr)
      post = querystring.parse(buffer.toString())
      complete()
    })
  }
  function complete() {
    console.log(path, get, post);
  }
}).listen(8080)
````

6. get、post接口处理

````javascript
const http = require('http');
const url = require('url');
const querystring = require('querystring')
const fs = require('fs')
let user = {}
http.createServer((req, res) => {
  let method = req.method
  let path = '', get = {}, post = {}
  if (method == 'GET') {
    let { pathname, query } = url.parse(req.url, true)
    path = pathname
    get = query
    console.log(path, get);
    complete()
  } else if (method == 'POST') {
    path = req.url
    let arr = []
    req.on('data', buffer => {
      arr.push(buffer)
    })
    req.on('end', () => {
      let buffer = Buffer.concat(arr)
      post = querystring.parse(buffer.toString())
      complete()
    })
  }
  function complete() {
    if (path == '/reg') {
      let { username, password } = get
      if (user[username]) {
        res.write(JSON.stringify({ error: 1, msg: '用户名已存在！' }))
        res.end()
      } else {
        user[username] = password
        res.write(JSON.stringify({ error: 0, msg: '注册成功！' }))
        res.end()
      }
    } else if (path == '/login') {
      let { username, password } = get
      console.log(user[username]);
      if (!user[username]) {
        res.write(JSON.stringify({ error: 1, msg: '用户不存在！' }))
        res.end()
      } else if (user[username] != password) {
        res.write(JSON.stringify({ error: 1, msg: '密码错误！' }))
        res.end()
      } else {
        res.write(JSON.stringify({ error: 0, msg: '登录成功！' }))
        res.end()
      }
    } else {
      fs.readFile(`www${path}`, (error, buffer) => {
        if (error) {
          res.writeHead(404)
          res.write('404 not found')
          res.end()
        } else {
          res.write(buffer)
          res.end()
        }
      })
    }
  }
}).listen(8080)
//HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./jquery.min.js"></script>
  <script>
    $(function () {
      $('#reg').click(() => {
        $.ajax({
          url: '/reg',
          dataType: 'json',
          data: {
            username: $('#username').val(),
            password: $('#pass').val()
          }
        }).then((json) => {
          if (json.error) {
            alert(json.msg)
          } else {
            alert('success!')
          }
        }, (err) => {
          alert('失败')
        })
      })
      $('#login').click(() => {
        $.ajax({
          url: '/login',
          dataType: 'json',
          data: {
            username: $('#username').val(),
            password: $('#pass').val()
          }
        }).then((json) => {
          console.log(json);
          if (json.error) {
            alert(json.msg)
          } else {
            alert('success!')
          }
        }, (err) => {
          alert('失败')
        })
      })
    })
  </script>
</head>
<body>
  用户名：<input type="text" id="username"><br>
  用户名：<input type="text" id="pass"><br>
  <button id="reg">注册</button> <button id="login">登录</button>
</body>
</html>
````

7. 模块化

[深入理解module.exports、exports、require、export、export default、import](https://www.cnblogs.com/haccer/articles/12791886.html)

````javascript
module.exports = {}  module.exports = function(){}   module.exports = class {constructor(name){this.name=name}}
------------
const {a} = require('./001export')
console.log(a);
````

#### 三、url



#### 四、自定义模块

1. 只有一个对象或方法，使用module.exports = obj；有很多个使用exports.fn= fn...

````javascript
1、
//index1.js
exports.get = () => {
  console.log('get');
}
exports.post = () => {
  console.log('post');
}
//index2.js
const { get, post } = require('./index1')
2.
let obj = {
  get: () => {
    console.log('获取数据');
  },
  post: () => {
    console.log("提交数据");
  }
}
module.exports = obj
------------------
const obj = require('./003modul')
obj.get()
````

2. 默认从node_modules文件的index.js导入，修改导入文件入口：npm init 
3. npm指定安装包的版本：npm i jquery@1.3.0

#### 五、fs模块

````javascript
fs.stat    //校验是文件还是目录
fs.mkdir() //创建目录
fs.writeFile //创建写入文件
fs.appendFile  //追加文件
fs.readFile  //读取文件
fs.readdir  //读取目录
fs.rename  //重名名 移动文件
fs.rmdir   //删除目录
fs.unlink  //删除文件

npm i mkdirp   创建文件夹组件
````

````javascript
管道流--用于复制文件
const fs = require('fs')
var str = ''
for (let index = 0; index < 200; index++) {
  str += '发生的发生的发十多个十多个是\n'
}
var writeStream = fs.createWriteStream('./data/output.txt')
writeStream.write(str)
writeStream.end()
writeStream.on('finish', () => {
  console.log('输入完成');
})
````

#### 六、node原生服务

````javascript
const http = require('http')
const fs = require('fs')
const path = require('path')
const { fotmat } = require('./module/common')
const serve = http.createServer((req, res) => {
  let url = req.url
  url = url == '/' ? '/index.html' : url
  if (url != '/favicon.ico') {
    let name = fotmat(path.extname(url))
    fs.readFile(__dirname + '/static' + url, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": 'text/html;charset=utf-8' })
        res.end('404 not found!')
      } else {
        res.writeHead(200, { "Content-Type": name + ';charset=utf-8' })
        res.end(data)
      }
    })
  }
})
serve.listen(3000, () => { console.log('running in 3000'); })
````



#### 七、ejs模板

````javascript
npm i ejs
ejs.renderFile('./views/index.ejs',{msg},(err,data)={res.end(data)})
````

#### 八、自己手写路由、express
1. ````javascript
    exports.app = {
    login: () => {
   console.log('login');
    },
    index: () => {
   console.log('index');
    }
    }
   ````
   
2. ````javascript
    let app = () => {
   console.log('app');
    }
    app.get = () => {
   console.log('get');
    }
    app.post = () => {
   console.log('post');
    }
    app()
    app.get()
    app.post()
   ````

3. ````javascript
    //app.js
    var http = require('http');
    const app = require('./router')
    http.createServer(app).listen(3000, () => { console.log('300') });
      app.get('/login', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.end('登录')
      })
    app.get('/index', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end('首页')
      })
      //router.js
      const url = require('url')
      let G = {}
    
      let app = (req, res) => {
        let { pathname } = url.parse(req.url)
    
        if (G[pathname]) {
          G[pathname](req, res)
        }
    
      }
      app.get = (str, cb) => {
        G[str] = cb
      }
      module.exports = app
    ````

4. ````javascript
    //app.js
      var http = require('http');
      const app = require('./router')
      const ejs = require('ejs')
      http.createServer(app).listen(3000, () => { console.log('300') });
    
    app.get('/login', (req, res) => {
      ejs.renderFile('./views/form.ejs', {}, (err, data) => {
        res.send(data)
      })
    })
    app.post('/login', (req, res) => {
      res.send(req.body)
    })
    app.get('/index', (req, res) => {
    
      res.send('首页')
    })
    //router.js
    const url = require('url')
    function changeEnd(res) {
      res.send = (data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(data)
      }
    }
    let server = () => {
      let G = {}
      G._get = {}
      G._post = {}
    
      let app = (req, res) => {
        changeEnd(res)
        let { pathname } = url.parse(req.url)
        let method = req.method.toLowerCase()
    
        if (G['_' + method][pathname]) {
          if (method == 'get') {
            G._get[pathname](req, res)
          } else {
            let str = ''
            req.on('data', (data) => {
              str += data
            })
            req.on('end', () => {
              req.body = str
              G._post[pathname](req, res)
            })
          }
        } else {
          res.send('页面不存在')
        }
      }
      app.get = (str, cb) => {
        G._get[str] = cb
      }
      app.post = (str, cb) => {
        G._post[str] = cb
      }
      return app
    }
    module.exports = server()
    ````
