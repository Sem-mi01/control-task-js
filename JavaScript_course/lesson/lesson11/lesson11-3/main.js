// формування URL

let url = new URL ('https://jsonplaceholder.typicode.com/posts')
url.searchParams.set('userId', 8);
url.searchParams.set('asd', 'jkgkjdfdeae'); // додавання інформації
console.log(url.searchParams.get('asd'));  // видалення інформації
console.log(url.searchParams.has('userId', 8)); // перевіра на наявність якоїсь інформації



fetch(url)
    .then(value => value.json())
    .then(value => {
        console.log(value);
    });