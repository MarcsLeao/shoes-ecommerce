"use client"

import { formatCurrency } from "@/utils/format-data";
import { SectionTitle } from "../generic/generic";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { useProduct } from "@/hooks/useProducts";
import { ProductItem } from "@/@types/product";
import { FeaturedSkeleton } from "../skeletons/featuredSkeleton";

export function Featured() {
    const {data, isLoading} = useProduct()

    if(isLoading) return <FeaturedSkeleton />

    return (
        <section className={"px-8 sm:px-12 py-12"}>
            <SectionTitle title="Featured"/>
            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap py-2">
                {data && data.map((item: ProductItem, index: number) => (
                    index <= 6 ? <ProductCard key={index} name={item.name} maxSize={true} price={formatCurrency(item.price)} url={item.images[0].url}/> : null
                ))}
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