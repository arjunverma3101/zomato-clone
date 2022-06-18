import React from "react";
import { proSmall, proMedium, proLarge } from "./ProImg.js";
import { FiEdit } from "react-icons/fi";
function ProfileSection(props) {
    return (
        <>
            <div className="lg:w-4/5 m-auto">
                <img src={proLarge} className="w-4/5 h-72 m-auto absolute hidden lg:block" />
                <img src={proMedium} className="w-full h-72 absolute hidden md:block lg:hidden" />
                <img src={proSmall} className="w-full h-[21rem] absolute md:hidden" />
                <div className="relative md:h-72 h-[21rem] w-full flex md:items-center items-start px-8 md:justify-between justify-center md:flex-row flex-col md:gap-0 gap-4">
                    <div className="flex items-center gap-4 md:flex-row flex-col">
                        <div>
                            <img className="rounded-full md:w-40 w-[8.5rem] border-4 border-white" src="https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                        </div>
                        <div className="text-2xl font-semibold text-white">
                            Arjun
                        </div>
                    </div>
                    <button className="bg-[#ff4c4c] to-[#ff1a1a] from-[#810000] px-4 py-2 rounded-lg text-white flex items-center gap-1 hover:gap-2 hover:pl-3 hover:bg-[#ff1a1a] transition-all duration-300">
                        <FiEdit />
                        {/* <div> */}
                        Edit Profile
                        {/* </div> */}
                    </button>

                </div>
            </div>
        </>
    );
};
export default ProfileSection;