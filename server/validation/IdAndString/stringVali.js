import Joi from "joi";

export const ValidateString = (string) => {
    const schema = Joi.string().min(1);
    return schema.validate(string);
}
