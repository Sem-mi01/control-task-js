// function asd() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner;
// }
// console.log(asd()());
// let foo = asd();
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());


// let user = {name: 'asdgyqwe', age: 132};
// user.age = -100500;

// як заборонити зміни харатеристик

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;

        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        },
    }
}

let builder = userBuilder('vasya', 31);
console.log(builder);

console.log(builder.getAge());
console.log(builder.getName());
builder.setAge(-100);
console.log(builder.getAge());

