// console.log('qwertyup');
//
// let user = new User('Vasya', 31);
// user.greeting = function(){
//     console.log('Hello World!');
// }
// console.log(user);
// user.greeting();
//
// let user2 = new User('Petya', 33);
// user2.greeting = function(){
// }
// console.log(user2);
// user2.greeting();
// в даному прикладі потрібно кожному новому обєкту задавати функцію

// або компактніше за допомогою prototype (найкращий і найлегший спосіб)

// console.log(User);
// User.prototype.greeting = function () {
//     return `hello my name is ${this.name}`
// };
// User.prototype.greeting = function () {
//     return `hi my name is ${this.name}`
// };
//
// // можна додавати безліч
//
// let user = new User('Vasya', 31);
// console.log(user.greeting());
//
// User.prototype.greeting = function () {
//     return `olla my name is ${this.name}`
// };
// let user1 = new User('Petya', 31);
// console.log(user1.greeting());

// або
// let user = new User('Vasya', 31);
// user.greeting = function(msg, msg2, msg3) {
//     return `${msg} ${msg2} ${msg3} my name is ${this.name}`;
// };
// console.log(user.greeting(hello));
// let user2 = new User('Petya', 32);
// console.log(user.greeting.apply(user2,['hi','dear','friends']));
//
// // аналогічно
//
// let user3 = new User('Olya', 28);
// console.log(user.greeting.call(user3,'Olla', 'good','friends'));

let user = new User('Vasya', 31);
user.greeting = function (msg) {
    return `${msg} my name is ${this.name}`;
};
let user2 = new User('Petya', 33);
let greetingCopy = user.greeting.bind(user2);
// можна також після user2 прописати 'Hello', function () в консолі видалити його;
console.log(greetingCopy('Hello'));