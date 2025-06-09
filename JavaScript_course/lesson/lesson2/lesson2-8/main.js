
// У JavaScript є 7 примітивних типів даних: string, number, bigint, boolean, undefined, null та symbol. Ці типи не є об'єктами і не мають методів, а можуть лише зберігати одне значення.

let a = 100;
let b = a;
b = b + 10;
console.log(a);  // 100
console.log(b);  // 110

// (reference type) посилальний - це не один із типів даних, а скоріше, як специфікація того, як значення присвоюється. Коли ви присвоюєте об'єкт одній змінній, потім інший змінній, то обидві змінні будуть посилатися (вказувати) на один об'єкт в пам'яті.
let user = {name:'Vasya'};
let user2 = user;
console.log(user2);
user2.age = 31;
console.log(user2);
console.log(user);
