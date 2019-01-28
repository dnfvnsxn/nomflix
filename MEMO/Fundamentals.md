# React JS Requirement

## Arrow Functions
- return의 의미가 함축되어 있음 
- 중괄호가 없으면 return의 의미가 내포되어 있음
```js
const sayHello = (name = "Human") => "Hello " + name;

const Hello = sayHello('sam');

console.log(Hello);
```
- 익명함수에 사용
- argument가 하나일때는 괄호가 필요없음
```js
const button = docment.querySelector("button");

button.addEventListener("click",event => console.log(event));
```

## Template Literals
- `(backticks)를 사용하여 Template들과 Variable, String을 다루는 방법
```js
const sayHello = (name = "Human") =>`Hello ${name}`;

const Hello = sayHello('sam');

console.log(Hello);
```

## Object Destructuring
- 객체를 해체
- 해당 Object를 기반으로 변수 생성

```js
const human ={
    name: "JuHyun",
    lastName: "Yu",
    nationality: "Korean",
    favLang:{
        mainLang: "R",
        sub1Lang: "C",
        sub2Lang: "JS"
    }
};

//const name = human.name;
//const lastName = human.lastName;
//const diffnationality = human.nationality;
//const sub2Lang = human.favLang.sub2Lang;

const {name, 
    lastName, 
    nationality: diffnationality, 
    favLang: {mainLang, sub1Lang, sub2Lang}
} = human;

console.log(name, lastName,diffnationality, mainLang, sub1Lang, sub2Lang);
```

## Spread Operator
```js
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = days + otherDays;

console.log(allDays);
```
```!
$ node sample.js
Mon,Tues,WedThu,Fri,Sat
```
- 콘텐츠를 Unpack하는 방법
```js
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = [...days, ...otherDays, "Sun"];

console.log(allDays);
```
```!
$ node sample.js
[ 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
```
- Object에 적용
```js
const ob = {
    first: "hi",
    second: "hello"
};

const ab = {
    thrid: "bye bye"
};

const two = {...ob, ...ab};

console.log(two);
```
```!
$ node sample.js
{ first: 'hi', second: 'hello', thrid: 'bye bye' }
```
- Function에 적용 
- 모든 Argument를 console.log
```js
const fun = (somthing, args) => console.log(...args);
```
## Classes
- OOP는 모든 것을 Object나 Classes로 만듬
- React의 Component는 대부분 Classes
```js
class Human{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}
```
- Baby는 Human의 모든 것을 가지고 자신만의 cry 함수를 가짐
```js
class Baby extends Human{
    cry(){
        console.log("Waaaaaaa");
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
}

const myBaby = new Baby("Mini","Me")

console.log(myBaby.cry(),myBaby.sayName());
```
- React Component들은 class이므로 이와 같은 작업을 매우 많이 진행하게 됨

## Array.map
- 실제 application에서 API로 배열을 받게되면 그 배열의 데이터를 이용하여 어떠한 Component의 배열을 만들게 됨
- map는 함수의 결과 값으로 새로운 배열을 만듬
- 배열의 argument를 함수에 call
```js
const days = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

const fullDays = days.map(day => `${day}day`);

console.log(fullDays);
```
- index 활용 
```js
const days = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

const fullDays = days.map((day, index) => `#${index} ${day}day`);

console.log(fullDays);
```