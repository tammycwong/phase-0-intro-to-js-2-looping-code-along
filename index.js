// Code your solutions in this file
const names = [];
const event = [];
let message = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
let num = []
function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num-=1;
    }
}