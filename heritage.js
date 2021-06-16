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

const user = {
	firstName: "John",
	lastName: "Doe",
	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	},
	set fullName(value){
		const [firstName, lastName] = value.split(' ');
		this.firstName = firstName;
		this.lastName  = lastName;
	}
};

console.log(user.fullName);

user.fullName = "Tom Henderson";
console.log(user.fullName);