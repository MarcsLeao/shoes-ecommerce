"use client"

import Link from "next/link"

export function PageNavigationBar() {
    return(
        <div className="flex justify-start items-center border-b-2 border-gray-300 px-12 py-3">
            <div>
                <Link href="/" className="hover:underline"> Home </Link> 
                {'>'}
                <Link href="/shoes" className="hover:underline"> Shoes </Link>
            </div>
        </div>
    )
}