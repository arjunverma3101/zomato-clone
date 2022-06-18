import Joi from "joi";

export const ValidateReview = (data) => {
    const schema = Joi.object({
        user: Joi.string().min(1).required(),
        food: Joi.string().min(1).required(),
        restaurant: Joi.string().min(1).required(),
        rating: Joi.number().min(0).max(5).required(),
        photos: Joi.string().min(1).required(),
        review: Joi.string().min(1).required()
    });
    return schema.validate(data);
}
