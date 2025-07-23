let form = document.forms [0];
form.onsubmit = function (ev) {
    ev.preventDefault();
    let userId = this.userId.value;
    // console.log(userId.match(/\d/g)); // дозвіл на введення лише символів
    // console.log(userId.match(/[0-4]/g)); // пошук конкретних цифр в заданому діапазоні

    let title = this.title.value;
    let body = this.body.value;
    if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){3,}/g)) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,  // символ '+' перетворює на числове значення
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }
    // console.log(userId, title, body);
    // console.log(!!body.match(/(\w+\s){3,}/g)); // пошук конкретних cимволів w+ показує, що більше ніж одне слово, s - пробіл, 3 - вказує на мінімальну кількість слів для true. приклади регулярок на сайті https://regex101.com/
}

