const jwt = require('jsonwebtoken');
const AuthorisationError = require('../utils/errors/unauthorized-error');
const { secretKey } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) {
    return next(new AuthorisationError('Необходима авторизация'));
  }
  const token = authorization.replace(/^Bearer\s+/, '');
  try {
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    return next();
  } catch (err) {
    return next(new AuthorisationError('Неверная авторизация'));
  }
};
