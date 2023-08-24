const router = require('express').Router();
const auth = require('../middlewares/auth');
const enterRoute = require('./sing');

const usersRouter = require('./users');
const moviesRouter = require('./movies');

router
  .use('/', enterRoute)
  .use(auth)
  .use('/', usersRouter)
  .use('/', moviesRouter);

module.exports = router;
