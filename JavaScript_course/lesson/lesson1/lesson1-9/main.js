let n = 100;
let s = 'asd'
let b = true;

console.log(typeof n);   // number, але написано stringою
console.log(typeof s);   // string
console.log(typeof b);   // boolean, але написано stringою

//................ об'єкти ..........................
let arr = [11, 22, 33, true];   // масиви
let user = {   // масиви
    name: 'vasya',
    age: 31
}
console.log(typeof arr);    // object
console.log(typeof user);  // object

function asd() {

}
console.log(typeof asd);   // function

// let x = undefined
// console.log(typeof x); // undefined

console.log(typeof undefined);  // undefined
console.log(typeof null);        // object
console.log(typeof NaN);        // number
console.log([] / 'asd');        // NaN

console.log(!!100);            // true
console.log(!!-100);           // true
console.log(!!'asd');          // true

console.log(!!0);             // false завжди
console.log(!!null);          // false
console.log(!!undefined);     // false
console.log(!!'');            // false, те що собою являє "нічого" автоматично є false

console.log(!!'0');           // true
console.log(!!' ');           // true