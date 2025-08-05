
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
        <p><b>id:</b> ${user.id}</p>
        <p><b>name:</b> ${user.name}</p>
        <p><b>username:</b> ${user.username}</p>
        <p><b>email:</b> ${user.email}</p>

        <div id="address">
          <h3>Address</h3>
          <p><b>street:</b> ${user.address?.street}</p>
          <p><b>suite:</b> ${user.address?.suite}</p>
          <p><b>city:</b> ${user.address?.city}</p>
          <p><b>zipcode:</b> ${user.address?.zipcode}</p>
          <p><b>geo.lat:</b> ${user.address?.geo?.lat}</p>
          <p><b>geo.lng:</b> ${user.address?.geo?.lng}</p>
        </div>

        <p><b>phone:</b> ${user.phone}</p>
        <p><b>website:</b> <a href="http://${user.website}" target="_blank">${user.website}</a></p>

        <div>
          <h3>Company</h3>
          <p><b>name:</b> ${user.company?.name}</p>
          <p><b>catchPhrase:</b> ${user.company?.catchPhrase}</p>
          <p><b>bs:</b> ${user.company?.bs}</p>
        </div>
        `;
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