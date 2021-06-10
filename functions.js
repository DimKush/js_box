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
    let greeting = 'Hi ';

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

