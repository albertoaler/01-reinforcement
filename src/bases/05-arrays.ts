// to create an array we use '[]'. TS infers the data type for the array based on the values
// const myArray = [1,2,3,'4'];

// With TS we specify the data type when we create the array
const myArray: number[] = [1,2,3,4]

// Remember to use spread [...] or structuredClone to avoid the reference
const myArray2 = [...myArray];

// if we have numbers and strings, we can still add strings
// myArray.push('5');
myArray.push(5);
myArray2.push(10);

console.log({myArray, myArray2});

// This is a problem when we try to do another things like 'sum' the numbers on a cycle
for(const number of myArray) {
    // we would have an error because we are adding a 'string' to a number even tough JS won't brake
    // console.log(number + 10);
}