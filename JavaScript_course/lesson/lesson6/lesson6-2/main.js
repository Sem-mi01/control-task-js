let arr = [];
console.log(Array.isArray(arr));   // true (для перевірки чи є об'єкт масивом. true - так, false -ні)
// arr[arr.length ] = 100; // додавання нового елементу в кінець масиву або
console.log(arr.push('new element1'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

console.log(arr.pop()); // видалення елементу в кінеці масиву
console.log(arr);

console.log(arr.unshift('!!!')); // додавання нового елементу на початок масиву
console.log(arr);

console.log(arr.shift());  // видалення нового елементу з початку масиву
console.log(arr);

console.log(arr.join('-'));  // з'єднує між собою елементи масиву

let nums = [11, 22, 33];

let concat = arr.concat(nums)
console.log(concat); // (7) ['new element1', 'new element2', 'new element3', 'new element4', 11, 22, 33]
console.log(arr);

console.log(nums.reverse()); // 33, 22, 11

// створення нового масиву із вже існуючого
let slice = concat.slice(0,4);
console.log(slice); // (4) ['new element1', 'new element2', 'new element3', 'new element4']
console.log(concat); // (7) ['new element1', 'new element2', 'new element3', 'new element4', 11, 22, 33]

// let splice = concat.splice(0,2, '!!!', 'asd', 25); // роз'єднання елементів у різні масиви та додавання на місце вилучених нові елементи
// console.log(splice);
// // (2) ['new element1', 'new element2'] від'єднало два елементи починаючи з індекса 0
// console.log(concat); // (5) ['new element3', 'new element4', 11, 22, 33]. утворилося два нові масиви


// concat.splice(concat.indexOf(11),1);
// console.log(concat); // (6) ['new element1', 'new element2', 'new element3', 'new element4', 22, 33] . видалення елементу. в даному випадку починаючи з 4 індексу один елемент

console.log(concat.includes(11)); // true, проводить пошук і trueб якщо елемент є в масивіб false - якщо ні










