#### 1、关系型数据库和非关系型数据库比较

![image-20210219194914088](D:\学习\笔记\mongoDB\image-20210219194914088.png)

#### 2、mongoDB的安装、环境变量配置、启动

1. 安装
2. 环境变量：`C:\Program Files\MongoDB\Server\4.4\bin`  添加到path目录中
3. 开启mongoDB服务：`mongod --dbpath D:\MongoDB`
4. 连接本地数据库：mongo
5. 连接远程数据库：mongo 127.0.0.1:27017

#### 3、创建数据库、表、查询

````javascript
//新增数据库、表
use myDB
db.user.insert({"name":"zhangsan","age":18})

db.dropDatabase()	//删除数据库操作
db.user.drop()	//删除表格
show collections  //查询表
db.user.find()  //查询表数据
db.user.find({"age":20})  //查询age=20的数据

db.user.find({age:{$gt:18}})			//查询大于18的数据
db.user.find({age:{$gt:18,$lt:25}})		//查询大于18小于25的数据
db.user.find({name:/aa/})				//查询name中含有‘aa’的数据
db.user.find({name:/^a/})				//查询以‘a’开头的数据
db.user.find({name:/c$/})				//查询以'c'结尾的数据
db.user.find({$or:[{name:1},{name:8}]})	//查询 name=1 || name=8
db.user.find({name:1,age:1})			//查询 name=1 && age=1
db.user.find({},{name:1})				//只显示name列
db.user.find({},{name:1,age:1})			//显示多列
db.user.find({age:{$gt:20}},{age:1})	//显示age>20 && 只显示age列
db.user.find().sort({age:1})			//按照age升序排列
db.user.find().sort({age:-1})			//按照age降序排列

db.user.find().limit(10).skip(0) 		//分页查询  limit:每页条数，pageSize；skip:偏移量，(pageNumber-1)*pageSize
db.user.findOne() === db.user.find().limit(1)	//查询第一个数据
db.user.find().count()					//查询总数

db.user.update({name:'yqc'},{$set:{age:18}})	//更新数据
db.user.update({name:'yqc'},{age:18})			//替换数据

db.user.remove({name:'yqc'})					//删除数据

//索引
db.user.getIndexes()					//查看索引
db.user.createIndex({name:1})			//增加索引
db.user.createIndex({name:1},{unique:true})		//增加唯一索引
db.user.dropIndex({name:1})				//删除索引
db.user.find({name:'yqc'}).explain("executionStats")	//查询分析

(>) 大于 - $gt
(<) 小于 - $lt
(>=) 大于等于 - $gte
(<= ) 小于等于 - $lte
(!+) 不等于 - $ne
````



#### 4、node连接mongodb

````javascript
// 创建连接
const { MongoClient } = require('mongodb')
const client = new MongoClient("mongodb://127.0.0.1:27017")
//使用连接
await client.connect()
const dataBase = await client.db('itying')
const collection = await dataBase.collection('admin')

//增加数据
let res = await collection.insertOne({ name: 'yqc1', time: new Date().toLocaleString() })

//查询数据
let res = await collection.find({}).toArray()

//更新数据
let newData = { $set: { name: 'yqc22', age: 18 } }
let { result } = await collection.updateOne({ name: 'yqc2' }, newData)

//删除数据
let {result} = await collection.deleteOne({name:'yqc1'})
````

