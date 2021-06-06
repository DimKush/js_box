// sortContacts

 const contacts = [
    {
        name: "Tom",
        phoneNumber: "666-66-66",
    },
    {
        name: "John",
        phoneNumber: "555-55-55",
    },
    {
        name: "Sam",
        phoneNumber: "555-55-54",
    },
    {
        name: "Billy",
        phoneNumber: "434-55-66"
    },
    {
        name: "Ann",
        phoneNumber: "563-34-55",
    },
    {
        name: "Adel",
        phoneNumber: "563-33-55",
    },
    {
        name: "Hardy",
        phoneNumber: "563-34-66",
    },
    {
        name: "Michael",
        phoneNumber: "233-23-55-56"
    },
]

const sortContactsByName = (contacts, isAsc) => {
    return contacts.slice().sort(function (a, b) {
        if (isAsc === true){
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
}

console.log(sortContactsByName(contacts, true));
console.log(sortContactsByName(contacts, false));


const sortContactsByNumbers = contacts => {
    return contacts.slice().sort(function (obj1, obj2) {
        let splitNumObj1 = obj1.phoneNumber.split('-');
        let splitNumObj2 = obj2.phoneNumber.split('-');

        for(let i = 0; i < splitNumObj1.length; i++){
            if(splitNumObj1[i] > splitNumObj2[i]){
                return 1;
            } else if (splitNumObj1[i] < splitNumObj2[i]) {
                return -1
            }
        }
    });
}

console.log(sortContactsByNumbers(contacts));

// simple calculator '1 + 2 => 1 + 2 = 3'

export const simpleCalculator = expression => {
    let [a, operator, b] = expression.split(' ');
    let result = 0;
    
    switch(operator){
        case "+" : {
            result = Number(a) + +b;
            break;
        }
        case "-" : { 
            result = a - b;
            break;
        }
        case "*" : {
            result = a * b;
            break;
        }
        case "/" : {
            result = a / b;
            break;
        }
        default:
            result = undefined;
    }

    return `${expression} = ${result}`; 
}



//console.log(simpleCalculator('1 + 3'));
//console.log(simpleCalculator('10 * 3'));
//console.log(simpleCalculator('1 - 3'));
//console.log(simpleCalculator('10 / 2'));

