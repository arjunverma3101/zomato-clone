import express from "express";

const Restuarant = express();

import { RestaurantModel } from "../../database/AllModel.js"
import { ValidateId } from "../../validation/IdAndString/idVali.js";
import { ValidateString } from "../../validation/IdAndString/stringVali.js";

/*
Route       /
Description get all restaurants in a city
Params      None
Access      Public
Method      get
*/

Restuarant.get("/", async (req, res) => {
    try {
        const { error } = ValidateString(req.query);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city: city });

        if (!restaurants) {
            return res.status(404).json({ Message: "No Restaurant found!!" });
        }

        return res.status(200).json({ restaurants: restaurants });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route       /:_id
Description get a restaurants from id
Params      id
Access      Public
Method      get
*/


Restuarant.get("/:_id", async (req, res) => {
    try {
        const { error } = ValidateId(req.params);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { _id } = req.params;
        const restaurants = await RestaurantModel.find({ _id: _id });

        if (!restaurants) {
            return res.status(404).json({ Message: "No Restaurant found!!" });
        }

        return res.status(200).json({ restaurants: restaurants });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route       /search
Description get a restaurants from search string
Params      id
Body        searchString
Access      Public
Method      get
*/


Restuarant.get("/search", async (req, res) => {
    try {
        const { error } = ValidateString(req.body);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { searchString } = req.body;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" }
        });

        if (!restaurants) {
            return res.status(404).json({ Message: "No Restaurant found!!" });
        }

        return res.status(200).json({ restaurants: restaurants });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Restuarant;