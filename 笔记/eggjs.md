#### 一、 框架内置基础对象

包括从 [Koa](http://koajs.com/) 继承而来的 4 个对象（Application, Context, Request, Response) 以及框架扩展的一些对象（Controller, Service, Helper, Config, Logger）



this.ctx

this.app

this.service

this.config

this.logger

#### 二、框架扩展   extend
```` javascript
// app/extend/application.js
module.exports = {
  foo(param) {
    console.log('foo');
    console.log(this);//this === app
  },
};
//使用
this.app.foo()

// app/extend/context.js
module.exports = {
  formatTime() {
    return this.query
  }
};
//使用	?name=abc&age=123
console.log(this.ctx.formatTime()); //{ name: 'abc', age: '123' }
````

#### 三、中间件 middleware 

````javascript
// app/middleware/printTime.js
module.exports = options => {
  console.log(options);
  return async function gzip(ctx, next) {
    console.log(new Date());
    await next();
  };
};
//  config.default.js
config.middleware = ['printDate'];
config.printDate = { id: 1024 }

//middleware/
module.exports = options => {
  return async function forbidip(ctx, next) {
    let { host } = ctx.request.header
    host = host.split(':')[0]
    let { whiteList } = options
    // ctx.request.ip
    if (whiteList.includes(host)) {
      await next();
    } else {
      ctx.status = 403
      ctx.body = '您的ip不在白名单内'
    }
  };
};
````
#### 四、cookie

````javascript
ctx.cookies.set(key, value, {
    maxAge:3600*1000*24,
    httpOnly:true,
    encrypt:true,
    signed:true
})
ctx.cookies.get(key);
ctx.cookies.set(key, null);
````





