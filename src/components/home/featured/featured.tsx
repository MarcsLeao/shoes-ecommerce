"use client"

import { formatCurrency } from "@/utils/format-data";
import { SectionTitle } from "../generic/generic";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

// export function Featured() {
//     return (
//         <section className="px-12 py-12">
//             <SectionTitle title="Featured"/>
//             <div className="grid grid-cols-7 gap-8 overflow-x-auto">
//                 <ProductCards name="Nike Shoes" price={formatCurrency(800)} url="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//                 <ProductCards name="Nike Shoes" price={formatCurrency(999)} url="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//                 <ProductCards name="Nike Shoes" price={formatCurrency(180.20)} url="https://images.unsplash.com/photo-1679284392816-191b1c849f76?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//                 <ProductCards name="Nike Shoes" price={formatCurrency(800)} url="https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//                 <ProductCards name="Nike Shoes" price={formatCurrency(999)} url="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//                 <ProductCards name="Nike Shoes" price={formatCurrency(180.20)} url="https://images.unsplash.com/photo-1679284392816-191b1c849f76?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//                 <ProductCards name="Nike Shoes" price={formatCurrency(800)} url="https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//             </div>
//         </section>
//     )
// }

export function Featured() {
    return (
        <section className="px-8 sm:px-12 py-12">
            <SectionTitle title="Featured"/>
            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap py-2">
                <ProductCard name="Nike Shoes" maxSize={true} price={formatCurrency(800)} url="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard name="Nike Shoes" maxSize={true} price={formatCurrency(999)} url="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard name="Nike Shoes" maxSize={true} price={formatCurrency(180.20)} url="https://images.unsplash.com/photo-1679284392816-191b1c849f76?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard name="Nike Shoes" maxSize={true} price={formatCurrency(800)} url="https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard name="Nike Shoes" maxSize={true} price={formatCurrency(999)} url="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard name="Nike Shoes" maxSize={true} price={formatCurrency(180.20)} url="https://images.unsplash.com/photo-1679284392816-191b1c849f76?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <ProductCard name="Nike Shoes" maxSize={true} price={formatCurrency(800)} url="https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
        </section>
    )
}

export function ProductCard({name, price, url, maxSize}: {name: string, price: string, url: string, maxSize?: boolean}) {
    return(
        <Link href={`/${name}`}>
            <div className={`snap-center border-2 flex-none ${maxSize ? 'w-[300px]' : 'max-w-[300px]'} md:h-[400px] rounded-lg overflow-hidden group cursor-pointer`}>
                <div className="overflow-hidden bg-gray-100 w-full h-[310px]">
                    <img src={url} alt="shoes image" className="w-full h-full object-cover transition-all ease-linear"/>
                </div>
                <div className="h-[88px] flex justify-between items-center px-4">
                    <div>
                        <p className="font-bold text-lg">{name}</p>
                        <p>{price}</p>
                    </div>
                    <div>
                        <div className="group-hover:bg-yellow-300 group-hover:border-yellow-300 w-max p-2 rounded-full transition-all border">
                            <FiArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}