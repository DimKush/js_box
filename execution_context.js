

const user = {
	name : "Tom",
	age : 18,
	sayMessage(message) {
		console.log(`${this.name} aged : ${this.age}, sayed "${message}" to you.`)
	}
};

user.walk = function() {
	console.log(`${this.name} aged : ${this.age} is walking.`)
}

user.walk();
user.sayMessage(`simple words`);

const f = user.sayMessage(`f`);

f();