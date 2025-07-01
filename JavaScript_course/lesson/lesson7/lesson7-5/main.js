// let set = new Set();
// set.add('asd');
// set.add('qwe');
// set.add('asd');
// set.add('xxx');
// console.log(set);
// console.log(set.has('xxx'));// true (перевірка наявності обєкту)
// set.delete ('xxx'); // видалення обєкту
// console.log(set);
// console.log(set.size); // довжина об'єкту
// set.forEach(value => console.log(value));
// let arrayFromSet = Array.from(set);
// console.log(arrayFromSet);

let set = new Set([11, 22, 33, 44, 11, 22, 55]);
console.log(set);
let numbers = Array.from(set);
console.log(numbers);
