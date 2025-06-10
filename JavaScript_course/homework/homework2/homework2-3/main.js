// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.


    let book1 = {
    title: 'Devastation',
    pageCount: 500,
    genre: 'prose',
    authors: [{
        name: 'Lubko Deresh',
        age: 40
    }, {
        name: 'Lubko Deresh',
         age: 40
    }]
}
console.log(book1);

let book2 = {
    title: 'Initiation',
    pageCount: 430,
    genre: 'prose',
    author: [{
        name: 'Luko Dashvar',
        age: 67
    }, {
        name: 'Luko Dashvar',
            age: 67
        }]
}
console.log(book2);

let book3 = {
    title: 'Poetry',
    pageCount: 550,
    genre: 'poetry',
    author: [{
        name: 'Lina Kostenko',
        age: 95
    }, {
        name: 'Lina Kostenko',
        age: 95
    }]
}
console.log(book3);