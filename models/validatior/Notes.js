const joi = require('joi');


exports.create = joi.object({
  title: joi.string().required(),
  body: joi.string().required(),
  userId: joi.string().required(),
});


exports.mynote=  joi.object({
  page: joi.number().required(),
  userId: joi.string().required(),
});
