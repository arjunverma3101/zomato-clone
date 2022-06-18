import express from "express";

import { FoodModel } from "../../database/AllModel.js";
import { ValidateString } from "../../validation/IdAndString/stringVali.js";
import { ValidateId } from "../../validation/IdAndString/idVali.js";

const Food = express();

/*
Route       /:_id
Description get all food from a restuarant
Params      id
Access      Public
Method      get
*/


Food.get("/:_id", async (req, res) => {
    try {

        const { error } = ValidateId(req.params);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { _id } = req.params;

        const foods = await FoodModel.filter((food) => {
            food.restaurants.includes({ _id: _id })
        });

        if (!foods) {
            return res.status(404).json({ Message: "No Food found!!" });
        }

        return res.status(200).json({ foods: foods });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/*
Route       /category/:cate
Description get all food of given category
Params      cate
Access      Public
Method      get
*/


Food.get("/category/:cate", async (req, res) => {
    try {
        const { error } = ValidateString(req.params);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { cate } = req.params;

        const foods = await FoodModel.find({
            category: { $regex: cate, $options: "i" }
        });

        if (!foods) {
            return res.status(404).json({ Message: "No Food found!!" });
        }

        return res.status(200).json({ foods: foods });


    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




/*
Route       /search
Description get a food from search string
Params      id
Body        searchString
Access      Public
Method      get
*/




Food.get("/search", async (req, res) => {
    try {
        const { error } = ValidateString(req.body);
        if (error) {
            return res.status(500).json({ message: error.message });
        }

        const { searchString } = req.body;
        const foods = await FoodModel.find({
            name: { $regex: searchString, $options: "i" }
        });

        if (!foods) {
            return res.status(404).json({ Message: "No Food found!!" });
        }

        return res.status(200).json({ foods: foods });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Food;