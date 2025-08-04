
// #0Kxco1edSN
//
// – створити cтрілочну функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write



let listText = (text, number) => {
    document.write('<ul>');
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
     document.write('</ul>');
}
listText('lorem ipsum', 10);
