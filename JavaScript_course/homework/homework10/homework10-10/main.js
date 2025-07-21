// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

const arr = Array.from({length: 100}, (_, i) => `obj ${i+1}`);

const itemsPerPage = 10;
let currentPage = 1;

const arrayDiv = document.getElementById('array');
const prevButton     = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function displayItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = arr.slice(startIndex, endIndex);
    arrayDiv.innerHTML = '';

    currentItems.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        arrayDiv.appendChild(p);
    });
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = endIndex >= arr.length;
}
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayItems();
    }
});
nextButton.addEventListener('click', () => {
    const maxPages = Math.ceil(arr.length / itemsPerPage);
    if (currentPage < maxPages) {
        currentPage++;
        displayItems();
    }
});
document.addEventListener('DOMContentLoaded', displayItems);