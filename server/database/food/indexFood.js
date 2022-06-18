import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        isVeg: { type: Boolean, required: true },
        category: { type: String, required: true },
        photos: { type: mongoose.Types.ObjectId, ref: "image" },
        price: { type: Number, required: true },
        addOns: [{
            type: mongoose.Types.ObjectId, ref: "food"
        }],
        restaurants: [{
            type: mongoose.Types.ObjectId, ref: "restaurant"
        }]
    },
    {
        timestamps: true,
    }
);

export const FoodModel = new mongoose.model("food", foodSchema);