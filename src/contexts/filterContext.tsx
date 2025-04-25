"use client"

import { createContext, ReactNode, useContext, useState } from "react"

type FilterContextData = {
    priceOption: string
    sortOption: string
    categoryOption: string
    setFilterOption: (filter: string) => void
}

export const FilterContext = createContext<FilterContextData>({} as FilterContextData)
export const useFilter = () => useContext(FilterContext)

export function FilterProvider({ children }: { children: ReactNode }) {
    const [priceOption, setPriceOption] = useState<string>('')
    const [sortOption, setSortOption] = useState<string>('')
    const [categoryOption, setCategoryOption] = useState<string>('')

    const setFilterOption = (filter: string) => {
        if(filter === 'Lowest' || filter === 'Highest' || filter === 'Best Sellers')
            setPriceOption(filter)
        

        if(filter === 'New In' || filter === 'Popular' || filter === 'None') 
            setSortOption(filter)
        

        if(filter === 'Casual' || filter === 'Street' || filter === 'Sport' || filter === 'All')
            setCategoryOption(filter)
    }

    return(
        <FilterContext.Provider value={{setFilterOption, priceOption, sortOption, categoryOption}}>
            {children}
        </FilterContext.Provider>
    )
}