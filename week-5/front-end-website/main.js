import { initForm } from "./create.js";

export const API_URL = "http://localhost:3000";

export async function getPosts() {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    showPosts(data);
}

async function deletePost(id) {
    await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE'
    });

    getPosts();
}

function addListenerToButtons($buttons) {
    $buttons.forEach($button => {
        $button.addEventListener('click', () => {
            deletePost($button.getAttribute('data-uuid'));
        });
    });
}

function showPosts(posts) {
    const $list = document.getElementById('news');

    $list.innerHTML = posts.map(post => `<article>
                <strong>${post.title}</strong>
                <p>${post.description}</p>
                <button data-uuid='${post.id}'>Delete</button>
            </article>`).join('');

    const $buttons = document.querySelectorAll('button[data-uuid]');
    addListenerToButtons($buttons);
}

getPosts();
initForm();