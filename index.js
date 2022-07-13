// Code your solutions in this file

for(let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for(let i =0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
    }
    return gifts;
}
wrapGifts(gifts);


/*
const names = ["Guadalupe", "Ollie", "Aki"];
const events = ["surprise"];
function writeCards(names, events){
    const message = [];
    for(let i = 0; i < names.length; i++){
        myMess = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        message.push(myMess);
    }
    //return message;
    console.log(message);
}
writeCards(names, events);
*/

const names = ["Guadalupe", "Ollie", "Aki"];
const events = "surprise";

function writeCards(names, evemts){
    let message = [];
    for(let i = 0; i<names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return message;
}
writeCards(names, events);


function countDown(num = 20){
    let x = 0;
    while(x<=num){
        console.log(num--);
    }

}

countDown(num);
