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
