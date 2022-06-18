import dotenv from 'dotenv'
dotenv.config();
import exp from "express";

import cookieSession from 'cookie-session';
import passport from "passport";
import cors from "cors";
import helmet from "helmet";

import ConnectDB from "./database/connection.js";

import "./config/googleConfig.js";

import Auth from "./Api/Auth/authIndex.js";
import Food from './Api/Food/foodIndex.js';
import Image from './Api/Image/imageIndex.js';
import Menu from './Api/Menu/menuIndex.js';
import Order from './Api/Order/orderIndex.js';
import Restuarant from './Api/Restuarant/restuarantIndex.js';
import Review from './Api/Review/reviewIndex.js';
import User from './Api/User/userIndex.js';

const zomato = exp();


zomato.use(exp.json());
zomato.use(exp.urlencoded({ extended: false }));


zomato.use(cookieSession(
    {
        name: "session",
        keys: ["Zomato"],
        maxAge: 24 * 60 * 60 * 100
    }
));

zomato.use(passport.initialize());
zomato.use(passport.session());
zomato.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

zomato.use(helmet());




zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/restuarant", Restuarant);
zomato.use("/review", Review);
zomato.use("/user", User);


zomato.get("/", (req, res) => {
    res.json({ message: "Welcome to Anime World!!!!!!!!" });
});


zomato.listen("5000", () => {
    ConnectDB().then(() => console.log("Server is up and running")).catch(() => console.log("Connection fails!!!"))
});