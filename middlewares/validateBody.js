const { HttpError } = require("../helpers");
// const schemas = require("../models/contact");
// const Joi = require("Joi");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    console.log(req.body);
    const { error } = schema.validate(req.body);
    console.log(error);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
