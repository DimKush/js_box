

// const user = {
// 	name : "Tom",
// 	age : 18,
// 	sayMessage(message) {
// 		console.log(`${this.name} aged : ${this.age}, sayed "${message}" to you.`)
// 	},
// 	helloFromPerson(){
// 		console.log(`${this.name}, aged ${this.age} says: "Hello!".`);
// 	}
// };

// user.walk = function() {
// 	console.log(`${this.name} aged : ${this.age} is walking.`)
// }

// user.walk();
// user.sayMessage(`simple words`);

// const func = user.sayMessage.bind(user, `bind simple`);
// const funcSec = user.helloFromPerson;
// const funcThird = user.sayMessage;
// func();


// funcSec.call({name: "Bob", age : 23});

// funcThird.apply({ name: "Kate", age : 24 }, ["Message from apply"]);

// const callbackPrompt = {
// 	message: "Tell me your number",
// 	showPrompt(){
// 		const phoneNumber = prompt(this.message);
// 		console.log(`${this.message} : ${phoneNumber}`);
// 	},
// 	showDeferredPromt(ms){
// 		setTimeout(this.showPrompt.bind(this), ms);
// 	}
// };

// callbackPrompt.showDeferredPromt(100);

// defer(func, ms) => func from object

// function defer (func, timeout) {
// 	return function(){
// 		setTimeout(() => func.call(this,...arguments), timeout);
// 	}
// }

// const sumCount = (a, b) =>  {
// 	console.log(a + b);
// };
 
// const userDefer ={
// 	name: 'Tom',
// 	sayHi(){
// 		console.log(`My name is ${this.name}`);
// 	},
// }

// const deferFuncs = defer(userDefer.sayHi,1000);

// deferFuncs.call({ name: 'Bob'});

const obj = {
	name: `Tom`,
	sayHi(){
		console.log(this);
	},
};

obj.sayHi();

console.log(globalThis === window);

var a = 10;
let b = 20;
console.log(window.a);
console.log(window.b);