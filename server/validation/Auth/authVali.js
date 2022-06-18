import Joi from "joi";

export const ValidateSignUp = (userData) => {
    const schema = Joi.object({
        fullName: Joi.string().min(5).required(),
        profilePic: Joi.string().required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.number().integer().positive().min(1000000000).max(9999999999),
        address: Joi.array().items(Joi.object({
            for: Joi.string().min(4),
            add: Joi.string().min(4)
        })),
        password: Joi.string().min(8),
    });
    return schema.validate(userData);
}


export const ValidateLogIn = (userData) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });
    return schema.validate(userData);
}