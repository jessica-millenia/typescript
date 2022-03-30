const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple
} = {
    name: 'Jess',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

console.log(person.name);
person.role.push('admin');
// person.role[1] = 10;
console.log(person.role);

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
const person2 = {
    name: 'Jesss',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

if (person2.role == Role.ADMIN){
    console.log('is admin');
}

let favoriteHobbies: any[];
// let favoriteHobbies: string[];
favoriteHobbies = ['Sport', 10];

let favoritActivities: string[];
favoritActivities = ['Sports', 'Cooking'];

for (const hobby of favoritActivities) {
    console.log(hobby.toUpperCase());
}
