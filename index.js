const express = require('express');
const app = express();
const port = 3001;

let movies = require('./data/movies.json');

app.get('/', (req, res) => {
    res.send(movies);
});

app.get('/id/:id', (req, res) => {
    var id = req.params.id;
    var moviesById = movies.find(moviesById => moviesById.id == id);
    if (moviesById === undefined) {
        res.status(404).send('Movie Id ' + id + ' not found.');
        console.log('Movie Id ' + id + ' not found.');
    } else {
        res.send(moviesById);
        console.log(moviesById);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
