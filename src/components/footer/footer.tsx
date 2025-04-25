import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ButtonBasicYellow } from "../buttons/buttons";

export function Footer() {
    return (
        <footer className="bg-zinc-900 flex flex-col justify-between text-white h-[480px] px-16 py-8">
            <div className="flex justify-center md:justify-start items-start lg:gap-40 gap-20">
                <div className="flex flex-col gap-4 justify-center items-start">
                    <p className="font-bold text-2xl text-center md:text-start">Join our newsteller</p>
                    <p className="text-center md:text-start text-gray-400">Receive special offers periodically.</p>
                    <input type="text" className="bg-zinc-900 text-gray-400 border-gray-400 text-center md:text-start focus:outline-none w-full border-b-2 px-4 py-2" placeholder="type your email"/>
                    <ButtonBasicYellow text="join now" />
                </div>

                <div className="hidden md:flex flex-col gap-4 justify-center items-start">
                    <p className="font-bold text-xl mb-2">Products</p>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">shoes</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">sneakers</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">boots</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">collections</a></li>
                    </ul>
                </div>

                <div className="hidden md:flex flex-col gap-4 justify-center items-start">
                    <p className="font-bold text-xl mb-2">Support</p>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">Can we help?</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">payment methods</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">FAQs - frequently asked questions</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">exchanges & returns</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">sizing guide</a></li>
                    </ul>
                </div>

                <div className="hidden md:flex flex-col gap-4 justify-center items-start">
                    <p className="font-bold text-xl mb-2">Find Us</p>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">shoes</a></li>
                    </ul>
                    <p className="font-bold text-xl mb-2">Speak to Us</p>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">WhattsApp</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex md:hidden justify-between items-center">
                <div className="flex justify-between items-center">
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">Products</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">Find Us</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">sizing guide</a></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">Support</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">payment methods</a></li>
                        <li><a href="#" className="text-gray-400 border-gray-400 hover:border-b-[1px]">FAQs</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <p className="text-center md:text-start text-gray-300 md:text-white">MyShoes footwear shop. ® All rights reserd 2020.</p>
                <div className="hidden md:flex justify-center items-center gap-4 text-4xl">
                    <IoLogoInstagram className="p-2 rounded-full hover:bg-zinc-800 transition-colors"/>
                    <MdOutlineFacebook className="p-2 rounded-full hover:bg-zinc-800 transition-colors"/>
                    <FaTiktok className="p-2 rounded-full hover:bg-zinc-800 transition-colors"/>
                    <FaYoutube className="p-2 rounded-full hover:bg-zinc-800 transition-colors"/>
                </div>
            </div>
        </footer>
    )
}