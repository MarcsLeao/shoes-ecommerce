import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const findProducts = async () => {
    const { data } = await axios.get('https://shoes-ecommerce-api-wisy.onrender.com/api/product')

    return data
}


export const useFindProducts = () => {
    const { data, isLoading } = useQuery({queryKey: ['products'], queryFn: findProducts})
    
    return { data, isLoading }
}

const findProductByName = async (name: string) => {
    const { data } = await axios.get(`https://shoes-ecommerce-api-wisy.onrender.com/api/product/${name}`)

    return data
}

export const useFindProductByName = (name: string) => {
    const { data, isLoading } = useQuery({queryKey: ['product'], queryFn: () => findProductByName(name)})

    return { data, isLoading }
}