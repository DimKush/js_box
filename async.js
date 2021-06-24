'use strict'

const buttonElement = document.querySelector('#button');

buttonElement.addEventListener('click', () =>{
	console.log("click");
	
	let sum = 0;
	const startTime = new Date();
	for(let i = 0 ; i < 5e9; i++){
		sum += i;
	}
	const endTime = new Date();
	console.log(`Process time is ${startTime - endTime}`);
});