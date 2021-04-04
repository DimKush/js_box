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
     name : "Robert"
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

console.log(person.car.model);

var field = 'car';
console.log(person[field].year);
console.log(person.calculateAge());

var arr1 = [10,20,30];
var arr2 = [10,20,30];

console.log(arr1 === arr2);

for(var i = 0 ; i < arr1.length ; i++)
    console.log(arr1[i]);

