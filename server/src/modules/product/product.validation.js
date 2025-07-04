const Joi = require('joi');

exports.createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  quantity: Joi.number().min(0).required(),
  categoryIds: Joi.array().items(Joi.number().integer()).min(1).required(),
});
