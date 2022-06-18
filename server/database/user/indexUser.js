import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";



const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        profilePic: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: Number },
        address: [{
            for: { type: String, required: true },
            add: { type: String, required: true }
        }],
        password: { type: String },
    },
    {
        timestamps: true,
    }
);


userSchema.statics.searchAccountByEmailAndPhoneNumber = async ({ email, phoneNumber }) => {

    const foundPhoneNumber = await UserModel.findOne({ phoneNumber });
    const foundEmail = await UserModel.findOne({ email });

    if ((foundEmail || foundPhoneNumber)) {
        return true;
    }

    return false;
};


userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    bcryptjs.genSalt(9, (error, salt) => {
        if (error) {
            return next(error);
        }

        bcryptjs.hash(user.password, salt, (error, hash) => {
            if (error) {
                return next(error);
            }
            user.password = hash;
            return next();
        })
    });
});


userSchema.methods.GenerateJWTToken = function () {
    return jwt.sign({ user: this._id.toString() }, "zomatoProject")
}



userSchema.statics.searchAccountByEmailAndPassword = async ({ email, password }) => {

    const foundUser = await UserModel.findOne({ email });

    if (!foundUser) {
        return { error: "User deosn't Exists" };
    }

    const isPassword = await bcryptjs.compare(password, foundUser.password);

    if (!isPassword) {
        return { error: "Incorrect Password!" };
    }

    return { error: false, user__:foundUser };
};


export const UserModel = new mongoose.model("user", userSchema);