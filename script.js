var carYear = 2008;
var personYear = 1990;
var compareAge = new Number(20)


function checkAge(year){
    return new Date().getFullYear() - year;
}

function returnPhrase(resultAge, compareAge){
    return resultAge > compareAge ? " is bigger" : "is less";
}

function outputWarning(objType, compareAge, year){
    objType = new String(objType).toLowerCase();

    console.log("object = " + objType, "year : " + year, returnPhrase(checkAge(year),compareAge) + " that " + compareAge);   
}

outputWarning("PeRsON", compareAge,personYear);
outputWarning("cAr", compareAge,carYear);

var str = new String("String value");
var sbstr = new String(str.substr(0, 5));

var delta = new String("2.66666");

console.log("delta is : ", +delta);


var collection = ["car", 1984, "Robert",NaN, null];
var arr = [12,22,33,4,0];

collection.pop();
console.log(collection);

arr.unshift(10);

console.log(arr);

var person = {
     name : ""
    ,year : 1990
    ,family : ["John", "Thomas"]
    ,car : {
        year : 2010
        ,model : "Ford"
    },
    calculateAge : function() {
        return new Date().getFullYear() - this.year;
    }
};

var persons  = [];

console.log(person.car.model);

var field = 'car';
console.log(person[field].year);
console.log(person.calculateAge());

var arr1 = [10,20,30];
var arr2 = [10,20,30];

var arr3 = [10,40,55,20,"Str", NaN, null, "string"];


console.log(arr1 === arr2);

for(var i = 0 ; i < arr1.length ; i++)
    console.log(arr1[i]);

console.log()

var age = 20;

function getAge() {
    age++;
    return age;
}

console.log(age);
getAge(age);
console.log(age);

var resSum = 0;

function sum() {
    if(arguments.length === 0)
        return resSum;
    
    resSum = 0;
    for(var i = 0 ; i < arguments.length; i++){
        if(typeof(arguments[i]) != "number"){
            var err = new Error("invalid argument type in position = " + i + " value = "+ arguments[i]);
            console.log(err);
            continue;
        }
        resSum += arguments[i];
    }
    return resSum;
}

console.log(sum(10,23,44,55));
console.log(sum());
console.log(sum(104.,22223.22,44.1,null));
console.log(sum(undefined));
console.log(sum());

var div = document.getElementById("playground");
var p = document.getElementsByClassName("text");
console.log(div);
console.log(p);

var h1 = document.getElementsByTagName("h1");

console.log(h1);

var divQ= document.querySelector('#playground');

divQ.innerHTML = "<h2 style = \"color: red;\">From JavaScript</h2>";
console.log(divQ);

function calculateOdd(array){
    var sum = 0;

    if(!Array.isArray(array)){
        console.log(Error("Element is not an array." + typeof(array)));
        return undefined;
    }
       
    for(var i = 0, j = array.length; i <= j && j >= i; i++, j--){
        console.log(i,j);
        if(array[i] > 0 && array[i] % 2 != 0)
            sum += array[i];
        if(array[j] > 0 && array[j] % 2 != 0)
            sum += array[j];
        
    } // O(n) / 2
     
    return sum;
}


console.log(calculateOdd([5,0,-5,20,88,17,-32]));
