"use client"

import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/home/featured/featured";
import { Nav } from "@/components/nav/nav";
import { formatCurrency } from "@/utils/format-data";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { PageNavigationBar } from "../../nav/generic";
import { IoClose, IoFilterOutline } from "react-icons/io5";
import { Dispatch, SetStateAction, useState } from "react";
import { useProduct } from "@/hooks/useProducts";
import { useFilter } from "@/contexts/filterContext";
import { ProductItem } from "@/@types/product";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { SiVerizon } from "react-icons/si";
import { ButtonClose } from "@/components/buttons/buttons";

export default function ShoesMain({searchParams} : {searchParams: { [key: string]: string | string[] | undefined }}) {
    const {data, isLoading} = useProduct()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const categoryOptions = ['All', 'Casual', 'Street', 'Sport']
    const filterOptions = ['Best Sellers', 'Lowest', 'Highest']
    const sortOptions = ['None', 'New In', 'Popular']
    
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '8'

    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const entries = data.slice(start, end)
    
    if(data) 
        sessionStorage.setItem('products', JSON.stringify(data))

    if(!data && isLoading)
        return <div>Loading</div>

    return (
        <div>
            <Nav />
            <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} categoryOptions={categoryOptions} filterOptions={filterOptions} sortOptions={sortOptions}/>

            <section>
                <PageNavigationBar />

                <div className="hidden sm:flex justify-start items-center gap-4 px-12 py-4">
                    <FilterBarItem name='Category' defaultOption='All' barOptions={categoryOptions}/>
                    <FilterBarItem name='Price' defaultOption='Default' barOptions={filterOptions}/>
                    <FilterBarItem name='Sort' defaultOption='None' barOptions={sortOptions}/>
                </div>

                <FilterBarMobile setIsOpen={setIsOpen}/>

                {data.length === 0 && <NoProductsFound />}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 sm:px-12 py-4">
                    {!entries ? <NoProductsFound /> : entries.map((item: ProductItem) => 
                        <ProductCard key={item.id} name={item.name} price={formatCurrency(item.price)} url={item.images[0].url}/>)}
                </div>
                
                <PaginationControll totalEntries={data.length}/>
            </section>
            <Footer />
        </div>
    )
}

export function FilterBarItem({name, defaultOption, barOptions}: {name: 'Category' | 'Price' | 'Sort', defaultOption?: string, barOptions: string[]}) {
    const [selectedOption, setSelectedOption] = useState(defaultOption || 'None')
    const {setFilterOption} = useFilter()
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const per_page = searchParams.get('per_page') ?? '8'

    const handleFilter = (option: string) => {
        router.push(`/shoes?page=${1}&per_page${per_page}`)
        setFilterOption(option)
        setSelectedOption(option)
    }

    return (
        <div className="relative min-w-[150px] rounded-lg border-2 px-4 py-2 group cursor-pointer hover:rounded-b-none">
            <div className="flex justify-between items-center gap-4">
                <p>{name}</p>
                <IoIosArrowDown className="group-hover:bg-yellow-300 group-hover:border-yellow-300 rounded-full text-2xl p-1 transition-colors border"/>
            </div>
            <p className="font-bold">{selectedOption}</p>

            <div className="absolute left-[-2px] mt-2 min-w-[150px] rounded-b-lg bg-white border-2 hidden group-hover:block">
                {barOptions.map((item: string, index) => (
                    <button key={index} onClick={() => handleFilter(item)} className="w-full px-4 py-2 text-left hover:bg-gray-200 ">{item}</button>
                ))}
            </div>
        </div>
    )
}

export function FilterBarMobile({setIsOpen}: {setIsOpen: Dispatch<SetStateAction<boolean>>}) {
    return (
        <div className="group sm:hidden flex justify-between items-center mt-4 p-1">
            <button onClick={() => setIsOpen(true)} className="flex justify-between items-center gap-2 rounded-full border-2 px-4 py-2 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white cursor-pointer transition-colors">
                <IoFilterOutline className="inline-block"/>
                <p>Filter</p>
            </button>
            <button onClick={() => setIsOpen(true)} className="flex justify-between items-center gap-2 rounded-full border-2 px-4 py-2 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white cursor-pointer transition-colors">
                <p>Sort</p>
                <IoIosArrowDown className="inline-block"/>
            </button>
        </div>
    )
}

export function PaginationControll({totalEntries}: {totalEntries: number}) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '8'

    return (
        <div className="flex sm:flex justify-center items-center gap-4 mb-2">
            <button 
                onClick={() => router.push(`/shoes?page=${Number(page) - 1}&per_page=${per_page}`)}
                className="flex justify-between items-center gap-2 border-2 px-4 py-2 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                disabled={Number(page) === 1}>
                <IoIosArrowBack className="inline-block"/>
                prev
            </button>

            <div>{page} of {Math.ceil(totalEntries / Number(per_page))}</div>

            <button 
                onClick={() => router.push(`/shoes?page=${Number(page) + 1}&per_page=${per_page}`)}
                className="flex justify-between items-center gap-2 border-2 px-4 py-2 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                disabled={Number(page) === Math.ceil(Number(totalEntries / Number(per_page)))}>
                next
                <IoIosArrowForward className="inline-block"/>
            </button>
        </div>
    )
}

export function MobileSidebar({isOpen, setIsOpen, categoryOptions, filterOptions, sortOptions}: {isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>, categoryOptions: string[], filterOptions: string[], sortOptions: string[]}) {
    const {setFilterOption} = useFilter()
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
    const [selectedSort, setSelectedSort] = useState<string | null>(null)

    const removeSelected = (option: string) => {
        if(categoryOptions.includes(option)) {
            setFilterOption('All')
            setSelectedCategory(null)
        }

        if(filterOptions.includes(option)) {
            setFilterOption('Best Sellers')
            setSelectedFilter(null)
        }

        if(sortOptions.includes(option)) {
            setFilterOption('None')
            setSelectedSort(null)
        }
    }

    const handleSelectedCategory = (item: string) => {
        router.push('/shoes?page=1&per_page=8')
        if(item === selectedCategory) return removeSelected(item)
        setFilterOption(item)
        setSelectedCategory(item)
    }
    
    const handleSelectedFilter = (item: string) => {
        router.push('/shoes?page=1&per_page=8')
        if(item === selectedFilter) return removeSelected(item)
        setFilterOption(item)
        setSelectedFilter(item)
    }
    
    const handleSelectedSort = (item: string) => {
        router.push('/shoes?page=1&per_page=8')
        if(item === selectedSort) return removeSelected(item)
        setFilterOption(item)
        setSelectedSort(item)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <aside className={`fixed top-0 left-0 h-full w-full bg-white shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 sm:hidden`}>
            <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-bold">Filter</h2>
                <ButtonClose buttonFn={handleClose} />
            </div>
            <div className="flex flex-col gap-3 border-t py-4 px-2">
                <h3 className="w-full pb-2 font-bold">Selected Filters</h3>
                <div className="grid grid-cols-3 gap-2 cursor-pointer">
                    {selectedCategory && <button onClick={() => removeSelected(selectedCategory)} className="flex justify-between items-center gap-2 rounded-full border-2 px-4 py-2 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white cursor-pointer transition-colors"><p className="whitespace-nowrap">{selectedCategory}</p> <IoClose className="inline-block"/></button>}
                    {selectedFilter && <button onClick={() => removeSelected(selectedFilter)} className="flex justify-between items-center gap-2 rounded-full border-2 px-4 py-2 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white cursor-pointer transition-colors"><p className="whitespace-nowrap">{selectedFilter}</p> <IoClose className="inline-block"/></button>}
                    {selectedSort && <button onClick={() => removeSelected(selectedSort)} className="flex justify-between items-center gap-2 rounded-full border-2 px-4 py-2 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white cursor-pointer transition-colors"><p className="whitespace-nowrap">{selectedSort} </p><IoClose className="inline-block"/></button>}
                    
                </div>
            </div>
            <div className="flex flex-col gap-2 border-t py-4">
                <h3 className="w-full font-bold px-2">Category</h3>
                <ul>
                    {categoryOptions.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleSelectedCategory(item)} className={`hover:bg-gray-200 p-2 w-full text-start`}><span className={`w-4 h-4 border-2 rounded-lg p-[2px] ${item === selectedCategory ? 'bg-zinc-900 border-zinc-900' : 'bg-white'}`}><SiVerizon className="inline-block text-white"/></span> {item}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-2 border-t py-4">
                <h3 className="w-full font-bold px-2">Filter</h3>
                <ul>
                    {filterOptions.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleSelectedFilter(item)} className={`hover:bg-gray-200 p-2 w-full text-start`}><span className={`w-4 h-4 border-2 rounded-lg p-[2px] ${item === selectedFilter ? 'bg-zinc-900 border-zinc-900' : 'bg-white'}`}><SiVerizon className="inline-block text-white"/></span> {item}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-2 border-t py-4">
                <h3 className="w-full font-bold px-2">Sort</h3>
                <ul>
                    {sortOptions.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleSelectedSort(item)} className={`hover:bg-gray-200 p-2 w-full text-start`}><span className={`w-4 h-4 border-2 rounded-lg p-[2px] ${item === selectedSort ? 'bg-zinc-900 border-zinc-900' : 'bg-white'}`}><SiVerizon className="inline-block text-white"/></span> {item}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export function NoProductsFound() {
    return (
        <div className="h-[40vh] w-full flex justify-center items-center">
            <p className="text-4xl font-bold text-zinc-700 text-center">NO PRODUCTS AVAILABLE.</p>
        </div>
    )
}