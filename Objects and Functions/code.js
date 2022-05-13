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

//terminal task
console.log('_____\nTERMINAL TASK');

let memoryName = 'John';
let myName;

function nameDet() {
    (myName === memoryName) ?
        console.log(`Hello, ${myName}!`) : console.log('No such name');
}

do { 
    myName = readlineSync.question('Enter your name: ');
    nameDet();
    if (myName === memoryName) break;
} while (readlineSync.keyInYNStrict('Do you want to continue?'));
//the question-answer cycle will continue until the user enters an existing name or wants to exit

//argument type part
console.log('_____\nARGUMENT TYPE TASK' +
            '\nBe careful with letter case and JSON format (example: {"name":"John", "age":30, "city":"New York"})\n');

do {
    var arg = readlineSync.question('_____\nEnter an argument: ');
    argDet(arg);
} while (readlineSync.keyInYNStrict('\nDo you want to continue?'));

function argDet() { //this function matches an argument against the conditions of functions configured for one specific data type
    (isUndefined(arg) || isNull(arg) || isObject(arg) || isSymbol(arg) || isNumber(arg) || isBigInt(arg) || isBoolean(arg) || 1)
        && print(arg);
}

function isUndefined() {
    if (arg === '') {
        arg = undefined;
        return true;
    }
}
function isNull() {
    if (arg === 'null') {
        arg = null;
        return true;
    }
}
function isObject() {
    try {
        arg = JSON.parse(arg);
    } catch (error) {
        return false;
    }
    return true;
}
function isSymbol() {
    if (/Symbol(.+)/.test(arg) || /Symbol.for(.+)/.test(arg)) {
        (arg.startsWith('Symbol.for')) ? arg = arg.slice(11, -1) : arg = arg.slice(7, -1);
        arg = Symbol(arg);
        return true;
    }
}
function isNumber() {
    if (!isNaN(arg) || arg === 'NaN') {
        arg = +arg;
        return true;
    }
}
function isBigInt() {
    if (/^\d+$/.test(arg.slice(0, -1)) && arg.endsWith('n')) {
        arg = BigInt(arg.slice(0, -1));
        return true;
    }
}
function isBoolean() {
    if (['true','false'].includes(arg)) {
        (arg === 'true') ? arg = true: arg = false;
        return true;
    }
}
function print(arg) { //just prints the result
    console.log(arg);
    console.log(`Argument type - ${typeof(arg)}`);
}
