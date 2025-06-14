// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let values = [23, true, 98, 'red', 'green', 'yellow', 765, false, 987, 'undefined'];
for (let i = 0; i < values.length; i++) {
if (typeof values[i] === 'boolean') {
    console.log(values[i]);
}
}

