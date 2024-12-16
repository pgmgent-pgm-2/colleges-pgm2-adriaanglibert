const express = require('express');
const postRouter = express.Router();

const { getPosts, createPost } = require('../controllers/postController');

// Dit is 3x hetzelfde, gewoon een andere schrijfwijze.
// postRouter.get('/posts', getPosts);
// postRouter.get('/posts', (req, res) => getPosts(req, res));
postRouter.get('/posts', (req, res) => {
    getPosts(req, res);
});

postRouter.post('/posts', createPost);

postRouter.delete('/posts/1', (req, response) => {
    response.send('We deleten post met ID 1');
});

module.exports = postRouter;