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
    {name: 'max', age: 31, status: true}
];

// users.forEach(function (value, index, array) {
//     console.log(value, index);
//     // console.log(array);// в подальшому майже не знадобиться
// });

// або
// users.forEach(value => console.log(value));

// let filteredUsers = users.filter(function(value) {
//     return value.age > 30;
// });
// console.log(filteredUsers);

// або

// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);
// початковий масив users залишається незмінним, оскільки повертається зовсім новий об'єкт

// додавання нової характеристики до обєкту:
// let mapedUsers = users.map(function (value, index) { let newUser = {
//     name: value.name,
//     age: value.age,
//     status: value.status,
//     id: index + 1
// }
//     return newUser;
// });
// console.log(mapedUsers);

// або cкорочуємо
//
// let mapedUsers = users.map(function (value, index) {
//     return {...value, id: index + 1};
// });
// console.log(mapedUsers);

// або cтрілочно
//
// let mapedUsers = users.map((value, index) => {return { id:index+1,name:value.name,age:value.age,status:value.status}
// });
// console.log(mapedUsers);

// // пошук
// let find = users.find(value => value.name === 'max');
// console.log(find);
// // знайде лише того max, який йде першим по списку

// console.log(users.every(value => value.status));
// // проітерує елементи і якщо всі мають статус true виведе true, якщо б хоч один false, то виведе false

// console.log(users.some(value => value.status));
// // проітерує елементи і якщо хоча б один матиме статус true виведе true, якщо жодного, то виведе false

// сортування, але потрібно два аргументи:
// users.sort((a, b) => {
//     console.log(a, b);
// });

// users.sort((u1, u2) => {
//     return u1.age - u2.age; // в зворотньому напрямку u2.age - u1.age;
// });
// console.log(users);

// console.log(users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// }));
// // сортування по алфавіту

users.reduce();