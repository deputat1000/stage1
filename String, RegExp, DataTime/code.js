//regexp search
console.log('_____\nREGEXP SEARCH');

//find 'ahb', 'acb', 'aeb'
console.log(`\n1. Find: 'ahb', 'acb', 'aeb'`);

const str = 'ahb acb aeb aeeb adcb axeb';

let result = str.match(/a.b/g) || 'No matches';

console.log('\n* String:', str, 
            '\n\nSearch result:', result, '| Match counter:', result.length);

//find '2+3'
{
console.log(`\n\n2. Find: '2+3'`);

const str = '2+3 223 2223';

result = str.match(/2\+3/g) || 'No matches';

console.log('\n* String:', str,
            '\n\nSearch result:', result, '| Match counter:', result.length);
}
