// We create a new instance of the Promise class, we need to send a callback to the constructor
const myPromise = new Promise<number> ( (resolve, reject) => {
    // Method of the window/global object
    setTimeout(() => {
        // We use the parameter 'resolve' when the promise is fulfilled and deliver the data inside ()
        // resolve(200)

        // We use the parameter 'reject' when something went off and the state of the promise is rejected
        reject(`No pudo pagarme a tiempo`)
    }, 2000); // 2 seconds
});

myPromise
    // Then is executed when resolve is called.
    .then((value) => {
        console.log(`Si me pagó mi dinero ${value}`);
    })
    // Catch is executed when reject is called
    .catch((reason) => {
        console.log(reason)
    })
    // Finally is executed everytume
    .finally(() => {
        console.log(`A seguir con mi vida sea cuál sea el resultado`)
    })
