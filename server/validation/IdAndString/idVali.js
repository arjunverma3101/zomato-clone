import Joi from "joi";

export const ValidateId = (Id) => {
    const schema = Joi.string();
    return schema.validate(Id);
}
