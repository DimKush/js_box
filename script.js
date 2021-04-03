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

////////////////
// drop vowels

var str = new String("String value");


var sbstr = new String(str.substr(0, 5));

console.log(sbstr);
