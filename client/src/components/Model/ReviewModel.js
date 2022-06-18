import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'

import { VscStarFull } from "react-icons/vsc";

function ReviewModel(props) {
    let [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="flex items-center md:justify-center gap-4">
                {
                    props.isLoggedIn ? (
                        <button type="button" onClick={(openModal)} className="bg-gradient-to-r to-[#ff1a1a] from-[#810000] px-4 py-2 rounded-lg text-white flex items-center gap-1">
                            <VscStarFull />
                            Add Review
                        </button>

                    ) : (
                        <Link to="/accounts/signup-login" className="bg-gradient-to-r to-[#ff1a1a] from-[#810000] px-4 py-2 rounded-lg text-white flex items-center gap-1">
                            <VscStarFull />
                            Add Review
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
                                        Adding a Review
                                    </Dialog.Title>
                                    <form className="flex flex-col gap-4 mt-10">
                                        <div class={`flex flex-col gap-1`}>
                                            <label for="__Review" className="text-lg text-green-800 font-bold">Your Review</label>
                                            <textarea type="text" rows={5} className="px-4 py-2 outline-blue-300 italic " id="__Review" placeholder="Write a review" required />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <label for="__star" className="text-lg text-green-800 font-bold">Stars</label>
                                            <input type="number" className="px-4 py-2 outline-blue-300 italic" id="__star" placeholder="(1-5) Stars" max={5} min={1} required />
                                        </div>
                                        <div className=" flex flex-row-reverse gap-3">
                                            <button type="button" onClick={closeModal}
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                Add Review
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
export default ReviewModel;