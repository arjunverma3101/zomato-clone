import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        images: [{
            url: { type: String, required: true }
        }]
    },
    {
        timestamps: true,
    }
);

export const ImageModel = new mongoose.model("image", imageSchema);