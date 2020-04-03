enum Role { ADMIN = 'Me', READ_ONLY = 'Kek' }


const person: {
    name: string;
    age: number;
    hobbies: any[];
    favoriteMovie: [string, number],
    role
} = {
    name: 'Maximus',
    age: 39,
    hobbies: [
        'coding',
        'watching videos about psychology, programming and others',
        'read books',
        'play chess',
        12
    ],
    favoriteMovie: ['Attack on titan', 2012],
    role: Role.ADMIN
};

person.favoriteMovie.push('The game');

console.log(person.favoriteMovie);