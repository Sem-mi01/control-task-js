// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
const cinderellas = [
    new Cinderella('Cinderella1', 16, 34),
    new Cinderella('Cinderella2', 20, 36),
    new Cinderella('Cinderella3', 25, 38),
    new Cinderella('Cinderella4', 18, 35),
    new Cinderella('Cinderella5', 23, 34),
    new Cinderella('Cinderella6', 17, 37),
    new Cinderella('Cinderella7', 21, 38),
    new Cinderella('Cinderella8', 19, 36),
    new Cinderella('Cinderella9', 22, 34),
    new Cinderella('Cinderella',10, 24, 37),
];

const prince = new Prince('Jozef', 20, 35);

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.shoe) {
//         princessa = cinderella;
//     }
// }

const princessa = cinderellas.find(cinderella => cinderella.footSize     === prince.shoe);

console.log(princessa);


