// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

const cardSuits = ['spade', 'diamond','heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards = [];
for (const cardSuit of cardSuits ) {
    for (const value of values) {
        const card = {cardSuit: cardSuit, value: value };
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
// console.log(cards);

let result = cards.reduce((accumulator, card) => {
    // console.log(card);
    if(card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    }else if(card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    }else if(card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else{
        accumulator.clubs.push(card)
    }
    return accumulator;
},
    {diamonds: [],
        hearts: [],
        spades: [],
        clubs: []
    });
console.log(result);

const reduse = cards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'club':
            accumulator.clubs.push(card);
            break;
        case 'spade':
            accumulator.spades.push(card);
            break;
    }
    return accumulator;
    }, {
    diamonds: [],
    hearts: [],
    spades: [],
    clubs: [],
});
console.log(reduse);
