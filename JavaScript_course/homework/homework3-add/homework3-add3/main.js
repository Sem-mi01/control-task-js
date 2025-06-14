// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
//
// 2. перебрати його циклом for
//
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// 8. вивести масив у зворотньому порядку.
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

let arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// debugger;
// let i = 1;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i = i + 2;
// }

// for (let i = 1; i < arr.length; i = i + 2) {
//     console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         console.log(`okten ${i}: ${arr[i]}`);
//     }
// }

// console.log(arr.reverse());

// let i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }

// for (let i = arr.length - 1; i >= 0; i --) {
//     console.log(arr[i]);
// }

// let i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i = i - 2;
// }

// for (let i = arr.length - 1; i >= 0; i = i - 2) {
//     console.log(arr[i])
// }

// let i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i = i - 1;
// }

// for (let i = arr.length - 1; i >=0; i = i - 1) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

for (let i = arr.length - 1; i >=0; i = i - 1) {
    if (arr[i] % 3 === 0) {
        console.log(`Okten: ${arr[i]}`);
    }
}