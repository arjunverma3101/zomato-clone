import React from "react";
import RevCard from "./revCard";
function RevContainer(props) {
    return (
        <>
            <div className="flex flex-col gap-10 w-4/5 m-auto mt-10">
                <div id="reviews" className="text-4xl text-[#06283D] font-semibold ">
                    Reviews
                </div>
                <hr className="" />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
                <RevCard />
            </div>
        </>
    );
};
export default RevContainer;