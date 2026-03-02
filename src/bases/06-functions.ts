// With TS we can specify the data type of the parameter and the return
function greet(name: string): string {
    return `Hola ${name}`;
}

// Another way to create a function is with arrow functions, we'll use it for callbacks because is more readable
/*
const greet2 = (name: string): string => {
    return `Hello ${name}`;
};
*/

// We can simplify the arrow function if we know that the only thing that the function is going to do is a return
const greet2 = (name: string) => `Hello ${name}`;

// With the arrow function we can not modify the value
// const greet2 = () => {};

const message = greet('Alberto');
const message2 = greet2('Linda');


console.log(message, message2);

interface User {
    uid: string,
    username: string
};

// Traditional function
function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'ezioauditore'
    }
}

// Challenge turn it to arrow function simplified
const getUser2 = (): User => ({
    uid: 'DEF-456',
    username: 'jasonbrody'
})

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

const myNumbers: number[] = [1,2,3,4,5];

// Traditional function
/*
myNumbers.forEach(function (value) {
    console.log({value})
});
*/

// Arrow function simplified (only if we want to use all the calues on the function we using at the return)
myNumbers.forEach(console.log);