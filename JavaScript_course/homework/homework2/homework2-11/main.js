// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = 0;
// if (x === '') {
//     console.log('default');
// }else if (x === 0) {
//     console.log('default');
// }else if (x === null) {
//     console.log('default');
// }else if (x === undefined) {
//     console.log('default');
// }else if (x === NaN) {
//     console.log('default'); // (консоль не виводе)
// }else if (x === false) {
//     console.log('default');
// }

// другий варіант
// if (x===0 || x===null || x === undefined || x === '' || x === false) {
//     console.log('defaulf');
// }else if (isNaN(x)) {
//     console.log('default');
// }

// але краще
if (!x) {
    // x = 'default';       // (консоль не виводе)
    console.log('default');
}




