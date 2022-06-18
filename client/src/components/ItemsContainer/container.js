import React from "react";

import Card from "./card";

import { IoMdArrowDropright } from "react-icons/io";

function ItemCont(props) {

    return (
        <>
            <div className="flex flex-col gap-8 mt-10">
                <div className="lg:w-4/5 w-full m-auto px-4 text-[#06283D] font-semibold flex items-center justify-between">
                    <div className="text-4xl">
                        {props.title}
                    </div>
                    <a href="#reviews">
                        <div className={`${props.isFood ? "" : "hidden"} hover:underline flex items-center `}>
                            <div>
                                Reviews
                            </div>
                            <IoMdArrowDropright />
                        </div>
                    </a>
                </div>
                <div className={`grid ${props.isFood ? "lg:grid-cols-4 md:grid-cols-3 grid-cols-2" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-1"}  grid-flow-row lg:gap-4 md:gap-0 gap-4 lg:w-4/5 w-full m-auto`}>
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                    <Card {...props} />
                </div>
            </div>
        </>
    );
};
export default ItemCont;