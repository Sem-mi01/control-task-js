// resolve i rejekt - це функції, які використовуються для керування станом промісу (Promise). resolve викликається, коли асинхронна операція успішно завершена, передаючи результат. reject викликається, коли сталася помилка, передаючи інформацію про помилку.

new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = 1;
        console.log(x); // 1
        resolve(x);
    },1000);
})
    .then ((value)=> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                value++;
                console.log(value);  // 2
                // resolve(value);
                // // throw new Error('jkhytdfuil'); // Error, проте наступнй етап виконується, але якщо throw поставити на рядок вищеб перед resolve, то виконання коду зупититься
                if (false) {  // або true
                    reject('htshdrhjyj');
                }else {
                    resolve(value);
                }// перевірка на помилку
            }, 1000);

        });
    })
        .catch((reason) => {
            console.log(reason);
        })
        .then (value => {
                console.log(value);

    })
