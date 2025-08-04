

// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let input: string | null = prompt('Enter number 1, 0 або -3');

if (input !== null) {
    let x: number = +input;

    if (x !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}