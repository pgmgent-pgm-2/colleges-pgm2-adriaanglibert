const express = require('express');
const postRouter = express.Router();

const { getPosts, getPost, createPost, deletePost } = require('../controllers/postController');
const checkAuthenticated = require('../middleware/authentication');
const { logParams } = require('../middleware/logging');

// Dit is 3x hetzelfde, gewoon een andere schrijfwijze.
// postRouter.get('/posts', getPosts);
// postRouter.get('/posts', (req, res) => getPosts(req, res));
postRouter.get('/posts', logParams, (req, res) => {
    getPosts(req, res);
});

postRouter.get('/posts/:postId', logParams, getPost)

postRouter.post('/posts', logParams, createPost);

postRouter.delete('/posts/:id', logParams, checkAuthenticated, deletePost);

module.exports = postRouter;