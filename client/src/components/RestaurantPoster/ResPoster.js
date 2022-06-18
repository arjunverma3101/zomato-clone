import React from "react";
import { VscStarFull } from "react-icons/vsc";
import ReviewModel from "../Model/ReviewModel";

function ResPoster(props) {
    return (
        <>
            <div className=" mt-10 md:pb-0 pb-6 lg:w-4/5 w-full m-auto flex md:flex-row flex-col-reverse justify-between md:items-center md:gap-0 gap-6 bg-gradient-to-r from-white md:to-[#ffff1a] to-[#ffff7d] transition-all duration-500 hover:shadow-xl hover:shadow-[#ffff7d]">
                <div className="flex md:flex-col gap-2 px-4 justify-between" >

                    <div className="flex flex-col gap-2">
                        <div className="lg:text-[2.6rem] text-4xl  font-semibold text-[#06283D] truncate">
                            Domino's Pizza
                        </div>
                        <div className="text-[#144c72]">
                            Pizza
                            <br />
                            Connaught Place, New Delhi
                        </div>
                        <div className="text-gray-600">
                        </div>
                        <div className="text-[#2c89cc]">
                            11am - 12midnight
                        </div>
                    </div>
                    <div className="flex md:items-center justify-between md:flex-row flex-col-reverse items-end">
                        <div className="flex items-center gap-1 bg-green-800 rounded-lg text-white px-2 ">
                            <div className="font-semibold">
                                4.5
                            </div>
                            <VscStarFull className="text-sm" />
                        </div>
                        <ReviewModel isLoggedIn={props.isLoggedIn} />
                    </div>
                </div>
                <div className="md:w-3/5 w-full">
                    <img className="md:rounded-r-xl w-full rounded-none " src="https://b.zmtcdn.com/data/pictures/chains/3/143/3c133139838c2777cdcc0514147373b4_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="img"/>
                </div>
            </div>
        </>
    );
};
export default ResPoster;