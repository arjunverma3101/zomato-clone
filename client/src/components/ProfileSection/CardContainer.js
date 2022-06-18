import React from "react";
import Card from "./Card.js";
import { Link, useParams } from "react-router-dom";
function CardContainer(props) {
    let params = useParams();
    const section = params.section;
    return (
        <>
            <div className="md:w-[70%] w-full flex flex-col gap-10 my-10">
                <div className="flex gap-10">
                    <Link to={(section === "orders" || section === "past-orders") ? "/profile/orders" : "/profile/table-booking"}  >
                        <div className={`text-3xl font-semibold transition-all delay-150 hover:-translate-y-1 hover:scale-110 ${section === "orders" || section === "table-booking" ? "font-bold text-[#052d47] underline -translate-y-1 scale-110" : "text-[#1e6aa3]"}`}>
                            {
                                (section === "orders" || section === "past-orders") ? "Orders" : "Table Booking"
                            }
                        </div>
                    </Link>
                    <Link to={(section === "orders" || section === "past-orders") ? "/profile/past-orders" : "/profile/past-table-booking"}>
                        <div className={`text-3xl font-semibold transition-all delay-150 hover:-translate-y-1 hover:scale-110 text-[#052d47] ${section === "orders" || section === "table-booking" ? "text-[#1e6aa3]" : "font-bold text-[#052d47] underline -translate-y-1 scale-110"}`}>
                            {
                                (section === "orders" || section === "past-orders") ? "Past Orders" : "Past Table Booking"
                            }
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-8">
                    <Card />
                </div>
            </div>
        </>
    );
};
export default CardContainer;