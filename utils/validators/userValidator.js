const { celebrate, Joi, Segments } = require('celebrate');

const updateUserSchema = Joi.object({
  name: Joi.string().required().min(2).max(30),
  email: Joi.string().email().required(),
});

const validateUpdateUser = celebrate({
  [Segments.BODY]: updateUserSchema,
});

module.exports = {
  validateUpdateUser,
};
