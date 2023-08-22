const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

// Определение общей схемы для ссылок
const linkSchema = Joi.string()
  .required()
  .pattern(
    /^(https?:\/\/(www\.)?([a-zA-z0-9-]{1}[a-zA-z0-9-]*\.?)*\.{1}([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:?#[]@!\$&'\(\)\*\+,;=])*)/,
  );

// Определение общей схемы для карточки фильма
const movieSchema = Joi.object().keys({
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  description: Joi.string().required(),
  year: Joi.string().required(),
  image: linkSchema,
  trailerLink: linkSchema,
  thumbnail: linkSchema,
  movieId: Joi.number().required(),
  nameRU: Joi.string().required(),
  nameEN: Joi.string().required(),
});

router.get('/movies', getMovies);

router.post('/movies', celebrate({ body: movieSchema }), createMovie);

router.delete(
  '/movies/:_id',
  celebrate({ params: Joi.object().keys({ _id: Joi.string().required().hex().length(24) }) }),
  deleteMovie,
);

module.exports = router;
