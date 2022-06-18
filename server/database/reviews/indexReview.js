import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: "user" },
        food: { type: mongoose.Types.ObjectId, ref: "food" },
        restaurant: { type: mongoose.Types.ObjectId, ref: "restaurant" },
        rating: { type: Number, default: 5 },
        review: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

export const ReviewModel = new mongoose.model("review", reviewSchema);