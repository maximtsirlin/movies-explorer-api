const { celebrate, Joi, Segments } = require('celebrate');

const linkSchema = Joi.string()
  .required()
  .pattern(
    /^(https?:\/\/(www\.)?([a-zA-z0-9-]{1}[a-zA-z0-9-]*\.?)*\.{1}([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:?#[]@!\$&'\(\)\*\+,;=])*)/,
  );

const movieSchema = Joi.object({
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

const validateMovieSchema = celebrate({
  [Segments.BODY]: movieSchema,
});

const validateMovieIdParam = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validateMovieSchema,
  validateMovieIdParam,
};
