// spred - поверхнева копія

let user = {
    name: 'Vasya',
    skills: ['html', 'js'],
    greeting: function () {
    },
}
// let assing = Object.assign({}, user);
// console.log(assing);
// console.log(assing === user); // false
// console.log(assing.skills === user.skills); // true



// let userClone = {...user};
// console.log(user = userClone); // false, але
// console.log(user.skills = userClone.skills); // true

// JSON - глибока копія
// let s = JSON.stringify(123);
// console.log(s);    // '123' typeof string
//
// let userCopy = JSON.stringify(user);
// console.log(userCopy);  // {"name":"Vasya","skills":["html","js"]} формат JSON
// console.log(typeof userCopy);
//
// let parse = JSON.parse(123);
// console.log(parse); // '123' typeof number
//
// let userJsonClone = JSON.parse(userCopy);
// console.log(userJsonClone);  // {name: 'Vasya', skills: Array(2)}. Після того як обєкт проходить stringfy з нього вилучаються всі характеристики поведінки (функції) і назад вже їх не повернути
// console.log(user);
// // {name: 'Vasya', skills: Array(2), greeting: ƒ}
// console.log(user === userJsonClone); // false
// console.log(user.skills === userJsonClone.skills); // false


