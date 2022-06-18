import express from "express";

import { OrderModel } from "../../database/AllModel.js";
import { ValidateId } from "../../validation/IdAndString/idVali.js";

const Order = express();
/*
Route       /:_id
Description get all orders of given id
Params      id
Access      Public
Method      get
*/


Order.get("/:_id", async (req, res) => {
    try {

        const { error } = ValidateId(req.params);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { _id } = req.params;

        const orders = await OrderModel.find({ user: _id });

        if (!orders) {
            return res.status(404).json({ Message: "No order found!!" });
        }

        return orders.status(200).json({ menu: menu });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /add/:_id
Description add a new order
Params      id
Access      Public
Method      post
*/

Order.post("/add/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { details } = req.body;
        const newOrder = await UserModel.create({ user: _id }, { orderDetails: details });
        return res.status(200).json({ order: newOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Order;