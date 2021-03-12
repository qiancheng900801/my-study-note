#### 1、CentOS指令

````javascript
ls || ls -a  || ls -A  //查看文件目录
pwd		//查看所在位置
````

#### 2、安装mongodb

1. https://blog.csdn.net/qian_feifei/article/details/75136550
2. https://blog.csdn.net/weixin_41360448/article/details/105252579

#### 3、查看某个端口

netstat -apn  | grep 27017 

#### 4、设置后台启动服务 pm2

## pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能

1、 pm2需要全局安装
 `npm install -g pm2`
 2、进入项目根目录
 2.1 启动进程/应用           `pm2 start bin/www 或 pm2 start app.js`

2.2 重命名进程/应用           `pm2 start app.js --name wb123`

2.3 添加进程/应用 watch         `pm2 start bin/www --watch`

2.4 结束进程/应用            `pm2 stop www`

2.5 结束所有进程/应用           `pm2 stop all`

2.6 删除进程/应用            `pm2 delete www`

2.7 删除所有进程/应用             `pm2 delete all`

2.8 列出所有进程/应用          `pm2 list`

2.9 查看某个进程/应用具体情况      `pm2 describe www`

2.10 查看进程/应用的资源消耗情况       `pm2 monit`

2.11 查看pm2的日志                 `pm2 logs`

2.12 若要查看某个进程/应用的日志,使用  `pm2 logs www`

2.13 重新启动进程/应用            `pm2 restart www`

2.14 重新启动所有进程/应用        `pm2 restart all

#### 5、配置nginx

https://blog.csdn.net/qq_37345604/article/details/90034424

1. 解决80端口被占用：

   查询nginx端口：ps -ef|grep nginx

   关闭80端口：sudo fuser -k 80/tcp