import express from "express";

import { UserModel } from "../../database/AllModel.js";
import { ValidateSignUp } from "../../validation/Auth/authVali.js";
import { ValidateId } from "../../validation/IdAndString/idVali.js";

const User = express();

/*
Route       /:_id
Description get user
Params      id
Access      Public
Method      get
*/


User.get("/:_id", async (req, res) => {
    try {
        const { error } = ValidateId(req.params._id);
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        const { _id } = req.params;
        const user = await UserModel.findOne({ _id: _id });
        if (!user) {
            return res.status(404).json({ Message: "No User found!!" });
        }
        return res.status(200).json({ fullName: user.fullName, profilePic: user.profilePic });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /update/:_id
Description update data
Params      id
Access      Public
Method      put
*/


User.put("/update/:_id", async (req, res) => {
    try {
        const { error1 } = ValidateId(req.params);
        if (error1) {
            return res.status(500).json({ message: error1.message });
        }
        const { error2 } = ValidateSignUp(req.body);
        if (error2) {
            return res.status(500).json({ message: error2.message });
        }
        const { _id } = req.params;
        const { details } = req.body;

        const user = await ReviewModel.findByIdAndUpdate(
            {
                _id: _id
            },
            {
                $set: details
            },
            {
                new: true
            }

        );
        if (!user) {
            return res.status(404).json({ Message: "No User found!!" });
        }
        return orders.status(200).json({ user: user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default User;