import express from "express";

import { MenuModel } from "../../database/AllModel.js";


import { ValidateId } from "../../validation/IdAndString/idVali.js";
const Menu = express();
/*
Route       /:_id
Description get all menu of a restuarant
Params      id
Access      Public
Method      get
*/


Menu.get("/:_id", async (req, res) => {
    try {

        const { error } = ValidateId(req.params);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { _id } = req.params;

        const menu = await MenuModel.findOne({ restaurant: _id });

        if (!menu) {
            return res.status(404).json({ Message: "No menu found!!" });
        }

        return res.status(200).json({ menu: menu });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




export default Menu;