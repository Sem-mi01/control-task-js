// отримання інформації з ресурсу

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     // або
//     // .then(response => {
//     //     console.log(response);
//     //     return response.json();
//     // })
//     .then((users) => {    //     в цій області можна робити що завгодно, напр. ітеруємо та витягуємо інформацію по елементах;
//         for (const user of users) {
//             document.write(`<div>
//                 ${user.name} ${user.username}
//             </div>`)
//         }
//         console.log(users)
//     });

  //   fetch('https://dummyjson.com/products')
  //
  // .then((response) => response.json())
  // // .then(({products}) => {
  // //     console.log(products);
  //   .then(res => {
  //       console.log(res);
  //       let {products} = res;
  //
  //       document.write(`<div>`);
  //       for (const product of products) {
  //           document.write(`<div>`);
  //           document.write(`<p>${product.id}- ${product.brand} - ${product.price}</p>`);
  //           document.write(`<img src="${product.thumbnail}" alt="${product.name}">`);
  //           document.write(`</div>`);
  //       }
  //       document.write(`</div>`);
  // });

// встановлення лімітів: limit - кількість продуктів для відображення, skip - порядковий номер продукту для відображення
  fetch('https://dummyjson.com/products?limit=194')
// fetch('https://dummyjson.com/products?limit=3&skip=10')

.then((response) => response.json())
// .then(({products}) => {
//     console.log(products);
  .then(res => {
      console.log(res);
      let {products} = res;

      document.write(`<div>`);
      for (const product of products) {
          document.write(`<div>`);
          document.write(`<p>${product.id}- ${product.brand} - ${product.price}</p>`);
          document.write(`<img src="${product.thumbnail}" alt="${product.name}">`);
          document.write(`</div>`);
      }
      document.write(`</div>`);
});


// додавання обєктів, aле в самому масиві він не зявиться (фейк)

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
    })
})
    .then(res => res.json())
    .then(console.log);

// update,  replase, delete також можливі