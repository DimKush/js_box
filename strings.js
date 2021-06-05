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
        name: "Hardy",
        phoneNumber: "563-34-66",
    },
    {
        name: "Michael",
        phoneNumber: "233-23-55-56"
    },
]

const sortContactsByName = contacts => {
    return contacts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
}

console.log(sortContactsByName(contacts));


const sortContactsByNumbers = contacts => {
    return contacts.sort(function (obj1, obj2) {
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