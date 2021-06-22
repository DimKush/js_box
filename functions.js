'use strict'


let message = "Message";
const createMessanger = () =>{
    let message = "Message";

    function sendMessage(){
        
        console.log(`Message followed. Message is ${message}`);
    };
    
    function setMessage(text){
        message = text;
    };

    return {
        sendMessage,
        setMessage,
    };
};

let namePerson ="Bob";
let messanger = createMessanger();
messanger.setMessage(`Send message to ${namePerson}`);


namePerson = "Tom";
let secondMessanger = createMessanger();
secondMessanger.setMessage(`secondMessanger to ${namePerson}`);

messanger.sendMessage();
secondMessanger.sendMessage();



const makeCounter = () =>{
    let count = 0;
    return function(){
        return count++;
    }
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());

function sendMessage(name){
    if (name) {
        let greeting = 'Greet,';
        console.log(`${greeting} ${name}`)
    } else {
        let message = 'mess';
        console.log(`${message}`)
    }
}

sendMessage("Tom");
sendMessage();

for(let i = 0 ; i  <10 ; i++){
    console.log(i);
}

// chain 

const calc = initVal => {
    let countVal = initVal;
    const calculator = {
        add(val){
            countVal += val;
            return this;
        },
        mult(val){
            countVal *= val;
            return this;
        },
        substract(val){
            countVal -= val;
            return this;
        },
        div(val){
            countVal /= val;
            return this;
        },
        result(){
            return countVal;
        }
    };

    return calculator;
};

const res = calc(3).add(2).mult(4).div(10).substract(5).result(); // -3

console.log(res);