

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

const func = user.sayMessage.bind(user, `bind simple`);
// . bind();

func();