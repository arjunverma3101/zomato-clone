import dotenv from 'dotenv'
dotenv.config();
import googleOAuth from "passport-google-oauth20";
import passport from "passport";
import { UserModel } from "../database/AllModel.js";

const GoogleStrategy = googleOAuth.Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
},
    async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            fullName: profile.displayName,
            email: profile.emails.at(0).value,
            profilePic: profile.photos.at(0).value
        };
        try {
            // Checking if exists or not
            const user = await UserModel.findOne({ email: newUser.email });
            if (user) {
                // // If Yes
                const token = await user.GenerateJWTToken();
                done(null, user);
            }
            else {
                // If Not
                // Create one
                const nUser = await UserModel.create(newUser);
                const token = await nUser.GenerateJWTToken();
                done(null, nUser );
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));