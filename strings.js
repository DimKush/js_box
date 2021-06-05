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
    return contacts.sort(function(a,b){
        return a.name > b.name ? 1 : -1;
    });
}

console.log(sortContactsByName(contacts));

