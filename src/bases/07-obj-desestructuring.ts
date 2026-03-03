const person = {
    name: 'Alberto',
    age: 24,
    key: 'developer'
}

// We can do this 'manually' like this:
// const name = person.name;
// const age = person.age;
// const key = person.key;

// But we can use the desestructuring to improve the reading
const {name: namePerson, age: agePerson, key: keyPerson} = person;

console.log({namePerson, agePerson, keyPerson});

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}

const useContext = ({name, age, key, rank = 'sin rango'}: Hero) => { // We can set a default value to optional parameters with 'parameter? = value'
    // We can use the 'traditional' desestructuring if there is more than 3-4 properties to improve reading, using (hero: Hero)
    // const {name, age, key, rank} = hero;

    // We con assign the parameter to a property: (name: name). Or only refer to the parameter like this:
    return {
        key,
        user: {
            name,
            age
        },
        rank
    }
}

// The object 'person' fills the properties even though doesn't use Hero interface, it has the same type and name properties 
const context = useContext(person);

console.log(context);

// TO DO: desestructurate using the function useContext
const {key, user, rank} = useContext(person);
// If we have properties inside properties, is recommended to desestructure on another variable after the first desestructuring
const {name} = user;

console.log({key, name, rank});