// objects

const obj = {
    "name of person": "Tom",
    age: 17,
};

console.log(obj);
console.log(obj.age);
obj.age++;
console.log(obj.age);
console.log(obj["name of person"]);


const arr = ["Tom", 17, "guitar"];
const transofrmToObject = arr => {
    let obj = {};

    arr.forEach(element => {
        obj[element] = element;
    });  

    return obj;
};

console.log(transofrmToObject(arr));

const user = 'Tom';

const User = {
    user,
    age: 17,
};

console.log(User);

for(let i in User){
    console.log(User[i]);
}

// getAdults

const users = {
    "Tom" : 20,
    "Sara": 17,
    "Phil": 16,
    "Lion": 21,
    "Bob":  33,
};

const getAdults = users =>{
    const arr = Object.entries(users);
    const filteredUsersArr = arr
    .filter(user => user[1] >= 18).map(user => {return user[0];})
    return filteredUsersArr;
};


console.log(getAdults(users));