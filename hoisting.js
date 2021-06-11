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