import React from "react";
import { Link } from "react-router-dom";

import Profile from "./profilePicAndName";
import { navbarSmall, navbarMedium, navbarLarge } from "./navBarImg";

import { GiLightningSlashes } from "react-icons/gi"
import { AiOutlineLine } from "react-icons/ai";
import {  MdOutlineMobileScreenShare } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

function NavBar(props) {
    return (
        <>
            <nav className="w-full shadow-2xl">
                <div className="absolute w-full shadow-sm" >
                    <img src={navbarSmall} className="md:hidden w-full h-[20rem]" alt="img"/>
                    <img src={navbarMedium} className="hidden md:block lg:hidden w-full h-[25rem]" alt="img"/>
                    <img src={navbarLarge} className="hidden lg:block w-full h-[30rem]" alt="img"/>
                </div>
                <div className="flex flex-col relative h-[20rem] md:h-[25rem] lg:h-[30rem] text-white md:w-full lg:w-3/4 m-auto px-4 py-6 lg:gap-5 md:gap-3 gap-20">
                    <div className="md:flex justify-between hidden">
                        <a href="#getApp">
                            <div className="flex items-center gap-1">
                                <MdOutlineMobileScreenShare />
                                <div>Get the App</div>
                            </div>
                        </a>
                        <div className="text-lg">
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
                    <div className="md:hidden">
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
                    <div className="flex flex-col lg:w-full m-auto md:gap-5 gap-4 ">
                        <div>
                            <img className="w-[40%] m-auto" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato" />
                        </div>
                        <div className="lg:text-4xl md:text-3xl text-xl text-center w-full ">Discover the best food & drinks in Delhi NCR</div>
                        <div className="flex bg-white text-black items-center gap-2 lg:py-3 md:py-2.5 py-2 px-4 rounded-lg lg:w-full w-4/5 m-auto">
                            <HiLocationMarker className="md:text-3xl text-2xl text-[#fd8196]" />
                            <input className="w-1/4 placeholder:italic outline-0" type="text" placeholder="Search in your city" />
                            <AiOutlineLine className="rotate-90 text-3xl text-gray-400" />
                            <FiSearch className="text-2xl text-gray-600" />
                            <input className="w-1/2 placeholder:italic outline-0" type="text" placeholder="Search for restaurant, cuisine or a dish" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;