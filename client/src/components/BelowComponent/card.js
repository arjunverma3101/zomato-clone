import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <>
            <div className="lg:w-[28%] md:w-[33%] w-[80%] p-4 hover:scale-105 transition-all duration-300">
                <Link to={props.url}>
                    <div className="w-full shadow-2xl rounded-xl">
                        <img className=" w-full rounded-t-xl" src={props.src}alt="img" />
                        <div className="flex flex-col gap-1 px-5 py-2">
                            <div className="md:text-xl text-base font-semibold truncate">{props.title}</div>
                            <div className="md:text-base text-sm text-gray-700 truncate">{props.subtitle}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card;