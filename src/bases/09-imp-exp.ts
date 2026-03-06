import { heroes, type Hero, type Owner } from '../data/heroes.data'


const getHeroByID = (id: number): Hero | undefined => {
    const hero = heroes.find( (hero) =>  {
        return hero.id === id
    })

    // We'll see it further because this doesn't indicate when we use the function that the function itself may throw an error
    // if( !hero ){
    //     throw new Error(`No existe un héroe con el id ${id}`);
    // }

    return hero
}

// export const getHeroesByOwner = (owner: Owner): Hero[] => {
//     const heroesByOwnerArray: Hero[] = heroes.filter( (hero) => {
//         return hero.owner === owner;
//     })

//     if(heroesByOwnerArray.length == 0) {
//         console.log(`No hay héroes con ese owner`)
//     }

//     return heroesByOwnerArray
// }

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter( (hero) => hero.owner === owner )
}