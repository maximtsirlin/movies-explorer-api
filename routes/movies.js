const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const {
  validateMovieSchema,
  validateMovieIdParam,
} = require('../utils/validators/movieValidator'); // Import the validation module

router.get('/movies', getMovies);

router.post('/movies', validateMovieSchema, createMovie);

router.delete('/movies/:_id', validateMovieIdParam, deleteMovie);

module.exports = router;
