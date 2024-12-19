const express = require('express');
const app = express();
const port = 3001;

let movies = require('./data/movies.json');

app.get('/', (req, res) => {
    res.send(movies);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
