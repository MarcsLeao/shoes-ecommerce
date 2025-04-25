"use client"

import { SiNike, SiAdidas, SiFila, SiNewbalance, SiPuma } from "react-icons/si";
import { ButtonCategoryCard } from "@/components/buttons/buttons";
import Link from "next/link";

export function CategoriesB() {
    return (
        <section>
            <div>        
                {/* <Marquee /> */}
                <BrandLogos />        
                {/* <div className="w-full flex justify-start items-center py-12 px-12">
                    <h1 className="font-bold text-4xl">Categories.</h1>
                </div> */}
                {/* <div className="bg-yellow-300 w-full sm:w-[65%] flex justify-center items-center py-12">
                    <h1 className="font-bold text-4xl">Categories.</h1>
                </div>
                <div 
                    className="hidden sm:inline-block"
                    style={{
                        width: '150px',
                        aspectRatio: '1',
                        clipPath: 'polygon(0 100%,0 0,100% 100%)',
                        background: '#fde047',
                    }}
                /> */}
            </div>
            <div className="flex flex-col">
                <CategoriesBanner />
                <CategoriesBanner2 />
                {/* <CategoriesBannerLeft title="Casual" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti consectetur pariatur tempora." imageUrl="https://cdn.shopify.com/s/files/1/0567/9228/5337/files/tenis-branco-no-modelo-feminino_1_1024x1024.jpg?v=1696591027"/>
                <CategoriesBannerRight title="Street" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti consectetur pariatur tempora." imageUrl="https://img.freepik.com/fotos-gratis/equipe-sapatas-que-funcionam-no-asfalto-com-o-ceu-no-fundo_1301-4163.jpg?t=st=1741024426~exp=1741028026~hmac=627736522ed6bdfd4d05ff2b6bf42d3627155bdf493289ce86a43825c7d7a0a5&w=740"/>
                <CategoriesBannerLeft title="Sport" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti consectetur pariatur tempora." imageUrl="https://images.unsplash.com/photo-1615290643058-fcf564c714cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
            </div>
        </section>
    )
}

export function CategoriesBannerLeft({title, description, imageUrl}: {title: string, description: string, imageUrl: string}) {
    return(
        <div className="grid grid-cols-[1fr,1fr] grid-rows-[400px]">
            <img 
                src={imageUrl} 
                alt="image" 
                className="w-full h-full object-cover"
            />
            <div  className="flex flex-col justify-center gap-6 p-4">
                <div>
                    <p className="text-xl font-semibold">{title}</p>
                    <p>{description}</p>
                </div>
                <ButtonCategoryCard />
            </div>
        </div>
    )
}

export function CategoriesBannerRight({title, description, imageUrl}: {title: string, description: string, imageUrl: string}) {
    return(
        <div className="grid grid-cols-[1fr,1fr] grid-rows-[400px]">
            <div  className="flex flex-col justify-center items-start gap-6 px-4">
                <div>
                    <p className="text-xl font-semibold">{title}</p>
                    <p>{description}</p>
                </div>
                <ButtonCategoryCard />
            </div>
            <img 
                src={imageUrl} 
                alt="image" 
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export function CategoriesBanner() {
    return(
        <div className="h-[80vh] grid grid-cols-[1fr,1fr] grid-rows-[1fr] group">
            <Link href={'/shoes'}>
                <div className="h-full group flex justify-center items-end bg-cover bg-center overflow-hidden cursor-pointer">
                    <div className="relative items-end p-6 w-full h-full ransition-transform duration-300 ease-out scale-100 group-hover:scale-105 bg-cover bg-bottom bg-[url('https://cdn.shopify.com/s/files/1/1579/9205/files/ADN5475_1024x1024.jpg?v=1610699946')]">
                            <ButtonCategoryCard />
                    </div>
                </div>
            </Link>
            {/* <div className="flex justify-center items-end p-6 bg-cover bg-center bg-[url('https://ae01.alicdn.com/kf/Seedcc12b85f64ece88e598ca76dff4530.jpg')]">
                <ButtonCategoryCard />
            </div> */}
            <div className="p-6 flex flex-col gap-4 justify-center items-start">
                <p className="font-bold text-4xl">Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore assumenda aliquam natus.</p>
            </div>
        </div>
    )
}

export function CategoriesBanner2() {
    return(
        <div className="h-[80vh] grid grid-cols-[1fr,1fr] grid-rows-[1fr] group">
            <div className="p-6 flex flex-col gap-4 justify-center items-start">
                <p className="font-bold text-4xl">Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore assumenda aliquam natus.</p>
            </div>
            <Link href={'/shoes'}>
                <div className="group h-full flex justify-center items-end bg-cover bg-center overflow-hidden cursor-pointer bg-black">
                    <div className="relative items-end p-6 w-full h-full ransition-transform duration-300 ease-out scale-100 group-hover:scale-105 bg-cover bg-bottom" style={{ backgroundImage: "url('https://i.pinimg.com/736x/41/02/1d/41021db7a2efa1fca65e3cf058d5d0e5.jpg')" }}>
                            <ButtonCategoryCard />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export function BrandLogos() {
    return (
        <div className="w-full flex justify-center items-center p-6 gap-6 text-7xl bg-yellow-300">
            <SiNike />
            <SiAdidas />
            <SiFila />
            <SiPuma />
            <SiNewbalance />
        </div>
    )
}

// "https://cdn.shopify.com/s/files/1/0567/9228/5337/files/tenis-branco-no-modelo-feminino_1_1024x1024.jpg?v=1696591027"
// "https://img.freepik.com/fotos-gratis/equipe-sapatas-que-funcionam-no-asfalto-com-o-ceu-no-fundo_1301-4163.jpg?t=st=1741024426~exp=1741028026~hmac=627736522ed6bdfd4d05ff2b6bf42d3627155bdf493289ce86a43825c7d7a0a5&w=740"
// "https://images.unsplash.com/photo-1615290643058-fcf564c714cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"