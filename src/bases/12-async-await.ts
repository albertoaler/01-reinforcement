import type { GiphyRandomResponse } from "../data/giphy.response"


const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_KEY

const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img')
    imageElement.src = url
    
    document.body.append(imageElement)
}

// an async function returns a Promise eveytime
const getRandomGifURL = async (): Promise<string> => {
    // await only works inside an async function and it resolves the promise
    // it is like a 'pause' button to wait on that line until the Promise resolves
    const myRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=&rating=g`)

    const {data}: GiphyRandomResponse = await myRequest.json()

    return data.images.original.url
}

getRandomGifURL().then(createImageInsideDOM)

/*
Imagínate que estás en un edificio (tu código):

Sin await: Llegas al elevador, picas el botón y te vas a caminar por el pasillo.
Si alguien te pregunta qué tienes, solo tienes la "promesa" de que el elevador viene.

Con await: Llegas al elevador, picas el botón y te quedas parado ahí mirando la puerta.
No te mueves hasta que se abra. Cuando se abre, ya tienes el elevador listo para entrar (el resultado).
*/