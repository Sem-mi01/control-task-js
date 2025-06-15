// let r1 = 10 + 20;
// let r2 = 20 + 22;

// function calc(a, b) {
//     let result = a + b;
//     return result;      // 30  42
//
// }
//
// let r1 = calc(10, 20);
// let r2 = calc(20, 22);
// console.log(r1, r2);

// function tax(sum) {
//     let pdv = sum / 100 * 20;
//     let warTax = sum / 100 * 1.5;
//     let result = sum - pdv - warTax;
//     return sum - pdv - warTax;
// } або скорочуємо

// function persentage(sum, per) {
//     return sum / 100 * per;
// }
// function tax(sum) {
//     // let pdv = persentage(sum, 20);
//     // let warTax = persentage(sum, 1.5);
//     // return sum - pdv - warTax;
//     return sum - persentage(sum, 20) - persentage(sum, 1.5);
// }
//
// let number = tax(10000);
// console.log(number);

// function userFilter(users) {
//     for (const user of users) {
//         if (user.age > 30) {
//             console.log(user)
//
//         }
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// userFilter(users)

// щоб відфільтрувати масив та вивести відфільтроване в масив:

function userFilter(users) {
    let filterUsers = [];
    for (const user of users) {
        if (user.age > 30) {
            filterUsers.push(user);

        }
    }
    return filterUsers;
}
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
let filter = userFilter(users);
console.log(filter);