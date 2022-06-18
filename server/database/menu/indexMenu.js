import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
    {
        restaurant: { type: mongoose.Types.ObjectId, ref: "restaurant" },
        photos: { type: mongoose.Types.ObjectId, ref: "image" },
        menus: [{
            name: { type: String, required: true },
            items: [{ type: mongoose.Types.ObjectId, ref: "food" }],
        }],
        recommended: [{
            type: mongoose.Types.ObjectId,
            ref: "food",
            unique: true
        }]
    },
    {
        timestamps: true,
    }
);
export const MenuModel = new mongoose.model("menu", menuSchema);