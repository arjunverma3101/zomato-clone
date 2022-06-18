import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'

import { FaShoppingCart } from "react-icons/fa";




function OrderModel(props) {

    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const [orderDetails, setOrderDetails] = useState({
        __address: "",
        __phoneNumber: undefined,
        __quantity: 1
    });
    function handleInputs(e) {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    }

    function lanuchRazorPay(e) {
        e.preventDefault();
        let options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount: 100,
            currency: "INR",
            name: "Book-My-Show-Clone",
            description: "Movie Ticket Booking",
            image: "in.bmscdn.com/webin/common/icons/logo.svg",
            handler: () => {
                // console.log(orderDetails) 
            },
            theme: { color: "#202060" }
        };
        let rzp = new window.Razorpay(options);
        rzp.open();
        closeModal();
    }

    return (
        <>
            <div className="flex items-center md:justify-center gap-4">
                {
                    props.isLoggedIn ? (
                        <button type="button" onClick={(openModal)} className={`w-full justify-center bg-gradient-to-r to-[#ff4c4c] from-[#b40000] px-4 py-2 rounded-lg text-white flex items-center gap-1`}>
                            <FaShoppingCart />
                            Order Now
                        </button>


                    ) : (
                        <Link to="/accounts/signup-login" className={`w-full justify-center bg-gradient-to-r to-[#ff4c4c] from-[#b40000] px-4 py-2 rounded-lg text-white flex items-center gap-1`}>
                            <FaShoppingCart />
                            Order Now
                        </Link>

                    )
                }
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="lg:w-1/2 md:w-2/3 w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="div"
                                        className="w-full text-center justify-center rounded-md  px-4 py-2 font-medium bg-green-800 text-white text-xl cursor-default">
                                        Order
                                    </Dialog.Title>
                                    <form className="flex flex-col gap-4 mt-10" onSubmit={lanuchRazorPay}>
                                        <div className="flex flex-col gap-1">
                                            <label for="__address" className="text-lg text-green-800 font-bold">Address</label>
                                            <textarea type="number" className="px-4 py-2 outline-blue-300" id="__address" placeholder="Your Address" rows={2} required={true} name="__address" value={orderDetails.__address} onChange={handleInputs} />
                                        </div>
                                        <div className="flex flex-col gap-1 ">
                                            <label for="__phoneNumber" className="text-lg text-green-800 font-bold">Phone Number</label>
                                            <input type="tel" pattern="[7-9]{1}[0-9]{9}" className="px-4 py-2 outline-blue-300" id="__phoneNumber" placeholder="Phone Number" required={true} name="__phoneNumber" value={orderDetails.__phoneNumber} onChange={handleInputs} />
                                        </div>
                                        <div className="flex flex-col gap-1 ">
                                            <label for="__quantity" className="text-lg text-green-800 font-bold">Quantity</label>
                                            <input type="number" className="px-4 py-2 outline-blue-300" id="__quantity" placeholder="Quantity" min={1} defaultValue={1} required={true} name="__quantity" value={orderDetails.__quantity} onChange={handleInputs} />
                                        </div>
                                        <div className="flex flex-col text-lg">
                                            <div className="flex justify-between items-end">
                                                <div className="font-semibold  text-xl text-green-800">
                                                    Restuarent Name
                                                </div>
                                                <div className="text-gray-600">
                                                    DATE
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="">
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
                                        <div className=" flex flex-row-reverse gap-3">
                                            <button type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                Pay Now
                                            </button>
                                            <button type="button" onClick={closeModal}
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default OrderModel;