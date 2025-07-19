let target = document.getElementById('target');
// target.onclick = function (ev) {
//     console.log('click');
//     console.log(ev);
// };

// target.onmousemove= function (ev) {
//     console.log('move');
//     console.log(ev.clientX, ev.clientY);
// };

// target.onmousemove = function (ev) {
//     console.log(ev.clientX, ev.clientY);
//     let r = ev.clientX;
//     let g = ev.clientX;
//     let b = ev.clientY;
//     this.style.background = `rgb(${r},${g},${b})`;
// };

// target.onclick = function () {
//     console.log('asdfghjkl');
// };
// console.log(target);

// target.addEventListener('click', function (ev) {
//     console.log('ev');
// });
// target.addEventListener('click', function (ev) {
//     console.log('sddyftyukigliut');
// });

// target.onmouseover= function () {
//     console.log('over');
// };
//
// target.onmouseleave= function () {
//     console.log('leave');
// };

// let i1 =  document.getElementById('i1');
// i1.oninput = function () {
//     console.log(this.value); // в даному випадку інформація, яка вводиться в форму одразу зчитується i виводиться в console
//     target.innerText = this.value; // в даному випадку інформація, яка вводиться в форму одразу зчитується, виводиться в console і дублюється в середиті елементу
// };

// приклад збору інформації з форми:
// let f1 = document.forms.f1;
//
// f1.onsubmit = function(ev) { // перезавантаження сторінки
//     ev.preventDefault();           // відключення перезавантаження сторінки
//     console.log("hello");
//     this.username.value
//     let user = {name: this.username.value};
//     console.log(user); // виводимо користувача, який зазначено в полі форми
// }

// перегляд стану завантаження вікна, документа
window.onload = function(){
    console.log('load');
};
// document.onreadystatechange = function(){
//     console.log(document.readyState); // interactive, complete, load
// };

// прелоудер:
document.onreadystatechange = function(){
    if (document.readyState === 'interactive') {
        document.body.innerText = 'loading start...';
    }
    if (document.readyState === 'complete') {
        document.body.innerText = 'loading complete';
    }
}