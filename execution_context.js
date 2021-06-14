

const user = {
	name : "Tom",
	age : 18,
	sayMessage(message) {
		console.log(`${this.name} aged : ${this.age}, sayed "${message}" to you.`)
	},
	helloFromPerson(){
		console.log(`${this.name}, aged ${this.age} says: "Hello!".`);
	}
};

user.walk = function() {
	console.log(`${this.name} aged : ${this.age} is walking.`)
}

user.walk();
user.sayMessage(`simple words`);

const func = user.sayMessage.bind(user, `bind simple`);
const funcSec = user.helloFromPerson;
const funcThird = user.sayMessage;
func();


funcSec.call({name: "Bob", age : 23});

funcThird.apply({ name: "Kate", age : 24 }, ["Message from apply"]);

const callbackPrompt = {
	message: "Tell me your number",
	showPrompt(){
		const phoneNumber = prompt(this.message);
		console.log(`${this.message} : ${phoneNumber}`);
	},
	showDeferredPromt(ms){
		setTimeout(this.showPrompt.bind(this), ms);
	}
};

callbackPrompt.showDeferredPromt(100);