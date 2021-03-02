#### 一、初始化项目

用到的知识：npm、nodejs

1. npm init -y
2. npm i --save koa
3. node app.js

#### 二、请求、响应（request、response）

1. ctx.url--获取请求路径

2. ctx.query--获取请求参数对象

3. ctx.querystring -- 获取请求json对象

4. ctx.body--返回内容

5. ``` javascript
   const Koa = require("koa");
   const app = new Koa();
   app.use(async (ctx) => {
     console.log(ctx.url);
     let url = ctx.url;
     let request = ctx.request
     let query = request.query
     let queryString = request.querystring
     let ctx_query = ctx.query
     let ctx_querystring = ctx.querystring
     ctx.body = {
       url,query,queryString,ctx_query,ctx_querystring
     }
     
   });
   app.listen(3000);
   ```

#### 三、请求方法-get、post

​	

1. ctx.method--请求方法

   ##### get 

   1. ctx.querystring -- 获取json串
   2. ctx.query -- 获取对象
##### post

```javascript
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
      try {
        let postData = "";
        ctx.req.addListener("data", (data) => {
          postData += data;
        });
        ctx.req.on("end", function () {
          // resolve(postData);  //返回json字符串
          resolve(strToObj(postData));  //返回对象
        });
      } catch (error) {
        reject(error);
      }
    });
  }

let postData = await parsePostData(ctx);
    ctx.body = postData;
```

#### 四、中间件-koa-bodyparser

``` javascript
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
//get -  ctx.query
//post - ctx.request.body
```

#### 五、路由-原生路由

``` javascript
app.use(async (ctx) => {
  let url = ctx.url;
  let html = await route(url)
  ctx.body = html
});
async function route(url) {
  let page = "";
  switch (url) {
    case "/":
      page = "index.html";
      break;
      case "/index":
      page = "index.html";
      break;
    case "/todo":
      page = "todo.html";
      break;
    default:
      page = "404.html";
      break;
  }
  let html = await render(page);
  return html;
}
async function render(page) {
  let pageUrl = `./pages/${page}`;
  return new Promise((res,rej)=>{
    fs.readFile(pageUrl,'utf-8',(error,data)=>{
      if(error){
        rej(error)
      }else {
        res(data)
      }
    })
  })
}
```



#### 六、路由--中间件(koa-router)

1. ```` javascript
   基本使用
   const router = require("koa-router")();
   router.get("/", async (ctx, next) => {
     ctx.body = "首页";
   });
   app.use(router.routes()).use(router.allowedMethods());
   ````

2. ``` javascript
   路由 -- 前缀
   const router = new Router({prefix:'/yqc'})
   ```

3. ``` javascript
   路由 -- 层级
   const Koa = require("koa");
   const Router = require("koa-router");
   const app = new Koa();
   
   const home = new Router();
   const about = new Router();
   const router = new Router();
   
   home.get("/index", async (ctx, next) => {
     ctx.body = "home - 首页";
   });
   home.get("/detail", async (ctx, next) => {
     ctx.body = "home - 详情";
   });
   router.use("/home", home.routes(), home.allowedMethods());
   about.get("/index", async (ctx, next) => {
     ctx.body = "about - 首页";
   });
   about.get("/detail", async (ctx, next) => {
     ctx.body = "about - 详情";
   });
   router.use("/about", about.routes(), about.allowedMethods());
   router.get("/", async (ctx, next) => {
     ctx.body = "首页";
   });
   
   app.use(router.routes()).use(router.allowedMethods());
   //app.use(router.routes(), router.allowedMethods());
   app.listen(3000, () => {
     console.log("listen 3000");
   });
   
   ```

4. ``` javascript
   路由 -- 参数
   get - ctx.query  ||  post - ctx.request.body
   ```

#### 七、cookie

1. ```javascript
   //cookie设置
   ctx.cookies.set("myName", "aaaaa", {
         domain: "localhost",
         path: "/",
         expires: new Date('2020-08-15'),
         // maxAge: 1000 * 60 * 60 * 24,
         httpOnly: false,
         overwrite: false,
       });
   ```


#### 八、koa模板  ejs

1. 安装

   ```` javascript
   npm i --save koa-views
   npm i --save ejs
   const views = require('koa-views');
app.use(views(path.join(__dirname,'./views'),{extension:'ejs'}))
   app.use(async (ctx)=>{let title = 'msg';await ctx.render('index',{title})});
   ````
   
   

#### 九、koa-static   静态资源中间件

````javascript
npm i koa-static

````

