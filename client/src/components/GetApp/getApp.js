import React, { useState } from "react";

function GetApp(props) {
    let [isColor, setIsColor] = useState([true]);
    return (
        <>
            <div className="bg-[#FFFBF7] flex justify-center py-8 shadow-xl items-center" id="getApp">
                <div className="lg:w-1/4 md:w-1/3 w-[40%]">
                    <img className="w-full" src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" alt="img"/>
                </div>
                <div className="flex flex-col gap-6 lg:w-1/3 w-1/2">
                    <div className="lg:text-4xl md:text-3xl text-3xl font-semibold">
                        Get the Zomato app
                    </div>
                    <div className="text-gray-700 font-light truncate">
                        We will send you a link, open it on your phone to download the app
                    </div>
                    <div className="flex gap-2 items-center px-2">
                        <div className="">
                            <button className={`${isColor ? "bg-green-700 text-white" : "bg-white text-green-700"}  px-3 py-1 rounded-md font-light`} onClick={() => setIsColor(true)}>Email</button>
                        </div>
                        <div className="">
                            <button className={`${isColor ? "bg-white text-blue-700" : "bg-blue-700 text-white"}  px-3 py-1 rounded-md font-light`} onClick={() => setIsColor(false)}>Phone</button>
                        </div>
                    </div>
                    <div>
                        <form className="flex gap-4 md:flex-row flex-col" onSubmit={() => alert("Invitation Sended!!!!!!!")}>
                            <input className={`px-4 py-2 ${isColor ? "outline-green-700" : "outline-blue-700"}  w-full`} type={isColor ? "email" : "tel"} pattern={isColor ? "[a-z0-9._%+-]{1}+@[a-z0-9.-]{1}+.[a-z]{2}" : "[7-9]{1}[0-9]{9}"} placeholder={isColor ? "Email" : "Phone"} required={true} />
                            <div className="md:w-80 w-full">
                                <button className="bg-[#EF4F5F] text-white px-4 py-2 rounded-md font-light w-full">Share App Link</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-gray-600 font-light">
                        Download app from
                    </div>
                    <div className="flex gap-4">
                        <a href="https://play.google.com/store/apps/details?id=com.application.zomato" className="md:w-1/4 w-1/3 ">
                            <img className="w-full" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="img"/>
                        </a>
                        <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896" className="md:w-1/4 w-1/3 ">
                            <img className="w-full" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="img"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetApp;