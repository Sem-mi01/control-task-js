
/*.....................index.....................*/
if (window.location.pathname.includes('index.html')) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((value) => value.json())
        .then(users => {
            const container = document.getElementById('users-container');
            users.forEach(user => {
                const div = document.createElement('div');
                div.className = 'user-block';
                div.innerHTML = `
            <p><b>id:</b>   <i>${user.id}</i></p>
            <p><b>name:</b>  <i>${user.name}</i></p>
            <a href="user-details.html?userId=${user.id}">user info</a>`;
                container.appendChild(div);
            });
        });
}

/*.....................user-details.....................*/
if (window.location.pathname.includes('user-details.html')) {
    const userId = new URLSearchParams(window.location.search).get('userId');
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(value => value.json())
        .then(user => {
            const container = document.getElementById('user-info');
            container.innerHTML = `
      <h2>Info about user</h2>
      <p><b>id:</b> <i>${user.id}</i></p>
      <p><b>name:</b> <i>${user.name}</i></p>
      <p><b>email:</b> <i>${user.email}</i></p>
      <p><b>phone:</b> <i>${user.phone}</i></p>
      <p><b>website:</b> <span style="text-decoration: underline;">${user.website}</span></p>`;
        });

    function loadPosts() {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then((value) => value.json())
            .then(posts => {
                const postContainer = document.getElementById('posts-container');
                postContainer.innerHTML = '';
                posts.forEach(post => {
                    const div = document.createElement('div');
                    div.className = 'post-block';
                    div.innerHTML = `
                <p>${post.title}</p>  
                <a href="post-details.html?postId=${post.id}">details post</a>`;
                    postContainer.appendChild(div);
                });
            });
    }
}
/*.....................post-details.....................*/
if (window.location.pathname.includes('post-details.html')) {
    const postId = new URLSearchParams(window.location.search).get('postId');
    if (!postId) {
        alert('No postId found.');
        throw new Error('postId is nuul');
    }
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((value) => value.json())
            .then((post) => {
                const postContainer = document.getElementById('post-info');
                postContainer.innerHTML = `
    <h2>${post.title}</h2>
    <p><i>${post.body}</i></p>`;
            });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())
        .then(comments => {
            const container = document.getElementById('comments-container');
            comments.forEach(comment => {
                const div = document.createElement('div');
                div.className = 'comment-block';
                div.innerHTML = `
        <p><b>name: ${comment.name}</b></p>
        <em><b>email: ${comment.email}</b></em>
        <p>${comment.body}</p>`;
                container.appendChild(div);
            });
        });
}