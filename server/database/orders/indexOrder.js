import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: "user" },
        orderDetails: {
            item: { type: mongoose.Types.ObjectId, ref: "food" },
            quantity: { type: Number, required: true },
            payMode: { type: String, required: true },
            status: { type: String, default: "Placed" },
            paymentDetails: {
                itemsTotal: { type: Number, default: 0 },
                tax: { type: Number, required: true },
                promo: { type: Number, required: true }
            }
        },
        orderRating: { type: Number, default: 5 }
    },
    {
        timestamps: true,
    }
);
export const OrderModel = new mongoose.model("order", orderSchema);