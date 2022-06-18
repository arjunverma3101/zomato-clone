import React from "react";
import ActiveSec from "./ActitveSec";
import YourActivty from "./YourActivity";


function OrderSec(props) {
    return (
        <>
            <div className="lg:w-4/5 lg:px-0 px-10 w-full m-auto flex md:flex-row flex-col gap-10">
                <YourActivty />
                <ActiveSec/>
            </div>
        </>
    );
};
export default OrderSec;