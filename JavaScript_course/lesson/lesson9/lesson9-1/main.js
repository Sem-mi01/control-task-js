// console.log(document); // за допомогою document можна знаходити будь-які елементи в документі
//
// console.log(document.head);
// console.log(document.head.children);
// console.log(document.body);
// console.log(document.body.innerHTML);

// найбільш швидкий спосіб пошуку
// let ul1 = document.getElementById('list-1');
// console.log(ul1);   // за ідентифікатором

// let menucCollection = document.getElementsByClassName('menu');
// console.log(menucCollection);  // за класом
//     for (const menuCollectionElement of menucCollection) {
//     console.log(menuCollectionElement);
//     }
// Важливо шукати i звертатися тільки по індексам або через ітерацію

// let ulList = document.getElementsByTagName('ul');
//     console.log(ulList); // за тегом
//
// let liList = document.getElementsByTagName('li');
// console.log(liList);
//
// let list1 = document.getElementById('list-1');
// console.log(list1);
// let list1LiCollection =  list1.getElementsByTagName ('li');
// console.log(list1LiCollection);

// більш точний та розширений пошук

// console.log(document.querySelector('ul'));
// // знаходе лише перший елемент
// console.log(document.querySelectorAll('ul'));
// // знаходе всіелементи і вузли
//
// console.log(document.querySelector('.menu'));
// console.log(document.querySelectorAll('.menu'));
//
// console.log(document.querySelector('body .menu'));
// console.log(document.querySelectorAll('body .menu'));

console.log(document.querySelectorAll('.menu:nth-child(2)>li'));
// або
console.log(document.querySelectorAll('#list-2'));

// все тобщо знайшов querySelector можна запакувати в змінну i проітерувати

let nodeListOf = document.querySelectorAll('#list-2');
console.log(nodeListOf);
for (const node of nodeListOf) {
    console.log(node);
}