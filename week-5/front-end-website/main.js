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

    if ($list) {
        $list.innerHTML = posts.map(post => `<a href='/detail.html?id=${post.id}'><article>
                    <strong>${post.title}</strong>
                    <button data-uuid='${post.id}'>Delete</button>
                </article></a>`).join('');

        const $buttons = document.querySelectorAll('button[data-uuid]');
        addListenerToButtons($buttons);
    }
}

getPosts();
initForm();