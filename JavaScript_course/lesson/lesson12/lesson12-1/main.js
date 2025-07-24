async function foo () {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((velue) => velue.json())

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((velue) => velue.json());

    console.log(users);
    console.log(posts);


}

foo();
