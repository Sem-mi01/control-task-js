// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let form = document.createElement("form");

let inputName    = document.createElement("input");
inputName.type = "text";
inputName.id = 'name';
inputName.placeholder = 'enter your name';

let inputSurname = document.createElement("input");
inputSurname.type = "text";
inputSurname.id = 'surname';
inputSurname.placeholder = 'enter your surname';

let inputAge = document.createElement("input");
inputAge.type = "number";
inputAge.id = 'age';
inputAge.placeholder = 'enter your age';

let button = document.createElement("button");
button.innerText = 'verify';

let message = document.createElement("p");

form.append(inputName, inputSurname, inputAge, button, message);
document.body.appendChild(form);

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let name = inputName.value;
    let surname = inputSurname.value;
    let age = inputAge.value;

    let user = {
        name: name,
        surname: surname,
        age: age
    }
    console.log(user);
    message.innerText = user.name + ' ' + user.surname + ' ' + user.age;

})