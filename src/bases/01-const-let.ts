// NEVER USE VAR TO DECLARE A VARIABLE
// Use let when the variable is going to change and you don't wanna think about data type, this is from JS but you can use it on TS
let firstName = 'Alberto';

// Use const when the variable isn't going to change ever, this to reduce memory usage because they don't have the methods to change values
// You can declare the type in const with ':', for example, string
const lastName: string = 'Aleman';

// Using TS 'declares' the type even with let, in this case, number, so you will get an error when trying to change its type, for example:
let diceNumber = 5;
// This next line gives you an error
//diceNumber = '3';

// We can use methods depending on the variable type, strings, for example:
const containsLetterA = lastName.includes('A');

// A console.log to see the variable content on the dev tools
console.log({containsLetterA, diceNumber, firstName, lastName});