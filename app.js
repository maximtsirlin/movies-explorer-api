require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimiter = require('./rateLimiter');
const cors = require('./middlewares/cors');
const { addressMongoDB } = require('./utils/constants');
const routes = require('./routes/index');

const NotFoundError = require('./utils/errors/notFound-error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect(addressMongoDB);

app.use(helmet());
app.use(bodyParser.json());
app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(requestLogger);

app.use(errors());

app.use('/api/some-rate-limited-route', rateLimiter);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routes);

app.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

app.use(errorLogger);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'Произошла ошибка на сервере' : err.message;
  res.status(statusCode).send({
    message,
  });
  next();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started ${PORT}`);
});
