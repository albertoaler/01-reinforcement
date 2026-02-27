// We can use ' and " to declare strings, but also we can use backsticks ` (left to the 1 key) to make a 'Template String'
// This works to use it as multi-line string and to put variables inside with ${} wich are called 'expressions', because you can even sum, or do js code inside

const firstName = 'Alberto';
const lastName = "O'Neal";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);