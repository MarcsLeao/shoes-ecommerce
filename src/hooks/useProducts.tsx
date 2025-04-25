"use client";

import { ProductItem } from "@/@types/product";
import { useFilter } from "@/contexts/filterContext";
import { useFindProducts } from "@/services/product-services";

export function useProduct() {
    const { data, isLoading } = useFindProducts()
    const { priceOption, sortOption, categoryOption } = useFilter()
    let filteredProducts = data?.slice() || []

    if(priceOption === "Best Sellers" || categoryOption === 'All')
        filteredProducts = data
    

    if(sortOption === "New In") 
        filteredProducts = filteredProducts.sort((a: ProductItem, b: ProductItem) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    if(sortOption === "Popular")
        filteredProducts = filteredProducts.sort((a: ProductItem, b: ProductItem) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
     

    if(priceOption === "Highest") 
        filteredProducts = filteredProducts.sort((a: ProductItem, b: ProductItem) => b.price - a.price)
    if(priceOption === "Lowest") 
        filteredProducts = filteredProducts.sort((a: ProductItem, b: ProductItem) => a.price - b.price)
    

    if(categoryOption === 'Casual')
        filteredProducts = filteredProducts.filter((item: ProductItem) => item.category.name.toLocaleLowerCase() === categoryOption.toLocaleLowerCase())
    if(categoryOption === 'Street')
        filteredProducts = filteredProducts.filter((item: ProductItem) => item.category.name.toLocaleLowerCase() === categoryOption.toLocaleLowerCase()) 
    if(categoryOption === 'Sport')
        filteredProducts = filteredProducts.filter((item: ProductItem) => item.category.name.toLocaleLowerCase()  === categoryOption.toLocaleLowerCase()) 

    return { data: filteredProducts, isLoading }
}
