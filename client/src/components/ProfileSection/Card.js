import React from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiDotsVerticalRounded } from "react-icons/bi";
function CancelButton(params) {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="text-4xl md:text-2xl">
                    <BiDotsVerticalRounded />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-[#b40000] text-white' : 'font-semibold'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    Cancel Order
                                </button>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
function Card(props) {
    return (
        <>
            <div className="w-full flex rounded-xl hover:shadow-lg hover:shadow-gray-500 md:flex-row flex-col md:gap-0 gap-4 md:pb-0 pb-6">
                <div className="lg:w-80 md:w-[13rem]">
                    <img className="md:rounded-tr-none  md:rounded-l-lg  rounded-t-xl w-full" alt="img" src="https://b.zmtcdn.com/data/pictures/chains/3/53923/f1ed8209bf84106c577ebd774dd7194b_o2_featured_v2.jpg" />
                </div>
                <div className="w-full px-4 flex flex-col justify-evenly gap-1">
                    <div className="flex justify-between items-center">
                        <div className="lg:text-3xl md:text-2xl text-3xl font-semibold">
                            Restuarent Name
                        </div>
                        <div className="font-semibold flex md:items-start items-center">
                            <div>
                                Date
                            </div>
                            <CancelButton />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="font-semibold">
                                Food Name x quantity
                            </div>
                            <div className="text-gray-600">
                                cost x quantity
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                Tax
                            </div>
                            <div className="text-gray-600">
                                Tax
                            </div>
                        </div>
                        <hr className="py-1" />
                        <div className="flex justify-between items-center">
                            <div className="font-semibold">
                                Total
                            </div>
                            <div className="text-gray-600">
                                Total
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;