let a = "'abc'";
let b = '"abc"';
console.log(a, b);

let c =`abc`;
console.log(c);

    let greeting = 'Hello Okten';
    let intro = 'my name is Yuliia';
    let msg = greeting + ' '+intro;
    console.log(msg);
// в console це відображається нвступним чином Hello Oktenmy name is Yuliia. Кінець першого і початок наступного речення написалися разом. Для того щоб це виправити там потрібно поставити пустий string всередині
// або застосувати template string. В цьому полягає різниця між "",'' та `` (option+~)
    let msg2 = `${greeting} ${intro}`;
    console.log(msg2);
// при застосуванні template string застосовуємо інтерполяцію `${} ${}, проте така string інтерпретується браузером важще, тому використовувати її на постійній основі не рекомендують`

