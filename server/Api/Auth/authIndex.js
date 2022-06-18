import exp from "express";
const Auth = exp();

import { UserModel } from "../../database/AllModel.js";
import { ValidateSignUp, ValidateLogIn } from "../../validation/Auth/authVali.js";

import passport from "passport";


/*
Route       /signup
Description Signup with email and phoneNumber
Params      None
Access      Public
Method      Post
*/


Auth.post("/signup", async (req, res) => {
    try {
        const { error } = ValidateSignUp(req.body.credentials);
        if (error) {
            return res.status(200).json({ isError: error.message });
        }

        const UserExits = await UserModel.searchAccountByEmailAndPhoneNumber(req.body.credentials);

        if (UserExits) {
            return res.status(200).json({ isError: "User Exists" });
        }
        const newUser = await UserModel.create(req.body.credentials);

        const jwtToken = await newUser.GenerateJWTToken();

        return res.status(200).json({ jwtToken, isError: false });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


/*
Route       /login
Description login with email and password
Params      None
Access      Public
Method      POST
*/


Auth.post("/login", async (req, res) => {
    try {
        const { error } = ValidateLogIn(req.body.credentials);
        if (error) {
            return res.status(200).json({ isError: error.message });
        }
        const user = await UserModel.searchAccountByEmailAndPassword(req.body.credentials);
        if (user.error) {
            return res.status(200).json({ isError: user.error });
        }

        const jwtToken = await user.user__.GenerateJWTToken();

        return res.status(200).json({ jwtToken });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


/*
Route       /google
Description Signup with google
Params      None
Access      Public
Method      get
*/

const CLINT_HOME_PAGE = "http://localhost:3000/";

Auth.get("/login/success", (req, res) => {
    if (req.user) {
        return res.status(200).json(req.user);
    }
    return res.status(404).json({ error: "Not Found" });
})

Auth.get("/login/failed", (req, res) => {
    return res.status(401).json({ message: "Login Failed!!!!!!!" });
})

Auth.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLINT_HOME_PAGE);
})

Auth.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));
Auth.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLINT_HOME_PAGE,
    failureRedirect: "/login/failed"
}));



export default Auth;