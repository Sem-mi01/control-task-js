// fetch('https://jsonplaceholder.typicode.com/users')
// .then(value => value.json())
// .then(users => {
//     for (const user of users) {
//         fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//           .then((value) => value.json())
//           .then((postsOfIteratedUser) => {
//               user.posts = postsOfIteratedUser;
//               });
//
//         console.log(user);
//     }
//
// });

// або за допомогою Promise.all((x,y)), де x,y це асинхронні дії

let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json());

let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json());

// Promise.all([users, posts]).then((result) => {
//     // let usersArray = result [0];
//     // let postsArray = result [1];
//     // // console.log(result);
//     // console.log(usersArray);
//     // console.log(postsArray);
//     let [users, posts] = result;
//
//     for (const user of users) {
//         user.posts = [];
//         for (const post of posts) {
//             if (user.id === post.userId) {
//                 user.posts.push(post);
//             }
//         }
//
//     }
//     console.log(users);
// })

// Promise.race([users, posts]).then((value) => console.log(value));
// // статичний метод, який приймає ітератор (наприклад, масив) обіцянок і повертає нову обіцянку. Ця нова обіцянка вирішується або відхиляється, як тільки перша з переданих обіцянок вирішується або відхиляється. Іншими словами, Promise.race() чекає, яка обіцянка виконається або відхилиться першою, і результат цієї обіцянки стає результатом  Promise.race()

Promise.any ([users, posts]).then((value) => console.log(value));
// приймає масив промісів і повертає новий проміс. Цей новий проміс вирішується, як тільки один з вхідних промісів виконається успішно. Якщо всі проміси в масиві відхилені, то повернений проміс також відхиляється з помилкою AggregateError, що містить помилки всіх відхилених промісів