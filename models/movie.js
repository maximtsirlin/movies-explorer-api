const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    required: true,
    type: String,
  },
  director: {
    required: true,
    type: String,
  },
  duration: {
    required: true,
    type: Number,
  },
  year: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    type: String,
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: 'Введена некорректная ссылка',
    },
    required: [true, 'Введите ссылку на постер к фильму'],
  },
  trailerLink: {
    type: String,
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: 'Введена некорректная ссылка',
    },
    required: [true, 'Введите ссылку на трейлер фильма'],
  },
  thumbnail: {
    type: String,
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: 'Введена некорректная ссылка',
    },
    required: [true, 'Введите ссылку на миниатюрное изображение постера к фильму'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    required: true,
    type: String,
  },
  nameEN: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('movie', movieSchema);
