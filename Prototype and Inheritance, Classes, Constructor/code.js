//inheritance task
console.log('INHERITANCE TASK\n_____')
const animal = {
    name: 'animal',
    move() { return `The ${this.name} is moving`; },
}

let cat = Object.setPrototypeOf({name: 'cat'}, animal);

console.log(`Created objects`,
            `\nChild '${cat.name}':`, cat,
            `\nParent '${animal.name}':`, Object.getPrototypeOf(cat));

console.log(`\nProperty list of 'cat' object:`);
for (const key in cat) {
    if (cat.hasOwnProperty(key)) {
        console.log('- Own:', key); 
    } else console.log('- Inherited:', key);
}

console.log(`\nCalling a 'move' property in the context of 'cat' object:\n*`, cat.move());
