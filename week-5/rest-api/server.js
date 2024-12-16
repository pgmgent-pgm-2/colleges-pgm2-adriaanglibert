const express = require('express');
const bodyParser = require('body-parser');
const postRouter = require('./routes/postRoutes.js');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(postRouter);

app.listen(PORT, () => {
    console.log(`Onze server is aan het luisteren: op http://localhost:${PORT}`);
});
