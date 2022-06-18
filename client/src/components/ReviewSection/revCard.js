import React, { useState } from "react";
import { ImStarFull } from "react-icons/im";


function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span onClick={toggleReadMore} className="read-or-hide hover:cursor-pointer text-gray-500">
                {isReadMore ? "...read more" : "  read less"}
            </span>
        </div>
    );
};

function RevCard(props) {
    return (
        <>
            <div className="px-10 flex flex-col gap-6 border-x-4 border-[#810000] py-4 lg:w-2/3 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10  rounded-full text-[#203239] bg-[#EEEDDE] flex items-center justify-center">
                            <img src="https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100" className="rounded-full" alt="img"/>
                        </div>
                        <div className="text-xl font-semibold text-[#06283D]">
                            Name
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-800 rounded-lg text-white px-2 py-0">
                        <div className="font-semibold">
                            4.5
                        </div>
                        <ImStarFull className="text-sm" />
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <div>
                        <ReadMore>
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                            lorem
                        </ReadMore>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RevCard;