"use client"

import { PurchaseForm } from "@/@types/cart";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type CartContextData = {
    quantity: number
    cartData: PurchaseForm[] | null
    addToCartStorage: (cartData: PurchaseForm) => void
    removeFromCartStorage: (id: string) => void
    incrementProductQuantity: (id: string) => void
    decrementProductQuantity: (id: string) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)
export const useCart = () => useContext(CartContext)

export function CartProvider({children}: {children: ReactNode}) {
    const [cartData, setCartData] = useState<PurchaseForm[] | null>(null)
    const [quantity, setQuantity] = useState<number>(0)

    const storageKey = 'cart-data'

    useEffect(() => {
        const cartStorage = localStorage.getItem(storageKey)
        console.log('st', cartStorage)
        if(typeof window !== 'undefined' && cartStorage) {
            setCartData(() => JSON.parse(cartStorage))
            setQuantity(() => JSON.parse(cartStorage).length)
    }

        return
    }, [])

    const addToCartStorage = (cartData: PurchaseForm) => {
        const checkStorage = localStorage.getItem(storageKey)
        
        if(checkStorage) {
            const productAlreadyInCart = JSON.parse(checkStorage).find((storageData: PurchaseForm) => cartData.id === storageData.id)
            
            let data = [...JSON.parse(checkStorage)]

            if(productAlreadyInCart) {
                const productIndex = data.findIndex((data: PurchaseForm) => data.id === cartData.id)
                data[productIndex].quantity = data[productIndex].quantity + 1 

                localStorage.setItem(storageKey , JSON.stringify(data))
                setCartData(() => [...data])

                return
            }

            data = [...JSON.parse(checkStorage), cartData]
    
            localStorage.setItem(storageKey , JSON.stringify(data))
            setCartData(() => [...data])
            setQuantity(() => JSON.parse(localStorage.getItem(storageKey)!).length)
            
            return
        }
        
        localStorage.setItem(storageKey, JSON.stringify([cartData]))
        setCartData([cartData])
    }

    const removeFromCartStorage = (id: string) => {
        const data = [...cartData!]
        const filteredData = data.filter((item: PurchaseForm) => item.id !== id)
        localStorage.setItem(storageKey, JSON.stringify(filteredData))
        setCartData(() => [...filteredData])
        setQuantity(JSON.parse(localStorage.getItem(storageKey)!).length)
    }

    const incrementProductQuantity = (id: string) => {
        const checkStorage = localStorage.getItem(storageKey)

        if(checkStorage) {
            const findProductIndex = JSON.parse(checkStorage).findIndex((storage: PurchaseForm) => storage.id === id)
            const data = [...JSON.parse(checkStorage)]
            data[findProductIndex].quantity = data[findProductIndex].quantity + 1

            if(data[findProductIndex].quantity >= 100)
                return

            localStorage.setItem(storageKey, JSON.stringify(data))
            setCartData(() => [...data])

            return
        }
    }
    
    const decrementProductQuantity = (id: string) => {
        const checkStorage = localStorage.getItem(storageKey)

        if(checkStorage) {
            const findProductIndex = JSON.parse(checkStorage).findIndex((storage: PurchaseForm) => storage.id === id)
            const data = [...JSON.parse(checkStorage)]
            data[findProductIndex].quantity = data[findProductIndex].quantity - 1

            if(data[findProductIndex].quantity <= 0)
                return

            localStorage.setItem(storageKey, JSON.stringify(data))
            setCartData(() => [...data])

            return
        }
    }

    return (
        <CartContext.Provider value={{quantity, cartData, addToCartStorage, removeFromCartStorage, incrementProductQuantity, decrementProductQuantity}}>
            {children}
        </CartContext.Provider>    
    )
}