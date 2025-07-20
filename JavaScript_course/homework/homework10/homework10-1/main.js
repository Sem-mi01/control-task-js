// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let div = document.createElement("div");
div.id = "text";
div.innerText = "lorem ipsun";
let button = document.createElement("button");
button.innerText = "spend";

document.body.append(div, button);

button.onclick = function () {
    document.getElementById("text").remove();
}