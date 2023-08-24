const router = require('express').Router();
const { getUserInfo, updateUser } = require('../controllers/users');
const { validateUpdateUser } = require('../utils/validators/userValidator');

router.get('/users/me', getUserInfo);
router.patch('/users/me', validateUpdateUser, updateUser);

module.exports = router;
