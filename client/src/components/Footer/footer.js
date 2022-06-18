import React from "react";
import {Link} from "react-router-dom";


import { ImFacebook, ImYoutube, ImLinkedin, ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";


function Footer(props) {
    return (
        <>
            <footer className="bg-gray-50 px-8 py-4 md:mb-0 mb-[40%]">
                <div className="lg:w-4/5 w-full m-auto flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="md:w-48 w-[35%]">
                            <Link to="/">
                            <img className="w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="img"/>
                            </Link>
                        </div>
                        <div className="flex md:gap-4 gap-2 justify-end">
                            <a href="https://play.google.com/store/apps/details?id=com.application.zomato" className="md:w-40 w-[25%]">
                                <img className="w-full" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="img"/>
                            </a>
                            <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896" className="md:w-40 w-[25%]">
                                <img className="w-full" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="img"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="font-bold">
                                ABOUT ZOMATO
                            </div>
                            <div className="text-gray-500">
                                | Who We Are |
                                | Blog |
                                | Work With Us |
                                | Investor Relations |
                                | Report Fraud |
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold ">
                                LEARN MORE
                            </div>
                            <div className="text-gray-500">
                                | Privacy |
                                | Security |
                                | Terms |
                                | Investor Relations |
                                | Sitemap |
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold">
                                SOCIAL LINKS
                            </div>
                            <div className="flex gap-4 text-2xl">
                                <a href="https://www.facebook.com/zomato" target="_blank">
                                    <ImFacebook className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300" />
                                </a>
                                <a href="https://twitter.com/zomato" target="_blank">
                                    <ImTwitter className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300" />
                                </a>
                                <a href="https://www.instagram.com/zomato/" target="_blank">
                                    <AiFillInstagram className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300" />
                                </a>
                                <a href="https://www.youtube.com/zomato" target="_blank">
                                    <ImYoutube className="hover:text-black text-gray-600 cursor-pointer transition-all duration-300" />
                                </a>
                                <a href="https://www.linkedin.com/company/zomato/" target="_blank">
                                    <ImLinkedin className="hover:text-black text-gray-600  cursor-pointer transition-all duration-300" />
                                </a>
                            </div>
                        </div>
                        <div className="pb-4">
                            <hr />
                        </div>
                        <div className="text-xs">
                            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;