// даний приклад масив з масивом
let users = [
    {skills: ['html', 'mysql', 'mongo'], id: 1, name: "Vasya", age: 31, status: true},
    {skills: ['html', 'js'], id: 2, name: "Petya", age: 33, status: false},
    {skills: ['html', 'js'], id: 3, name: "Anna", age: 28, status: true},
    {skills: ['html', 'mysql', 'mongo'], id: 4, name: "Olya", age: 29, status: false}
]

console.log(users);
// console.log(users[0]['age']);
// // аналогічно
// console.log(users[0].age);

// правильніше буде звернутися до самого об'єкту, а потім до його складових
let user0 = users[0];
console.log(user0.age);
// аналогічно
console.log(user0['age']);

console.log(users[0].skills[2]);
// аналогічно
console.log(users[0]['skills'][2]);

