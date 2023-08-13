const jwt = require('jsonwebtoken');
const AuthorisationError = require('../errors/unauthorized-error');
const { secretKey } = require('../utils/constants');


module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // const { JWT_SECRET = 'some-secret-key' } = process.env;

  if (!authorization || !authorization.startsWith('Bearer')) {
    return next(new AuthorisationError('Необходима авторизация'));
  }
  const token = authorization.replace(/^\S+/, '').trim();

  let payload;

  try {
    payload = jwt.verify(token, secretKey);
  } catch (err) {
    throw new AuthorisationError('Необходима авторизация');
  }

  req.user = payload; 

  return next();
};