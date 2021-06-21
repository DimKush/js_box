
'use strict'


localStorage.setItem("person",JSON.stringify({name : 'Tom'}));
localStorage.setItem("age",JSON.stringify(18));
localStorage.setItem("name","Bob");

console.log(localStorage.getItem("persons"));	
console.log(localStorage.getItem("name"));

let person = JSON.parse(localStorage.getItem("person"));
console.log(person);

console.log();


//serialization

const user = {
	name : "Robert",
	age : 18,
	gender: "man",
	parents: [
		{
			name : "Robert",
			gender : "man",
			age : 40,
		},
		{
			name : "Alica",
			gender : "woman",
			age : 35,
		},
	],
}

let jsonAsString = JSON.stringify(user);
let jsonObject = JSON.parse(jsonAsString);
console.log(jsonAsString);
console.log(jsonObject);

// get local storage Data
const getLocalStorageData = () =>{
	return Object.entries(localStorage)
		.reduce((acc, [key,value]) => {
			let val;
			try{
				val = JSON.parse(value);
			} catch(e){
				val = value;
			}
			return {
				...acc,
				[key]: val,
			};

		}, {});
};

console.log(getLocalStorageData());