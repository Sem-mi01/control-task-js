if (true) {
    console.log('test');
}// test
if (false) {
    console.log('test');
}// не зреагувало


// let color = 'red'
// if (color === 'red') {
//     console.log('stop');
// } //stop

// let color = 'green'
// if (color === 'red') {
//     console.log('stop'); // оскільки колір червоний, а не зелений, то цей вираз є false і він ігнорується і переходимо до наступного сегменту
// }else {
//     console.log('go'); // true
// } // go

// let age = +prompt('enter your age');
// // console.log(age, typeof age);  // 41 string, але age це number
// console.log(age, typeof +age); // 41 number, але перше age залишається string, тому + потрібно ставити там де age створюється

// let age = +prompt('enter your age');
// if (age >= 18) {
//     console.log('adult');
// }else {
//     console.log('cartoon');
// }

// let color = prompt('enter color');
// if (color === 'green') {
//     if (confirm('is road clear')) {
//         console.log('go');
//     }else {
//         console.log('just wait');
//     }
// }else if (color === 'yellow') {
//     console.log('wait');
// }else if (color === 'red') {
//     console.log('stop');
// }else {
//     console.log('??????'); // якщо колір не відомий
// }

// let color = prompt('enter color');
// if (color === 'green' && confirm('is road clear')) {
//         console.log('go'); // при такому відображенні неможливо обробити варіант else
// }else if (color === 'yellow') {
//     console.log('wait');
// }else if (color === 'red') {
//     console.log('stop');
// }else {
//     console.log('??????'); // якщо колір не відомий
// }

// можна is road clean  винести в окрему змінну (option+command+v). результата аналогічний.

let color = prompt('enter color');
let isRoadClear = confirm('is road clear');
if (color === 'green' && isRoadClear) {
    console.log('go'); // при такому відображенні неможливо обробити варіант else
}else if (color === 'yellow') {
    console.log('wait');
}else if (color === 'red') {
    console.log('stop');
}else {
    console.log('??????'); // якщо колір не відомий
}
// можна міксувати різні варіанти. В else if також можна додавати внутрішні елементи else if, проте в else можна доавати тільки внутрішні if/



