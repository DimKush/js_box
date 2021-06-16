'use strict'

const vehicle = {
	move(){
		console.log(`${this.name} moving`);
	},
	stop(){
		console.log(`${this.name} stopped`);
	}
}

const ship = {
	name: "Mercury",
	hasWheels: false,
	liftAnchorDown() {
		console.log("Down anchor.");
	},
	liftAnchorUp(){
		console.log("Up anchor");
	},
	//__proto__: vehicle,
}

Object.setPrototypeOf(ship,vehicle);

console.log(ship);

ship.move();


//getter and setter

// const user = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	get fullName(){
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// 	set fullName(value){
// 		const [firstName, lastName] = value.split(' ');
// 		this.firstName = firstName;
// 		this.lastName  = lastName;
// 	}
// };


// console.log(user.fullName);

// user.fullName = "Tom Henderson";
// console.log(user.fullName);

// constructor

function User(name, age) {
	const [firstName, lastName] = name.split(' ');
	
	this.firstName = firstName;
	this.lastName  = lastName;
	this.age = age;
	
}

User.prototype.sayHi = function(){
	console.log(`${this.firstName} ${this.lastName} aged ${this.age} says : "Hi!"`);
}

const user1 = new User('Tomas Henderson', 21);
const user2 = new User('Bob Dillan', 17);

console.log(user1);

user1.sayHi();
user2.sayHi();


// own props
console.log("-----------------------own props-----------------------");	
console.log(Object.keys(ship))