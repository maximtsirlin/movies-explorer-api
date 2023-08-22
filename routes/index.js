const router = require('express').Router();
const auth = require('../middlewares/auth');
const signinRouter = require('./singin');
const signupRouter = require('./singup');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

router
  .use('/', signinRouter)
  .use('/', signupRouter)
  .use(auth)
  .use('/', usersRouter)
  .use('/', moviesRouter);

module.exports = router;
