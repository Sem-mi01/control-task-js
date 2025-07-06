// let user = {
//     name: 'Vasya',
//     age: 123
// };
//
// let user2 = user;
// user2.age = 100500;
// console.log(user);
// console.log(user2);
//
// let user3 = {
//     name: 'Vasya',
//     age: 123
// };
// console.log(user === user2);  // true
// console.log(user === user3);  // false, бо не еквівалентно

// копіювання обєктів

// let user = {
//     name: 'Vasya',
//     age: 123
// };
//
// let userCopy = {...user}
// console.log(userCopy)
// console.log(userCopy === user); // false
// userCopy.age = 0;
// console.log(userCopy); // {name: 'Vasya', age: 0}
// console.log(user);     // {name: 'Vasya', age: 123}

// копіювання масивів

let nums = [11,22,33];
let nums2 = nums;
console.log(nums === nums2); // true
let nums3 = [...nums];
console.log(nums === nums3); // false
