// #WpkK0ZH1
//
// –створити масив з:
//
//     – з 5 числових значень
//
// – з 5 стічкових значень
//
// – з 5 значень стрічкового, числового та булевого типу
//
// – та вивести його в консоль

let arr = [
    [1, 5, 13, 56, 123],
    ['asd', 'qwerty', 'ljfvuhhf', 'lorem', 'lkjyufjytdfu'],
    [234, true, 'helo',false, 765]
]
console.log(arr);

for (innerArey of arr) {
    for (Element in innerArey) {
        console.log(Element, innerArey[Element]);
    }
    console.log(' ')
}