
// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// function listText(text, number) {
//     document.write('<ul>');
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//      document.write('</ul>');
// }
// listText('lorem ipsum', 100);

// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function primElements(arrayElements) {
    document.write('<ul>');
    for (const element of arrayElements) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}
primElements ([2, 17, 386, 'hello', 'world', true]);