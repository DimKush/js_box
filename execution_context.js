'use strict';

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

const user = {
	name: `Tom`,
	sayHi(){
		console.log(this);
	},
};

setTimeout(() => user.sayHi(), 1000);


console.log(globalThis === window);

var a = 10;
let b = 20;
console.log(window.a);
console.log(window.b);


const event = {
	guests: [
		{ name : "Tom", email: "tom@gmail.com", age: 17},
		{ name : "Bob", email: "bob@gmail.com", age: 24}
	],
	message: "Welcome to the party.",
	sendInvitations() {
		return this.guests
			.filter(( { age } ) => age >= 18)
			.map(({name, email}) => ({
				text: `Hi, ${name}. ${this.message}`,
				email
			}));
	},
};

console.log(event.sendInvitations());

//

console.log(Math.max.apply(null, [1,42,33]));

const wallet = {
	transactions:[1,5,87,337,3],
	getMaxTransaction(){
		return Math.max(...this.transactions);
	},
	getMinTransaction(){
		return Math.min(...this.transactions);
	},
};

console.log(wallet.getMaxTransaction());
console.log(wallet.getMinTransaction());

//pseudo arrays

function func() {
	console.log(arguments);
}

function argsSum() {
	return [...arguments].reduce((acc,elem) => {
		return acc + elem;
	}, 0);	
}

func(1,23,45,55);
console.log(argsSum(1,2,3,4));