let readlineSync = require('readline-sync');

//car tasks
console.log('_____\nCAR TASKS');

let car = {
    color: 'black',
    power: () => console.log ('Car power - 100 hp'),
}

console.log(`Car color - ${car.color}`);
car.color = 'green';
console.log(`New car color - ${car.color}`);
car.power();

//warehouse task
console.log('_____\nWAREHOUSE TASK');

let pears = Number(readlineSync.question('How many pears: ', 0));
let apples = Number(readlineSync.question('How many apples: ', 0));

let fruitSum = () => {
    let sum = pears + apples;
    return sum;
}

console.log(`Fruit sum = ${fruitSum()}`);
