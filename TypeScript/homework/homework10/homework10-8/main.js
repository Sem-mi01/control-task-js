// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const table = document.getElementById('table');

const tableForm = document.forms['tableForm'];
tableForm.onsubmit = function (event) {
    event.preventDefault();
    table.innerText = '';
    const linesValue = +tableForm.lines.value;
    const cellsValue = +tableForm.cells.value;
    const infoCellsValue = tableForm.infoCells.value;
    console.log(linesValue, cellsValue, infoCellsValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = infoCellsValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};