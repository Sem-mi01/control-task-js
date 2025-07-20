// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

let form = document.createElement("form");
form.name = 'tableForm';

let inputLine    = document.createElement("input");
inputLine.type = "number";
inputLine.id = 'numLines';
inputLine.placeholder = 'enter number of lines';

let inputCells = document.createElement("input");
inputCells.type = "number";
inputCells.id = 'numCells';
inputCells.placeholder = 'enter number of cells';

let inputInfoCells = document.createElement("input");
inputInfoCells.type = "text";
inputInfoCells.id = 'textCells';
inputInfoCells.placeholder = 'enter cells content';

let button = document.createElement("button");
button.innerText = 'send';

form.append(inputLine, inputCells, inputInfoCells, button);
document.body.appendChild(form);

const table = document.createElement("table");

const tableForm = document.forms ['tableForm'];
tableForm.onsubmit = function (ev) {
    table.innerText = ' ';
    ev.preventDefault();
    let linesValue = +tableForm.lines.value;
    let cellsValue = +tableForm.cells.value;
    let infoValue = tableForm.info.value;
    console.log(linesValue, cellsValue, infoValue);

};