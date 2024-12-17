const path = require('path');
const fsp = require('fs/promises');

const postPath = path.join(__dirname, '..', 'data', 'posts.json');

async function getDataFromFile() {
    const originalData = await fsp.readFile(postPath, 'utf-8');
    const posts = JSON.parse(originalData);
    return posts;
}

async function getPosts(request, response) {
    try {
        const posts = await getDataFromFile();
        response.json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}

async function createPost(request, response) {
    try {
        const posts = await getDataFromFile();
        posts.push(request.body);
        await fsp.writeFile(postPath, JSON.stringify(posts, null, 2));
        response.json({
            "message": "Er is een nieuwe post toegevoegd"
        });
    } catch (error) {
        response.status(500).json(error);
    }
}

// Zorg dat je een post kan deleten.
// Tip: Posts hebben elk een ID nodig.

module.exports = {
    getPosts,
    createPost
}