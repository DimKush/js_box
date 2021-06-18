'use strict'

console.log("WALLLET");

class Wallet {
	#balance = 0;

	get Balance(){
		return this.#balance;
	}

	deposit(amount){
		this.#balance += amount;
	}

	withdraw(amount){
		if(this.#balance - amount < 0){
			console.log("You don't have enough money.");
		} else {
			this.#balance -= amount
		}
	}
}

const wallet1 = new Wallet();

wallet1.deposit(199);
wallet1.withdraw(110);

//console.log(wallet1.#balance);
console.log(wallet1.Balance);