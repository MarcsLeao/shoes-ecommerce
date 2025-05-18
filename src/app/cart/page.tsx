"use client"

import { ButtonBorderBlack, ButtonClose } from "@/components/buttons/buttons";
import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/nav/nav";
import { useCart } from "@/contexts/cartContext";
import { formatCurrency } from "@/utils/format-data";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function CartPage() {
    const {cartData, removeFromCartStorage, incrementProductQuantity, decrementProductQuantity} = useCart()

    const totalValue = cartData ? cartData.reduce((acc, product) => acc + product.value * product.quantity, 0) : 0

    console.log('image', cartData || 'null' )

    return (
        <>
            <Nav />
            <section className="p-2 sm:p-6 min-h-[50vh]">
                <div>
                    <h1 className="font-bold text-3xl">My Cart</h1>
                    <p><span className="font-bold">{cartData?.length ?? 0} items</span> in your cart.</p>
                </div>
                <div className="grid grid-cols-[1fr] md:grid-cols-[2fr,1fr] gap-6">
                    <div>
                        {cartData && cartData.map((item, index) => (
                            <div key={item.id} className="border-b border-zinc-600 py-4 flex gap-4">
                                <div 
                                    className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${cartData[index]?.images[0]?.url || 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
                                      }}
                                    ></div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h1 className="font-bold text-xl">{item.name}</h1>
                                        <p>size: {item.size}</p>
                                        <p>{formatCurrency(item.value)}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <p>Quantity:</p>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => decrementProductQuantity(item.id)} className="flex justify-center items-center w-7 h-7 p-1 rounded-lg border border-zinc-600 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-colors"><FaMinus /></button>
                                            <p className="p-1">{item.quantity}</p>
                                            <button onClick={() => incrementProductQuantity(item.id)} className="flex justify-center items-center w-7 h-7 p-1 rounded-lg border border-zinc-600 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-colors"><FaPlus /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <ButtonClose buttonFn={() => removeFromCartStorage(item.id)}/>
                                </div>
                            </div>
                        ))}
                        {(!cartData || cartData?.length === 0) && <EmptyCartText />}
                    </div>
                    

                    <div className="flex flex-col gap-4 px-4">
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-lg">Shipping</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <div className="flex md:flex-col lg:flex-row items-center gap-2">
                                <input className="border-2 p-1 w-full" placeholder="Type your zip code here"/>
                                <ButtonBorderBlack text="Calculate"></ButtonBorderBlack>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-lg">Coupon Code</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto.</p>
                            <div className="flex md:flex-col lg:flex-row items-center gap-2">
                                <input className="border-2 p-1 w-full" placeholder="Type your coupon here"/>
                                <ButtonBorderBlack text="Apply"></ButtonBorderBlack>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 bg-yellow-300 p-4 rounded-lg">
                            <p className="font-bold text-lg">Cart Total</p>
                            <div>
                                <div className="flex justify-between">
                                    <p>Cart Subtotal</p>
                                    <p className="font-bold">$0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Shipping</p>
                                    <p className="font-bold">$0</p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <p>Discount</p>
                                    <p className="font-bold">{formatCurrency(totalValue)}</p>
                                </div>
                            </div>
                            <ButtonBorderBlack text="Checkout"></ButtonBorderBlack>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export function EmptyCartText() {
    return(
        <div className="h-full flex justify-center items-center min-h-[250px]">
            <p className="font-bold text-4xl text-zinc-500 text-center">Cart has no items</p>
        </div>
    )
}