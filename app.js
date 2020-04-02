var Role;
(function (Role) {
    Role["ADMIN"] = "Me";
    Role["READ_ONLY"] = "Kek";
})(Role || (Role = {}));
var person = {
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
