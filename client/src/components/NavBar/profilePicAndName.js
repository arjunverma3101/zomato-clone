import React from "react";

import { Popover } from '@headlessui/react'
import { Link } from "react-router-dom";


function Profile(props) {
    const logout = () => {
        localStorage.setItem("Logged-User-JWTTOKEN", "");
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <>
            <Popover className="relative">
                <Popover.Button>
                    <div className={`flex items-center md:justify-center ${props.isLanding ? "bg-black bg-opacity-20  hover:bg-opacity-30" : "bg-gray-500 bg-opacity-5 hover:bg-opacity-10"} rounded-l-full hover:scale-105 transition-all ease-in-out delay-50 duration-300`}>
                        <div>
                            <img className="w-12 h-12 rounded-full" src={props.UserDetails.profilePic} alt="img"/>
                        </div>
                        <div className={`font-semibold px-3`}>
                            {props.UserDetails.fullName}
                        </div>
                    </div>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 w-full text-base">
                    <div className="flex flex-col gap-2 bg-[#F7F7F7] text-blue-900 p-1 rounded-md">
                        <div className="text-center py-1 bg-white rounded-md">
                            <Link to="/profile/orders">
                                Orders
                            </Link>
                        </div>
                        <div className="text-center py-1 bg-white rounded-md">
                            <Link to="/profile/table-booking">
                                Table Booking
                            </Link>
                        </div>
                        <div className="text-center py-1 bg-white rounded-md">
                            <Link to="/profile/restaurant">
                                Restaurant
                            </Link>
                        </div>
                        <div>
                            <button type="button" onClick={logout}
                                className="w-full justify-center rounded-md border font-semibold border-transparent bg-blue-50 py-1 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                LogOut
                            </button>
                        </div>
                    </div>
                </Popover.Panel>
            </Popover>
        </>
    );
};
export default Profile;