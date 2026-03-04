interface Hero {
    id: number,
    name: string,
    owner: Owner
}

// We can use types to put a restriction to our code of which values we can use
// This not transpiles to JS, is only used by TS
type Owner = 'DC' | 'Marvel';

// Enums does exists on JS, so it will generate them and use memory
// But with modern TS, this will lead to an error
// https://www.totaltypescript.com/erasable-syntax-only
// enum Owner {DC = 'DC', Marvel = 'Marvel'};

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];