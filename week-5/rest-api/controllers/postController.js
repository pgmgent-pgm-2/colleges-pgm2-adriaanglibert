const path = require('path');
const fs = require('fs');

const postPath = path.join(__dirname, '..', 'data', 'posts.json');

function getDataFromDatabase(callback) {
    fs.readFile(postPath, { encoding: 'utf-8' }, (err, data) => {
        response.json(JSON.parse(data));
    });
}

function getPosts(request, response) {
    fs.readFile(postPath, { encoding: 'utf-8' }, (err, data) => {
        response.json(JSON.parse(data));
    });

    // getDataFromDatabase()
}

function createPost(request, response) {
    console.log(request.body);

    fs.readFile(postPath, { encoding: 'utf-8' }, (err, data) => {
        const posts = JSON.parse(data);
        posts.push(request.body);

        fs.writeFile(postPath, JSON.stringify(posts, null, 2), (err) => {
            if (err) {
                console.error(err);
                response.status(500).json({ error: 'Failed to save post' });
                return;
            }
        });
    });

    response.json({
        "message": "Er is een nieuwe post toegevoegd"
    })
}

module.exports = {
    getPosts,
    createPost
}