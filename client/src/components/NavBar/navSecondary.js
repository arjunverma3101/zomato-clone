import React from "react";
import { Link } from "react-router-dom";

import Profile from "./profilePicAndName";

import { AiOutlineLine } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { GiLightningSlashes } from "react-icons/gi"


function NavSecondMdLg(props) {
    return (
        <>
            <div className="hidden md:flex lg:w-4/5 w-full m-auto py-4 md:px-10 items-center">
                <div className="flex items-center lg:gap-8 md:gap-4 lg:w-4/5 md:w-5/6">
                    <div className="w-1/6">
                        <Link to="/">
                            <img className="w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="img"/>
                        </Link>
                    </div>
                    <div className={`flex bg-white text-black items-center gap-1 lg:py-2 md:py-1 px-4 rounded-lg border-2 border-gray-400 w-2/3 ${props.isDDN ? "" : "hidden"}`}>
                        <div className="w-3/5">
                            <form className="flex gap-1">
                                <button type="submit">
                                    <HiLocationMarker className="lg:text-2xl text-xl text-[#fd8196]" />
                                </button>
                                <input className="w-full placeholder:italic outline-0  truncate" type="text" placeholder="Search in your city" />
                            </form>
                        </div>
                        <div className="flex gap-0 items-center">
                            <AiOutlineLine className="rotate-90 lg:text-3xl text-2xl  text-gray-400" />
                        </div>
                        <div className="w-5/6">
                            <form className="flex gap-1">
                                <button type="submit">
                                    <FiSearch className="text-xl text-gray-600" />
                                </button>
                                <input className="placeholder:italic outline-0 w-full" type="text" placeholder="Search for restaurant, cuisine or a dish" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end lg:gap-[1.4rem] gap-3 lg:text-lg md:text-base text-gray-600 w-[25%]">
                    {
                        props.UserDetails
                            ?
                            (
                                <Profile UserDetails={props.UserDetails} />
                            )
                            :
                            (
                                <Link to="/accounts/signup-login" className={`${props.isLanding ? "bg-black bg-opacity-20 text-white hover:bg-opacity-30" : "text-black bg-gray-400 bg-opacity-5 hover:bg-opacity-10"} flex items-center gap-1 rounded-md  px-4 py-2 font-medium `}>
                                    Log In<GiLightningSlashes className="rotate-180" /> Sign Up
                                </Link>
                            )
                    }
                </div>
            </div>
        </>
    )
}

function NavSecondSm(props) {
    return (
        <>
            <div className="flex md:hidden justify-between items-center px-6 py-4">
                {
                    props.UserDetails
                        ?
                        (
                            <Profile UserDetails={props.UserDetails} />
                        )
                        :
                        (
                            <Link to="/accounts/signup-login" className={`${props.isLanding ? "bg-black bg-opacity-20 text-white hover:bg-opacity-30" : "text-black bg-gray-400 bg-opacity-5 hover:bg-opacity-10"} flex items-center gap-1 rounded-md  px-4 py-2 font-medium `}>
                                Log In<GiLightningSlashes className="rotate-180" /> Sign Up
                            </Link>
                        )
                }
                <div className="w-2/5">
                    <img className="w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="img"/>
                </div>
            </div>
        </>
    )
}

function NavSecondary(props) {
    return (
        <>
            <nav className={`${props.isDDN ? "" : "border-b-2"} `}>
                <NavSecondMdLg {...props} />
                <NavSecondSm {...props} />
            </nav>
        </>
    )
}

export default NavSecondary;



