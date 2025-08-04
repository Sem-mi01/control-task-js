//
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div = document.createElement('div');
document.body.appendChild(div);

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementsByTagName('div')[0].innerText = currentNumber;