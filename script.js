let personName = 'Peter';

var message = 'Hi \''+ personName + '\'';

//arrow function 
let getSquare = (num) => { return num * num};




const arrGlob = new Array(234,232,2322,1,233,19,72,33)
// return Arr[length, first, last, min, max]
const funcDetectArr = (arr) => {
    if(Array.isArray(arr)){
        let arrRes = [];
        let min = arr[0];
        let max = arr[0];
        arrRes.push(arr.length);
        
        // find min and max
        for(let i = 0 ; i < arr.length; i++){
            min = Math.min(min, arr[i]);
            max = Math.max(max, arr[i]);
        }

        arrRes.push(arr[0]);
        arrRes.push(arr[arr.length - 1]);
        arrRes.push(min);
        arrRes.push(max);

        return arrRes;
    } else {
        return undefined;
    }
}

const duplicateArr = (arr) =>{
    if(Array.isArray(arr)){
    let arrIn = arr;
    return arrIn.concat(arrIn);
    } else {
        return undefined;
    }
}

const res =  getSquare(5);
console.log(funcDetectArr(arrGlob));
console.log(duplicateArr(arrGlob));


let names =  ["Tom", "John", "Frank"];
names.shift();
names[10] = "Ella";


names.unshift("Michael");

console.log(names);
console.log(names[9]);

//spread operator

let nums = [10,33,2,334,2345,2,0,110];

console.log(nums);
const swapFirstToLast = (arr) =>{
    if(!Array.isArray(arr)){
        return undefined;
    } 

    const [first, ...rest] = arr;

    return [...rest, first];
}; 

nums = swapFirstToLast(nums);

console.log(nums);