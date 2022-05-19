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
