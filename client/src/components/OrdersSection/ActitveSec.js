import React from "react";
import OrderCard from "./OrderCard.js";

function ActiveSec(props) {
    return (
        <>
            <div className="md:w-[73%] w-full flex flex-col gap-10 ">
                <div className="text-3xl font-semibold">Past Orders</div>
                <div className="flex flex-col gap-8">
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                </div>
            </div>
        </>
    );
};
export default ActiveSec;