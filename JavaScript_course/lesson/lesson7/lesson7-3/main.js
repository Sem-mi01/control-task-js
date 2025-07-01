// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
// //     greeting() {
// //         return `Hello my name is ${this.name}`;
// //     }
// // }
// // let user = new User('Vasya', 31);
// // console.log(user);
// //
// // console.log(user.greeting())
//
// // static greeting() {
// //         console.log(this);
// //         console.log(this.age)
// //     return `Hello my name is ${this.name}`;
// //     }
// // }
// // console.log(User.greeting())
//
//     work() {
//         return 'work in process';
//     }
// }
// // console.log(User.greeting());
//
// class Customer extends User {
//
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//     work(){
//         return super.work();
//     }
//     foobar(){
//
//     };
//
// }
// let customer = new Customer('Vasya', 31, '1111');
// console.log(customer);
// console.log(customer.work());
// console.log(customer.foobar());

function User(name, age) {
    this.name = name;
    this.age = age;
}

    function Customer (name, age,password) {
    User.apply(this, arguments);
    this.password = password;
}

let customer = new Customer('Petya', 33, 12111);
console.log(customer);
