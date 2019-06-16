import Movie from '../models/movie-model';
import cuid from 'cuid';

export function addMovie(req, res) {
    if (!req.body.movie.title || !req.body.movie.director || !req.body.movie.genre || !req.body.movie.year) {
      res.status(403).end();
    }
  
    const newMovie = new Movie(req.body.movie);
  

    newMovie.title = sanitizeHtml(newMovie.title);
    newMovie.title = sanitizeHtml(newMovie.director);
    newMovie.genre = sanitizeHtml(newMovie.genre);
    newMovie.year = sanitizeHtml(newMovie.year);
    newMovie.cuid = cuid();
    newMovie.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ movie: saved });
    });
  }

export function getMovies(req, res) {
    Movie.find().sort('-dateAdded').exec((err, movies) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ movies });
    });
  }

export function deleteMovie(req, res) {
    Movie.findOne({ cuid: req.params.cuid }).exec((err, movie) => {
      if (err) {
        res.status(500).send(err);
      }
  
      movie.remove(() => {
        res.status(200).end();
      });
    });
  }

export function editPost(req, res) {
    Movie.update({ cuid: req.params.cuid }, req.body.movie).exec((err, movie) => {
          if (err) {
            res.status(500).send(err);
          }
          res.json({ movie });
        });
      }

module.exports = {
    addMovie,
    deleteMovie,
    updateMovie,
    getMovies
}