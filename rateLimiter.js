const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Слишком много запросов с этого IP-адреса. Повторите попытку позже.',
});

module.exports = limiter;
