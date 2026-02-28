// Interface doesn't exist on JS, so when it transpiles it doesn't create code for the interface
// We 'force' the object to use the same types as the interface

interface Person {
    firstName: String;
    lastName: String;
    age: Number;
    // We can make a property optional with '?'
    address?: Address;
}

// We won't see nested objects on interfaces, we will use another interface to add properties to the first level so we can maintain them easy.
interface Address {
    postalCode: String;
    city: String;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
};

// 'ctrl + .' to 'add missing properties'
const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 22
}