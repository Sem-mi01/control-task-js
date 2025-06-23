// function calc(a,b) {
// return a + b;
// }

// ця сама функція, але стрілочний запис
let calc = (a, b) => a + b;
console.log(calc(10,20));

// let asd = () => console.log('hi!');

// let asd = function () {
//     console.log('hi!');
//     // return 'undefined' якщо функція нічого не повертає вона повертає undefined;
// };
//     console.log(asd());

let asd = () => console.log(arguments);
console.log(asd('ASD'));
// видає помилку, оскільки в стрілочних функціях не використовуються аргументи
