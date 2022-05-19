const readlineSync = require('readline-sync');

//films array
console.log('_____\n1. MOVIE ARRAY');

let movieArr = readlineSync.question('Write movies (comma-separated): ');

if (movieArr != '') {
    movieArr = movieArr.split(',').map(item => item = item.trim());
    console.log('\nYour saved movie list:');
    movieArr.forEach((item,index) => console.log(`${index+1}. ${item}`));
} else console.log('\nMovie list is empty');
