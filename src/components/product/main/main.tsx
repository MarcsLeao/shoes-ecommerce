"use client"

import { ButtonBuyProduct } from "@/components/buttons/buttons";
import { Footer } from "@/components/footer/footer";
import { Featured } from "@/components/home/featured/featured";
import { Nav } from "@/components/nav/nav";
import { PageNavigationBar } from "@/components/nav/generic";
import { useFindProductByName } from "@/services/product-services";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/utils/format-data";
import { useForm } from "react-hook-form";
import { ProductItem } from "@/@types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { PurchaseForm, PurchaseFormSchema } from "@/@types/cart";
import { useCart } from "@/contexts/cartContext";
import { ProductMainSkeleton } from "@/components/product/skeletons/productMainSkeleton";

export function ProductMain({ params }: { params: { slug: string }}) {
    const [product, setProduct] = useState<ProductItem | null>(null)
    const [loading, setLoading] = useState(true)
    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const {data, isLoading} = useFindProductByName(params.slug)
    const {addToCartStorage} = useCart()
    const {handleSubmit, formState: {errors}, reset, setValue} = useForm<PurchaseForm>({
        resolver: zodResolver(PurchaseFormSchema)
    })

    useEffect(() => {
        if(sessionStorage.getItem('products')) {
            const parsedCachedProducts = JSON.parse(sessionStorage.getItem('products')!)
            const getProduct: ProductItem = parsedCachedProducts.find((data: ProductItem)=> data.name === decodeURIComponent(params.slug))
            
            setValue('id', getProduct.id)
            setValue('name', getProduct.name)
            setValue('quantity', 1)
            setValue('value', Number(getProduct.price))
            setValue('images', getProduct.images)

            setProduct(getProduct)
            setLoading(false)
            return
        }
        
        if(!product && data) {
            setProduct(data)
            setLoading(isLoading)
            return
        }

    }, [params.slug])

    if(!product && loading)
        return <ProductMainSkeleton />

    if(!product) 
        return notFound()
    
    const handleSelectedSize = (size: number) => {
        setSelectedSize(size)
        setValue('size', size)
    }

    const onSubmit = (data: PurchaseForm) => {
        alert(JSON.stringify(data))
        addToCartStorage(data)
        reset()
    }

    return (
        <section>
            <Nav />
            <PageNavigationBar />
            <section className="min-h-[650px] flex flex-col md:grid grid-cols-[3fr,1fr] p-6">
                <div className="flex md:hidden flex-col gap-4">
                    <h1 className="font-bold text-2xl">{product?.name}</h1>
                    <p className="font-medium text-lg">{product?.price ? formatCurrency(product.price) : ''}</p>
                    <p>{product?.description}</p>
                </div>

                <div className="md:border-r-2 border-gray-300">
                    <div className="px-4">
                        <img 
                            className="w-full max-h-[650px] object-cover" 
                            src={`${product?.images[0]?.url ? product.images[0].url : 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}`}
                        />
                    </div>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col justify-between items-start">
                        <div className="flex flex-col gap-4">
                            <h1 className="hidden md:inline-block font-bold text-2xl">{product?.name}</h1>
                            <p className="hidden md:inline-block font-medium text-lg">{product?.price ? formatCurrency(product.price) : ''}</p>
                            <p className="hidden md:inline-block">{product?.description}</p>

                            <div>
                                <p className="font-semibold text-lg mb-2">Select Size</p>
                                <div className="grid grid-cols-[40px,40px,40px,40px] gap-4">
                                    {product?.sizes?.map((sizes: {size: number}, index: number) => (
                                        <button type="button" onClick={() => handleSelectedSize(sizes.size)} key={index} className={`border-2 rounded-lg p-2 text-center cursor-pointer transition-colors ${selectedSize === sizes.size ? 'bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-800 hover:border-zinc-800' : 'hover:bg-gray-200'}`}>{sizes.size}</button>
                                    ))}
                                </div>
                            </div>
                            {errors.size?.message && !selectedSize && <p className="text-red-700 text-sm">Please select a size</p>}

                            <div>
                                <p className="font-semibold text-lg mb-2">Color</p>
                                <div className="grid grid-cols-[70px] gap-4">
                                    <div className="group">
                                        <button type="button" className="rounded-lg border-2 p-1 border-zinc-700">
                                            <img src={product?.images[0].url} alt={'image of '+product.name}/>
                                        </button>
                                        <p className="transition-colors text-white text-center group-hover:text-zinc-900"><i>base</i></p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="w-full flex flex-col items-start gap-4">
                        <ButtonBuyProduct typeSubmit={true}/>
                        <p>Free Delivery on <span className="underline">Premium</span> Membership Plan.</p>
                    </div>
                </form>
            </section>
            <Featured />
            <Footer />
        </section>
    )
}