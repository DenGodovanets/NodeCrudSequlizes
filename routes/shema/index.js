const Joi = require('joi');

const idSchema = Joi.object({
    id: Joi.number()
});

const bookSchema = Joi.object({
    name: Joi.string().required(),
    year: Joi.number().required(),
    shortDescription: Joi.string().required(),
    authors: Joi.array().required()
});

const authorSchema = Joi.object({
    name: Joi.string().required()
  });



  module.exports = {
    idSchema,
    authorSchema,
    bookSchema
  };  