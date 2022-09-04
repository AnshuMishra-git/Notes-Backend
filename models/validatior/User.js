const joi = require('joi');
exports.create = joi.object({
    email: joi.string().required(),
    familyName: joi.string().required(),
    givenName: joi.string().required(),
    googleId: joi.string().required(),
    imageUrl: joi.string().optional(),
    name: joi.string().required(),
});
