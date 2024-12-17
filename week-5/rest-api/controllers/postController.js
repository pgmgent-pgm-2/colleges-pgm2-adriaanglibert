const path = require('path');
const fsp = require('fs/promises');

const postPath = path.join(__dirname, '..', 'data', 'posts.json');

async function getPosts(request, response) {
    const data = await fsp.readFile(postPath, 'utf-8');
    const posts = JSON.parse(data);
    response.json(posts);
}

async function createPost(request, response) {
    const originalData = await fsp.readFile(postPath, 'utf-8');
    const posts = JSON.parse(originalData);
    posts.push(request.body);
    await fsp.writeFile(postPath, JSON.stringify(posts, null, 2));
    response.json({
        "message": "Er is een nieuwe post toegevoegd"
    });
}

module.exports = {
    getPosts,
    createPost
}