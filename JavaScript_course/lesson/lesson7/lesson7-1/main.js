// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     console.log(this);
//     // this це об'єкт, який буде створено за допомогою конструктора
// }
//
// let user1 = new User('asd', 123, true);
// let user2 = new User('qwe', 12, false);

// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife
// }
//
// console.log(new User('asd', 123, true, {name: `qwertrewq`}));

function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
    this.greeting = function () {
        console.log(`hi`);
    }
}

let user = new User('asd', 123, true, 'Anna', 28);
console.log(user);
