async function getPosts() {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    showPosts(data);
}

function showPosts(posts) {
    const $list = document.getElementById('news');

    $list.innerHTML = posts.map(post => `<li>
            <article>
                <strong>${post.title}</strong>
                <p>${post.description}</p>
            </article>
        </li>`).join('');
}

getPosts();