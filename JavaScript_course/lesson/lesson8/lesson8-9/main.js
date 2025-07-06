//
// console.log({});
// console.log({}.__proto__);

let base = {
    id: 1,
    name: 'kokos'
}

// створюємо прототип:

let copy = Object.create(base);

console.log(base);
console.log(copy);
console.log(copy.id);
console.log(copy.name);


// перевірка чи дана характеристика є характеристикою обєкту:
console.log(copy.hasOwnProperty('id')); // false, бо данах-ка є власністю base, а не copy
console.log(base.hasOwnProperty('id')) // true

// можна додати нову х-ку
copy.surname = 'foobar';
// можна перевизначити х-ку;
copy.id = 1000500;
console.log(copy);

// ще один варіант пртотипіювання (не рекомендовано використовувати)
let obj = {};
obj.__proto__ = base;
console.log(obj);







