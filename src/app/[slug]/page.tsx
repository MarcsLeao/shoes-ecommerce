"use client"

import { ProductMain } from "@/components/product/main/main";
import { ProductMainSkeleton } from "@/components/product/skeletons/ProductMainSkeleton";
import { useFindProductByName } from "@/services/product-services";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string }}) {
    const { data, isLoading } = useFindProductByName(params.slug)
    
    if(isLoading)
        return <ProductMainSkeleton />

    if(!data) 
        return notFound()

    return (
        <ProductMain params={params}/>
    )
}