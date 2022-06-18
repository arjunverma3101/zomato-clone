import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { storage } from "../components/FireBassConfig/Index.js";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from "uuid";


function SignUpLogIn(props) {
    const [onOffDetails, setOnOffDetails] = useState({
        signUpOnLogINOff: true,
        errorAuth: false
    })
    const [userDetails, setUserDetails] = useState({
        __fullName: "",
        __email: "",
        __phoneNumber: "",
        __password: "",
    });
    const [__profilePic, setProfilePic] = useState(null);

    function SetSignIn() {
        setUserDetails({
            __fullName: "",
            __email: "",
            __phoneNumber: "",
            __password: "",
        })
        setOnOffDetails({
            signUpOnLogINOff: true,
            errorAuth: false
        });
    }
    function UnSetSignIn() {
        setUserDetails({
            __fullName: "",
            __email: "",
            __phoneNumber: "",
            __password: "",
        })
        setOnOffDetails({
            signUpOnLogINOff: false,
            errorAuth: false
        });
    }
    function handleInputs(e) {
        setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
    }

    const [url___, setURL___] = useState(null);

    async function SignUp(e) {
        e.preventDefault();
        const name_image = v4();
        const ImageRef = ref(storage, `userProfilePic/${name_image}`);
        const uploadTask = uploadBytesResumable(ImageRef, __profilePic);
        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setURL___(downloadURL);
                });
            }
        );
        const DataUser = {
            fullName: userDetails.__fullName,
            email: userDetails.__email,
            phoneNumber: userDetails.__phoneNumber,
            password: userDetails.__password,
            profilePic: url___,
        }
        try {
            const data__ = await axios.post("http://localhost:5000/auth/signup", { credentials: DataUser });
            if (data__.data.isError) {
                const desertRef = ref(storage, `userProfilePic${name_image}`);
                deleteObject(desertRef).then(() => {
                }).catch((error) => {
                });
                setOnOffDetails({ ...onOffDetails, errorAuth: data__.data.isError });
            }
            else {
                localStorage.setItem("Logged-User-JWTTOKEN", data__.data.jwtToken);
                setOnOffDetails({ ...onOffDetails, errorAuth: false });
                window.open("http://localhost:3000/", "_self");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function __LogIn(e) {
        e.preventDefault();
        const DataUser = {
            email: userDetails.__email,
            password: userDetails.__password,
        }
        try {
            const data__ = await axios.post("http://localhost:5000/auth/login", { credentials: DataUser });
            if (data__.data.isError) {
                setOnOffDetails({ ...onOffDetails, errorAuth: data__.data.isError });
            }
            else {
                localStorage.setItem("Logged-User-JWTTOKEN", data__.data.jwtToken);
                setOnOffDetails({ ...onOffDetails, errorAuth: false });
                window.open("http://localhost:3000/", "_self");
            }

        } catch (error) {
            console.log(error);
        }
    }

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }
    return (
        <>
            <div className={`flex ${onOffDetails.signUpOnLogINOff ? "md:flex-row-reverse flex-col-reverse" : "md:flex-row flex-col"} md:gap-0 gap-10 h-[100vh]`}>
                <div className="md:w-1/2 md:h-[100vh] w-full h-[30vh] bg-black flex flex-col justify-center items-center gap-4">
                    <button type="button" onClick={SetSignIn}
                        className={`w-[70%] inline-flex justify-center rounded-md  px-4 py-2  font-medium ${onOffDetails.signUpOnLogINOff ? "hidden" : "bg-white text-green-700"} `}>
                        Sign Up
                    </button>
                    <button type="button" onClick={UnSetSignIn}
                        className={`w-[70%] inline-flex justify-center rounded-md  px-4 py-2  font-medium ${onOffDetails.signUpOnLogINOff ? "bg-white text-green-700" : "hidden"} `}>
                        Log In
                    </button>
                    <Link to="/" className="w-[70%]">
                        <img className="w-full" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato"/>
                    </Link>
                </div>
                <div className="md:w-[45%] md:h-[100vh] w-[90%] flex flex-col justify-center gap-6 m-auto">
                    <button type="button" onClick={SetSignIn}
                        className={`w-full inline-flex justify-center rounded-md  px-4 py-2  bg-[#004d00] text-white font-semibold ${onOffDetails.signUpOnLogINOff ? "" : "hidden"}`}>
                        Sign Up
                    </button>
                    <button type="button" onClick={UnSetSignIn}
                        className={`w-full inline-flex justify-center rounded-md  px-4 py-2  bg-[#004d00] text-white font-semibold ${onOffDetails.signUpOnLogINOff ? "hidden" : ""}`}>
                        Log In
                    </button>
                    <form className="flex flex-col gap-4" onSubmit={onOffDetails.signUpOnLogINOff ? SignUp : __LogIn}>
                        <div >
                            <div className={`flex flex-col gap-1 border-2 py-3 rounded-full border-gray-500 my-4`}>
                                <button type="button" className="flex gap-4 justify-center items-center font-bold text-xl" onClick={google}>
                                    <img className="w-8" src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="zomato"/>
                                    Continue with Google
                                </button>
                            </div>
                            <div className={`flex flex-col gap-1 ${onOffDetails.signUpOnLogINOff ? "" : "hidden"}`}>
                                <label for="__fullName" className="text-lg text-black font-bold">Full Name</label>
                                <input type="text" className="px-4 py-2 outline-green-900 italic " id="__fullName" placeholder="Full Name" required={onOffDetails.signUpOnLogINOff} value={userDetails.__fullName} onChange={handleInputs} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label for="__email" className="text-lg text-black font-bold">Email address</label>
                                <input type="email" className="px-4 py-2 outline-green-900 italic" id="__email" placeholder="Email" required={true} value={userDetails.__email} onChange={handleInputs} />
                            </div>
                            <div className={`flex flex-col gap-1 ${onOffDetails.signUpOnLogINOff ? "" : "hidden"}`}>
                                <label for="__phoneNumber" className="text-lg text-black font-bold">Phone Number</label>
                                <input type="tel" pattern="[7-9]{1}[0-9]{9}" className="px-4 py-2 outline-green-900 italic" id="__phoneNumber" placeholder="Phone Number" required={onOffDetails.signUpOnLogINOff} value={userDetails.__phoneNumber} onChange={handleInputs} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label for="__password" className="text-lg text-black font-bold">Password</label>
                                <input type="password" className="px-4 py-2 outline-green-900 italic" id="__password" placeholder="Password" required={true} value={userDetails.__password} onChange={handleInputs} />
                            </div>
                            <div className={`flex flex-col gap-1 ${onOffDetails.signUpOnLogINOff ? "" : "hidden"}`}>
                                <label for="__profilePic" className="text-lg text-black font-bold">Profile Pic</label>
                                <input type="file" className="px-4 py-2 outline-green-900 italic" id="__profilePic" required={onOffDetails.signUpOnLogINOff} onChange={(e) => { setProfilePic(e.target.files[0]) }} />
                            </div>
                        </div>
                        <div className={`${onOffDetails.errorAuth ? "" : "hidden"} w-full text-center rounded-md px-4 py-2 font-medium bg-red-900 text-white ring-2 ring-white`}>
                            {
                                onOffDetails.errorAuth
                            }
                        </div>
                        <div className="">
                            <button type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 font-medium bg-green-100 text-green-900 hover:bg-green-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all ">
                                {
                                    onOffDetails.signUpOnLogINOff ? "Sign Up" : "Log In"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default SignUpLogIn;