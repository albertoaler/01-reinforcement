import type { GiphyRandomResponse } from "../data/giphy.response"


const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_KEY

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=&rating=g`)

// myRequest
//     .then( (value) => {
//         value.json().then( (data) => {
//             console.log(data)
//         })
//     })
//     .catch( (reason) => {
//         console.error(reason)
//     })
// This is hard to read, we have nested promises so we can do

// myRequest
//     .then((value) => value.json())
//     .then((data) => {
//         const imageUrl = data.data.images.original.url
//         console.log(imageUrl)

//         const imageElement = document.createElement('img')
//         imageElement.src = imageUrl

//         document.body.append(imageElement)
//     })
//     .catch((reason) => {
//         console.error(reason)
//     })
// This isn't good because TS isn't recognizing the data types, so we will create the interface with
// the 'paste JSON as code' extension.

// We will separate the responsabilities, myRequest will bring the data, not create the image

const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img')
    imageElement.src = url
    
    document.body.append(imageElement)
}

myRequest
    .then((value) => value.json()
    .then(({data}: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url
        console.log(imageUrl)
        createImageInsideDOM(imageUrl)
    }))
    .catch((reason) => {
        console.error(reason)
    })
    .finally()