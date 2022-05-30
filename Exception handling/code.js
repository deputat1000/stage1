// use before declaration
console.log('_____\nUSE BEFORE DECLARATION\n');

try {
    console.log(a);
    let a = 3;
} catch(e) {
    console.log(e.name + `: 'let' must be declared before use`);
}

// division by zero
console.log('_____\nDIVISION BY ZERO\n');

try {
    let div = 0, res = 1/div;

    if (div == 0) throw new Error(`: can't divide by zero`);
    else console.log(res);
} catch (e) {
    console.log(e.name + e.message);
}
