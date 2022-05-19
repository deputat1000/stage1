const readlineSync = require('readline-sync');

//films array
console.log('_____\n1. MOVIE ARRAY');

let movieArr = readlineSync.question('Write movies (comma-separated): ');

if (movieArr != '') {
    movieArr = movieArr.split(',').map(item => item = item.trim());
    console.log('\nYour saved movie list:');
    movieArr.forEach((item,index) => console.log(`${index+1}. ${item}`));
} else console.log('\nMovie list is empty');

//automaker array
console.log('_____\n2. AUTOMAKER ARRAY');

let automakers = ['Toyota', 'Volkswagen', 'BMW', 'Ford', 'KIA'];
console.log(automakers);

automakers = automakers.join(', ');
console.log(`\n* To string:\n${automakers}`);

automakers = automakers.split(',').map(item => item = item.trim());
console.log('* Back to an array:'); console.log(automakers);

//Hello, friends array
console.log('_____\n3. HELLO, FRIENDS ARRAY');

let friendArr = readlineSync.question('Write the names (comma-separated): ');
friendArr = friendArr.split(',').map(item => {
    item = item.trim();
    item = 'Hello, ' + item;

    return item;
});

if (friendArr != 'Hello, ') {
    console.log('\nYour hello to friends:');
    console.log(friendArr);
} else console.log('No friends :(');

//numeric array to Boolean
console.log('_____\n4. NUMERIC ARRAY TO BOOLEAN');

let numArr = readlineSync.question('Enter numbers (comma-separated): ');
numArr = numArr.split(',').map(item => {
    item = item.trim();
    if (item === 'null') item = null;
    else if (item === '') item = undefined;
    else item = +item;

    return item;
});

console.log(numArr);

let boolArr = numArr.map(item => Boolean(item));
console.log('\nYour boolean array:'); console.log(...boolArr);

//sort array in descending order
console.log('_____\n5. SORT ARRAY IN DESCENDING ORDER');

let origArr = [1,6,7,8,3,4,5,6];
console.log('Original array:'); console.log(...origArr);

let sortedArr = origArr.slice().sort((a,b) => b - a);
console.log('Sort in descending order:'); console.log(...sortedArr);

//filter array by value >3
console.log('_____\n6. FILTER ARRAY BY VALUE >3');

console.log('Original array:'); console.log(...origArr);

let filterArr = origArr.filter(item => item > 3);
console.log('Filter by value >3:'); console.log(...filterArr);

//index of array element equal to the number
console.log('_____\n7. INDEX OF ARRAY ELEMENT EQUAL TO THE NUMBER');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

do {
    var num = readlineSync.questionInt('Enter the number: ');
    findIndex(arr, num);
} while (readlineSync.keyInYNStrict('Do you want to continue?'));

function findIndex(arr, num) {
    let result = arr.findIndex(item => item === num);
    (result === -1) ?
        console.log(`There is no element equal to ${num}`):
        console.log(`Index of element equal to ${num} - ${result}`);
}
