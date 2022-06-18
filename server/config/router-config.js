import JwtPassport from "passport-jwt";
import { UserModel } from "../database/AllModel.js";


const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "zomatoProject"
};

export default (passport) => {
    passport.UserModel(
        new JwtStrategy(options, async (jwt_payload, done) => {
            try {
                const doesUserExist = UserModel.findById(jwt_payload.user);
                if (!doesUserExist) return done(null, false);
                return done(null, doesUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    )
};