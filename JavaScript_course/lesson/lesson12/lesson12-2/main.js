// console.log('start'); // синхронна функція
//
// setTimeout(function () {
//     console.log('hi');
// }, 1000); // aсинхронна функція. виконуються виконується по мірі завантаження та виконання всіх винхронних функцій.В даному випадку завантаженн відкладено на 1 секунду
//
// setTimeout(function () {
//     console.log('hello');
// }, 200);
//
// console.log('end'); // синхронна функція. виконуються по черзі

// Callback hell більш складніше i не використовується програмістами
// setTimeout(function () {
//     console.log('hi 1');
//     setTimeout(function () {
//         console.log('hi 2');
//         setTimeout(function () {
//             console.log('hi 3');
//             setTimeout(function () {
//                 console.log('hi 4');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// Callback hell, також відомий як "піраміда загибелі", в JavaScript - це ситуація, коли багато вкладених колбеків (функцій, що передаються як аргументи іншим функціям для обробки результатів асинхронних операцій) роблять код важким для читання, розуміння та підтримки


// let x = 1;
//
//         setTimeout(function (){
//             x = 1000;
//         }, 1000);
//
// console.log(x);     // 1 (1000 не виведе, оскільки асинхронна функція виконується лише після вииконання всіх синхронних)

// // ще приклад циклу подій (event loop)
// console.log('log1');
//
// setTimeout(() => console.log('asd'), 2000);
//
// console.log('log2');
//
// setTimeout(() => console.log('qwe'), 1000);
//
// console.log('log3'); // log1, log2, log3, qwe, asd

// // будь-яка асинхронна функція не спроможна змінювати зовнішню змінну
// let x = 0;
// setTimeout(() => {
//     x = 100500;
// }, 1000);
// console.log(x);  // 0, а не 100500

let i = 0;

while(i < 5){
    setTimeout(() => {
        console.log(i);
    }, 1000);  // 5 разів вивело 5, а не 01234
    i++;
}

let a = 0;

while(a < 5){
    run(a);
        a++;
    }
    function run(a){
    setTimeout(() => {
        console.log(a);
    }, 1000);  //  01234
}