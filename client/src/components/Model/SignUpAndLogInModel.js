import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import SignUpLogInCompo from './SignUpLogInCompo'

import { GiLightningSlashes } from "react-icons/gi"



function SignUpAndLogInModel(props) {
  let [isOpen, setIsOpen] = useState(false);
  let [signUpOnLogINOff, setSignUpOnLogINOff] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center md:justify-center gap-4">
        <button type="button" onClick={(openModal)} className={`${props.isLanding ? "bg-black bg-opacity-20 text-white hover:bg-opacity-30" : "text-black bg-gray-400 bg-opacity-5 hover:bg-opacity-10"} flex items-center gap-1 rounded-md  px-4 py-2 font-medium `}>
          Log In<GiLightningSlashes className="rotate-180" /> Sign Up
        </button>
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
                  <Dialog.Title as="h3"
                    className="flex justify-around gap-6 text-lg font-medium leading-6 text-gray-900">
                    <button type="button" onClick={() => setSignUpOnLogINOff(true)}
                      className={`w-[45%] inline-flex justify-center rounded-md  px-4 py-2  font-medium ${signUpOnLogINOff ? "bg-green-800 text-white" : "bg-white text-green-700"} `}>
                      Sign Up
                    </button>
                    <button type="button" onClick={() => setSignUpOnLogINOff(false)}
                      className={`w-[45%] inline-flex justify-center rounded-md  px-4 py-2  font-medium ${signUpOnLogINOff ? "bg-white text-green-700" : "bg-green-800 text-white"} `}>
                      Log In
                    </button>
                  </Dialog.Title>
                  <form className="flex flex-col gap-4">
                    <div className={`${signUpOnLogINOff ? "" : "hidden"}`}>
                      <SignUpLogInCompo isTrue={true} />
                    </div>
                    <div className={`${signUpOnLogINOff ? "hidden" : ""}`}>
                      <SignUpLogInCompo isTrue={false} />
                    </div>
                    <div className="">
                      <button type="button" onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        {
                          signUpOnLogINOff ? "Sign Up" : "Log In"
                        }
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
export default SignUpAndLogInModel;