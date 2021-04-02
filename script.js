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

function reverseString(str){
    console.log("basic string : ", str);
    
    var chr = undefined;
    for(var i = 0, j = str.length; i <= str.length && j >= 0; i++, j--){
        chr = str.indexOf(i);
        str.charAt(i) = str.charAt(j)
        str.charAt(j) = chr;
    }

    console.log("reversed string", str);
}


var str = new String("String value");

reverseString(str);