// #4aDbSgh
//
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль

let value = [
    ['phone', 'televisor', 'kettle'],
    [23, 86, 765, 396, 98, 34, 654],
    [true, false, 0, NaN, undefined, null],
    [ {name: 'Vanya', age: 25, gender: 'male'},
      {name: 'Masha', age: 35, gender: 'female'},
      {name: 'Katia', age: 26, gender: 'female'},
    ]
]
console.log(value[0] [2]);
console.log(value[1] [4]);
console.log(value[2] [0]);
console.log(value[3] [1]);
console.log(value[3] [2].age);

for (let i = 0; i < value[3].length; i++) {
    console.log(`User ${i+1}: ${value[3][i].age} - ${value[3][i].gender}`)
}