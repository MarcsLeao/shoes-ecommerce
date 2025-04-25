"use client"

import { useCart } from "@/contexts/cartContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

export function Nav() {
    return(
        <header className="block w-full z-50">
            <nav className={`flex justify-between items-center h-[7vh] py-4 px-8 bg-yellow-300 transition-colors`}>
                <NavLogo />
                <NavPageLinks />
                <NavUserLinks />
            </nav>
        </header>
    )
}

export function NavLogo() {
    return (
        <div className="inline-block badg-yellow-300 cursor-pointer bg-yellow-300">
            <Link href={'/'}><span className="block font-bold cursor-pointer px-4">MyShoes</span></Link>
        </div>
    )
}

export function NavPageLinks() {
    return (
        <ul className="hidden sm:flex gap-4">
            <li><Link href={'/shoes'} className="hover:bg-white cursor-pointer transition-colors px-3 py-1 rounded-full">Shop</Link></li>
            <li><Link href={''} className="hover:bg-white cursor-pointer transition-colors px-3 py-1 rounded-full">Collections</Link></li>
            <li><Link href={''} className="hover:bg-white cursor-pointer transition-colors px-3 py-1 rounded-full">Contact</Link></li>
            <li><Link href={''} className="hover:bg-white cursor-pointer transition-colors px-3 py-1 rounded-full">Find Us</Link></li>
        </ul>
    )
}

export function NavUserLinks() {
    const {quantity} = useCart()

    return (
        <ul  className="flex gap-2">
            <li className="hover:bg-white cursor-pointer transition-colors p-2  rounded-full"><FaUser /></li>
            <li className="hover:bg-white cursor-pointer transition-colors p-2 rounded-full">
                <Link href={'/cart'} className="relative">
                    <FaCartShopping />
                    {quantity ? <div className="absolute left-4 top-2 rounded-full w-[20px] h-[20px] bg-red-500 text-sm text-white"><span className="flex justify-center items-center">{quantity}</span></div> : null}
                </Link>
            </li>
        </ul>
    )
}