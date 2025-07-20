// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

let input    = document.createElement("input");
input.type = "number";
input.id = 'age';
input.placeholder = 'введіть Ваш вік';

let button = document.createElement("button");
button.innerText = 'verify';

let message = document.createElement('p');

document.body.append(input, button, message);

function chekAge() {
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    if (age >= 18) {
        message.innerText = 'adult';
    }else if (age < 18) {
        message.innerText = 'minor';
    }else{
        message.innerText = '???';
    }
}
button.addEventListener('click', chekAge);