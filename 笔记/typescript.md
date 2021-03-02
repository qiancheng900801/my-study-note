#### 1、安装

````javascript
1、安装node环境
2、安装typescript  npm i typescript -g
3、安装ts-node npm i ts-node -g
````

#### 2、类型(number、string、null undefinde boolean void symbol )

````javascript
1、interface Person {
  name: String;
  age: Number;
}
let xm: Person = {
  name: "小明",
  age: 18,
};
2、对象类型：
let Person: {
  name: String;
  age: Number;
} = { name: "111", age: 20 };
3、数组类型：
let persons:String [] = ['aaa','bbb','ccc']
4、类类型：
class Body {};
let xiaoMing:Body = new Body()
5、函数类型：
let xiaoHua: () => String = () => 'hello';
````

