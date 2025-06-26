// function foo(bar){
//     console.log(bar);
// }
//
// foo(100);

// або розширено

// function foo(bar){
//     console.log(bar);
// }
//
// foo (function (){
//     return 100;
// }());

// function foo(callback){
//     console.log(callback);
//     // ƒ (){return 100;}
// }
//
// foo (function (){
//     return 100;
// });
// // якщо не виводити функцію, то в console ми отримаємо опис функції

// // приклад як можна використати callback
// function calc(a, b, action) {
//     if (action === '+') {
//         return a + b;
//     }
//     if (action === '-') {
//         return a - b;
//     }
// }
// // i тд, нескінчення кількість математичних дій
// як можна скоротити

   function calc(a,b, callback) {
    return callback(a, b);
   }
   console.log(calc(10, 20, (a, b) => {
       return a + b;
   }));
console.log(calc(10, 20, (a, b) => a - b));
console.log(calc(10, 20, (a, b) => a / b));
console.log(calc(10, 20, (a, b) => a * b));