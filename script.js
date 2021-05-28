let personName = 'Peter';

var message = 'Hi \''+ personName + '\'';

//arrow function 
let getSquare = (num) => { return num * num};




const arrGlob = new Array(234,232,2322,1,233,19,72,33)
// return Arr[length, first, last, min, max]
const funcDetectArr = (arr) => {
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
}

const duplicateArr = (arr) =>{
    let arrIn = arr;
    return arrIn.concat(arrIn);
}

const res =  getSquare(5);
//console.log(funcDetectArr(arrGlob));
console.log(duplicateArr(arrGlob));