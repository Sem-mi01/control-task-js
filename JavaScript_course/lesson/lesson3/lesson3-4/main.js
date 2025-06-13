// let user = {
//     id: 1,
//     name: "Vasya",
//     status: true,
//     skills: [],
// }
//
// for (let fileName in user) {
//     // console.log(fieldName);  // id, name, status.skills
//     // console.log(user[fieldName]); // виводе і характеристики
//     // console.log(user['name']);
//     console.log(fieldName, user[fieldName]); // виводе значення і характеристики кожного поля
// }

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
];

for (const user of users) {
    // console.log(user); // виводе кожне поле
    for (const fieldName in user) {
        console.log(fieldName, user[fieldName]);
    }
    console.log(''); // виводе відстань між  об'єктами

}
