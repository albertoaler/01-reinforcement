// On JS, we can create an object without a class, this is called Literal Objects

const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    // add another property
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
};

// This line doesn't mean create a clon, this means spiderman points to the same memory space of ironman, so every modification affects ironman
// const spiderman = ironman;

// First level reference: operator spread. Take all properties of ironman and spread to spiderman
// const spiderman = {...ironman};

// This breaks all level references and creates a clone
const spiderman = structuredClone(ironman);

// We can modify the content of the object, but we cannot reassign the variable to a new object because it's a const
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22
spiderman.address.city = 'Los Angeles';

console.log(ironman, spiderman);