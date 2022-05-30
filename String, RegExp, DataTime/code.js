//regexp search
console.log('_____\nREGEXP SEARCH');

//find 'ahb', 'acb', 'aeb'
console.log(`\n1. Find: 'ahb', 'acb', 'aeb'`);

const str = 'ahb acb aeb aeeb adcb axeb';

let result = str.match(/a.b/g) || 'No matches';

console.log('\n* String:', str, 
            '\n\nSearch result:', result, '| Match counter:', result.length);
