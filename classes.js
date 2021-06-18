'use strict'
class User{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	set Name(name){
		this.name = name;
	}
	set Age(age){
		if(age < 0){
			return undefined;
		}
		this.age = age;
		if(this.age >= 25){
			this.requestNewPhoto();
		}
	}
	get Name(){
		return this.name;
	}
	get Age(){
		return this.age;
	}

	static compare(user1, user2) {
		return user1.Age - user2.Age;
	}

	sayHi(){
		console.log(`Person, named: ${this.name} aged: ${this.age} sayed : "Hi" to you.`);
	}

	requestNewPhoto(){
		console.log(`Here in requestNewPhoto`);
	}
}

let us1 = new User("Tom", 10);
let us2 = new User("Bob", 34);

us1.Age = 32;

console.log(User.compare(us1, us2));

console.log(us1);
console.log(us1.Name);

//heritage

class Vehicle{
	constructor(name, hasWheels){
		this.name = name;
		this.hasWheels = hasWheels;
	}
	hasWheels = null;
	name =  null;

	move(){
		console.log(`${this.name} is moving.`);
	}
	stop(){
		console.log(`${this.name} stopped.`);
	}
}

class Ship extends Vehicle {
	constructor(name, speed){
		super(name, false);
		this.AverageSpeed = speed;
	}
	move(){
		console.log(`${this.name} lifted anchor.`);
		super.move();
	}
	stop(){
		console.log(`${this.name} downed anchor.`);
		super.move();
	}
}

let ship1 = new Ship(`Mars`, 18);
console.log(ship1);
ship1.move();