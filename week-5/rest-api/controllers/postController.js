const path = require('path');
const fsp = require('fs/promises');

const { generateID } = require('../helpers/utils');

const postPath = path.join(__dirname, '..', 'data', 'posts.json');

async function getDataFromFile() {
    const originalData = await fsp.readFile(postPath, 'utf-8');
    const posts = JSON.parse(originalData);
    return posts;
}

async function writeDataToFile(data) {
    await fsp.writeFile(postPath, JSON.stringify(data, null, 2));
}

async function getPosts(request, response) {
    try {
        const posts = await getDataFromFile();
        response.json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}

async function getPost(request, response) {
    try {
        const posts = await getDataFromFile();
        const { postId } = request.params;
        const post = posts.find(post => post.id === postId);
        if (post) {
            response.json(post);
        } else {
            throw new Error('Er is geen post gevonden met deze ID.');
        }
    } catch (error) {
        response.status(500).json(error.message)
    }
}

async function createPost(request, response) {
    try {
        const posts = await getDataFromFile();

        posts.push({
            id: generateID(),
            ...request.body
        });

        await writeDataToFile(posts);
        response.json({
            "message": "Er is een nieuwe post toegevoegd"
        });
    } catch (error) {
        response.status(500).json(error);
    }
}

async function deletePost(request, response) {
    const { id } = request.params;
    const posts = await getDataFromFile();
    const updatedPosts = posts.filter(post => post.id !== id);
    await writeDataToFile(updatedPosts);
    response.json({
        "message": `We hebben post met id ${id} verwijderd.`
    });
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost
}