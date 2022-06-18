import express from "express";

import { ReviewModel } from "../../database/AllModel.js";
import { ValidateId } from "../../validation/IdAndString/idVali.js";
import { ValidateReview } from "../../validation/Review/reviewVali.js";

const Review = express();
/*
Route       /new
Description add a new review
Params      none
Access      Public
Method      post
*/


Review.post("/new", async (req, res) => {
    try {
        const { error } = ValidateReview(req.body);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { details } = req.body;
        const newReview = await ReviewModel.create(details);
        return orders.status(200).json({ review: newReview });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /delete/:_id
Description delete a review
Params      id
Access      Public
Method      delete
*/


Review.delete("/delete/:_id", async (req, res) => {
    try {
        const { error } = ValidateId(req.params);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete({ _id: _id });

        return orders.status(200).json({ success: "done" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Review;