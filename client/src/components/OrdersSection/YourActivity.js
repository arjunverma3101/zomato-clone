import React from "react";
import { Disclosure } from "@headlessui/react";


function YourActivty(props) {
    return (
        <>
            <div className="flex flex-col md:w-[25%] w-full gap-10">
                <div className="text-3xl font-semibold">Your Activity</div>
                <div className="flex flex-col gap-4 ">
                    {
                        // props.filter.map((topic) => (
                        <div className="py-2 border-4 border-[#D0C9C0] hover:border-none hover:py-3 rounded-xl flex justify-center flex-col items-center bg-[#faf5e7] ">
                            <Disclosure >
                                {({ open, selected }) => (
                                    <>
                                        <div>
                                            <Disclosure.Button className={`font-bold  ${open ? "text-[#29582f]" : "text-[#6D8B74] "}`}>
                                                Orders
                                            </Disclosure.Button>
                                        </div>
                                        <div>
                                            <Disclosure.Panel>
                                                <div className="flex gap-1 flex-wrap mx-2 mt-3">
                                                    <button className="w-full text-[#5F7161] bg-[#FFF] py-1 px-4 md:py-1 md:px-2 lg:py-1 lg:px-4 text-sm border-[#E0DDAA] border-2 rounded-lg hover:underline">On Way Orders</button>
                                                    <button className="w-full text-[#5F7161] bg-[#FFF] py-1 px-4 md:py-1 md:px-2 lg:py-1 lg:px-4 text-sm border-[#E0DDAA] border-2 rounded-lg hover:underline">Past Orders</button>
                                                </div>
                                            </Disclosure.Panel>
                                        </div>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    }
                    {
                        // props.filter.map((topic) => (
                        <div className="py-2 border-4 border-[#D0C9C0] hover:border-none hover:py-3 rounded-xl flex justify-center flex-col items-center bg-[#faf5e7]">
                            <Disclosure >
                                {({ open, selected }) => (
                                    <>
                                        <div>
                                            <Disclosure.Button className={`font-bold ${open ? "text-[#29582f]" : "text-[#6D8B74] "}`}>
                                                Table Bookings
                                            </Disclosure.Button>
                                        </div>
                                        <div>
                                            <Disclosure.Panel>
                                                <div className="flex gap-1 flex-wrap mx-2">
                                                    <button className="w-full text-[#5F7161] bg-[#FFF] py-1 px-4 md:py-1 md:px-2 lg:py-1 lg:px-4 text-sm border-[#E0DDAA] border-2 rounded-lg hover:underline">Booking</button>
                                                    <button className="w-full text-[#5F7161] bg-[#FFF] py-1 px-4 md:py-1 md:px-2 lg:py-1 lg:px-4 text-sm border-[#E0DDAA] border-2 rounded-lg hover:underline">Past Booking</button>
                                                </div>
                                            </Disclosure.Panel>
                                        </div>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};
export default YourActivty;