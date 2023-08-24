const Movie = require('../models/movie');
const ValidError = require('../utils/errors/validation-error');
const NotFoundError = require('../utils/errors/notFound-error');
const ForbiddenError = require('../utils/errors/forbidden-error');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const owner = req.user._id;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidError('Введены некорректные данные'));
      }
      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм отсутствует');
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Это чужой фильм, его нельзя удалить');
      } else {
        return movie.deleteOne()
          .then(() => res.send({
            message: 'Фильм удален',
          }));
      }
    }).catch(next);
};
