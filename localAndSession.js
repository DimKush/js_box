
'use strict'

localStorage.setItem("name", "Thomas");
localStorage.setItem("name", "Bill");

localStorage.setItem("fruits",["Apple","Pine","Cherry"]);

localStorage.setItem("persons",[{name : "Tom"},{name : "Bob"}, {name : "Kate"}]);

localStorage.setItem("person",JSON.stringify({name : "Tom"}));

console.log(localStorage.getItem("persons"));	
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("person"));

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
