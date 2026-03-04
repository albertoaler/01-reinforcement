const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// Is the same as the object desestructuring but the order matters and we use []
// const [p1, p2, p3] = characterNames;

// What if i only want p2?
// We can declare variables that we won't use (NOT RECOMMENDED)
// We can use commas with an empty space (NOT WIDE USE)
const [, , p3] = characterNames;

console.log({p3});

// This function will be marked as TS as (string | number): []
const returnsArrayFn = () => {
    // We can use 'as const' to specify that this will always return an array [string, number]
    return ['ABC', 123] as const;
};

// So every value will be treated as (string | number) and this may lead to erros on TS only
const [letters, numbers] = returnsArrayFn();

// Like this, JS will execute it but TS says 'it's not type safe'
// console.log(letters + 100);

console.log([letters, numbers]);

// CHALLENGE 'Implementar useState'
/*
Crea una función llamada useState. Debe cumplir con los siguientes requisitos:

-La función debe llamarse useState.
-Debe retornar un arreglo con dos elementos:
    #1 - Un string (el valor inicial).
    #2 - Una función anónima de flecha que:
-Recibe un string.
-Imprime ese string en consola.
*/

const useState = (name: string) => {
    return [
        name,
        (value: string) => {
            console.log(value);
        }
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');