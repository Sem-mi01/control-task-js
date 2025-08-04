// #bq1zkx7WP
//
//  створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


document.addEventListener('DOMContentLoaded', (e) => {
    const priceBlock = document.getElementById('priceBlock');
    const storageKeyPrise = 'currentPrice';
    const storageKeyLastReloadTime   = 'LastReloadTime';
    const reloadInterval = 10 * 1000;

    let currentPrice = parseInt(localStorage.getItem(storageKeyPrise)) || 100;
    let lastReloadTime = parseInt(localStorage.getItem(storageKeyLastReloadTime)) || 0;

    const currentTime = new Date().getTime();

    if (currentTime - lastReloadTime >= reloadInterval) {
        currentPrice += 10;
        localStorage.setItem(storageKeyLastReloadTime, currentTime);
    }else {
        console.log(currentPrice);
    }
    localStorage.setItem(storageKeyPrise, currentPrice);
    priceBlock.textContent = `${currentPrice}грн`;
});
















