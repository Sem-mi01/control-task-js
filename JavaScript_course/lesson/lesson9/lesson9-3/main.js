// let target = document.getElementById('target');
// console.log(target.innerText);  // text
// // target.innerText = 'okten';  // заміна тексту, сприймається як символи на відміну від innerHTML
// target.style.background = 'silver';
// target.classList.add('foo'); // заміна тексту
// target.classList.add('bar');
// // console.log(target.classList);
// // console.log(target.classList.keys()); // витягуємо ключі
// // console.log(target.classList.item(0)); // витягуємо певний клас за певним індексом
// // console.log(target.classList.contains('bar')); // true перевіряємо навність певного класу
// // console.log(target.classList.toggle('asd')); // у випадку якщо певний клас не існує - він додасться, а якщо існує, то видалиться
// // console.log(target.classList.toggle('asd'));
// // console.log(target.getAttribute('xxx')); // ???
// // console.log(target.getAttribute('id')); // target
// // console.log(target.getAttribute('class')); // null так як класу не існує
// // console.log(target.getAttribute('style')); // background: silver;
// // // target.setAttribute('id', 'qwertyp'); // змінює значення (назву)
//
// console.log(target.previousElementSibling); // повертає елемент до
// console.log(target.nextElementSibling); // повертає елемент після
// console.log(target.children); // повертає елементи в тексті (b, span)
// console.log(target.childNodes); // повертає елементи і вузли
//
// target.innerHTML = '<b>asdffghl</b>'; // заміна тексту, сприймається як HTML
// console.log(target.outerHTML);  // повертає обгортку (структуру) HTML <div id="target" xxx="???" className="foo bar" style="background: silver;"><b>asdffghl</b></div>

// якщо декілька i більше тоді спочатку ітеруємо, false далі можемо застосовувати попередні маніпуляції
let collectionOfDiv = document.getElementsByClassName('point');
for (const divElement of collectionOfDiv) {
    divElement.innerText = 'asdfgghjjky';
    divElement.classList.add('qqq');

}