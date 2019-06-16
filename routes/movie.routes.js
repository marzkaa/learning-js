const express = require('express')
const movieController = require('.../controllers/movie.controller');
const router = express.Router()

module.exports = function (app) {
    app.post('/api/movie', movieController.addMovie);
    app.delete('/api/movie/:id', movieController.deleteMovie);
    app.patch('/api/movie/:id', movieController.updateMovie);
    app.get('/api/movie', movieController.getMovies);
};

export default router;

