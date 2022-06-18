import React from "react";
import { Link, useParams } from "react-router-dom";
function MyRadioGroup() {
    let params = useParams();
    let plan = params.section;
    return (
        <div className="flex flex-col gap-4">
            <Link to="/profile/restaurant">
                <div className={`py-4 text-center rounded-xl ${(plan === "restaurant") ? 'bg-[#052d47] text-white font-bold' : 'bg-[#F2F2F2] text-black font-semibold'}`}>My Restaurant</div>
            </Link>
            <Link to="/profile/orders">
                <div className={`py-4 text-center rounded-xl ${(plan === "orders")||(plan === "past-orders") ? 'bg-[#052d47] text-white font-bold' : 'bg-[#F2F2F2] text-black font-semibold'}`}>My Orders</div>
            </Link>
            <Link to="/profile/table-booking">
                <div className={`py-4 text-center rounded-xl ${(plan === "table-booking")||(plan === "past-table-booking") ? 'bg-[#052d47] text-white font-bold' : 'bg-[#F2F2F2] text-black font-semibold'}`}>My Table Booking</div>
            </Link>
        </div>
    )
}

function Filter(props) {
    return (
        <>
            <div className="flex flex-col md:w-[25%] w-full gap-10 my-10">
                <div className="text-3xl font-semibold">Your Activity</div>
                <div className="flex flex-col gap-4 ">
                    <MyRadioGroup />
                </div>
            </div>
        </>
    );
};
export default Filter;