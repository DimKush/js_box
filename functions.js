'use strict'



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