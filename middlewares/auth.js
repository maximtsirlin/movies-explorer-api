const jwt = require('jsonwebtoken');
const AuthorisationError = require('../utils/errors/unauthorized-error');
const { secretKey } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new AuthorisationError('AuthorisationError'));
    return;
  }
  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, secretKey);
  } catch (err) {
    next(new AuthorisationError('AuthorisationError'));
    return;
  }
  req.user = payload;
  next();
};
