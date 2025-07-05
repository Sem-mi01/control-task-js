// let name = 'Vasya';
// let age = 31;
// let user = {
//     // name: name,
//     // age: age,  можна скоротити
//     name,
//     age,
//     foo () {
//         console.log(this);
//     },
// }
// console.log(user)
// user.foo();

// деструктуризація
// let user = {
//     name: 'Vasya',
//     age: 31,
//     foo () {
//         console.log('foo');
//     },
// };
//
// let {name, age, foo, status} = user;
// console.log(name);
// foo();

// виведення однієї характеристики з багатьох інших. Наприклад name:
// function asd ({name}) {
//     console.log(name);
//     console.log(status);// undefined, о такої х-ки не існує
// }
// asd ({a:'qhejg', name:'qhejg'});

// let name = 'Vasya';
// let age = 31;
// let user = {
//     name,
//     age,
//     foo () {
//         console.log(this);
//     },
//     wife: {
//         name: 'Anna'
//     }
// }
// console.log(user)
// user.foo();
//
// let {name:userName,  age:userAge, wife:wifeName, wife} = user;
// console.log(name); // отримуємо конфлікт, бо вже такі змінні задекларовані. щоб вийти з даного кбонфлікту ми можемо переназвати характеристики через :
// console.log(age);
// console.log(wifeName);
// console.log(userName, userAge, wife);

// let numbers = [11, 22, 33];
// let [a, b, c] = numbers;
// console.log(a, b, c);
// console.log(a, c); // зразок пропуску змінної

// поєднання деструктуризацій масиву та об'єкту
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

let [{name, age, status}, user2] = users;
console.log(user2);
console.log(user1); // помилка, бо змінна не оголошена

