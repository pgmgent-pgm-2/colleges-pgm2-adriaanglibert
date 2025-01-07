import { API_URL } from "./main.js";

const currentUrl = window.location.href;
const url = new URL(currentUrl);

console.log(url.searchParams.get('id'));

async function fetchPost(id) {
    const response = await fetch(`${API_URL}/posts/${id}`);
    const post = await response.json();
    console.log(post);
}

fetchPost(url.searchParams.get('id'))