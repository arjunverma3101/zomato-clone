import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true },
        mapLocation: { type: String, required: true },
        contactNumber: { type: Number, required: true },
        timing: { type: String },
        popularDish: [{
            items: { type: mongoose.Types.ObjectId, ref: "food" }
        }],
        menu: { type: mongoose.Types.ObjectId, ref: "menu" },
        photos: { type: mongoose.Types.ObjectId, ref: "image" }
    },
    {
        timestamps: true,
    }
);

export const RestaurantModel = new mongoose.model("restaurant", restaurantSchema);