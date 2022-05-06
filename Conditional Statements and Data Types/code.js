var readlineSync = require('readline-sync'); //module for interactively running to have a conversation with the user via a console

let exit = true; //accept for now the user's desire to work in the program as TRUE
while (exit === true) { //recircle programm while the user desire it
    let str = `${readlineSync.question('1st String value: ')}`, //user enters his variables in console
        str2 = `${readlineSync.question('2nd String value: ')}`,
        numb = Number(readlineSync.question('Number value: ')),
        bool= Boolean(readlineSync.question('1st Boolean value (say anything if you want TRUE): ')),
        bool2= Boolean(readlineSync.question('2nd Boolean value (say anything if you want TRUE): '));
    //print the results of a math expressions to the console    
    console.log("\nAddition:\n" +             
                `${typeof(str)} "${str}" + ${typeof(bool)} ${bool} = ${Number(str) + bool} \n` +
                `${typeof(str2)} "${str2}" + ${typeof(numb)} ${numb} = ${Number(str2) + numb} \n` +
                `${typeof(numb)} ${numb} + ${typeof(bool2)} ${bool2} = ${numb + bool2} \n\n` +
                "Multiplication:\n" +
                `${typeof(str)} "${str}" * ${typeof(bool)} ${bool} = ${str * bool} \n` +
                `${typeof(str2)} "${str2}" * ${typeof(numb)} ${numb} = ${str2 * numb} \n` +
                `${typeof(numb)} ${numb} * ${typeof(bool2)} ${bool2} = ${numb * bool2} \n\n` +
                "Division:\n" +
                `${typeof(str)} "${str}" / ${typeof(bool)} ${bool} = ${str / bool} \n` +
                `${typeof(str2)} "${str2}" / ${typeof(numb)} ${numb} = ${str2 / numb} \n` +
                `${typeof(numb)} ${numb} / ${typeof(bool2)} ${bool2} = ${numb / bool2} \n\n`);
    exit = readlineSync.keyInYN('Do you want to continue?', {limit: 'yn'}); //user announces his desire to continue working or not
    
    if (exit === true) {
        console.log('_____\nNext circle!\n');
    } else {
        console.log('_____\nThank you, bye!\n');
    } //message about next recircle or final goodbye
}
