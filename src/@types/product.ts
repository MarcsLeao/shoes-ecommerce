
export type ProductList = {
    data: ProductItem[]
}

export type ProductItem = {
    id: string
    name: string
    description: string
    price: number
    stock: number
    categoryId: string
    createdAt: Date
    images: {
        id: string
        url: string
    }[]
    category: {
        name: string
    }
    sizes: {
        size: number
        stock: number
    }[]
}