
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

type BookType = {
    title: string;
    pageCount: number,
    genre: string,
    authors: AutorType[]
}
type  AutorType = {name: string, age: number}

    let Book1: BookType = {
    title: 'Devastation',
    pageCount: 500,
    genre: 'prose',
    authors: [
        {name: 'Lubko Deresh', age: 40},
        {name: 'Lubko Deresh', age: 40}
    ]
}
let Book2: BookType = {
    title: 'Initiation',
    pageCount: 430,
    genre: 'prose',
    authors: [
        {name: 'Luko Dashvar', age: 67},
        {name: 'Luko Dashvar', age: 67}
    ]
}
let Book3: BookType = {
    title: 'Poetry',
    pageCount: 550,
    genre: 'poetry',
    authors: [
        {name: 'Lina Kostenko', age: 95},
        {name: 'Lina Kostenko', age: 95}
    ]
}
console.log(Book1, Book2, Book3);