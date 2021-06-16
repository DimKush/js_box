'use strict'

const vehicle = {
	move(){
		console.log("moving");
	},
	stop(){
		console.log("stopped");
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
	__proto__: vehicle,
}

console.log(ship);

ship.move();