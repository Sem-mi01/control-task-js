// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
interface IBook{
    title: string;
    pageCount: number,
    genre: string,
}
let book1: IBook = { title: 'Kobzar', pageCount: 500, genre: 'lyrics'}
let book2: IBook = { title: 'Aeneid', pageCount: 345, genre: 'aeneid'}
let book3: IBook = { title: 'The Kaidashev family', pageCount: 320, genre: 'сomedy'}
console.log(book1, book2, book3);