import React from "react";

import OrderModel from "../Model/OrderModel";

import { ImStarFull } from "react-icons/im";
import { Link } from "react-router-dom";


function Card(props) {
    return (
        <>
            <Link to={`/restaurant/${"Rest-name"}`}>
                <div className={`p-4 flex flex-col gap-2 hover:shadow-2xl hover:shadow-[#FFEDDB] hover:scale-105  delay-150 rounded-2xl transition-all duration-300 cursor-default`}>
                    <div>
                        <img src="https://b.zmtcdn.com/data/pictures/chains/3/53923/f1ed8209bf84106c577ebd774dd7194b_o2_featured_v2.jpg" className="rounded-2xl" alt="img"/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="font-semibold text-lg">
                                Corner House Ice Creams
                            </div>
                            <div className="text-gray-600">
                                Ice Cream, Beverages
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex  items-center gap-1 bg-green-800 rounded-lg text-white px-2 ">
                                <div className="font-semibold">
                                    4.5
                                </div>
                                <ImStarFull className="text-sm" />
                            </div>
                            <div className="text-gray-600">
                                $100
                            </div>
                        </div>
                    </div>
                    <div className={`w-full ${props.isFood ? "" : "hidden"}`}>
                        <OrderModel isLoggedIn={props.isLoggedIn} />
                    </div>
                </div>
            </Link>
        </>
    );
};
export default Card;