// setTimeout(() => {
//     let x = 1;
//     console.log(x); // 1
//     setTimeout(() => {
//         x++;
//         console.log(x); // 2
//         setTimeout(() => {
//             x++;
//             console.log(x); // 3
//         }, 1000);
//     }, 1000);
// }, 1000); // отримаємо callback hell. працювати з подібним кодом не зручно

// краще Promise обгортка

new Promise((resolve) => {
    setTimeout(() => {
        let x = 1;
        console.log(x); // 1
        resolve(x);
    },1000);
})
    .then ((x )=> {
    return new Promise(resolve => {
        setTimeout(() => {
            x++;
            console.log(x);  // 2
            resolve(x);
        }, 1000)
    });
})
    .then((x) => {
        return new Promise(resolve => {
            setTimeout(() => {
                x++;
                console.log(x); // 3
                resolve(x);
            }, 1000);
        });
})
    .then ((x )=> {
        new Promise(resolve => {
            setTimeout(() => {
                x++;
                console.log(x); // 4
            }, 1000);
        });
})