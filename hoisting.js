var a = 10;

const f = () =>{
	var a = 1;
	console.log(a);
}
 
if(a){
	var a =1;
	console.log(a);
}

f();
console.log(a);


let b = 23;

const fo = () =>{
	let b = 2;
	console.log(b);
}
 
if(b){
	let b =3;
	console.log(b);
}

fo();
console.log(b);


var arr = [];
for (var i = 0 ; i < 10 ; i ++){
	arr[i] = function(){
		return i;
	}
}


console.log(arr[0]());

var arrSec = [];
for (let i = 0 ; i < 10 ; i ++){
	arrSec[i] = function(){
		return i;
	}
}


console.log(arrSec[0]());